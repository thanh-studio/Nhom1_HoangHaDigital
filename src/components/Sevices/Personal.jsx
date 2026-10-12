
import React from "react";
import { Link } from "react-router-dom";
import "./Personal.css";

const Personal = ({ language = "vi" }) => {
  const vi = language === "vi";

  const services = vi
    ? [
        { icon: "🏙️", title: "Di chuyển hằng ngày", desc: "Hỗ trợ đi làm, gặp gỡ bạn bè hoặc giải quyết công việc." },
        { icon: "✈️", title: "Đưa đón sân bay", desc: "Chủ động lên kế hoạch cho hành trình đến và đi." },
        { icon: "🌙", title: "Đưa bạn về an toàn", desc: "Lựa chọn hỗ trợ di chuyển khi bạn không tiện tự lái." },
      ]
    : [
        { icon: "🏙️", title: "Daily transportation", desc: "For work, meeting friends and everyday activities." },
        { icon: "✈️", title: "Airport transfers", desc: "Plan your arrival and departure with convenience." },
        { icon: "🌙", title: "A ride home", desc: "Get transportation support when you prefer not to drive." },
      ];

  return (
    <main className="personal-page">
      <section className="personal-hero">
        <div className="personal-copy">
          <span className="personal-label">{vi ? "DỊCH VỤ CÁ NHÂN" : "PERSONAL SERVICES"}</span>
          <h1>
            {vi ? "Bạn tận hưởng," : "Enjoy your day,"}
            <span>{vi ? " GOChapa lo hành trình." : " let GOChapa handle the ride."}</span>
          </h1>
          <p>
            {vi
              ? "Giải pháp tài xế linh hoạt giúp bạn dành thời gian cho những điều quan trọng, mà vẫn chủ động trong mọi kế hoạch."
              : "Flexible driver services help you focus on what matters while keeping your plans on track."}
          </p>
          <Link to="/contact" className="personal-button">
            {vi ? "Đặt dịch vụ ngay" : "Book a service"} ↗
          </Link>
        </div>
        <div className="personal-visual">
          <div className="personal-visual-circle">
            <span>🚗</span>
          </div>
          <div className="personal-floating">
            <span>✓</span>
            <div>
              <strong>{vi ? "Sẵn sàng đồng hành" : "Ready to go"}</strong>
              <small>{vi ? "Theo lịch trình của bạn" : "On your schedule"}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="personal-content">
        <div className="personal-heading">
          <span className="personal-label">{vi ? "DỊCH VỤ LINH HOẠT" : "FLEXIBLE SERVICES"}</span>
          <h2>{vi ? "Phù hợp với nhịp sống của bạn" : "Designed around your life"}</h2>
          <p>
            {vi
              ? "Chọn dịch vụ phù hợp với nhu cầu cá nhân và lịch trình của bạn."
              : "Choose a service that fits your personal needs and schedule."}
          </p>
        </div>
        <div className="personal-grid">
          {services.map((item) => (
            <article className="personal-card" key={item.title}>
              <span className="personal-card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/contact" aria-label={item.title} className="personal-card-link">
                {vi ? "Tìm hiểu thêm" : "Learn more"} ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="personal-cta">
        <h2>{vi ? "Hành trình tiếp theo bắt đầu từ đây" : "Your next journey starts here"}</h2>
        <p>{vi ? "Liên hệ với GOChapa để tìm hiểu dịch vụ." : "Contact GOChapa to explore our services."}</p>
        <Link to="/contact" className="personal-button">{vi ? "Liên hệ ngay" : "Contact us"} ↗</Link>
      </section>
    </main>
  );
};

export default Personal;
