
import React from "react";
import { Link } from "react-router-dom";
import "./Business.css";

const Business = ({ language = "vi" }) => {
  const vi = language === "vi";

  const benefits = vi
    ? [
        { icon: "👔", title: "Đưa đón đối tác", desc: "Tạo trải nghiệm chuyên nghiệp cho khách hàng và đối tác." },
        { icon: "📅", title: "Lịch trình linh hoạt", desc: "Hỗ trợ nhu cầu di chuyển theo lịch làm việc." },
        { icon: "🤝", title: "Đồng hành doanh nghiệp", desc: "Giải pháp phục vụ nhu cầu đi lại của đội ngũ." },
      ]
    : [
        { icon: "👔", title: "Partner transportation", desc: "Create a professional experience for clients and partners." },
        { icon: "📅", title: "Flexible schedules", desc: "Support transportation around your work calendar." },
        { icon: "🤝", title: "Business support", desc: "Mobility solutions for your team." },
      ];

  return (
    <main className="business-page">
      <section className="business-hero">
        <div className="business-hero-copy">
          <span className="business-label">{vi ? "GIẢI PHÁP DOANH NGHIỆP" : "BUSINESS SOLUTIONS"}</span>
          <h1>
            {vi ? "Di chuyển chuyên nghiệp," : "Professional mobility,"}
            <span>{vi ? " nâng tầm trải nghiệm." : " elevated experiences."}</span>
          </h1>
          <p>
            {vi
              ? "Hỗ trợ doanh nghiệp tổ chức việc di chuyển cho nhân sự, khách hàng và đối tác một cách thuận tiện."
              : "Help your business coordinate transportation for employees, customers and partners."}
          </p>
          <Link to="/contact" className="business-button">
            {vi ? "Trao đổi nhu cầu" : "Discuss your needs"} ↗
          </Link>
        </div>
        <div className="business-hero-visual">
          <div className="business-visual-main">
            <span>🏢</span>
            <strong>GoAnywhere Business</strong>
            <small>{vi ? "Giải pháp cho doanh nghiệp" : "Business mobility solutions"}</small>
          </div>
          <div className="business-mini-card">✦ {vi ? "Chuyên nghiệp" : "Professional"}</div>
        </div>
      </section>

      <section className="business-content">
        <div className="business-heading">
          <span className="business-label">{vi ? "DÀNH CHO DOANH NGHIỆP" : "FOR BUSINESSES"}</span>
          <h2>{vi ? "Tối ưu trải nghiệm di chuyển" : "Improve every business journey"}</h2>
          <p>
            {vi
              ? "Một giải pháp linh hoạt để hỗ trợ lịch trình công tác, đón tiếp và hoạt động thường ngày."
              : "A flexible solution for business travel, guest reception and everyday operations."}
          </p>
        </div>
        <div className="business-grid">
          {benefits.map((item) => (
            <article className="business-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="business-cta">
        <h2>{vi ? "Cùng xây dựng giải pháp phù hợp" : "Let's build the right solution"}</h2>
        <p>{vi ? "Chia sẻ nhu cầu để chúng tôi có thể hỗ trợ bạn." : "Tell us what your business needs."}</p>
        <Link to="/contact" className="business-button">{vi ? "Liên hệ tư vấn" : "Contact us"} ↗</Link>
      </section>
    </main>
  );
};

export default Business;
