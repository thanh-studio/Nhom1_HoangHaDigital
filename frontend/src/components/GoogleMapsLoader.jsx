
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

export default function GoogleMapsLoader({ children }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "goanywhere-google-maps",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  if (loadError) {
    return (
      <p className="booking-map-message">
        Không thể tải Google Maps. Vui lòng kiểm tra cấu hình API.
      </p>
    );
  }

  if (!isLoaded) {
    return (
      <p className="booking-map-message">
        Đang tải Google Maps...
      </p>
    );
  }

  return children;
}
