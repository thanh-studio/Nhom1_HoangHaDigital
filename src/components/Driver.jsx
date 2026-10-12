
import React from "react";
import { Link } from "react-router-dom";
import "./Driver.css";

const Driver = ({ language = "vi" }) => {
  const vi = language === "vi";

  const benefits = vi
    ? [
        { icon: "🧭", title: "Chủ động lịch trình", desc: "Linh hoạt sắp xếp thời gian phù hợp với công việc." },
        { icon: "🤝", title: "Tác phong chuyên nghiệp", desc: "Chú trọng thái độ phục vụ và giao tiếp với khách hàng." },
        { icon: "🚘", title: "Đa dạng nhu cầu", desc: "Phù hợp cho di chuyển cá nhân, công việc và sự kiện." },
      ]
    : [
        { icon: "🧭", title: "Flexible scheduling", desc: "Plan your time around your work and daily routine." },
        { icon: "🤝", title: "Professional service", desc: "Focused on customer care and communication." },
        { icon: "🚘", title: "Different travel needs", desc: "For personal trips, business and events." },
      ];

  return (
    <main className="driver-page">
      <section className="driver-hero">
        <div>
          <span className="driver-label">{vi ? "DỊCH VỤ TÀI XẾ" : "DRIVER SERVICES"}</span>
          <h1>
            {vi ? "Người bạn đồng hành" : "Your trusted travel"}
            <span>{vi ? " trên mọi hành trình." : " companion."}</span>
          </h1>
          <p>
            {vi
              ? "Tìm hiểu giải pháp tài xế của GOChapa dành cho nhu cầu di chuyển cá nhân, công việc và những dịp đặc biệt."
              : "Explore GOChapa driver solutions for personal travel, work and special occasions."}
          </p>
          <Link to="/contact" className="driver-button">{vi ? "Liên hệ đặt dịch vụ" : "Book a service"} ↗</Link>
        </div>
        <div className="driver-visual">
          <div className="driver-avatar">👨‍✈️</div>
          <div className="driver-visual-card">
            <strong>GOChapa</strong>
            <span>{vi ? "Phục vụ tận tâm" : "Service with care"}</span>
          </div>
        </div>
      </section>

      <section className="driver-content">
        <div className="driver-heading">
          <span className="driver-label">{vi ? "TRẢI NGHIỆM DỊCH VỤ" : "SERVICE EXPERIENCE"}</span>
          <h2>{vi ? "Lấy khách hàng làm trung tâm" : "Customer-focused service"}</h2>
          <p>
            {vi
              ? "Chúng tôi hướng đến trải nghiệm thuận tiện, giao tiếp rõ ràng và hỗ trợ theo nhu cầu của khách hàng."
              : "We aim to provide convenience, clear communication and support tailored to customer needs."}
          </p>
        </div>
        <div className="driver-grid">
          {benefits.map((item) => (
            <article className="driver-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="driver-cta">
        <h2>{vi ? "Cần hỗ trợ cho chuyến đi của bạn?" : "Need help with your journey?"}</h2>
        <p>{vi ? "Kết nối với đội ngũ GOChapa để tìm hiểu thêm." : "Connect with GOChapa to learn more."}</p>
        <Link to="/contact" className="driver-button">{vi ? "Gửi yêu cầu" : "Send an inquiry"} ↗</Link>
      </section>
    </main>
  );
};

export default Driver;
