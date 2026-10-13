import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    badge: "GIẢI PHÁP DI CHUYỂN THÔNG MINH",
    titleStart: "Hành trình của bạn,",
    titleHighlight: "chúng tôi đồng hành.",
    description:
      "Đặt xe dễ dàng, di chuyển an tâm. GoAnywhere mang đến giải pháp di chuyển linh hoạt cho cá nhân, gia đình và doanh nghiệp.",
    bookNow: "Đặt xe ngay",
    explore: "Khám phá dịch vụ",
    trust1: "Tài xế chuyên nghiệp",
    trust2: "Đặt xe linh hoạt",
    trust3: "Ưu tiên an toàn",
    bookingTitle: "Lên kế hoạch hành trình",
    bookingDescription: "Điền thông tin để bắt đầu chuyến đi của bạn.",
    pickup: "Điểm đón",
    pickupPlaceholder: "Nhập địa điểm đón",
    destination: "Điểm đến",
    destinationPlaceholder: "Bạn muốn đi đâu?",
    date: "Ngày khởi hành",
    time: "Giờ khởi hành",
    vehicle: "Loại dịch vụ",
    vehicleOptions: [
      { value: "4-seat", label: "Xe 4 chỗ" },
      { value: "7-seat", label: "Xe 7 chỗ" },
      { value: "driver", label: "Tài xế riêng" },
    ],
    search: "Tìm chuyến xe",
    bookingNote: "Thông tin hành trình có thể được cập nhật trước khi xác nhận.",
    serviceLabel: "DỊCH VỤ CỦA CHÚNG TÔI",
    serviceTitle: "Một nền tảng,",
    serviceTitleHighlight: "nhiều giải pháp di chuyển",
    serviceDescription:
      "Dù là chuyến đi thường ngày hay hành trình đặc biệt, GoAnywhere luôn có lựa chọn phù hợp dành cho bạn.",
    viewAll: "Khám phá tất cả dịch vụ",
    services: [
      {
        id: "personal",
        title: "Di chuyển cá nhân",
        description:
          "Đặt xe thuận tiện cho công việc, mua sắm, gặp gỡ và những chuyến đi hằng ngày.",
        icon: "car",
        link: "/personal",
        tag: "Linh hoạt mỗi ngày",
      },
      {
        id: "business",
        title: "Giải pháp doanh nghiệp",
        description:
          "Tối ưu nhu cầu đi lại cho đội ngũ nhân viên, đối tác và khách hàng doanh nghiệp.",
        icon: "business",
        link: "/business",
        tag: "Chuyên nghiệp",
      },
      {
        id: "events",
        title: "Đưa đón sự kiện",
        description:
          "Giải pháp đưa đón cho hội nghị, tiệc cưới, sự kiện và chương trình tập thể.",
        icon: "events",
        link: "/events",
        tag: "Theo lịch trình",
      },
      {
        id: "driver",
        title: "Dịch vụ tài xế",
        description:
          "Tài xế riêng phục vụ theo lịch trình, giúp bạn chủ động và thoải mái hơn.",
        icon: "driver",
        link: "/driver",
        tag: "Theo yêu cầu",
      },
    ],
    whyLabel: "VÌ SAO CHỌN GOANYWHERE",
    whyTitle: "Di chuyển thông minh hơn,",
    whyHighlight: "an tâm trên mọi hành trình",
    whyDescription:
      "Chúng tôi đặt trải nghiệm khách hàng làm trọng tâm, từ lúc đặt xe cho đến khi bạn hoàn thành hành trình.",
    benefits: [
      {
        title: "An toàn là ưu tiên",
        description:
          "Đề cao sự an toàn, chỉn chu và trải nghiệm đáng tin cậy trong mỗi chuyến đi.",
        icon: "shield",
      },
      {
        title: "Đặt xe đơn giản",
        description:
          "Thao tác thuận tiện, thông tin hành trình rõ ràng và dễ dàng quản lý.",
        icon: "route",
      },
      {
        title: "Linh hoạt theo nhu cầu",
        description:
          "Nhiều lựa chọn dịch vụ phù hợp với cá nhân, gia đình và doanh nghiệp.",
        icon: "users",
      },
    ],
    processLabel: "CÁCH THỨC HOẠT ĐỘNG",
    processTitle: "Đặt xe chỉ với 3 bước",
    processDescription:
      "Quy trình đơn giản để bạn nhanh chóng sẵn sàng cho hành trình tiếp theo.",
    steps: [
      {
        number: "01",
        title: "Nhập thông tin",
        description:
          "Chọn điểm đón, điểm đến, thời gian và loại dịch vụ phù hợp.",
      },
      {
        number: "02",
        title: "Xác nhận chuyến đi",
        description:
          "Kiểm tra lại thông tin hành trình trước khi gửi yêu cầu đặt xe.",
      },
      {
        number: "03",
        title: "Bắt đầu hành trình",
        description:
          "Chuẩn bị cho chuyến đi thuận tiện cùng giải pháp của GoAnywhere.",
      },
    ],
    priceLabel: "GIÁ DỊCH VỤ THAM KHẢO",
    priceTitle: "Chọn xe phù hợp với bạn",
    priceDescription:
      "Tham khảo các lựa chọn phổ biến trước khi bắt đầu hành trình.",
    price4: "Xe 4 chỗ",
    price7: "Xe 7 chỗ",
    priceDriver: "Tài xế riêng",
    from: "Từ",
    perKm: "/ km",
    contactPrice: "Theo lịch trình",
    seePrice: "Xem bảng giá",
    popular: "ĐƯỢC QUAN TÂM",
    finalTitle: "Hành trình tiếp theo",
    finalHighlight: "bắt đầu từ đây.",
    finalDescription:
      "Dù bạn đi đâu, GoAnywhere luôn sẵn sàng giúp hành trình trở nên thuận tiện hơn.",
    finalButton: "Đặt xe ngay hôm nay",
    contactButton: "Liên hệ với chúng tôi",
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
    bookingTitle: "Plan your journey",
    bookingDescription: "Enter your trip details to get started.",
    pickup: "Pickup location",
    pickupPlaceholder: "Enter pickup location",
    destination: "Destination",
    destinationPlaceholder: "Where are you going?",
    date: "Departure date",
    time: "Departure time",
    vehicle: "Service type",
    vehicleOptions: [
      { value: "4-seat", label: "4-seat car" },
      { value: "7-seat", label: "7-seat car" },
      { value: "driver", label: "Private driver" },
    ],
    search: "Find a ride",
    bookingNote: "Trip details can be reviewed before confirmation.",
    serviceLabel: "OUR SERVICES",
    serviceTitle: "One platform,",
    serviceTitleHighlight: "more ways to travel",
    serviceDescription:
      "From everyday rides to special journeys, find a mobility solution that fits your needs.",
    viewAll: "Explore all services",
    services: [
      {
        id: "personal",
        title: "Personal rides",
        description:
          "Convenient rides for work, shopping, meetings and everyday travel.",
        icon: "car",
        link: "/personal",
        tag: "Everyday flexibility",
      },
      {
        id: "business",
        title: "Business solutions",
        description:
          "Streamlined transportation for employees, partners and business clients.",
        icon: "business",
        link: "/business",
        tag: "Professional",
      },
      {
        id: "events",
        title: "Event transportation",
        description:
          "Transportation for conferences, weddings, events and group occasions.",
        icon: "events",
        link: "/events",
        tag: "Scheduled rides",
      },
      {
        id: "driver",
        title: "Private driver",
        description:
          "A dedicated driver for your schedule, giving you more freedom and comfort.",
        icon: "driver",
        link: "/driver",
        tag: "On demand",
      },
    ],
    whyLabel: "WHY GOANYWHERE",
    whyTitle: "Smarter mobility,",
    whyHighlight: "confidence on every trip",
    whyDescription:
      "We put your experience first, from booking your ride to reaching your destination.",
    benefits: [
      {
        title: "Safety comes first",
        description:
          "We value safety, professionalism and a dependable travel experience.",
        icon: "shield",
      },
      {
        title: "Easy booking",
        description:
          "Convenient steps, clear trip details and a simpler way to plan travel.",
        icon: "route",
      },
      {
        title: "Flexible solutions",
        description:
          "Service options for individuals, families and businesses.",
        icon: "users",
      },
    ],
    processLabel: "HOW IT WORKS",
    processTitle: "Book your ride in 3 steps",
    processDescription:
      "A simple process to help you get ready for your next journey.",
    steps: [
      {
        number: "01",
        title: "Enter your details",
        description:
          "Choose your pickup, destination, schedule and preferred service.",
      },
      {
        number: "02",
        title: "Review your trip",
        description:
          "Check your journey information before submitting your booking.",
      },
      {
        number: "03",
        title: "Start your journey",
        description:
          "Get ready for a convenient trip with GoAnywhere.",
      },
    ],
    priceLabel: "ESTIMATED FARES",
    priceTitle: "Choose your ride",
    priceDescription:
      "Explore popular options before planning your journey.",
    price4: "4-seat car",
    price7: "7-seat car",
    priceDriver: "Private driver",
    from: "From",
    perKm: "/ km",
    contactPrice: "Based on itinerary",
    seePrice: "View pricing",
    popular: "POPULAR CHOICE",
    finalTitle: "Your next journey",
    finalHighlight: "starts here.",
    finalDescription:
      "Wherever you go, GoAnywhere is ready to make your journey easier.",
    finalButton: "Book your ride today",
    contactButton: "Contact us",
    footerNote: "GoAnywhere — Every destination, a better journey.",
  },
};

