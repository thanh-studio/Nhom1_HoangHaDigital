import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Clock3,
  CalendarDays,
  Plane,
  BriefcaseBusiness,
  MoonStar,
  ShieldCheck,
  UserRound,
  MapPin,
  CarFront,
  Phone,
} from "lucide-react";

import { PersonalArt } from "../Illustrations";
import useScrollReveal from "../useScrollReveal";
import "./Personal.css";

const Personal = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const services = vi
    ? [
        {
          icon: BriefcaseBusiness,
          title: "Tài xế phục vụ công việc",
          desc: "Đưa đón đi làm, gặp đối tác, tham dự cuộc họp và xử lý công việc trong ngày.",
          tag: "Linh hoạt",
        },
        {
          icon: Plane,
          title: "Tài xế đưa đón sân bay",
          desc: "Chủ động lịch trình đến sân bay, đón khách và di chuyển giữa các địa điểm.",
          tag: "Đúng giờ",
        },
        {
          icon: MoonStar,
          title: "Tài xế theo yêu cầu",
          desc: "Có tài xế khi bạn không tiện tự lái, cần nghỉ ngơi hoặc muốn trở về nhà an toàn.",
          tag: "An tâm",
        },
        {
          icon: CalendarDays,
          title: "Thuê tài xế theo ngày",
          desc: "Sắp xếp tài xế đồng hành trong cả ngày cho lịch trình cá nhân hoặc gia đình.",
          tag: "Theo lịch riêng",
        },
        {
          icon: MapPin,
          title: "Tài xế đi tỉnh",
          desc: "Đồng hành trên những chuyến đi xa, thăm người thân hoặc du lịch cùng gia đình.",
          tag: "Đường dài",
        },
        {
          icon: Clock3,
          title: "Thuê tài xế theo giờ",
          desc: "Phù hợp với lịch trình ngắn, nhiều điểm dừng hoặc nhu cầu di chuyển phát sinh.",
          tag: "Tiết kiệm thời gian",
        },
      ]
    : [
        {
          icon: BriefcaseBusiness,
          title: "Business driver",
          desc: "Travel to work, meet partners, attend meetings and manage your daily schedule.",
          tag: "Flexible",
        },
        {
          icon: Plane,
          title: "Airport transfers",
          desc: "Plan airport drop-offs, pickups and travel between destinations with ease.",
          tag: "On time",
        },
        {
          icon: MoonStar,
          title: "On-demand driver",
          desc: "Get a driver when you prefer not to drive and want a more comfortable journey home.",
          tag: "Peace of mind",
        },
        {
          icon: CalendarDays,
          title: "Full-day driver",
          desc: "Arrange a driver for a full day of personal, family or business activities.",
          tag: "Your schedule",
        },
        {
          icon: MapPin,
          title: "Intercity driver",
          desc: "Travel to other cities for family visits, business trips or holidays.",
          tag: "Long distance",
        },
        {
          icon: Clock3,
          title: "Hourly driver",
          desc: "Ideal for short schedules, multiple stops or flexible transportation needs.",
          tag: "Time-saving",
        },
      ];

  const benefits = vi
    ? [
        {
          icon: UserRound,
          title: "Phục vụ theo nhu cầu",
          desc: "Chủ động lựa chọn lịch trình, điểm đón và điểm đến.",
        },
        {
          icon: ShieldCheck,
          title: "Ưu tiên sự an tâm",
          desc: "Hướng đến trải nghiệm di chuyển an toàn và chuyên nghiệp.",
        },
        {
          icon: Clock3,
          title: "Linh hoạt thời gian",
          desc: "Trao đổi lịch trình và thời lượng thuê theo nhu cầu thực tế.",
        },
      ]
    : [
        {
          icon: UserRound,
          title: "Personalized service",
          desc: "Choose your schedule, pickup point and destination.",
        },
        {
          icon: ShieldCheck,
          title: "Peace of mind",
          desc: "Enjoy a service focused on safe and professional travel.",
        },
        {
          icon: Clock3,
          title: "Flexible scheduling",
          desc: "Discuss the schedule and rental duration to fit your needs.",
        },
      ];

  const steps = vi
    ? [
        {
          number: "01",
          title: "Gửi yêu cầu thuê tài xế",
          desc: "Cho chúng tôi biết thời gian, địa điểm đón và hành trình dự kiến.",
        },
        {
          number: "02",
          title: "Xác nhận lịch trình",
          desc: "Trao đổi nhu cầu và thống nhất thông tin dịch vụ trước chuyến đi.",
        },
        {
          number: "03",
          title: "Bắt đầu hành trình",
          desc: "Tài xế đồng hành theo lịch trình đã xác nhận.",
        },
      ]
    : [
        {
          number: "01",
          title: "Request a driver",
          desc: "Share your schedule, pickup location and planned destination.",
        },
        {
          number: "02",
          title: "Confirm your trip",
          desc: "Discuss your needs and confirm service details before traveling.",
        },
        {
          number: "03",
          title: "Start your journey",
          desc: "Your driver accompanies you according to the confirmed schedule.",
        },
      ];

  return (
    <main className="personal-page" ref={revealRef}>
      {/* HERO */}
      <section className="personal-hero">
        <div className="personal-hero-background" />

        <div className="personal-copy" data-reveal="left">
          <span className="personal-label">
            {vi ? "DỊCH VỤ TÀI XẾ CÁ NHÂN" : "PERSONAL DRIVER SERVICE"}
          </span>

          <h1>
            {vi ? "Bạn chọn hành trình," : "Your journey,"}
            <span>
              {vi ? " tài xế riêng đồng hành." : " your personal driver."}
            </span>
          </h1>

          <p>
            {vi
              ? "Thuê tài xế riêng theo giờ, theo ngày hoặc theo lịch trình của bạn. Tận hưởng sự chủ động, thoải mái và an tâm trên mọi hành trình."
              : "Hire a personal driver by the hour, by the day or around your schedule. Enjoy flexible, comfortable and reassuring journeys."}
          </p>

          <div className="personal-hero-actions">
            <Link to="/contact" className="personal-button">
              {vi ? "Thuê tài xế ngay" : "Hire a driver"}
              <ArrowUpRight size={18} />
            </Link>

            <a href="#personal-services" className="personal-text-link">
              {vi ? "Khám phá dịch vụ" : "Explore services"}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="personal-trust-row">
            <span>
              <Check size={16} />
              {vi ? "Lịch trình linh hoạt" : "Flexible schedules"}
            </span>
            <span>
              <Check size={16} />
              {vi ? "Phục vụ cá nhân" : "Personalized service"}
            </span>
          </div>
        </div>

        <div
          className="personal-visual"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="personal-visual-circle">
            <PersonalArt
              label={
                vi
                  ? "Dịch vụ thuê tài xế cá nhân GoAnywhere"
                  : "GoAnywhere personal driver service"
              }
            />
          </div>

          <div className="personal-floating">
            <span>
              <Check size={20} strokeWidth={3} />
            </span>
            <div>
              <strong>
                {vi ? "Sẵn sàng đồng hành" : "Ready to go"}
              </strong>
              <small>
                {vi ? "Theo lịch trình của bạn" : "On your schedule"}
              </small>
            </div>
          </div>

          <div className="personal-floating-note">
            <Clock3 size={18} />
            <div>
              <strong>{vi ? "Theo giờ hoặc ngày" : "Hourly or daily"}</strong>
              <small>{vi ? "Linh hoạt theo nhu cầu" : "Flexible options"}</small>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="personal-content" id="personal-services">
        <div className="personal-heading" data-reveal="up">
          <span className="personal-label">
            {vi ? "DỊCH VỤ CỦA CHÚNG TÔI" : "OUR SERVICES"}
          </span>

          <h2>
            {vi
              ? "Tài xế riêng cho mọi nhu cầu"
              : "A personal driver for every need"}
          </h2>

          <p>
            {vi
              ? "Từ lịch trình hằng ngày đến những chuyến đi xa, lựa chọn dịch vụ phù hợp với kế hoạch của bạn."
              : "From everyday activities to longer trips, choose a service that fits your plans."}
          </p>
        </div>

        <div className="personal-grid">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="personal-card"
                key={item.title}
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
                <div className="personal-card-top">
                  <span className="personal-card-icon">
                    <Icon size={26} />
                  </span>
                  <span className="personal-card-tag">{item.tag}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <Link
                  to="/contact"
                  aria-label={
                    vi
                      ? `Đăng ký ${item.title}`
                      : `Request ${item.title}`
                  }
                  className="personal-card-link"
                >
                  {vi ? "Đăng ký dịch vụ" : "Request service"}
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="personal-benefits">
        <div className="personal-benefits-inner">
          <div className="personal-benefits-copy" data-reveal="left">
            <span className="personal-label">
              {vi ? "VÌ SAO CHỌN GOANYWHERE?" : "WHY GOANYWHERE?"}
            </span>

            <h2>
              {vi
                ? "Chủ động hơn trong từng hành trình"
                : "More control over every journey"}
            </h2>

            <p>
              {vi
                ? "Dành thời gian cho công việc, gia đình và những điều quan trọng. GoAnywhere giúp bạn kết nối với dịch vụ tài xế phù hợp với kế hoạch di chuyển."
                : "Spend more time on work, family and what matters. GoAnywhere helps you arrange driver services around your travel plans."}
            </p>

            <Link to="/contact" className="personal-button">
              {vi ? "Trao đổi nhu cầu" : "Discuss your needs"}
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="personal-benefit-list">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="personal-benefit-item"
                  key={item.title}
                  data-reveal="right"
                  style={{ "--reveal-delay": `${index * 120}ms` }}
                >
                  <span className="personal-benefit-icon">
                    <Icon size={24} />
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="personal-process">
        <div className="personal-heading" data-reveal="up">
          <span className="personal-label">
            {vi ? "QUY TRÌNH ĐẶT DỊCH VỤ" : "HOW IT WORKS"}
          </span>

          <h2>
            {vi
              ? "Thuê tài xế thật đơn giản"
              : "Hiring a driver made simple"}
          </h2>

          <p>
            {vi
              ? "Ba bước để bắt đầu lên kế hoạch cho hành trình của bạn."
              : "Three simple steps to plan your next journey."}
          </p>
        </div>

        <div className="personal-process-grid">
          {steps.map((step, index) => (
            <article
              className="personal-process-card"
              key={step.number}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <span className="personal-process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="personal-process-arrow"
                  size={22}
                />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="personal-cta" data-reveal="zoom">
        <div className="personal-cta-icon">
          <CarFront size={30} />
        </div>

        <span className="personal-label">
          {vi ? "SẴN SÀNG LÊN ĐƯỜNG?" : "READY TO GO?"}
        </span>

        <h2>
          {vi
            ? "Tìm tài xế phù hợp với lịch trình của bạn"
            : "Find a driver that fits your schedule"}
        </h2>

        <p>
          {vi
            ? "Gửi yêu cầu cho GoAnywhere để trao đổi lịch trình, thời gian và nhu cầu thuê tài xế."
            : "Contact GoAnywhere to discuss your schedule, timing and driver requirements."}
        </p>

        <div className="personal-cta-actions">
          <Link to="/contact" className="personal-button">
            {vi ? "Liên hệ thuê tài xế" : "Contact us"}
            <ArrowUpRight size={18} />
          </Link>

          <Link to="/contact" className="personal-cta-phone">
            <Phone size={17} />
            {vi ? "Tư vấn dịch vụ" : "Service inquiries"}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Personal;