
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, CalendarClock, CarFront } from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./Driver.css";

const Driver = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const benefits = vi
    ? [
        { icon: CalendarClock, title: "Chủ động lịch trình", desc: "Linh hoạt sắp xếp thời gian phù hợp với công việc." },
        { icon: BadgeCheck, title: "Tác phong chuyên nghiệp", desc: "Chú trọng thái độ phục vụ và giao tiếp với khách hàng." },
        { icon: CarFront, title: "Đa dạng nhu cầu", desc: "Phù hợp cho di chuyển cá nhân, công việc và sự kiện." },
      ]
    : [
        { icon: CalendarClock, title: "Flexible scheduling", desc: "Plan your time around your work and daily routine." },
        { icon: BadgeCheck, title: "Professional service", desc: "Focused on customer care and communication." },
        { icon: CarFront, title: "Different travel needs", desc: "For personal trips, business and events." },
      ];

  return (
    <main className="driver-page" ref={revealRef}>
      <section className="driver-hero">
        <div data-reveal="left">
          <span className="driver-label">{vi ? "DỊCH VỤ TÀI XẾ" : "DRIVER SERVICES"}</span>
          <h1>
            {vi ? "Người bạn đồng hành" : "Your trusted travel"}
            <span>{vi ? " trên mọi hành trình." : " companion."}</span>
          </h1>
          <p>
            {vi
              ? "Tìm hiểu giải pháp tài xế của GoAnywhere dành cho nhu cầu di chuyển cá nhân, công việc và những dịp đặc biệt."
              : "Explore GoAnywhere driver solutions for personal travel, work and special occasions."}
          </p>
          <Link to="/contact" className="driver-button">{vi ? "Liên hệ đặt dịch vụ" : "Book a service"} <ArrowUpRight size={18} /></Link>
        </div>
        <div
          className="driver-visual"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="driver-avatar">
            <svg
              viewBox="0 0 200 200"
              role="img"
              aria-label={vi ? "Tài xế GoAnywhere" : "GoAnywhere driver"}
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
          <div className="driver-visual-card">
            <strong>GoAnywhere</strong>
            <span>{vi ? "Phục vụ tận tâm" : "Service with care"}</span>
          </div>
        </div>
      </section>

      <section className="driver-content">
        <div className="driver-heading" data-reveal="up">
          <span className="driver-label">{vi ? "TRẢI NGHIỆM DỊCH VỤ" : "SERVICE EXPERIENCE"}</span>
          <h2>{vi ? "Lấy khách hàng làm trung tâm" : "Customer-focused service"}</h2>
          <p>
            {vi
              ? "Chúng tôi hướng đến trải nghiệm thuận tiện, giao tiếp rõ ràng và hỗ trợ theo nhu cầu của khách hàng."
              : "We aim to provide convenience, clear communication and support tailored to customer needs."}
          </p>
        </div>
        <div className="driver-grid">
          {benefits.map((item, index) => (
            <article
              className="driver-card"
              key={item.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <span>
                <item.icon size={28} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="driver-cta" data-reveal="zoom">
        <h2>{vi ? "Cần hỗ trợ cho chuyến đi của bạn?" : "Need help with your journey?"}</h2>
        <p>{vi ? "Kết nối với đội ngũ GoAnywhere để tìm hiểu thêm." : "Connect with GoAnywhere to learn more."}</p>
        <Link to="/contact" className="driver-button">{vi ? "Gửi yêu cầu" : "Send an inquiry"} <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
};

export default Driver;
