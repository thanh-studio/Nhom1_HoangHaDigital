import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CarFront,
  Clock3,
  MapPin,
  ShieldCheck,
  UserRound,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";
import useScrollReveal from "../useScrollReveal";
import "./Driver.css";

const Driver = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const packages = vi
    ? [
        {
          time: "2 giờ",
          title: "Gói trải nghiệm",
          desc: "Phù hợp cho những chuyến đi ngắn, gặp gỡ hoặc giải quyết công việc trong thành phố.",
          features: ["Tài xế riêng theo giờ", "Lịch trình linh hoạt", "Hỗ trợ điểm đón và trả"],
          icon: Clock3,
        },
        {
          time: "4 giờ",
          title: "Gói nửa ngày",
          desc: "Dành cho lịch họp, mua sắm, gặp đối tác hoặc nhiều điểm đến trong cùng một buổi.",
          features: ["Chủ động nhiều điểm dừng", "Phù hợp lịch trình công việc", "Hỗ trợ điều chỉnh lộ trình"],
          icon: BriefcaseBusiness,
          featured: true,
        },
        {
          time: "8 giờ",
          title: "Gói cả ngày",
          desc: "Đồng hành trong ngày làm việc, công tác, tham quan hoặc các lịch trình kéo dài.",
          features: ["Phục vụ theo lịch đã đặt", "Thuận tiện cho nhiều chặng", "Hỗ trợ theo nhu cầu thực tế"],
          icon: CalendarClock,
        },
      ]
    : [
        {
          time: "2 hours",
          title: "Short Trip",
          desc: "Ideal for short trips, meetings or errands around the city.",
          features: ["Hourly private driver", "Flexible schedule", "Pickup and drop-off support"],
          icon: Clock3,
        },
        {
          time: "4 hours",
          title: "Half-Day",
          desc: "For meetings, shopping, business appointments or multiple stops.",
          features: ["Multiple stops", "Business-friendly schedule", "Flexible route adjustments"],
          icon: BriefcaseBusiness,
          featured: true,
        },
        {
          time: "8 hours",
          title: "Full-Day",
          desc: "For workdays, business trips, sightseeing or extended itineraries.",
          features: ["Pre-booked schedule", "Convenient for multiple trips", "Support tailored to your needs"],
          icon: CalendarClock,
        },
      ];

  const benefits = vi
    ? [
        {
          icon: CalendarClock,
          title: "Linh hoạt thời gian",
          desc: "Chọn thời lượng thuê phù hợp với lịch trình của bạn.",
        },
        {
          icon: ShieldCheck,
          title: "Ưu tiên an toàn",
          desc: "Đề cao sự cẩn thận, trách nhiệm và tác phong chuyên nghiệp.",
        },
        {
          icon: MapPin,
          title: "Chủ động lộ trình",
          desc: "Thuận tiện di chuyển qua nhiều địa điểm trong thời gian thuê.",
        },
        {
          icon: UserRound,
          title: "Phục vụ riêng",
          desc: "Hỗ trợ theo nhu cầu cá nhân, gia đình hoặc công việc.",
        },
      ]
    : [
        {
          icon: CalendarClock,
          title: "Flexible Hours",
          desc: "Choose a duration that suits your schedule.",
        },
        {
          icon: ShieldCheck,
          title: "Safety First",
          desc: "We value careful driving, responsibility and professionalism.",
        },
        {
          icon: MapPin,
          title: "Flexible Routes",
          desc: "Travel between multiple destinations during your booking.",
        },
        {
          icon: UserRound,
          title: "Personal Service",
          desc: "Support for personal, family or business needs.",
        },
      ];

  const steps = vi
    ? [
        { number: "01", title: "Gửi yêu cầu", desc: "Cho chúng tôi biết thời gian, địa điểm đón và nhu cầu của bạn." },
        { number: "02", title: "Xác nhận lịch", desc: "Trao đổi chi tiết về lịch trình, thời lượng và chi phí dịch vụ." },
        { number: "03", title: "Bắt đầu hành trình", desc: "Tài xế phục vụ theo lịch đã được hai bên xác nhận." },
      ]
    : [
        { number: "01", title: "Send a Request", desc: "Share your schedule, pickup location and travel needs." },
        { number: "02", title: "Confirm Details", desc: "Discuss the itinerary, duration and service cost." },
        { number: "03", title: "Start Your Journey", desc: "Your driver follows the confirmed schedule." },
      ];

  return (
    <main className="driver-page" ref={revealRef}>
      {/* HERO */}
      <section className="driver-hero">
        <div className="driver-hero-content" data-reveal="left">
          <span className="driver-label">
            {vi ? "DỊCH VỤ TÀI XẾ THEO GIỜ" : "HOURLY DRIVER SERVICE"}
          </span>

          <h1>
            {vi ? "Bạn chọn thời gian," : "Your time,"}
            <span>
              {vi ? " chúng tôi đưa bạn đi." : " your journey."}
            </span>
          </h1>

          <p>
            {vi
              ? "Thuê tài xế riêng theo giờ để di chuyển linh hoạt, đi họp, gặp đối tác, mua sắm hoặc xử lý nhiều công việc trong ngày. GoAnywhere đồng hành theo lịch trình của bạn."
              : "Book a private driver by the hour for meetings, business appointments, shopping or a busy day around town. GoAnywhere works around your schedule."}
          </p>

          <div className="driver-hero-actions">
            <Link to="/contact" className="driver-button">
              {vi ? "Thuê tài xế ngay" : "Book a Driver"}
              <ArrowUpRight size={18} />
            </Link>

            <a href="#driver-packages" className="driver-secondary-button">
              {vi ? "Xem gói dịch vụ" : "Explore Packages"}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="driver-hero-note">
            <span><CheckCircle2 size={17} /></span>
            {vi
              ? "Linh hoạt thời lượng · Nhiều điểm dừng · Phục vụ theo lịch hẹn"
              : "Flexible duration · Multiple stops · Scheduled service"}
          </div>
        </div>

        <div
          className="driver-visual"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="driver-visual-glow" />

          <div className="driver-avatar">
            <svg
              viewBox="0 0 200 200"
              role="img"
              aria-label={vi ? "Minh họa tài xế GoAnywhere" : "GoAnywhere driver illustration"}
            >
              <circle cx="40" cy="60" r="2" fill="#fff" opacity=".5" />
              <circle cx="160" cy="48" r="3" fill="#fff" opacity=".35" />
              <circle cx="170" cy="110" r="1.5" fill="#fff" opacity=".5" />
              <circle cx="30" cy="120" r="1.5" fill="#fff" opacity=".4" />
              <circle cx="100" cy="104" r="62" fill="#fff" opacity=".07" />
              <rect x="90" y="122" width="20" height="26" rx="7" fill="#f2c4a0" />
              <path d="M38 205 Q40 152 100 144 Q160 152 162 205 Z" fill="#2a1450" />
              <path d="M84 146 L100 178 L116 146 Z" fill="#fff" />
              <path d="M96 151 L104 151 L107 178 L100 188 L93 178 Z" fill="#ff8a3d" />
              <path d="M84 146 L76 150 L92 190 L100 178 Z" fill="#3b1f6e" />
              <path d="M116 146 L124 150 L108 190 L100 178 Z" fill="#3b1f6e" />
              <circle cx="71" cy="103" r="6" fill="#f2c4a0" />
              <circle cx="129" cy="103" r="6" fill="#f2c4a0" />
              <circle cx="100" cy="100" r="30" fill="#f9d5b8" />
              <circle cx="87" cy="114" r="4" fill="#ff8a3d" opacity=".25" />
              <circle cx="113" cy="114" r="4" fill="#ff8a3d" opacity=".25" />
              <circle cx="90" cy="103" r="2.8" fill="#2a1450" />
              <circle cx="110" cy="103" r="2.8" fill="#2a1450" />
              <path d="M91 115 Q100 122 109 115" stroke="#2a1450" strokeWidth="2.6" fill="none" strokeLinecap="round" />
              <path d="M64 82 Q64 54 100 52 Q136 54 136 82 Z" fill="#fff" />
              <rect x="66" y="76" width="68" height="10" fill="#2a1450" />
              <path d="M68 86 Q100 99 132 86 L129 93 Q100 104 71 93 Z" fill="#1d0d3a" />
              <circle cx="100" cy="67" r="6" fill="#ff8a3d" />
            </svg>
          </div>

          <div className="driver-floating-card driver-floating-top">
            <span className="driver-floating-icon"><Clock3 size={20} /></span>
            <div>
              <strong>{vi ? "Theo giờ linh hoạt" : "Flexible hours"}</strong>
              <small>{vi ? "Theo lịch của bạn" : "On your schedule"}</small>
            </div>
          </div>

          <div className="driver-visual-card">
            <strong>GoAnywhere</strong>
            <span>{vi ? "Đồng hành trên mọi hành trình" : "Your journey, our care"}</span>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="driver-content driver-packages" id="driver-packages">
        <div className="driver-heading" data-reveal="up">
          <span className="driver-label">
            {vi ? "GÓI THUÊ LINH HOẠT" : "FLEXIBLE PACKAGES"}
          </span>
          <h2>
            {vi ? "Chọn thời lượng phù hợp" : "Choose Your Duration"}
          </h2>
          <p>
            {vi
              ? "Từ chuyến đi ngắn đến lịch trình cả ngày, hãy chọn thời lượng phù hợp với nhu cầu thực tế."
              : "From a short trip to a full day, choose the duration that fits your needs."}
          </p>
        </div>

        <div className="driver-package-grid">
          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`driver-package-card${item.featured ? " featured" : ""}`}
                key={item.time}
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 120}ms` }}
              >
                {item.featured && (
                  <span className="driver-package-badge">
                    {vi ? "ĐƯỢC QUAN TÂM" : "POPULAR CHOICE"}
                  </span>
                )}

                <div className="driver-package-icon">
                  <Icon size={25} />
                </div>

                <span className="driver-package-time">{item.time}</span>
                <h3>{item.title}</h3>
                <p className="driver-package-desc">{item.desc}</p>

                <div className="driver-package-divider" />

                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={17} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="driver-package-link"
                  state={{ service: vi ? `Thuê tài xế theo giờ - ${item.time}` : `Hourly Driver - ${item.time}` }}
                >
                  {vi ? "Tư vấn gói này" : "Ask About This Package"}
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

        <p className="driver-package-note">
          {vi
            ? "* Thời lượng trên là gợi ý tham khảo. Chi phí, thời gian phục vụ tối thiểu và điều kiện phát sinh sẽ được xác nhận khi đặt dịch vụ."
            : "* Durations are suggested options. Pricing, minimum booking time and additional conditions will be confirmed when booking."}
        </p>
      </section>

      {/* BENEFITS */}
      <section className="driver-benefits-section">
        <div className="driver-content">
          <div className="driver-heading" data-reveal="up">
            <span className="driver-label">
              {vi ? "VÌ SAO CHỌN GOANYWHERE" : "WHY GOANYWHERE"}
            </span>
            <h2>
              {vi ? "Thoải mái làm chủ lịch trình" : "Make the Most of Your Time"}
            </h2>
            <p>
              {vi
                ? "Tập trung vào công việc và trải nghiệm của bạn, việc di chuyển đã có tài xế đồng hành."
                : "Focus on your work and experiences while your driver takes care of the journey."}
            </p>
          </div>

          <div className="driver-grid">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="driver-card"
                  key={item.title}
                  data-reveal="up"
                  style={{ "--reveal-delay": `${index * 100}ms` }}
                >
                  <span className="driver-card-icon"><Icon size={26} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING PROCESS */}
      <section className="driver-content driver-process-section">
        <div className="driver-heading" data-reveal="up">
          <span className="driver-label">
            {vi ? "QUY TRÌNH ĐẶT DỊCH VỤ" : "HOW IT WORKS"}
          </span>
          <h2>{vi ? "Đặt lịch đơn giản trong 3 bước" : "Book in Three Simple Steps"}</h2>
        </div>

        <div className="driver-process-grid">
          {steps.map((step, index) => (
            <article
              className="driver-process-card"
              key={step.number}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <span className="driver-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="driver-step-arrow" size={22} />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="driver-cta" data-reveal="zoom">
        <div className="driver-cta-icon"><CarFront size={30} /></div>
        <span className="driver-label">
          {vi ? "SẴN SÀNG LÊN LỊCH?" : "READY TO BOOK?"}
        </span>
        <h2>
          {vi
            ? "Bạn cần tài xế trong vài giờ tới?"
            : "Need a driver for the next few hours?"}
        </h2>
        <p>
          {vi
            ? "Gửi lịch trình dự kiến cho GoAnywhere để được tư vấn thời lượng và chi phí phù hợp."
            : "Share your itinerary with GoAnywhere to discuss the right duration and pricing."}
        </p>
        <Link to="/contact" className="driver-button">
          {vi ? "Liên hệ đặt tài xế" : "Contact Us to Book"}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Driver;