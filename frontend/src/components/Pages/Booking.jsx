import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  UserRound,
  Users,
  BriefcaseBusiness,
  ShieldCheck,
  Sparkles,
  Route,
  Plane,
} from "lucide-react";

import "./Booking.css";

const vehicleOptions = [
  {
    id: "4",
    name: "Xe 4 chỗ",
    description: "Phù hợp cá nhân và gia đình nhỏ",
    passengers: 4,
    luggage: 2,
    price: "7.000đ",
    unit: "/ km",
    tag: "Tiết kiệm",
    icon: CarFront,
  },
  {
    id: "7",
    name: "Xe 7 chỗ",
    description: "Rộng rãi cho gia đình và nhóm bạn",
    passengers: 7,
    luggage: 4,
    price: "9.000đ",
    unit: "/ km",
    tag: "Phổ biến",
    icon: CarFront,
  },
  {
    id: "16",
    name: "Xe 16 chỗ",
    description: "Lựa chọn lý tưởng cho đoàn đông",
    passengers: 16,
    luggage: 8,
    price: "Liên hệ",
    unit: "",
    tag: "Nhóm đông",
    icon: Users,
  },
];

const serviceOptions = [
  {
    id: "personal",
    label: "Đưa đón cá nhân",
    description: "Đi lại hằng ngày, công việc",
    icon: UserRound,
  },
  {
    id: "airport",
    label: "Đưa đón sân bay",
    description: "Đúng giờ, thuận tiện hành lý",
    icon: Plane,
  },
  {
    id: "business",
    label: "Công tác",
    description: "Di chuyển cho doanh nghiệp",
    icon: BriefcaseBusiness,
  },
];

const initialForm = {
  pickup: "",
  destination: "",
  date: "",
  time: "08:00",
  service: "personal",
  vehicle: "4",
  passengers: "1",
  fullName: "",
  phone: "",
  note: "",
};

