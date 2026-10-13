import { useState } from "react";
import {
  CarFront,
  Check,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CalendarDays,
  Users,
  BriefcaseBusiness,
  Plane,
  UserRound,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import "./Pricing.css";

const pricingData = {
  vi: {
    badge: "BẢNG GIÁ DỊCH VỤ",
    title: "Chọn hành trình,",
    titleHighlight: "chọn mức giá phù hợp",
    description:
      "Giá cả minh bạch, dịch vụ chuyên nghiệp. GoAnywhere đồng hành cùng bạn trên mọi hành trình.",
    primaryButton: "Đặt xe ngay",
    secondaryButton: "Tìm hiểu dịch vụ",
    sectionLabel: "BẢNG GIÁ THAM KHẢO",
    sectionTitle: "Lựa chọn phù hợp với bạn",
    sectionDescription:
      "Đa dạng dòng xe và dịch vụ, đáp ứng mọi nhu cầu di chuyển.",
    popular: "ĐƯỢC LỰA CHỌN NHIỀU",
    perKm: "/ km",
    book: "Chọn xe này",
    featuresTitle: "Điều bạn nhận được",
    featuresDescription:
      "Không chỉ là một chuyến đi, đó còn là trải nghiệm an tâm và thoải mái.",
    features: [
      {
        title: "Giá cả minh bạch",
        description:
          "Thông tin giá tham khảo rõ ràng để bạn dễ dàng lên kế hoạch.",
      },
      {
        title: "Tài xế chuyên nghiệp",
        description:
          "Đội ngũ tài xế tận tâm, lịch sự và chú trọng an toàn.",
      },
      {
        title: "Đặt xe linh hoạt",
        description:
          "Chủ động lựa chọn dịch vụ, thời gian và nhu cầu di chuyển.",
      },
    ],
    noteTitle: "Lưu ý về giá dịch vụ",
    note:
      "Giá hiển thị là giá tham khảo. Chi phí thực tế có thể thay đổi tùy quãng đường, thời gian, loại dịch vụ, điểm đón/trả và các yêu cầu bổ sung. Vui lòng xác nhận giá khi đặt xe.",
    ctaTitle: "Sẵn sàng cho hành trình tiếp theo?",
    ctaDescription:
      "Đặt xe cùng GoAnywhere để tận hưởng hành trình tiện lợi, an toàn và thoải mái.",
    ctaButton: "Bắt đầu đặt xe",
    cars: [
      {
        id: "4-seat",
        name: "Xe 4 chỗ",
        subtitle: "Gọn nhẹ, tiện lợi",
        price: "7.000",
        unit: "VNĐ",
        description:
          "Phù hợp cho cá nhân, cặp đôi hoặc những chuyến đi ngắn.",
        features: [
          "Tối đa 4 hành khách",
          "Phù hợp di chuyển nội thành",
          "Điều hòa thoải mái",
          "Đón trả linh hoạt",
        ],
        icon: "car",
      },
      {
        id: "7-seat",
        name: "Xe 7 chỗ",
        subtitle: "Rộng rãi, thoải mái",
        price: "9.000",
        unit: "VNĐ",
        description:
          "Lựa chọn lý tưởng cho gia đình, nhóm bạn và hành lý nhiều.",
        features: [
          "Tối đa 7 hành khách",
          "Không gian rộng rãi",
          "Phù hợp đi du lịch",
          "Thoải mái cho hành trình dài",
        ],
        icon: "users",
        popular: true,
      },
      {
        id: "driver",
        name: "Tài xế riêng",
        subtitle: "Chủ động theo lịch trình",
        price: "Liên hệ",
        unit: "",
        description:
          "Dành cho khách hàng cần tài xế phục vụ theo giờ hoặc theo ngày.",
        features: [
          "Linh hoạt thời gian",
          "Phục vụ theo yêu cầu",
          "Phù hợp công tác",
          "Lịch trình cá nhân hóa",
        ],
        icon: "driver",
      },
    ],
  },
  en: {
    badge: "OUR PRICING",
    title: "Choose your journey,",
    titleHighlight: "find your perfect fare",
    description:
      "Transparent pricing and professional service for a smoother journey with GoAnywhere.",
    primaryButton: "Book a ride",
    secondaryButton: "Explore services",
    sectionLabel: "ESTIMATED PRICING",
    sectionTitle: "Find the right ride for you",
    sectionDescription:
      "Flexible vehicle options and services for every travel need.",
    popular: "MOST POPULAR",
    perKm: "/ km",
    book: "Choose this option",
    featuresTitle: "Why ride with us?",
    featuresDescription:
      "More than a ride — enjoy a comfortable and dependable experience.",
    features: [
      {
        title: "Transparent pricing",
        description:
          "Clear reference prices help you plan your journey with confidence.",
      },
      {
        title: "Professional drivers",
        description:
          "Courteous, dedicated drivers who put safety first.",
      },
      {
        title: "Flexible booking",
        description:
          "Choose the service, schedule and ride that suit your needs.",
      },
    ],
    noteTitle: "Pricing information",
    note:
      "Displayed prices are estimates. The final fare may vary based on distance, time, service type, pickup/drop-off points and additional requirements. Please confirm the fare when booking.",
    ctaTitle: "Ready for your next journey?",
    ctaDescription:
      "Book with GoAnywhere for a convenient, safe and comfortable ride.",
    ctaButton: "Book your ride",
    cars: [
      {
        id: "4-seat",
        name: "4-seat car",
        subtitle: "Compact and convenient",
        price: "7,000",
        unit: "VND",
        description:
          "Ideal for individuals, couples and short city trips.",
        features: [
          "Up to 4 passengers",
          "Great for city travel",
          "Comfortable air conditioning",
          "Flexible pickup and drop-off",
        ],
        icon: "car",
      },
      {
        id: "7-seat",
        name: "7-seat car",
        subtitle: "Spacious and comfortable",
        price: "9,000",
        unit: "VND",
        description:
          "Ideal for families, groups and extra luggage.",
        features: [
          "Up to 7 passengers",
          "Spacious interior",
          "Great for trips",
          "Comfortable for longer journeys",
        ],
        icon: "users",
        popular: true,
      },
      {
        id: "driver",
        name: "Private driver",
        subtitle: "Your schedule, your way",
        price: "Contact us",
        unit: "",
        description:
          "For customers who need a driver by the hour or by the day.",
        features: [
          "Flexible schedule",
          "Service tailored to your needs",
          "Ideal for business trips",
          "Personalized itinerary",
        ],
        icon: "driver",
      },
    ],
  },
};

function VehicleIcon({ type }) {
  if (type === "users") {
    return <Users size={28} strokeWidth={1.8} />;
  }

  if (type === "driver") {
    return <UserRound size={28} strokeWidth={1.8} />;
  }

  return <CarFront size={28} strokeWidth={1.8} />;
}

export default function Pricing({ language = "vi" }) {
  const [selectedType, setSelectedType] = useState("all");
  const navigate = useNavigate();

  const isVietnamese = language === "vi";
  const t = pricingData[isVietnamese ? "vi" : "en"];

  const serviceTypes = isVietnamese
    ? [
        { id: "all", label: "Tất cả dịch vụ", icon: <Sparkles size={16} /> },
        { id: "car", label: "Dịch vụ xe", icon: <CarFront size={16} /> },
        { id: "driver", label: "Tài xế riêng", icon: <UserRound size={16} /> },
      ]
    : [
        { id: "all", label: "All services", icon: <Sparkles size={16} /> },
        { id: "car", label: "Car services", icon: <CarFront size={16} /> },
        { id: "driver", label: "Private driver", icon: <UserRound size={16} /> },
      ];

  const visibleCars = t.cars.filter((car) => {
    if (selectedType === "all") return true;
    if (selectedType === "driver") return car.id === "driver";
    return car.id !== "driver";
  });

  const handleBooking = (car) => {
    navigate(`/booking?service=${encodeURIComponent(car.id)}`);
  };

  return (
    <main className="pricing-page">
      {/* HERO */}
      <section className="pricing-hero">
        <div className="pricing-hero-orb pricing-hero-orb-one" />
        <div className="pricing-hero-orb pricing-hero-orb-two" />

        <div className="pricing-container pricing-hero-grid">
          <div className="pricing-hero-content">
            <div className="pricing-eyebrow">
              <Sparkles size={16} />
              <span>{t.badge}</span>
            </div>

            <h1>
              {t.title}
              <span>{t.titleHighlight}</span>
            </h1>

            <p className="pricing-hero-description">
              {t.description}
            </p>

            <div className="pricing-hero-actions">
              <button
                className="pricing-button pricing-button-primary"
                onClick={() => navigate("/booking")}
              >
                {t.primaryButton}
                <ArrowRight size={18} />
              </button>

              <button
                className="pricing-button pricing-button-outline"
                onClick={() => navigate("/home#services")}
              >
                {t.secondaryButton}
              </button>
            </div>

            <div className="pricing-trust-row">
              <div className="pricing-trust-item">
                <ShieldCheck size={19} />
                <span>
                  {isVietnamese ? "Ưu tiên an toàn" : "Safety first"}
                </span>
              </div>

              <div className="pricing-trust-item">
                <Clock3 size={19} />
                <span>
                  {isVietnamese ? "Đặt xe linh hoạt" : "Flexible booking"}
                </span>
              </div>
            </div>
          </div>

          <div className="pricing-hero-visual">
            <div className="pricing-visual-glow" />

            <div className="pricing-visual-card pricing-visual-card-main">
              <div className="pricing-visual-top">
                <div className="pricing-visual-icon">
                  <CarFront size={30} />
                </div>

                <span className="pricing-visual-status">
                  <span />
                  {isVietnamese ? "Sẵn sàng khởi hành" : "Ready to go"}
                </span>
              </div>

              <div className="pricing-visual-route">
                <div className="pricing-route-point">
                  <span className="pricing-route-dot pickup" />
                  <div>
                    <small>
                      {isVietnamese ? "ĐIỂM ĐÓN" : "PICKUP"}
                    </small>
                    <strong>
                      {isVietnamese ? "Vị trí của bạn" : "Your location"}
                    </strong>
                  </div>
                </div>

                <div className="pricing-route-line">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="pricing-route-point">
                  <span className="pricing-route-dot destination" />
                  <div>
                    <small>
                      {isVietnamese ? "ĐIỂM ĐẾN" : "DESTINATION"}
                    </small>
                    <strong>
                      {isVietnamese ? "Điểm đến mong muốn" : "Your destination"}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="pricing-visual-bottom">
                <div>
                  <span>
                    {isVietnamese ? "Giá tham khảo từ" : "Estimated fares from"}
                  </span>
                  <strong>
                    {isVietnamese ? "7.000đ/km" : "7,000 VND/km"}
                  </strong>
                </div>

                <div className="pricing-visual-car">
                  <CarFront size={28} />
                </div>
              </div>
            </div>

            <div className="pricing-floating-card pricing-floating-card-top">
              <div className="pricing-floating-icon orange">
                <MapPin size={19} />
              </div>
              <div>
                <strong>
                  {isVietnamese ? "Hành trình của bạn" : "Your journey"}
                </strong>
                <span>
                  {isVietnamese ? "Thoải mái và tiện lợi" : "Easy and comfortable"}
                </span>
              </div>
            </div>

            <div className="pricing-floating-card pricing-floating-card-bottom">
              <div className="pricing-floating-icon purple">
                <ShieldCheck size={20} />
              </div>
              <div>
                <strong>
                  {isVietnamese ? "An tâm di chuyển" : "Ride with confidence"}
                </strong>
                <span>
                  {isVietnamese ? "Dịch vụ chuyên nghiệp" : "Professional service"}
                </span>
              </div>
              <Check size={18} className="pricing-floating-check" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICE CARDS */}
      <section className="pricing-plans" id="pricing-plans">
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-section-label">{t.sectionLabel}</span>
            <h2>{t.sectionTitle}</h2>
            <p>{t.sectionDescription}</p>
          </div>

          <div className="pricing-filter">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                className={`pricing-filter-button ${
                  selectedType === type.id ? "active" : ""
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.icon}
                {type.label}
              </button>
            ))}
          </div>

          <div className="pricing-cards">
            {visibleCars.map((car) => (
              <article
                className={`pricing-card ${
                  car.popular ? "pricing-card-popular" : ""
                }`}
                key={car.id}
              >
                {car.popular && (
                  <div className="pricing-popular-label">
                    <Sparkles size={14} />
                    {t.popular}
                  </div>
                )}

                <div className="pricing-card-icon">
                  <VehicleIcon type={car.icon} />
                </div>

                <div className="pricing-card-title">
                  <h3>{car.name}</h3>
                  <p>{car.subtitle}</p>
                </div>

                <p className="pricing-card-description">
                  {car.description}
                </p>

                <div className="pricing-card-price">
                  {car.unit && (
                    <span className="pricing-currency">{car.unit}</span>
                  )}
                  <strong>{car.price}</strong>
                  {car.id !== "driver" && (
                    <span className="pricing-price-unit">{t.perKm}</span>
                  )}
                </div>

                {car.id === "driver" && (
                  <p className="pricing-contact-hint">
                    {isVietnamese
                      ? "Báo giá theo lịch trình"
                      : "Quote based on your itinerary"}
                  </p>
                )}

                <div className="pricing-card-divider" />

                <ul className="pricing-feature-list">
                  {car.features.map((feature) => (
                    <li key={feature}>
                      <span className="pricing-feature-check">
                        <Check size={14} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`pricing-card-button ${
                    car.popular ? "featured" : ""
                  }`}
                  onClick={() => handleBooking(car)}
                >
                  {t.book}
                  <ArrowRight size={17} />
                </button>
              </article>
            ))}
          </div>

          <div className="pricing-disclaimer">
            <div className="pricing-disclaimer-icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3>{t.noteTitle}</h3>
              <p>{t.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pricing-benefits">
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-section-label">
              {isVietnamese ? "TRẢI NGHIỆM GOANYWHERE" : "THE GOANYWHERE EXPERIENCE"}
            </span>
            <h2>{t.featuresTitle}</h2>
            <p>{t.featuresDescription}</p>
          </div>

          <div className="pricing-benefit-grid">
            {t.features.map((feature, index) => {
              const icons = [
                <ShieldCheck size={25} />,
                <UserRound size={25} />,
                <CalendarDays size={25} />,
              ];

              return (
                <article className="pricing-benefit-card" key={feature.title}>
                  <div className={`pricing-benefit-icon icon-${index + 1}`}>
                    {icons[index]}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta-section">
        <div className="pricing-container">
          <div className="pricing-cta">
            <div className="pricing-cta-decoration pricing-cta-decoration-one" />
            <div className="pricing-cta-decoration pricing-cta-decoration-two" />

            <div className="pricing-cta-content">
              <div className="pricing-cta-label">
                <Sparkles size={15} />
                GoAnywhere
              </div>

              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaDescription}</p>

              <button
                className="pricing-button pricing-cta-button"
                onClick={() => navigate("/booking")}
              >
                {t.ctaButton}
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="pricing-cta-illustration">
              <div className="pricing-cta-circle">
                <CarFront size={100} strokeWidth={1.2} />
              </div>
              <div className="pricing-cta-mini-card">
                <Plane size={20} />
                <span>
                  {isVietnamese ? "Đi xa, đi gần" : "Near or far"}
                </span>
              </div>
              <div className="pricing-cta-pin">
                <MapPin size={24} />
              </div>
              <div className="pricing-cta-sparkle">
                <Sparkles size={23} />
              </div>
              <div className="pricing-cta-bag">
                <BriefcaseBusiness size={23} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
