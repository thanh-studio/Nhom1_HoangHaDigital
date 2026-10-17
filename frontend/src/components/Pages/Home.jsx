import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerReviews from "../CustomerReviews";

import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  MapPin,
  CalendarDays,
  Clock3,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  Plane,
  UserRound,
  CheckCircle2,
  Star,
  Sparkles,
  Navigation,
  Headphones,
  Route,
  ChevronRight,
} from "lucide-react";

import "./Home.css";

const content = {
  vi: {
    badge: "GIẢI PHÁP DI CHUYỂN",
    titleStart: "Hành trình của bạn,",
    titleHighlight: "chúng tôi đồng hành.",
    description:
      "Đặt xe dễ dàng, di chuyển an tâm. GoAnywhere mang đến giải pháp di chuyển linh hoạt cho cá nhân, gia đình và doanh nghiệp.",
    bookNow: "Đặt xe ngay",
    explore: "Khám phá dịch vụ",
    trust1: "Tài xế chuyên nghiệp",
    trust2: "Đặt xe linh hoạt",
    trust3: "Ưu tiên an toàn",

    bookingTitle: "Bạn muốn đi đâu hôm nay?",
    bookingDescription:
      "Nhập thông tin chuyến đi để bắt đầu đặt xe.",
    pickup: "Điểm đón",
    pickupPlaceholder: "Nhập địa điểm đón",
    destination: "Điểm đến",
    destinationPlaceholder: "Bạn muốn đi đâu?",
    date: "Ngày khởi hành",
    time: "Giờ khởi hành",
    vehicle: "Loại xe",
    vehicleOptions: [
      { value: "4-seat", label: "Xe 4 chỗ" },
      { value: "7-seat", label: "Xe 7 chỗ" },
      { value: "driver", label: "Tài xế riêng" },
    ],
    search: "Tìm chuyến xe",
    bookingNote:
      "Kiểm tra thông tin chuyến đi trước khi xác nhận đặt xe.",

    serviceLabel: "DỊCH VỤ CỦA CHÚNG TÔI",
    serviceTitle: "Di chuyển theo cách",
    serviceTitleHighlight: "phù hợp với bạn",
    serviceDescription:
      "Từ những chuyến đi hằng ngày đến các hành trình đặc biệt, chúng tôi luôn có giải pháp dành cho bạn.",
    viewAll: "Xem bảng giá",

    services: [
      {
        id: "personal",
        title: "Di chuyển cá nhân",
        description:
          "Đặt xe đi làm, mua sắm, gặp gỡ bạn bè hoặc di chuyển hằng ngày.",
        icon: "car",
        link: "/personal",
        tag: "Cá nhân",
      },
      {
        id: "business",
        title: "Dịch vụ doanh nghiệp",
        description:
          "Giải pháp đi lại cho nhân viên, đối tác và khách hàng doanh nghiệp.",
        icon: "business",
        link: "/business",
        tag: "Doanh nghiệp",
      },
      {
        id: "events",
        title: "Đưa đón sự kiện",
        description:
          "Sắp xếp xe cho hội nghị, tiệc cưới, sự kiện và chuyến đi tập thể.",
        icon: "events",
        link: "/events",
        tag: "Sự kiện",
      },
      {
        id: "driver",
        title: "Dịch vụ tài xế",
        description:
          "Chủ động lịch trình với tài xế riêng theo nhu cầu của bạn.",
        icon: "driver",
        link: "/driver",
        tag: "Tài xế riêng",
      },
    ],

    whyLabel: "LÝ DO LỰA CHỌN",
    whyTitle: "Mỗi chuyến đi đều",
    whyHighlight: "đáng để an tâm",
    whyDescription:
      "GoAnywhere hướng đến trải nghiệm thuận tiện, rõ ràng và phù hợp với nhu cầu thực tế của khách hàng.",

    benefits: [
      {
        title: "Chú trọng an toàn",
        description:
          "Ưu tiên sự an tâm và trải nghiệm đáng tin cậy trên mỗi hành trình.",
        icon: "shield",
      },
      {
        title: "Đặt xe thuận tiện",
        description:
          "Thông tin điểm đón, điểm đến và thời gian được trình bày rõ ràng.",
        icon: "route",
      },
      {
        title: "Dịch vụ linh hoạt",
        description:
          "Nhiều lựa chọn dành cho cá nhân, gia đình và doanh nghiệp.",
        icon: "users",
      },
    ],

    processLabel: "QUY TRÌNH ĐẶT XE",
    processTitle: "Ba bước cho chuyến đi",
    processDescription:
      "Các bước đơn giản giúp bạn chủ động lên kế hoạch di chuyển.",

    steps: [
      {
        number: "01",
        title: "Nhập thông tin",
        description:
          "Chọn điểm đón, điểm đến, thời gian và loại xe mong muốn.",
      },
      {
        number: "02",
        title: "Kiểm tra chuyến đi",
        description:
          "Xem lại thông tin hành trình trước khi gửi yêu cầu đặt xe.",
      },
      {
        number: "03",
        title: "Sẵn sàng khởi hành",
        description:
          "Theo dõi yêu cầu và chuẩn bị cho hành trình tiếp theo.",
      },
    ],

    priceLabel: "BẢNG GIÁ THAM KHẢO",
    priceTitle: "Chọn xe phù hợp",
    priceDescription:
      "Tham khảo các lựa chọn phổ biến trước khi đặt chuyến đi.",
    price4: "Xe 4 chỗ",
    price7: "Xe 7 chỗ",
    priceDriver: "Tài xế riêng",
    from: "Từ",
    perKm: "/ km",
    contactPrice: "Theo lịch trình",
    seePrice: "Xem bảng giá",
    popular: "LỰA CHỌN PHỔ BIẾN",

    finalTitle: "Bạn đã sẵn sàng",
    finalHighlight: "cho chuyến đi mới?",
    finalDescription:
      "Lên kế hoạch hành trình cùng GoAnywhere ngay hôm nay.",
    finalButton: "Bắt đầu đặt xe",
    contactButton: "Liên hệ",
    footerNote: "GoAnywhere — Đi mọi nơi, an tâm mọi hành trình.",
  },

  en: {
    badge: "SMART MOBILITY SOLUTIONS",
    titleStart: "Your journey,",
    titleHighlight: "our commitment.",
    description:
      "Book with ease and travel with confidence. GoAnywhere offers flexible mobility solutions for individuals, families and businesses.",
    bookNow: "Book a ride",
    explore: "Explore services",
    trust1: "Professional drivers",
    trust2: "Flexible booking",
    trust3: "Safety first",

    bookingTitle: "Where would you like to go?",
    bookingDescription:
      "Enter your trip details to start booking.",
    pickup: "Pickup location",
    pickupPlaceholder: "Enter pickup location",
    destination: "Destination",
    destinationPlaceholder: "Where are you going?",
    date: "Departure date",
    time: "Departure time",
    vehicle: "Vehicle type",
    vehicleOptions: [
      { value: "4-seat", label: "4-seat car" },
      { value: "7-seat", label: "7-seat car" },
      { value: "driver", label: "Private driver" },
    ],
    search: "Find a ride",
    bookingNote:
      "Review your trip details before confirming your booking.",

    serviceLabel: "OUR SERVICES",
    serviceTitle: "Travel in a way",
    serviceTitleHighlight: "that suits you",
    serviceDescription:
      "From everyday rides to special occasions, find a transportation solution that fits your needs.",
    viewAll: "View pricing",

    services: [
      {
        id: "personal",
        title: "Personal rides",
        description:
          "Convenient rides for work, shopping, meetings and everyday travel.",
        icon: "car",
        link: "/personal",
        tag: "Personal",
      },
      {
        id: "business",
        title: "Business services",
        description:
          "Transportation for employees, partners and business clients.",
        icon: "business",
        link: "/business",
        tag: "Business",
      },
      {
        id: "events",
        title: "Event transportation",
        description:
          "Arrange transportation for conferences, weddings and group events.",
        icon: "events",
        link: "/events",
        tag: "Events",
      },
      {
        id: "driver",
        title: "Private driver",
        description:
          "A dedicated driver arranged around your schedule and needs.",
        icon: "driver",
        link: "/driver",
        tag: "Private driver",
      },
    ],

    whyLabel: "WHY CHOOSE US",
    whyTitle: "Every journey should",
    whyHighlight: "feel reassuring",
    whyDescription:
      "GoAnywhere focuses on convenient, transparent and practical transportation experiences.",

    benefits: [
      {
        title: "Safety matters",
        description:
          "We prioritize peace of mind and a dependable travel experience.",
        icon: "shield",
      },
      {
        title: "Convenient booking",
        description:
          "Pickup, destination and departure details are clearly presented.",
        icon: "route",
      },
      {
        title: "Flexible services",
        description:
          "Options for individuals, families and businesses.",
        icon: "users",
      },
    ],

    processLabel: "HOW TO BOOK",
    processTitle: "Three steps to your ride",
    processDescription:
      "A straightforward process to help you plan your journey.",

    steps: [
      {
        number: "01",
        title: "Enter your details",
        description:
          "Choose your pickup, destination, schedule and preferred vehicle.",
      },
      {
        number: "02",
        title: "Review your trip",
        description:
          "Check your journey details before submitting your booking request.",
      },
      {
        number: "03",
        title: "Get ready to go",
        description:
          "Track your request and prepare for your upcoming journey.",
      },
    ],

    priceLabel: "ESTIMATED PRICING",
    priceTitle: "Choose your ride",
    priceDescription:
      "Explore popular vehicle options before booking.",
    price4: "4-seat car",
    price7: "7-seat car",
    priceDriver: "Private driver",
    from: "From",
    perKm: "/ km",
    contactPrice: "Based on itinerary",
    seePrice: "View pricing",
    popular: "POPULAR CHOICE",

    finalTitle: "Ready for your",
    finalHighlight: "next journey?",
    finalDescription:
      "Start planning your next trip with GoAnywhere today.",
    finalButton: "Book a ride",
    contactButton: "Contact us",
    footerNote: "GoAnywhere — Every destination, a better journey.",
  },
};

