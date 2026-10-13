
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Check, MoonStar, Plane } from "lucide-react";
import { PersonalArt } from "../Illustrations";
import useScrollReveal from "../useScrollReveal";
import "./Personal.css";

const Personal = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const services = vi
    ? [
        { icon: Building2, title: "Di chuyển hằng ngày", desc: "Hỗ trợ đi làm, gặp gỡ bạn bè hoặc giải quyết công việc." },
        { icon: Plane, title: "Đưa đón sân bay", desc: "Chủ động lên kế hoạch cho hành trình đến và đi." },
        { icon: MoonStar, title: "Đưa bạn về an toàn", desc: "Lựa chọn hỗ trợ di chuyển khi bạn không tiện tự lái." },
      ]
    : [
        { icon: Building2, title: "Daily transportation", desc: "For work, meeting friends and everyday activities." },
        { icon: Plane, title: "Airport transfers", desc: "Plan your arrival and departure with convenience." },
        { icon: MoonStar, title: "A ride home", desc: "Get transportation support when you prefer not to drive." },
      ];

  return (
    <main className="personal-page" ref={revealRef}>
      <section className="personal-hero">
        <div className="personal-copy" data-reveal="left">
          <span className="personal-label">{vi ? "DỊCH VỤ CÁ NHÂN" : "PERSONAL SERVICES"}</span>
          <h1>
            {vi ? "Bạn tận hưởng," : "Enjoy your day,"}
            <span>{vi ? " GoAnywhere lo hành trình." : " let GoAnywhere handle the ride."}</span>
          </h1>
          <p>
            {vi
              ? "Giải pháp tài xế linh hoạt giúp bạn dành thời gian cho những điều quan trọng, mà vẫn chủ động trong mọi kế hoạch."
              : "Flexible driver services help you focus on what matters while keeping your plans on track."}
          </p>
          <Link to="/contact" className="personal-button">
            {vi ? "Đặt dịch vụ ngay" : "Book a service"} <ArrowUpRight size={18} />
          </Link>
        </div>
        <div
          className="personal-visual"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="personal-visual-circle">
            <PersonalArt label={vi ? "Xe GoAnywhere đưa bạn đi khắp thành phố" : "GoAnywhere car in the city"} />
          </div>
          <div className="personal-floating">
            <span>
              <Check size={20} strokeWidth={3} />
            </span>
            <div>
              <strong>{vi ? "Sẵn sàng đồng hành" : "Ready to go"}</strong>
              <small>{vi ? "Theo lịch trình của bạn" : "On your schedule"}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="personal-content">
        <div className="personal-heading" data-reveal="up">
          <span className="personal-label">{vi ? "DỊCH VỤ LINH HOẠT" : "FLEXIBLE SERVICES"}</span>
          <h2>{vi ? "Phù hợp với nhịp sống của bạn" : "Designed around your life"}</h2>
          <p>
            {vi
              ? "Chọn dịch vụ phù hợp với nhu cầu cá nhân và lịch trình của bạn."
              : "Choose a service that fits your personal needs and schedule."}
          </p>
        </div>
        <div className="personal-grid">
          {services.map((item, index) => (
            <article
              className="personal-card"
              key={item.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <span className="personal-card-icon">
                <item.icon size={28} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/contact" aria-label={vi ? `Liên hệ tư vấn: ${item.title}` : `Contact us about: ${item.title}`} className="personal-card-link">
                {vi ? "Liên hệ tư vấn" : "Contact us"} <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="personal-cta" data-reveal="zoom">
        <h2>{vi ? "Hành trình tiếp theo bắt đầu từ đây" : "Your next journey starts here"}</h2>
        <p>{vi ? "Liên hệ với GoAnywhere để tìm hiểu dịch vụ." : "Contact GoAnywhere to explore our services."}</p>
        <Link to="/contact" className="personal-button">{vi ? "Liên hệ ngay" : "Contact us"} <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
};

export default Personal;