export default function Booking({ language = "vi" }) {
  const isEnglish = language === "en";
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const text = isEnglish
    ? {
        eyebrow: "BOOK YOUR RIDE",
        title: "Your journey starts here.",
        subtitle:
          "Plan your trip in just a few steps. Choose your route, select your vehicle and let GoAnywhere take care of the journey.",

        routeTitle: "Your journey",
        routeSubtitle: "Where would you like to go?",
        pickup: "Pickup location",
        pickupPlaceholder: "Enter pickup address",
        destination: "Destination",
        destinationPlaceholder: "Enter destination address",
        date: "Pickup date",
        time: "Pickup time",
        service: "Service type",
        vehicle: "Choose your vehicle",
        passenger: "Passengers",
        person: "people",
        luggage: "bags",
        contactTitle: "Contact information",
        contactSubtitle: "So we can confirm your booking",
        fullName: "Full name",
        namePlaceholder: "Enter your full name",
        phone: "Phone number",
        phonePlaceholder: "Enter your phone number",
        note: "Additional notes",
        notePlaceholder: "Special requests or other information...",
        summary: "Your booking",
        routeEmpty: "Your route will appear here",
        selectedVehicle: "Selected vehicle",
        serviceLabel: "Service",
        dateLabel: "Date",
        timeLabel: "Time",
        total: "Estimated fare",
        fareNote:
          "Final fare depends on the actual distance and service conditions.",
        confirm: "Confirm booking",
        privacy:
          "Your information is used only to process your booking.",
        secure: "Safe and secure booking",
        support: "Dedicated support",
        back: "Back to home",
        required: "Please complete this field.",
        invalidPhone: "Please enter a valid phone number.",
        successTitle: "Information received!",
        successMessage:
          "Your booking information has been validated on this page. The booking has not yet been sent to a server.",
        edit: "Edit information",
        homeButton: "Return home",
        oneWay: "One-way trip",
      }
    : {
        eyebrow: "ĐẶT CHUYẾN XE",
        title: "Hành trình bắt đầu từ đây.",
        subtitle:
          "Lên kế hoạch cho chuyến đi chỉ với vài bước đơn giản. Chọn lộ trình, loại xe và để GoAnywhere đồng hành cùng bạn.",

        routeTitle: "Thông tin hành trình",
        routeSubtitle: "Bạn muốn đi đến đâu?",
        pickup: "Điểm đón",
        pickupPlaceholder: "Nhập địa chỉ đón khách",
        destination: "Điểm đến",
        destinationPlaceholder: "Nhập địa chỉ điểm đến",
        date: "Ngày khởi hành",
        time: "Giờ đón",
        service: "Loại dịch vụ",
        vehicle: "Chọn loại xe",
        passenger: "Số hành khách",
        person: "người",
        luggage: "vali",
        contactTitle: "Thông tin liên hệ",
        contactSubtitle: "Để chúng tôi xác nhận chuyến đi",
        fullName: "Họ và tên",
        namePlaceholder: "Nhập họ và tên của bạn",
        phone: "Số điện thoại",
        phonePlaceholder: "Nhập số điện thoại",
        note: "Ghi chú thêm",
        notePlaceholder: "Yêu cầu đặc biệt hoặc thông tin khác...",
        summary: "Thông tin đặt xe",
        routeEmpty: "Lộ trình của bạn sẽ hiển thị tại đây",
        selectedVehicle: "Loại xe đã chọn",
        serviceLabel: "Dịch vụ",
        dateLabel: "Ngày đi",
        timeLabel: "Giờ đón",
        total: "Giá tham khảo",
        fareNote:
          "Giá cuối cùng phụ thuộc vào quãng đường thực tế và điều kiện dịch vụ.",
        confirm: "Xác nhận đặt xe",
        privacy:
          "Thông tin của bạn chỉ được sử dụng để xử lý yêu cầu đặt xe.",
        secure: "Đặt xe an toàn",
        support: "Hỗ trợ tận tâm",
        back: "Quay lại trang chủ",
        required: "Vui lòng nhập thông tin này.",
        invalidPhone: "Vui lòng nhập số điện thoại hợp lệ.",
        successTitle: "Thông tin đã hợp lệ!",
        successMessage:
          "Thông tin đặt xe đã được kiểm tra trên giao diện. Yêu cầu chưa được gửi lên máy chủ.",
        edit: "Chỉnh sửa thông tin",
        homeButton: "Về trang chủ",
        oneWay: "Một chiều",
      };

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));

    setSubmitted(false);
  };

  const selectedVehicle =
    vehicleOptions.find((vehicle) => vehicle.id === formData.vehicle) ||
    vehicleOptions[0];

  const selectedService =
    serviceOptions.find((service) => service.id === formData.service) ||
    serviceOptions[0];

  const formatDate = (dateValue) => {
    if (!dateValue) return isEnglish ? "Not selected" : "Chưa chọn";

    const date = new Date(`${dateValue}T00:00:00`);

    return new Intl.DateTimeFormat(isEnglish ? "en-GB" : "vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  const validateForm = () => {
    const nextErrors = {};

    const requiredFields = [
      "pickup",
      "destination",
      "date",
      "time",
      "fullName",
      "phone",
    ];

    requiredFields.forEach((field) => {
      if (!String(formData[field] || "").trim()) {
        nextErrors[field] = text.required;
      }
    });

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (
      formData.phone.trim() &&
      (phoneDigits.length < 9 || phoneDigits.length > 15)
    ) {
      nextErrors.phone = text.invalidPhone;
    }

    if (
      formData.pickup.trim() &&
      formData.destination.trim() &&
      formData.pickup.trim().toLowerCase() ===
        formData.destination.trim().toLowerCase()
    ) {
      nextErrors.destination = isEnglish
        ? "Destination must differ from pickup."
        : "Điểm đến phải khác điểm đón.";
    }

    if (formData.date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const chosenDate = new Date(`${formData.date}T00:00:00`);

      if (chosenDate < today) {
        nextErrors.date = isEnglish
          ? "Please select today or a future date."
          : "Vui lòng chọn ngày hôm nay hoặc ngày trong tương lai.";
      }
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <main className="booking-page">
        <div className="booking-success">
          <div className="booking-success-icon">
            <CheckCircle2 size={46} />
          </div>

          <span className="booking-eyebrow">
            {isEnglish ? "BOOKING DETAILS" : "THÔNG TIN ĐẶT XE"}
          </span>

          <h1>{text.successTitle}</h1>
          <p className="booking-success-description">
            {text.successMessage}
          </p>

          <div className="booking-success-card">
            <div className="booking-success-route">
              <div className="booking-route-point">
                <span className="booking-route-dot pickup-dot" />
                <div>
                  <small>{text.pickup}</small>
                  <strong>{formData.pickup}</strong>
                </div>
              </div>

              <div className="booking-route-line" />

              <div className="booking-route-point">
                <span className="booking-route-dot destination-dot" />
                <div>
                  <small>{text.destination}</small>
                  <strong>{formData.destination}</strong>
                </div>
              </div>
            </div>

            <div className="booking-success-details">
              <div>
                <CalendarDays size={17} />
                <span>{formatDate(formData.date)}</span>
              </div>

              <div>
                <Clock3 size={17} />
                <span>{formData.time}</span>
              </div>

              <div>
                <CarFront size={18} />
                <span>{selectedVehicle.name}</span>
              </div>
            </div>

            <div className="booking-success-contact">
              <strong>{formData.fullName}</strong>
              <span>{formData.phone}</span>
            </div>
          </div>

          <div className="booking-success-actions">
            <button
              type="button"
              className="booking-secondary-button"
              onClick={handleEdit}
            >
              <ArrowLeft size={17} />
              {text.edit}
            </button>

            <button
              type="button"
              className="booking-primary-button"
              onClick={() => navigate("/home")}
            >
              {text.homeButton}
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-page">
      {/* HERO */}
      <section className="booking-hero">
        <div className="booking-hero-decoration booking-decoration-one" />
        <div className="booking-hero-decoration booking-decoration-two" />

        <div className="booking-shell booking-hero-inner">
          <div className="booking-breadcrumb">
            <Link to="/home">{text.home}</Link>
            <span>{text.booking}</span>
          </div>

          <div className="booking-hero-copy">
            <div className="booking-eyebrow">
              <Sparkles size={15} />
              {text.eyebrow}
            </div>

            <h1>
              {isEnglish ? (
                <>
                  Your journey
                  <br />
                  starts <span>here.</span>
                </>
              ) : (
                <>
                  Hành trình bắt đầu
                  <br />
                  từ <span>đây.</span>
                </>
              )}
            </h1>

            <p>{text.subtitle}</p>

            <div className="booking-hero-features">
              <span>
                <ShieldCheck size={17} />
                {text.secure}
              </span>

              <span>
                <CheckCircle2 size={17} />
                {text.support}
              </span>
            </div>
          </div>

          <div className="booking-hero-art" aria-hidden="true">
            <div className="booking-art-circle booking-art-circle-large" />
            <div className="booking-art-circle booking-art-circle-small" />

            <div className="booking-art-card">
              <div className="booking-art-icon">
                <Navigation size={31} />
              </div>
              <div>
                <strong>GoAnywhere</strong>
                <span>
                  {isEnglish
                    ? "Every journey matters"
                    : "Mỗi hành trình đều ý nghĩa"}
                </span>
              </div>
              <CheckCircle2 size={23} className="booking-art-check" />
            </div>

            <div className="booking-art-route">
              <span />
              <i />
              <span />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="booking-content">
        <div className="booking-shell">
          <form className="booking-layout" onSubmit={handleSubmit} noValidate>
            <div className="booking-form-column">
              {/* ROUTE */}
              <section className="booking-card">
                <div className="booking-section-heading">
                  <div className="booking-section-icon">
                    <Route size={22} />
                  </div>

                  <div>
                    <h2>{text.routeTitle}</h2>
                    <p>{text.routeSubtitle}</p>
                  </div>

                  <span className="booking-step-number">01</span>
                </div>

                <div className="booking-route-fields">
                  <div className="booking-route-visual">
                    <span className="booking-route-dot pickup-dot" />
                    <span className="booking-route-visual-line" />
                    <span className="booking-route-dot destination-dot" />
                  </div>

                  <div className="booking-route-inputs">
                    <div className="booking-field">
                      <label htmlFor="booking-pickup">
                        {text.pickup} <span>*</span>
                      </label>

                      <div
                        className={`booking-input-wrap ${
                          errors.pickup ? "has-error" : ""
                        }`}
                      >
                        <MapPin size={18} />

                        <input
                          id="booking-pickup"
                          name="pickup"
                          type="text"
                          autoComplete="street-address"
                          placeholder={text.pickupPlaceholder}
                          value={formData.pickup}
                          onChange={(event) =>
                            updateField("pickup", event.target.value)
                          }
                        />
                      </div>

                      {errors.pickup && (
                        <small className="booking-error">
                          {errors.pickup}
                        </small>
                      )}
                    </div>

                    <div className="booking-field">
                      <label htmlFor="booking-destination">
                        {text.destination} <span>*</span>
                      </label>

                      <div
                        className={`booking-input-wrap ${
                          errors.destination ? "has-error" : ""
                        }`}
                      >
                        <Navigation size={18} />

                        <input
                          id="booking-destination"
                          name="destination"
                          type="text"
                          placeholder={text.destinationPlaceholder}
                          value={formData.destination}
                          onChange={(event) =>
                            updateField("destination", event.target.value)
                          }
                        />
                      </div>

                      {errors.destination && (
                        <small className="booking-error">
                          {errors.destination}
                        </small>
                      )}
                    </div>
                  </div>
                </div>

                <div className="booking-field-grid">
                  <div className="booking-field">
                    <label htmlFor="booking-date">
                      {text.date} <span>*</span>
                    </label>

                    <div
                      className={`booking-input-wrap ${
                        errors.date ? "has-error" : ""
                      }`}
                    >
                      <CalendarDays size={18} />

                      <input
                        id="booking-date"
                        name="date"
                        type="date"
                        min={new Date().toLocaleDateString("en-CA")}
                        value={formData.date}
                        onChange={(event) =>
                          updateField("date", event.target.value)
                        }
                      />
                    </div>

                    {errors.date && (
                      <small className="booking-error">
                        {errors.date}
                      </small>
                    )}
                  </div>

                  <div className="booking-field">
                    <label htmlFor="booking-time">
                      {text.time} <span>*</span>
                    </label>

                    <div
                      className={`booking-input-wrap ${
                        errors.time ? "has-error" : ""
                      }`}
                    >
                      <Clock3 size={18} />

                      <input
                        id="booking-time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={(event) =>
                          updateField("time", event.target.value)
                        }
                      />
                    </div>

                    {errors.time && (
                      <small className="booking-error">
                        {errors.time}
                      </small>
                    )}
                  </div>
                </div>
              </section>

              {/* SERVICE */}
              <section className="booking-card">
                <div className="booking-section-heading">
                  <div className="booking-section-icon">
                    <Sparkles size={22} />
                  </div>

                  <div>
                    <h2>{text.service}</h2>
                    <p>
                      {isEnglish
                        ? "Select the service that suits your journey"
                        : "Chọn dịch vụ phù hợp với hành trình"}
                    </p>
                  </div>

                  <span className="booking-step-number">02</span>
                </div>

                <div className="booking-service-grid">
                  {serviceOptions.map((service) => {
                    const ServiceIcon = service.icon;
                    const isSelected = formData.service === service.id;

                    const translatedLabel = isEnglish
                      ? {
                          personal: "Personal travel",
                          airport: "Airport transfer",
                          business: "Business travel",
                        }[service.id]
                      : service.label;

                    const translatedDescription = isEnglish
                      ? {
                          personal: "Daily travel and personal trips",
                          airport: "Convenient airport transfers",
                          business: "Travel for your company",
                        }[service.id]
                      : service.description;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        className={`booking-service-option ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() => updateField("service", service.id)}
                        aria-pressed={isSelected}
                      >
                        <span className="booking-service-icon">
                          <ServiceIcon size={22} />
                        </span>

                        <span className="booking-service-copy">
                          <strong>{translatedLabel}</strong>
                          <small>{translatedDescription}</small>
                        </span>

                        <span className="booking-radio">
                          {isSelected && <span />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* VEHICLES */}
              <section className="booking-card">
                <div className="booking-section-heading">
                  <div className="booking-section-icon">
                    <CarFront size={22} />
                  </div>

                  <div>
                    <h2>{text.vehicle}</h2>
                    <p>
                      {isEnglish
                        ? "Choose a vehicle for your trip"
                        : "Lựa chọn phương tiện cho chuyến đi"}
                    </p>
                  </div>

                  <span className="booking-step-number">03</span>
                </div>

                <div className="booking-vehicle-list">
                  {vehicleOptions.map((vehicle) => {
                    const VehicleIcon = vehicle.icon;
                    const isSelected = formData.vehicle === vehicle.id;

                    const vehicleName = isEnglish
                      ? {
                          "4": "4-seat car",
                          "7": "7-seat car",
                          "16": "16-seat van",
                        }[vehicle.id]
                      : vehicle.name;

                    const vehicleDescription = isEnglish
                      ? {
                          "4": "For individuals and small families",
                          "7": "Spacious for families and groups",
                          "16": "Ideal for larger groups",
                        }[vehicle.id]
                      : vehicle.description;

                    const vehicleTag = isEnglish
                      ? {
                          "4": "Economy",
                          "7": "Popular",
                          "16": "Group",
                        }[vehicle.id]
                      : vehicle.tag;

                    return (
                      <button
                        type="button"
                        key={vehicle.id}
                        className={`booking-vehicle-option ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() => updateField("vehicle", vehicle.id)}
                        aria-pressed={isSelected}
                      >
                        <span className="booking-vehicle-image">
                          <VehicleIcon size={37} strokeWidth={1.6} />
                        </span>

                        <span className="booking-vehicle-info">
                          <span className="booking-vehicle-title">
                            <strong>{vehicleName}</strong>
                            <span className="booking-vehicle-tag">
                              {vehicleTag}
                            </span>
                          </span>

                          <small>{vehicleDescription}</small>

                          <span className="booking-vehicle-capacity">
                            <span>
                              <Users size={14} />
                              {vehicle.passengers} {text.person}
                            </span>

                            <span>
                              <BriefcaseBusiness size={14} />
                              {vehicle.luggage} {text.luggage}
                            </span>
                          </span>
                        </span>

                        <span className="booking-vehicle-price">
                          <strong>{vehicle.price}</strong>
                          <small>{vehicle.unit}</small>
                        </span>

                        <span className="booking-radio">
                          {isSelected && <span />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="booking-passenger-field">
                  <label htmlFor="booking-passengers">
                    <Users size={17} />
                    {text.passenger}
                  </label>

                  <select
                    id="booking-passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={(event) =>
                      updateField("passengers", event.target.value)
                    }
                  >
                    {Array.from(
                      { length: selectedVehicle.passengers },
                      (_, index) => index + 1
                    ).map((count) => (
                      <option key={count} value={count}>
                        {count} {text.person}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              {/* CONTACT */}
              <section className="booking-card">
                <div className="booking-section-heading">
                  <div className="booking-section-icon">
                    <UserRound size={22} />
                  </div>

                  <div>
                    <h2>{text.contactTitle}</h2>
                    <p>{text.contactSubtitle}</p>
                  </div>

                  <span className="booking-step-number">04</span>
                </div>

                <div className="booking-field-grid">
                  <div className="booking-field">
                    <label htmlFor="booking-name">
                      {text.fullName} <span>*</span>
                    </label>

                    <div
                      className={`booking-input-wrap ${
                        errors.fullName ? "has-error" : ""
                      }`}
                    >
                      <UserRound size={18} />

                      <input
                        id="booking-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder={text.namePlaceholder}
                        value={formData.fullName}
                        onChange={(event) =>
                          updateField("fullName", event.target.value)
                        }
                      />
                    </div>

                    {errors.fullName && (
                      <small className="booking-error">
                        {errors.fullName}
                      </small>
                    )}
                  </div>

                  <div className="booking-field">
                    <label htmlFor="booking-phone">
                      {text.phone} <span>*</span>
                    </label>

                    <div
                      className={`booking-input-wrap ${
                        errors.phone ? "has-error" : ""
                      }`}
                    >
                      <Phone size={18} />

                      <input
                        id="booking-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder={text.phonePlaceholder}
                        value={formData.phone}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                      />
                    </div>

                    {errors.phone && (
                      <small className="booking-error">
                        {errors.phone}
                      </small>
                    )}
                  </div>
                </div>

                <div className="booking-field booking-note-field">
                  <label htmlFor="booking-note">{text.note}</label>

                  <textarea
                    id="booking-note"
                    name="note"
                    rows="4"
                    placeholder={text.notePlaceholder}
                    value={formData.note}
                    onChange={(event) =>
                      updateField("note", event.target.value)
                    }
                  />
                </div>
              </section>
            </div>

            {/* BOOKING SUMMARY */}
            <aside className="booking-summary-column">
              <div className="booking-summary-card">
                <div className="booking-summary-header">
                  <span className="booking-summary-header-icon">
                    <Route size={21} />
                  </span>

                  <div>
                    <h2>{text.summary}</h2>
                    <p>
                      {isEnglish
                        ? "Review your trip details"
                        : "Kiểm tra lại thông tin chuyến đi"}
                    </p>
                  </div>
                </div>

                <div className="booking-summary-route">
                  <div className="booking-summary-point">
                    <span className="booking-route-dot pickup-dot" />
                    <div>
                      <small>{text.pickup}</small>
                      <strong>
                        {formData.pickup ||
                          (isEnglish ? "Pickup address" : "Chưa nhập điểm đón")}
                      </strong>
                    </div>
                  </div>

                  <div className="booking-route-line" />

                  <div className="booking-summary-point">
                    <span className="booking-route-dot destination-dot" />
                    <div>
                      <small>{text.destination}</small>
                      <strong>
                        {formData.destination ||
                          (isEnglish
                            ? "Destination address"
                            : "Chưa nhập điểm đến")}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="booking-summary-divider" />

                <div className="booking-summary-row">
                  <span>
                    <CarFront size={17} />
                    {text.selectedVehicle}
                  </span>
                  <strong>
                    {isEnglish
                      ? {
                          "4": "4-seat car",
                          "7": "7-seat car",
                          "16": "16-seat van",
                        }[selectedVehicle.id]
                      : selectedVehicle.name}
                  </strong>
                </div>

                <div className="booking-summary-row">
                  <span>
                    <Sparkles size={17} />
                    {text.serviceLabel}
                  </span>
                  <strong>
                    {isEnglish
                      ? {
                          personal: "Personal travel",
                          airport: "Airport transfer",
                          business: "Business travel",
                        }[selectedService.id]
                      : selectedService.label}
                  </strong>
                </div>

                <div className="booking-summary-row">
                  <span>
                    <CalendarDays size={17} />
                    {text.dateLabel}
                  </span>
                  <strong>{formatDate(formData.date)}</strong>
                </div>

                <div className="booking-summary-row">
                  <span>
                    <Clock3 size={17} />
                    {text.timeLabel}
                  </span>
                  <strong>{formData.time || "--:--"}</strong>
                </div>

                <div className="booking-summary-row">
                  <span>
                    <Users size={17} />
                    {text.passenger}
                  </span>
                  <strong>
                    {formData.passengers} {text.person}
                  </strong>
                </div>

                <div className="booking-summary-divider" />

                <div className="booking-fare">
                  <span>{text.total}</span>
                  <div>
                    <strong>{selectedVehicle.price}</strong>
                    <small>{selectedVehicle.unit}</small>
                  </div>
                </div>

                <p className="booking-fare-note">{text.fareNote}</p>

                <button
                  type="submit"
                  className="booking-submit-button"
                >
                  {text.confirm}
                  <ArrowRight size={19} />
                </button>

                <p className="booking-privacy">
                  <ShieldCheck size={16} />
                  {text.privacy}
                </p>
              </div>

              <div className="booking-help-card">
                <div className="booking-help-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <strong>
                    {isEnglish
                      ? "Need help booking?"
                      : "Bạn cần hỗ trợ đặt xe?"}
                  </strong>
                  <p>
                    {isEnglish
                      ? "Contact our team for assistance."
                      : "Liên hệ đội ngũ của chúng tôi để được hỗ trợ."}
                  </p>

                  <Link to="/contact">
                    {isEnglish ? "Contact us" : "Liên hệ ngay"}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <Link to="/home" className="booking-back-link">
                <ArrowLeft size={16} />
                {text.back}
              </Link>
            </aside>
          </form>
        </div>
      </section>
    </main>
  );
}