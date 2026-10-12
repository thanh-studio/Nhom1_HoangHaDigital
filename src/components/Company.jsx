
import React from "react";
import { Link } from "react-router-dom";
import "./Company.css";

const Company = ({ language = "vi" }) => {
  const vi = language === "vi";

  const values = vi
    ? [
        { icon: "🛡️", title: "An toàn là ưu tiên", desc: "Đặt sự an toàn và trải nghiệm của khách hàng lên hàng đầu." },
        { icon: "🤝", title: "Uy tín và tận tâm", desc: "Luôn minh bạch, chuyên nghiệp và có trách nhiệm." },
        { icon: "⚡", title: "Nhanh chóng, tiện lợi", desc: "Quy trình đặt dịch vụ đơn giản, tiết kiệm thời gian." },
      ]
    : [
        { icon: "🛡️", title: "Safety first", desc: "Customer safety and experience always come first." },
        { icon: "🤝", title: "Trust and dedication", desc: "Transparent, professional and responsible service." },
        { icon: "⚡", title: "Fast and convenient", desc: "A simple booking process that saves your time." },
      ];

  return (
    <main className="company-page">
      <section className="company-hero">
        <div className="company-hero-content">
          <span className="company-eyebrow">
            {vi ? "VỀ GOCHAPA" : "ABOUT GOCHAPA"}
          </span>
          <h1>
            {vi ? "Di chuyển dễ dàng," : "Move with ease,"}
            <span>{vi ? " an tâm trên mọi hành trình." : " travel with confidence."}</span>
          </h1>
          <p>
            {vi
              ? "GOChapa kết nối khách hàng với các giải pháp tài xế linh hoạt, chuyên nghiệp và đáng tin cậy."
              : "GOChapa connects customers with flexible, professional and reliable driver services."}
          </p>
          <div className="company-actions">
            <Link to="/contact" className="company-btn">
              {vi ? "Liên hệ với chúng tôi" : "Contact us"} ↗
            </Link>
            <Link to="/home#services" className="company-btn-outline">
              {vi ? "Khám phá dịch vụ" : "Explore services"}
            </Link>
          </div>
        </div>
        <div className="company-hero-art">
          <div className="company-art-circle">G</div>
          <div className="company-art-card">
            <span>✓</span>
            <div>
              <strong>GOChapa</strong>
              <small>{vi ? "Đồng hành cùng bạn" : "Moving with you"}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="company-intro">
        <span className="company-eyebrow">{vi ? "CHÚNG TÔI LÀ AI?" : "WHO WE ARE"}</span>
        <h2>
          {vi ? "Giải pháp di chuyển dành cho cuộc sống hiện đại" : "Mobility solutions for modern life"}
        </h2>
        <p>
          {vi
            ? "Chúng tôi hướng đến việc giúp khách hàng chủ động hơn trong công việc, cuộc sống và các sự kiện quan trọng thông qua dịch vụ tài xế thuận tiện."
            : "We help customers manage work, daily life and special occasions with convenient driver services."}
        </p>
      </section>

      <section className="company-values">
        <div className="company-section-heading">
          <span className="company-eyebrow">{vi ? "GIÁ TRỊ CỐT LÕI" : "OUR VALUES"}</span>
          <h2>{vi ? "Điều tạo nên GOChapa" : "What defines GOChapa"}</h2>
        </div>
        <div className="company-value-grid">
          {values.map((item) => (
            <article className="company-value-card" key={item.title}>
              <span className="company-value-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="company-bottom">
        <h2>{vi ? "Cùng bạn trên mọi hành trình" : "With you on every journey"}</h2>
        <p>
          {vi ? "Tìm hiểu dịch vụ phù hợp với nhu cầu của bạn." : "Find a service that fits your needs."}
        </p>
        <Link to="/contact" className="company-btn">
          {vi ? "Bắt đầu ngay" : "Get started"} ↗
        </Link>
      </section>
    </main>
  );
};

export default Company;
