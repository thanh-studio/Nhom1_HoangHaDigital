
import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  MapPin,
  LocateFixed,
  LoaderCircle,
} from "lucide-react";

export default function AddressAutocomplete({
  id,
  name,
  value = "",
  onChange,
  placeholder = "Nhập địa chỉ",
  error,
  label,
  onCoordinatesChange,
}) {
  const [autocomplete, setAutocomplete] = useState(null);
  const [locating, setLocating] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");

  // Google Places trả về địa chỉ khi người dùng chọn gợi ý
  const handlePlaceChanged = () => {
    if (!autocomplete) return;

    const place = autocomplete.getPlace();
    const address = place.formatted_address || place.name || "";

    if (!address) return;

    onChange(address);
    setLocationMessage("");

    if (place.geometry?.location) {
      onCoordinatesChange?.({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  // Lấy vị trí GPS và chuyển tọa độ thành địa chỉ
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage(
        "Trình duyệt không hỗ trợ định vị."
      );
      return;
    }

    if (!window.google?.maps?.Geocoder) {
      setLocationMessage(
        "Google Maps chưa tải xong. Vui lòng thử lại."
      );
      return;
    }

    setLocating(true);
    setLocationMessage("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const coords = {
          lat: latitude,
          lng: longitude,
        };

        onCoordinatesChange?.(coords);

        try {
          const geocoder = new window.google.maps.Geocoder();

          const response = await geocoder.geocode({
            location: coords,
          });

          const address =
            response.results?.[0]?.formatted_address;

          if (address) {
            onChange(address);
            setLocationMessage(
              "Đã xác định vị trí hiện tại."
            );
          } else {
            onChange(`${latitude}, ${longitude}`);
            setLocationMessage(
              "Đã lấy tọa độ GPS. Vui lòng kiểm tra địa chỉ."
            );
          }
        } catch {
          onChange(`${latitude}, ${longitude}`);
          setLocationMessage(
            "Đã lấy tọa độ GPS nhưng chưa chuyển được thành địa chỉ."
          );
        } finally {
          setLocating(false);
        }
      },
      (geoError) => {
        setLocating(false);

        if (geoError.code === 1) {
          setLocationMessage(
            "Bạn chưa cấp quyền vị trí. Hãy cho phép trình duyệt truy cập vị trí."
          );
        } else if (geoError.code === 2) {
          setLocationMessage(
            "Không xác định được vị trí. Hãy kiểm tra GPS hoặc kết nối mạng."
          );
        } else {
          setLocationMessage(
            "Định vị quá thời gian chờ. Vui lòng thử lại."
          );
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="booking-address-component">
      {label && (
        <label
          className="booking-address-label"
          htmlFor={id}
        >
          {label} <span>*</span>
        </label>
      )}

      <div
        className={`booking-input-wrap booking-address-wrap ${
          error ? "has-error" : ""
        }`}
      >
        <MapPin
          className="booking-address-pin"
          size={19}
          aria-hidden="true"
        />

        <Autocomplete
          onLoad={setAutocomplete}
          onPlaceChanged={handlePlaceChanged}
          options={{
            fields: [
              "formatted_address",
              "geometry",
              "name",
            ],
            types: ["geocode"],
          }}
        >
          <input
            id={id}
            name={name}
            type="text"
            value={value}
            placeholder={placeholder}
            autoComplete="off"
            onChange={(event) => {
              onChange(event.target.value);
              setLocationMessage("");
            }}
          />
        </Autocomplete>

        <button
          type="button"
          className="booking-location-button"
          onClick={getCurrentLocation}
          disabled={locating}
          title="Sử dụng vị trí hiện tại"
          aria-label="Sử dụng vị trí hiện tại"
        >
          {locating ? (
            <LoaderCircle
              size={18}
              className="booking-spin"
            />
          ) : (
            <LocateFixed size={18} />
          )}
        </button>
      </div>

      {error && (
        <small className="booking-error">
          {error}
        </small>
      )}

      {locationMessage && (
        <small
          className="booking-location-message"
          role="status"
        >
          {locationMessage}
        </small>
      )}
    </div>
  );
}