function ServiceIcon({ type, size = 25 }) {
  const props = { size, strokeWidth: 1.8 };

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

  const scrollToBooking = () => {
    document.getElementById("home-booking")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero" id="home">
        <div className="home-hero-shape home-hero-shape-one" />
        <div className="home-hero-shape home-hero-shape-two" />

        <div className="home-container home-hero-grid">
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

            <p className="home-hero-description">{t.description}</p>

            <div className="home-hero-actions">
              <button
                type="button"
                className="home-button home-button-primary"
                onClick={scrollToBooking}
              >
                {t.bookNow}
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="home-button home-button-secondary"
                onClick={() =>
                  document
                    .getElementById("home-services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.explore}
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="home-trust-list">
              <div className="home-trust-item">
                <span className="home-trust-check">
                  <CheckCircle2 size={17} />
                </span>
                {t.trust1}
              </div>
              <div className="home-trust-item">
                <span className="home-trust-check">
                  <CheckCircle2 size={17} />
                </span>
                {t.trust2}
              </div>
              <div className="home-trust-item">
                <span className="home-trust-check">
                  <CheckCircle2 size={17} />
                </span>
                {t.trust3}
              </div>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="home-hero-visual">
            <div className="home-visual-backdrop" />

            <div className="home-visual-orbit home-visual-orbit-one" />
            <div className="home-visual-orbit home-visual-orbit-two" />

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
                <Star size={19} fill="currentColor" />
              </div>
              <div>
                <strong>
                  {language === "en" ? "Travel with confidence" : "An tâm trên mọi chuyến đi"}
                </strong>
                <span>
                  {language === "en"
                    ? "Your journey matters"
                    : "Trải nghiệm của bạn là ưu tiên"}
                </span>
              </div>
            </div>

            <div className="home-floating-card home-floating-card-location">
              <span className="home-location-icon">
                <MapPin size={19} />
              </span>
              <div>
                <strong>
                  {language === "en" ? "Your destination" : "Điểm đến của bạn"}
                </strong>
                <span>
                  {language === "en" ? "Let's get you there" : "Sẵn sàng khởi hành"}
                </span>
              </div>
            </div>

            <div className="home-visual-badge">
              <Navigation size={17} />
              <span>GoAnywhere</span>
            </div>
          </div>
        </div>

        <div className="home-hero-bottom-line" />
      </section>

      {/* QUICK BOOKING */}
      <section className="home-booking-section" id="home-booking">
        <div className="home-container">
          <form className="home-booking-card" onSubmit={handleBooking}>
            <div className="home-booking-heading">
              <div className="home-booking-heading-icon">
                <CarFront size={24} />
              </div>
              <div>
                <h2>{t.bookingTitle}</h2>
                <p>{t.bookingDescription}</p>
              </div>
            </div>

            <div className="home-booking-fields">
              <label className="home-form-field">
                <span className="home-form-label">
                  <MapPin size={15} />
                  {t.pickup}
                </span>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={updateForm}
                  placeholder={t.pickupPlaceholder}
                  autoComplete="street-address"
                  required
                />
              </label>

              <label className="home-form-field">
                <span className="home-form-label">
                  <Navigation size={15} />
                  {t.destination}
                </span>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={updateForm}
                  placeholder={t.destinationPlaceholder}
                  required
                />
              </label>

              <label className="home-form-field">
                <span className="home-form-label">
                  <CalendarDays size={15} />
                  {t.date}
                </span>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={updateForm}
                  min={new Date().toLocaleDateString("en-CA")}
                  required
                />
              </label>

              <label className="home-form-field">
                <span className="home-form-label">
                  <Clock3 size={15} />
                  {t.time}
                </span>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={updateForm}
                  required
                />
              </label>

              <label className="home-form-field home-form-service">
                <span className="home-form-label">
                  <CarFront size={15} />
                  {t.vehicle}
                </span>
                <select
                  name="service"
                  value={formData.service}
                  onChange={updateForm}
                >
                  {t.vehicleOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="home-booking-submit"
              >
                {t.search}
                <ArrowRight size={18} />
              </button>
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
        <div className="home-container">
          <div className="home-section-heading">
            <span className="home-section-label">{t.serviceLabel}</span>
            <h2>
              {t.serviceTitle}
              <span>{t.serviceTitleHighlight}</span>
            </h2>
            <p>{t.serviceDescription}</p>
          </div>

          <div className="home-service-grid">
            {t.services.map((service, index) => (
              <article
                className={`home-service-card home-service-card-${index + 1}`}
                key={service.id}
              >
                <div className="home-service-card-top">
                  <div className="home-service-icon">
                    <ServiceIcon type={service.icon} size={27} />
                  </div>
                  <span className="home-service-number">
                    0{index + 1}
                  </span>
                </div>

                <span className="home-service-tag">{service.tag}</span>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <button
                  type="button"
                  className="home-service-link"
                  onClick={() => navigate(service.link)}
                >
                  {language === "en" ? "Explore service" : "Khám phá dịch vụ"}
                  <ArrowUpRight size={17} />
                </button>
              </article>
            ))}
          </div>

          <div className="home-services-bottom">
            <span>
              {language === "en"
                ? "Discover the right solution for your journey."
                : "Khám phá giải pháp phù hợp với hành trình của bạn."}
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

      {/* WHY CHOOSE US */}
      <section className="home-benefits-section" id="home-benefits">
        <div className="home-container home-benefits-grid">
          <div className="home-benefits-visual">
            <div className="home-benefits-visual-circle" />

            <div className="home-benefits-main-card">
              <div className="home-benefits-main-icon">
                <ShieldCheck size={43} />
              </div>
              <span className="home-benefits-overline">
                {language === "en" ? "YOUR JOURNEY, OUR PRIORITY" : "HÀNH TRÌNH CỦA BẠN"}
              </span>
              <h3>
                {language === "en"
                  ? "Comfort in every mile."
                  : "An tâm trên từng chặng đường."}
              </h3>
              <p>
                {language === "en"
                  ? "A thoughtful travel experience starts with the right service."
                  : "Trải nghiệm tốt bắt đầu từ lựa chọn dịch vụ phù hợp."}
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
                  {language === "en" ? "Customer focused" : "Lấy khách hàng làm trọng tâm"}
                </strong>
                <span>
                  {language === "en" ? "Service with care" : "Phục vụ tận tâm"}
                </span>
              </div>
            </div>
          </div>

          <div className="home-benefits-content">
            <span className="home-section-label">{t.whyLabel}</span>
            <h2>
              {t.whyTitle}
              <span>{t.whyHighlight}</span>
            </h2>
            <p className="home-benefits-description">{t.whyDescription}</p>

            <div className="home-benefit-list">
              {t.benefits.map((benefit, index) => (
                <article className="home-benefit-item" key={benefit.title}>
                  <div className={`home-benefit-item-icon benefit-icon-${index + 1}`}>
                    <ServiceIcon type={benefit.icon} size={23} />
                  </div>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                  <CheckCircle2 className="home-benefit-check" size={19} />
                </article>
              ))}
            </div>

            <button
              type="button"
              className="home-button home-button-primary home-benefits-button"
              onClick={() => navigate("/company")}
            >
              {language === "en" ? "About GoAnywhere" : "Tìm hiểu GoAnywhere"}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="home-process-section" id="home-process">
        <div className="home-container">
          <div className="home-section-heading">
            <span className="home-section-label">{t.processLabel}</span>
            <h2>{t.processTitle}</h2>
            <p>{t.processDescription}</p>
          </div>

          <div className="home-process-grid">
            {t.steps.map((step, index) => (
              <article className="home-process-card" key={step.number}>
                <div className="home-process-card-top">
                  <span className="home-process-number">{step.number}</span>
                  {index < t.steps.length - 1 && (
                    <span className="home-process-connector">
                      <ArrowRight size={20} />
                    </span>
                  )}
                </div>
                <div className={`home-process-icon process-icon-${index + 1}`}>
                  {index === 0 && <MapPin size={28} />}
                  {index === 1 && <CheckCircle2 size={28} />}
                  {index === 2 && <CarFront size={28} />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="home-price-section" id="home-pricing">
        <div className="home-container">
          <div className="home-price-heading">
            <div className="home-section-heading home-price-title">
              <span className="home-section-label">{t.priceLabel}</span>
              <h2>{t.priceTitle}</h2>
              <p>{t.priceDescription}</p>
            </div>

            <button
              type="button"
              className="home-price-view-all"
              onClick={() => navigate("/pricing")}
            >
              {t.seePrice}
              <ArrowUpRight size={17} />
            </button>
          </div>

          <div className="home-price-grid">
            <article className="home-price-card">
              <div className="home-price-icon">
                <CarFront size={27} />
              </div>
              <h3>{t.price4}</h3>
              <p>
                {language === "en"
                  ? "Compact and convenient for everyday rides."
                  : "Gọn nhẹ, tiện lợi cho nhu cầu di chuyển hằng ngày."}
              </p>
              <div className="home-price-value">
                <span>{t.from}</span>
                <strong>{language === "en" ? "7,000" : "7.000đ"}</strong>
                <span>{t.perKm}</span>
              </div>
              <button
                type="button"
                className="home-price-link"
                onClick={() => navigate("/booking?service=4-seat")}
              >
                {t.bookNow}
                <ArrowRight size={16} />
              </button>
            </article>

            <article className="home-price-card home-price-card-featured">
              <span className="home-price-popular">
                <Sparkles size={13} />
                {t.popular}
              </span>
              <div className="home-price-icon">
                <Users size={27} />
              </div>
              <h3>{t.price7}</h3>
              <p>
                {language === "en"
                  ? "More room for family trips and groups."
                  : "Rộng rãi cho gia đình, nhóm bạn và hành lý."}
              </p>
              <div className="home-price-value">
                <span>{t.from}</span>
                <strong>{language === "en" ? "9,000" : "9.000đ"}</strong>
                <span>{t.perKm}</span>
              </div>
              <button
                type="button"
                className="home-price-link"
                onClick={() => navigate("/booking?service=7-seat")}
              >
                {t.bookNow}
                <ArrowRight size={16} />
              </button>
            </article>

            <article className="home-price-card">
              <div className="home-price-icon">
                <UserRound size={27} />
              </div>
              <h3>{t.priceDriver}</h3>
              <p>
                {language === "en"
                  ? "A driver tailored to your schedule."
                  : "Tài xế riêng phục vụ theo lịch trình."}
              </p>
              <div className="home-price-value home-price-value-contact">
                <strong>{t.contactPrice}</strong>
              </div>
              <button
                type="button"
                className="home-price-link"
                onClick={() => navigate("/booking?service=driver")}
              >
                {t.bookNow}
                <ArrowRight size={16} />
              </button>
            </article>
          </div>

          <p className="home-price-disclaimer">
            <ShieldCheck size={15} />
            {language === "en"
              ? "Reference prices only. Final fares depend on trip details and service conditions."
              : "Giá chỉ mang tính tham khảo. Chi phí thực tế phụ thuộc thông tin hành trình và điều kiện dịch vụ."}
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta-section">
        <div className="home-container">
          <div className="home-cta">
            <div className="home-cta-decoration home-cta-decoration-one" />
            <div className="home-cta-decoration home-cta-decoration-two" />

            <div className="home-cta-content">
              <div className="home-cta-label">
                <Sparkles size={15} />
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
                  onClick={scrollToBooking}
                >
                  {t.finalButton}
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  className="home-button home-cta-secondary"
                  onClick={() => navigate("/contact")}
                >
                  {t.contactButton}
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>

            <div className="home-cta-visual">
              <div className="home-cta-car-circle">
                <CarFront size={92} strokeWidth={1.3} />
              </div>
              <div className="home-cta-pin">
                <MapPin size={24} />
              </div>
              <div className="home-cta-star">
                <Sparkles size={24} />
              </div>
              <div className="home-cta-route">
                <Route size={24} />
              </div>
            </div>
          </div>

          <p className="home-final-note">{t.footerNote}</p>
        </div>
      </section>
    </main>
  );
}