function ServiceIcon({ type, size = 24 }) {
  const props = {
    size,
    strokeWidth: 1.8,
    "aria-hidden": true,
  };

  switch (type) {
    case "business":
      return <BriefcaseBusiness {...props} />;
    case "events":
      return <Plane {...props} />;
    case "driver":
      return <UserRound {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
    case "route":
      return <Route {...props} />;
    case "users":
      return <Users {...props} />;
    default:
      return <CarFront {...props} />;
  }
}

export default function Home({ language = "vi" }) {
  const navigate = useNavigate();
  const t = content[language === "en" ? "en" : "vi"];

  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "08:00",
    service: "4-seat",
  });

  const updateForm = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleBooking = (event) => {
    event.preventDefault();

    const params = new URLSearchParams({
      pickup: formData.pickup.trim(),
      destination: formData.destination.trim(),
      service: formData.service,
      date: formData.date,
      time: formData.time,
    });

    navigate(`/booking?${params.toString()}`);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const today = [
    new Date().getFullYear(),
    String(new Date().getMonth() + 1).padStart(2, "0"),
    String(new Date().getDate()).padStart(2, "0"),
  ].join("-");

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero" id="home">
        <div className="container home-container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="home-hero-content">
                <div className="home-eyebrow">
                  <span className="home-eyebrow-icon">
                    <Sparkles size={15} />
                  </span>
                  {t.badge}
                </div>

                <h1>
                  {t.titleStart}
                  <span>{t.titleHighlight}</span>
                </h1>

                <p className="home-hero-description">
                  {t.description}
                </p>

                <div className="home-hero-actions">
                  <button
                    type="button"
                    className="home-button home-button-primary"
                    onClick={() => scrollToSection("home-booking")}
                  >
                    {t.bookNow}
                    <ArrowRight size={17} />
                  </button>

                  <button
                    type="button"
                    className="home-button home-button-secondary"
                    onClick={() => scrollToSection("home-services")}
                  >
                    {t.explore}
                    <ArrowUpRight size={17} />
                  </button>
                </div>

                <div className="home-trust-list">
                  {[t.trust1, t.trust2, t.trust3].map((item) => (
                    <div className="home-trust-item" key={item}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="home-hero-visual">
                <div className="home-visual-backdrop" />

                <div className="home-visual-label">
                  <CarFront size={17} />
                  <span>GoAnywhere</span>
                </div>

                <div className="home-car-stage">
                  <div className="home-car-sun" />

                  <div className="home-car-road">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="home-car-art">
                    <div className="home-car-window" />

                    <div className="home-car-body">
                      <div className="home-car-door" />
                      <div className="home-car-handle" />
                      <div className="home-car-light" />
                    </div>

                    <div className="home-car-wheel home-car-wheel-left">
                      <span />
                    </div>

                    <div className="home-car-wheel home-car-wheel-right">
                      <span />
                    </div>
                  </div>

                  <div className="home-car-ground-shadow" />
                </div>

                <div className="home-floating-card home-floating-card-rating">
                  <div className="home-rating-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <strong>
                      {language === "en"
                        ? "Travel with confidence"
                        : "An tâm trên hành trình"}
                    </strong>
                    <span>
                      {language === "en"
                        ? "Your trip matters"
                        : "Chuyến đi của bạn là ưu tiên"}
                    </span>
                  </div>
                </div>

                <div className="home-floating-card home-floating-card-location">
                  <div className="home-location-icon">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <strong>
                      {language === "en"
                        ? "Your destination"
                        : "Điểm đến của bạn"}
                    </strong>
                    <span>
                      {language === "en"
                        ? "Ready when you are"
                        : "Sẵn sàng khởi hành"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="home-booking-section" id="home-booking">
        <div className="container home-container">
          <form
            className="home-booking-card"
            onSubmit={handleBooking}
          >
            <div className="home-booking-heading">
              <div className="home-booking-heading-icon">
                <CarFront size={23} />
              </div>

              <div>
                <h2>{t.bookingTitle}</h2>
                <p>{t.bookingDescription}</p>
              </div>
            </div>

            <div className="row g-3 align-items-end">
              <div className="col-12 col-md-6 col-lg-4">
                <label
                  className="home-form-field"
                  htmlFor="home-pickup"
                >
                  <span className="home-form-label">
                    <MapPin size={15} />
                    {t.pickup}
                  </span>

                  <input
                    id="home-pickup"
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={updateForm}
                    placeholder={t.pickupPlaceholder}
                    autoComplete="street-address"
                    required
                  />
                </label>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <label
                  className="home-form-field"
                  htmlFor="home-destination"
                >
                  <span className="home-form-label">
                    <Navigation size={15} />
                    {t.destination}
                  </span>

                  <input
                    id="home-destination"
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={updateForm}
                    placeholder={t.destinationPlaceholder}
                    required
                  />
                </label>
              </div>

              <div className="col-12 col-md-6 col-lg-2">
                <label
                  className="home-form-field"
                  htmlFor="home-date"
                >
                  <span className="home-form-label">
                    <CalendarDays size={15} />
                    {t.date}
                  </span>

                  <input
                    id="home-date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={updateForm}
                    min={today}
                    required
                  />
                </label>
              </div>

              <div className="col-12 col-md-6 col-lg-2">
                <label
                  className="home-form-field"
                  htmlFor="home-time"
                >
                  <span className="home-form-label">
                    <Clock3 size={15} />
                    {t.time}
                  </span>

                  <input
                    id="home-time"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={updateForm}
                    required
                  />
                </label>
              </div>

              <div className="col-12 col-md-6">
                <label
                  className="home-form-field"
                  htmlFor="home-service"
                >
                  <span className="home-form-label">
                    <CarFront size={15} />
                    {t.vehicle}
                  </span>

                  <select
                    id="home-service"
                    name="service"
                    value={formData.service}
                    onChange={updateForm}
                  >
                    {t.vehicleOptions.map((option) => (
                      <option
                        value={option.value}
                        key={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="col-12 col-md-6">
                <button
                  type="submit"
                  className="home-booking-submit"
                >
                  {t.search}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="home-booking-note">
              <ShieldCheck size={15} />
              <span>{t.bookingNote}</span>
            </div>
          </form>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services-section" id="home-services">
        <div className="container home-container">
          <div className="home-section-heading">
            <span className="home-section-label">
              {t.serviceLabel}
            </span>

            <h2>
              {t.serviceTitle}{" "}
              <span>{t.serviceTitleHighlight}</span>
            </h2>

            <p>{t.serviceDescription}</p>
          </div>

          <div className="row g-3">
            {t.services.map((service, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={service.id}
              >
                <article className="home-service-card h-100">
                  <div className="home-service-card-top">
                    <div className={`home-service-icon service-icon-${index + 1}`}>
                      <ServiceIcon type={service.icon} size={26} />
                    </div>

                    <span className="home-service-number">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="home-service-tag">
                    {service.tag}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <button
                    type="button"
                    className="home-service-link"
                    onClick={() => navigate(service.link)}
                  >
                    {language === "en"
                      ? "Explore service"
                      : "Tìm hiểu thêm"}
                    <ArrowUpRight size={16} />
                  </button>
                </article>
              </div>
            ))}
          </div>

          <div className="home-services-bottom">
            <span>
              {language === "en"
                ? "Find the right service for your trip."
                : "Tìm dịch vụ phù hợp với hành trình của bạn."}
            </span>

            <button
              type="button"
              className="home-text-link"
              onClick={() => navigate("/pricing")}
            >
              {t.viewAll}
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="home-benefits-section" id="home-benefits">
        <div className="container home-container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-5">
              <div className="home-benefits-visual">
                <div className="home-benefits-main-card">
                  <div className="home-benefits-main-icon">
                    <ShieldCheck size={39} />
                  </div>

                  <span className="home-benefits-overline">
                    {language === "en"
                      ? "YOUR JOURNEY MATTERS"
                      : "ĐỒNG HÀNH CÙNG BẠN"}
                  </span>

                  <h3>
                    {language === "en"
                      ? "A better way to get there."
                      : "Mỗi hành trình, thêm an tâm."}
                  </h3>

                  <p>
                    {language === "en"
                      ? "Choose a service that fits your schedule and travel needs."
                      : "Lựa chọn dịch vụ phù hợp để chủ động hơn trong mỗi chuyến đi."}
                  </p>

                  <div className="home-benefits-mini-route">
                    <span className="home-mini-route-dot" />
                    <span className="home-mini-route-line" />
                    <span className="home-mini-route-dot orange" />
                  </div>
                </div>

                <div className="home-benefits-floating">
                  <div className="home-benefits-floating-icon">
                    <Headphones size={21} />
                  </div>

                  <div>
                    <strong>
                      {language === "en"
                        ? "Customer focused"
                        : "Hỗ trợ khách hàng"}
                    </strong>
                    <span>
                      {language === "en"
                        ? "Here to help"
                        : "Luôn sẵn sàng hỗ trợ"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="home-benefits-content">
                <span className="home-section-label">
                  {t.whyLabel}
                </span>

                <h2>
                  {t.whyTitle}{" "}
                  <span>{t.whyHighlight}</span>
                </h2>

                <p className="home-benefits-description">
                  {t.whyDescription}
                </p>

                <div className="home-benefit-list">
                  {t.benefits.map((benefit, index) => (
                    <article
                      className="home-benefit-item"
                      key={benefit.title}
                    >
                      <div
                        className={`home-benefit-item-icon benefit-icon-${index + 1}`}
                      >
                        <ServiceIcon type={benefit.icon} size={22} />
                      </div>

                      <div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>

                      <CheckCircle2
                        className="home-benefit-check"
                        size={18}
                      />
                    </article>
                  ))}
                </div>

                <button
                  type="button"
                  className="home-button home-button-primary home-benefits-button"
                  onClick={() => navigate("/company")}
                >
                  {language === "en"
                    ? "About GoAnywhere"
                    : "Về GoAnywhere"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="home-process-section" id="home-process">
        <div className="container home-container">
          <div className="home-section-heading">
            <span className="home-section-label">
              {t.processLabel}
            </span>

            <h2>{t.processTitle}</h2>

            <p>{t.processDescription}</p>
          </div>

          <div className="row g-3">
            {t.steps.map((step, index) => (
              <div className="col-12 col-md-4" key={step.number}>
                <article className="home-process-card h-100">
                  <div className="home-process-card-top">
                    <span className="home-process-number">
                      {step.number}
                    </span>

                    {index < t.steps.length - 1 && (
                      <span className="home-process-connector">
                        <ArrowRight size={19} />
                      </span>
                    )}
                  </div>

                  <div
                    className={`home-process-icon process-icon-${index + 1}`}
                  >
                    {index === 0 && <MapPin size={27} />}
                    {index === 1 && <CheckCircle2 size={27} />}
                    {index === 2 && <CarFront size={27} />}
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="home-price-section" id="home-pricing">
        <div className="container home-container">
          <div className="home-price-heading">
            <div className="home-section-heading home-price-title">
              <span className="home-section-label">
                {t.priceLabel}
              </span>

              <h2>{t.priceTitle}</h2>

              <p>{t.priceDescription}</p>
            </div>

            <button
              type="button"
              className="home-price-view-all"
              onClick={() => navigate("/pricing")}
            >
              {t.seePrice}
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <article className="home-price-card h-100">
                <div className="home-price-icon">
                  <CarFront size={26} />
                </div>

                <h3>{t.price4}</h3>

                <p>
                  {language === "en"
                    ? "Practical for everyday travel and small groups."
                    : "Phù hợp cho nhu cầu đi lại hằng ngày và nhóm nhỏ."}
                </p>

                <div className="home-price-value">
                  <span>{t.from}</span>
                  <strong>
                    {language === "en" ? "7,000" : "7.000đ"}
                  </strong>
                  <span>{t.perKm}</span>
                </div>

                <button
                  type="button"
                  className="home-price-link"
                  onClick={() =>
                    navigate("/booking?service=4-seat")
                  }
                >
                  {t.bookNow}
                  <ArrowRight size={16} />
                </button>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <article className="home-price-card home-price-card-featured h-100">
                <span className="home-price-popular">
                  <Star size={13} />
                  {t.popular}
                </span>

                <div className="home-price-icon">
                  <Users size={26} />
                </div>

                <h3>{t.price7}</h3>

                <p>
                  {language === "en"
                    ? "More room for families, friends and luggage."
                    : "Rộng rãi cho gia đình, nhóm bạn và hành lý."}
                </p>

                <div className="home-price-value">
                  <span>{t.from}</span>
                  <strong>
                    {language === "en" ? "9,000" : "9.000đ"}
                  </strong>
                  <span>{t.perKm}</span>
                </div>

                <button
                  type="button"
                  className="home-price-link"
                  onClick={() =>
                    navigate("/booking?service=7-seat")
                  }
                >
                  {t.bookNow}
                  <ArrowRight size={16} />
                </button>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <article className="home-price-card h-100">
                <div className="home-price-icon">
                  <UserRound size={26} />
                </div>

                <h3>{t.priceDriver}</h3>

                <p>
                  {language === "en"
                    ? "A private driver arranged around your schedule."
                    : "Tài xế riêng phục vụ theo nhu cầu và lịch trình."}
                </p>

                <div className="home-price-value home-price-value-contact">
                  <strong>{t.contactPrice}</strong>
                </div>

                <button
                  type="button"
                  className="home-price-link"
                  onClick={() =>
                    navigate("/booking?service=driver")
                  }
                >
                  {t.bookNow}
                  <ArrowRight size={16} />
                </button>
              </article>
            </div>
          </div>

          <p className="home-price-disclaimer">
            <ShieldCheck size={15} />
            {language === "en"
              ? "Reference prices only. Actual fares depend on the route and service conditions."
              : "Giá mang tính tham khảo. Chi phí thực tế phụ thuộc tuyến đường và điều kiện dịch vụ."}
          </p>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <CustomerReviews language={language} />

      {/* FINAL CTA */}
      <section className="home-cta-section">
        <div className="container home-container">
          <div className="home-cta">
            <div className="home-cta-content">
              <div className="home-cta-label">
                <CarFront size={17} />
                GoAnywhere
              </div>

              <h2>
                {t.finalTitle}
                <span>{t.finalHighlight}</span>
              </h2>

              <p>{t.finalDescription}</p>

              <div className="home-cta-actions">
                <button
                  type="button"
                  className="home-button home-cta-primary"
                  onClick={() => scrollToSection("home-booking")}
                >
                  {t.finalButton}
                  <ArrowRight size={17} />
                </button>

                <button
                  type="button"
                  className="home-button home-cta-secondary"
                  onClick={() => navigate("/contact")}
                >
                  {t.contactButton}
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>

            <div className="home-cta-visual">
              <div className="home-cta-car-circle">
                <CarFront size={86} strokeWidth={1.5} />
              </div>

              <div className="home-cta-pin">
                <MapPin size={22} />
              </div>

              <div className="home-cta-star">
                <Sparkles size={21} />
              </div>

              <div className="home-cta-route">
                <Route size={22} />
              </div>
            </div>
          </div>

          <p className="home-final-note">{t.footerNote}</p>
        </div>
      </section>
    </main>
  );
}