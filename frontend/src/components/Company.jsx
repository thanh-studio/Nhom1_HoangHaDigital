
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Handshake,
  House,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  TrainFront,
  Zap,
} from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./Company.css";

const Company = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const values = vi
    ? [
        { icon: ShieldCheck, title: "An toàn là ưu tiên", desc: "Đặt sự an toàn và trải nghiệm của khách hàng lên hàng đầu." },
        { icon: Handshake, title: "Uy tín và tận tâm", desc: "Luôn minh bạch, chuyên nghiệp và có trách nhiệm." },
        { icon: Zap, title: "Nhanh chóng, tiện lợi", desc: "Quy trình đặt dịch vụ đơn giản, tiết kiệm thời gian." },
      ]
    : [
        { icon: ShieldCheck, title: "Safety first", desc: "Customer safety and experience always come first." },
        { icon: Handshake, title: "Trust and dedication", desc: "Transparent, professional and responsible service." },
        { icon: Zap, title: "Fast and convenient", desc: "A simple booking process that saves your time." },
      ];

  const introTags = [
    { icon: BriefcaseBusiness, label: vi ? "Công việc" : "Work" },
    { icon: House, label: vi ? "Cuộc sống hằng ngày" : "Daily life" },
    { icon: PartyPopper, label: vi ? "Sự kiện quan trọng" : "Special occasions" },
  ];

  const viewPoints = [
    { icon: TrainFront, label: vi ? "Giao thông công cộng" : "Public transportation" },
    { icon: Building2, label: vi ? "Thành phố thông minh" : "Smart cities" },
    { icon: Sparkles, label: vi ? "Trải nghiệm cao cấp" : "Premium experiences" },
  ];

  return (
    <main className="company-page" ref={revealRef}>
      <section className="company-hero">
        <div className="company-hero-content" data-reveal="left">
          <span className="company-eyebrow">
            {vi ? "VỀ GoAnywhere" : "ABOUT GoAnywhere"}
          </span>
          <h1>
            {vi ? "Di chuyển dễ dàng," : "Move with ease,"}
            <span>{vi ? " an tâm trên mọi hành trình." : " travel with confidence."}</span>
          </h1>
          <p>
            {vi
              ? "GoAnywhere kết nối khách hàng với các giải pháp tài xế linh hoạt, chuyên nghiệp và đáng tin cậy."
              : "GoAnywhere connects customers with flexible, professional and reliable driver services."}
          </p>
          <div className="company-actions">
            <Link to="/contact" className="company-btn">
              {vi ? "Liên hệ với chúng tôi" : "Contact us"} <ArrowUpRight size={18} />
            </Link>
            <Link to="/home#services" className="company-btn-outline">
              {vi ? "Khám phá dịch vụ" : "Explore services"}
            </Link>
          </div>
        </div>
        <div
          className="company-hero-art"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="company-art-circle">
            <svg
              viewBox="0 0 200 200"
              role="img"
              aria-label={vi ? "Tài xế GoAnywhere lái xe" : "GoAnywhere driver at the wheel"}
            >
              <circle cx="45" cy="50" r="2" fill="#fff" opacity=".5" />
              <circle cx="150" cy="40" r="3" fill="#fff" opacity=".35" />
              <circle cx="165" cy="80" r="1.5" fill="#fff" opacity=".5" />
              <circle cx="35" cy="95" r="1.5" fill="#fff" opacity=".4" />
              <polygon points="88,118 112,118 175,200 25,200" fill="#fff" opacity=".12" />
              <path d="M100 160 V200" stroke="#fff" strokeWidth="3" strokeDasharray="8 7" opacity=".5" />
              <rect x="52" y="148" width="20" height="24" rx="5" fill="#2a1450" />
              <rect x="128" y="148" width="20" height="24" rx="5" fill="#2a1450" />
              <ellipse cx="58" cy="104" rx="9" ry="5" fill="#fff" />
              <ellipse cx="142" cy="104" rx="9" ry="5" fill="#fff" />
              <path d="M64 112 L77 78 Q79 71 87 71 L113 71 Q121 71 123 78 L136 112 Z" fill="#fff" />
              <path d="M73 108 L84 82 Q85 78 90 78 L110 78 Q115 78 116 82 L127 108 Z" fill="#4a2589" />
              <circle cx="100" cy="91" r="6.5" fill="#f2eaff" />
              <path d="M86 108 Q86 99 100 99 Q114 99 114 108 Z" fill="#f2eaff" />
              <path d="M89 108 Q100 98 111 108" stroke="#ff8a3d" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <rect x="44" y="106" width="112" height="50" rx="14" fill="#fff" />
              <rect x="54" y="118" width="24" height="11" rx="5.5" fill="#ff8a3d" />
              <rect x="122" y="118" width="24" height="11" rx="5.5" fill="#ff8a3d" />
              <rect x="84" y="120" width="32" height="7" rx="3.5" fill="#d9c8f5" />
              <rect x="87" y="136" width="26" height="11" rx="3" fill="#6035a5" />
            </svg>
          </div>
          {/* <div className="company-art-card">
            <span>✓</span>
            <div>
              <strong>GoAnywhere</strong>
              <small>{vi ? "Đồng hành cùng bạn" : "Moving with you"}</small>
            </div>
          </div> */}
        </div>
      </section>

      <section className="company-intro">
        <div className="company-intro-inner" data-reveal="up">
          <span className="company-eyebrow">{vi ? "CHÚNG TÔI LÀ AI?" : "WHO WE ARE"}</span>
          <h2>
            {vi ? "Giải pháp di chuyển dành cho " : "Mobility solutions for "}
            <span className="company-highlight">
              {vi ? "cuộc sống hiện đại" : "modern life"}
            </span>
          </h2>
          <p>
            {vi
              ? "Chúng tôi hướng đến việc giúp khách hàng chủ động hơn trong công việc, cuộc sống và các sự kiện quan trọng thông qua dịch vụ tài xế thuận tiện."
              : "We help customers manage work, daily life and special occasions with convenient driver services."}
          </p>
        </div>

        <div className="company-intro-tags">
          {introTags.map((tag, index) => (
            <div
              className="company-intro-tag"
              key={tag.label}
              data-reveal="up"
              style={{ "--reveal-delay": `${150 + index * 120}ms` }}
            >
              <span className="company-intro-icon">
                <tag.icon size={24} />
              </span>
              {tag.label}
            </div>
          ))}
        </div>
      </section>
      <section className="company-view">
        <div className="company-view-inner">
          <div className="company-view-text" data-reveal="left">
            <span className="company-eyebrow">{vi ? "TẦM NHÌN" : "OUR VISION"}</span>
            <h2>{vi ? "Góc nhìn của chúng tôi" : "Our Perspective"}</h2>
            <p>
              {vi
                ? "Kết nối với hệ thống giao thông công cộng và các thành phố thông minh, đem lại tiện ích và trải nghiệm cao cấp cho mọi khách hàng."
                : "Connecting with public transportation systems and smart cities to provide convenience and premium experiences for all customers."}
            </p>
          </div>

          <ul className="company-view-points">
            {viewPoints.map((point, index) => (
              <li
                key={point.label}
                data-reveal="right"
                style={{ "--reveal-delay": `${150 + index * 120}ms` }}
              >
                <span className="company-view-icon">
                  <point.icon size={24} />
                </span>
                {point.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="company-values">
        <div className="company-section-heading" data-reveal="up">
          <span className="company-eyebrow">{vi ? "GIÁ TRỊ CỐT LÕI" : "OUR VALUES"}</span>
          <h2>{vi ? "Điều tạo nên GoAnywhere" : "What defines GoAnywhere"}</h2>
        </div>
        <div className="company-value-grid">
          {values.map((item, index) => (
            <article
              className="company-value-card"
              key={item.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <span className="company-value-icon">
                <item.icon size={26} strokeWidth={2} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="company-bottom" data-reveal="zoom">
        <h2>{vi ? "Cùng bạn trên mọi hành trình" : "With you on every journey"}</h2>
        <p>
          {vi ? "Tìm hiểu dịch vụ phù hợp với nhu cầu của bạn." : "Find a service that fits your needs."}
        </p>
        <Link to="/contact" className="company-btn">
          {vi ? "Bắt đầu ngay" : "Get started"} <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Company;
