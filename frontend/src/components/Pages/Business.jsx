import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  Headset,
  MapPin,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

import "./Business.css";

const Business = ({ language = "vi" }) => {
  const en = language === "en";

  const services = [
    {
      icon: <CarFront />,
      title: en ? "Employee Transportation" : "Đưa đón nhân viên",
      description: en
        ? "Convenient transportation solutions for employees, daily commutes and business schedules."
        : "Giải pháp đưa đón nhân viên thuận tiện, phù hợp với lịch làm việc và nhu cầu di chuyển hằng ngày.",
    },
    {
      icon: <BriefcaseBusiness />,
      title: en ? "Executive Transportation" : "Đón tiếp đối tác",
      description: en
        ? "Professional transportation for executives, clients, partners and important business meetings."
        : "Dịch vụ xe chuyên nghiệp dành cho ban lãnh đạo, khách hàng, đối tác và các cuộc gặp quan trọng.",
    },
    {
      icon: <Plane />,
      title: en ? "Corporate Airport Transfer" : "Đưa đón sân bay doanh nghiệp",
      description: en
        ? "Arrange airport pickups and drop-offs for employees, guests and business delegations."
        : "Chủ động sắp xếp xe đón hoặc tiễn nhân viên, khách mời và đoàn công tác tại sân bay.",
    },
    {
      icon: <CalendarDays />,
      title: en ? "Business Events" : "Di chuyển sự kiện",
      description: en
        ? "Transportation planning for conferences, company events, workshops and business trips."
        : "Tổ chức phương án di chuyển cho hội nghị, hội thảo, sự kiện công ty và chuyến công tác.",
    },
    {
      icon: <Users />,
      title: en ? "Group Transportation" : "Đưa đón theo nhóm",
      description: en
        ? "Flexible transportation arrangements for teams, departments and visiting groups."
        : "Phương án đưa đón linh hoạt dành cho đội nhóm, phòng ban và các đoàn khách.",
    },
    {
      icon: <Clock3 />,
      title: en ? "Scheduled Transportation" : "Lịch xe định kỳ",
      description: en
        ? "Plan recurring journeys in advance to support predictable business operations."
        : "Lên lịch xe định kỳ để doanh nghiệp chủ động kế hoạch và thời gian di chuyển.",
    },
  ];

  const benefits = [
    {
      icon: <CalendarDays />,
      title: en ? "Flexible Scheduling" : "Lịch trình linh hoạt",
      description: en
        ? "Plan one-time trips or recurring transportation according to your business needs."
        : "Chủ động lên lịch cho chuyến đi riêng lẻ hoặc nhu cầu đưa đón định kỳ của doanh nghiệp.",
    },
    {
      icon: <ShieldCheck />,
      title: en ? "Safety and Professionalism" : "An toàn và chuyên nghiệp",
      description: en
        ? "Prioritize passenger safety, professional service and a comfortable travel experience."
        : "Ưu tiên an toàn hành khách, thái độ phục vụ chuyên nghiệp và trải nghiệm thoải mái.",
    },
    {
      icon: <Headset />,
      title: en ? "Dedicated Support" : "Hỗ trợ tận tình",
      description: en
        ? "Get assistance with trip details, pickup arrangements and service coordination."
        : "Được hỗ trợ trao đổi thông tin chuyến đi, địa điểm đón và phương án phục vụ.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: en ? "Share Your Requirements" : "Gửi nhu cầu doanh nghiệp",
      description: en
        ? "Tell us your destination, schedule, passenger count and transportation requirements."
        : "Cung cấp điểm đến, thời gian, số lượng hành khách và nhu cầu di chuyển của công ty.",
    },
    {
      number: "02",
      title: en ? "Receive a Suitable Plan" : "Nhận phương án phù hợp",
      description: en
        ? "Discuss vehicle options, itinerary, service arrangements and estimated costs."
        : "Trao đổi về loại xe, lịch trình, cách thức phục vụ và chi phí dự kiến.",
    },
    {
      number: "03",
      title: en ? "Confirm Your Journey" : "Xác nhận hành trình",
      description: en
        ? "Confirm the agreed details and prepare for a smooth business journey."
        : "Xác nhận các thông tin đã thống nhất và sẵn sàng cho hành trình thuận tiện.",
    },
  ];

  return (
    <main className="business-page">
      {/* HERO */}
      <section className="business-hero">
        <div className="business-hero-content">
          <span className="business-label">
            {en ? "CORPORATE MOBILITY SOLUTIONS" : "GIẢI PHÁP DI CHUYỂN DOANH NGHIỆP"}
          </span>

          <h1>
            {en ? "Smarter travel for" : "Di chuyển thông minh"}
            <span>
              {en ? "your business" : "cho doanh nghiệp"}
            </span>
          </h1>

          <p>
            {en
              ? "Flexible and professional transportation solutions for employees, business partners, airport transfers and corporate events."
              : "Giải pháp di chuyển linh hoạt và chuyên nghiệp dành cho nhân viên, đối tác, đưa đón sân bay và các sự kiện doanh nghiệp."}
          </p>

          <div className="business-hero-actions">
            <Link
              to="/contact"
              state={{ service: en ? "Business transportation" : "Dịch vụ doanh nghiệp" }}
              className="business-button"
            >
              {en ? "Contact our team" : "Liên hệ tư vấn"}
              <ArrowUpRight size={18} />
            </Link>

            <a href="#business-services" className="business-secondary-button">
              {en ? "Explore services" : "Khám phá dịch vụ"}
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="business-hero-note">
            <span>
              <CheckCircle2 size={17} />
              {en ? "Flexible travel plans" : "Lịch trình linh hoạt"}
            </span>
            <span>
              <CheckCircle2 size={17} />
              {en ? "Professional service" : "Phục vụ chuyên nghiệp"}
            </span>
          </div>
        </div>

        <div className="business-hero-visual" aria-hidden="true">
          <div className="business-visual-orbit business-visual-orbit-one" />
          <div className="business-visual-orbit business-visual-orbit-two" />
          <div className="business-visual-glow" />

          <div className="business-visual-card">
            <div className="business-visual-card-top">
              <span className="business-icon-box">
                <Building2 size={27} />
              </span>
              <span className="business-status-dot" />
            </div>

            <p className="business-visual-eyebrow">
              {en ? "BUSINESS TRAVEL" : "DI CHUYỂN DOANH NGHIỆP"}
            </p>

            <h2>
              {en ? "Your journey," : "Mỗi hành trình,"}
              <span>{en ? "well planned." : "một kế hoạch tốt."}</span>
            </h2>

            <div className="business-route">
              <span className="business-route-point">
                <MapPin size={17} />
              </span>
              <div>
                <strong>{en ? "Pickup location" : "Điểm đón"}</strong>
                <small>{en ? "Agreed in advance" : "Thống nhất trước chuyến đi"}</small>
              </div>
            </div>

            <div className="business-route-line" />

            <div className="business-route">
              <span className="business-route-point business-route-point-orange">
                <CarFront size={18} />
              </span>
              <div>
                <strong>{en ? "Your destination" : "Điểm đến"}</strong>
                <small>{en ? "A smooth business journey" : "Hành trình thuận tiện"}</small>
              </div>
            </div>
          </div>

          <div className="business-floating-badge">
            <ShieldCheck size={21} />
            <span>
              <strong>{en ? "Travel with confidence" : "An tâm di chuyển"}</strong>
              <small>{en ? "Professional service" : "Dịch vụ chuyên nghiệp"}</small>
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="business-section" id="business-services">
        <div className="business-section-heading">
          <span className="business-label">
            {en ? "OUR SOLUTIONS" : "GIẢI PHÁP CỦA CHÚNG TÔI"}
          </span>

          <h2>
            {en
              ? "Transportation that works for your business"
              : "Giải pháp di chuyển dành riêng cho doanh nghiệp"}
          </h2>

          <p>
            {en
              ? "From daily employee transportation to important corporate events, choose a solution that fits your schedule."
              : "Từ đưa đón nhân viên hằng ngày đến những sự kiện quan trọng, lựa chọn phương án phù hợp với lịch trình của công ty."}
          </p>
        </div>

        <div className="business-service-grid">
          {services.map((service, index) => (
            <article className="business-service-card" key={service.title}>
              <div className="business-service-icon">{service.icon}</div>
              <span className="business-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link
                to="/contact"
                state={{ service: service.title }}
                className="business-card-link"
              >
                {en ? "Learn more" : "Tìm hiểu thêm"}
                <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="business-benefits">
        <div className="business-section-heading">
          <span className="business-label">
            {en ? "WHY GOANYWHERE" : "VÌ SAO CHỌN GOANYWHERE"}
          </span>

          <h2>
            {en
              ? "A reliable travel partner for your business"
              : "Người bạn đồng hành đáng tin cậy của doanh nghiệp"}
          </h2>

          <p>
            {en
              ? "Thoughtful planning and attentive service help make every business journey easier."
              : "Kế hoạch rõ ràng và dịch vụ tận tâm giúp mỗi chuyến đi công việc trở nên thuận tiện hơn."}
          </p>
        </div>

        <div className="business-benefit-grid">
          {benefits.map((benefit) => (
            <article className="business-benefit-card" key={benefit.title}>
              <span className="business-benefit-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="business-process">
        <div className="business-section-heading">
          <span className="business-label">
            {en ? "HOW IT WORKS" : "QUY TRÌNH DỊCH VỤ"}
          </span>

          <h2>
            {en
              ? "Three simple steps to get started"
              : "Bắt đầu dịch vụ chỉ với 3 bước"}
          </h2>

          <p>
            {en
              ? "A clear process helps your team organize transportation with confidence."
              : "Quy trình rõ ràng giúp doanh nghiệp chủ động sắp xếp phương án di chuyển."}
          </p>
        </div>

        <div className="business-process-grid">
          {steps.map((step, index) => (
            <article className="business-process-card" key={step.number}>
              <div className="business-step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>

              {index < steps.length - 1 && (
                <ArrowRight className="business-step-arrow" size={22} />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="business-cta">
        <div className="business-cta-content">
          <span className="business-label">
            {en ? "LET'S WORK TOGETHER" : "CÙNG GOANYWHERE ĐỒNG HÀNH"}
          </span>

          <h2>
            {en
              ? "Let's plan a better journey for your business."
              : "Cùng xây dựng hành trình tốt hơn cho doanh nghiệp của bạn."}
          </h2>

          <p>
            {en
              ? "Tell us what your business needs. Our team is ready to discuss a suitable transportation plan."
              : "Chia sẻ nhu cầu của doanh nghiệp để cùng trao đổi phương án di chuyển phù hợp."}
          </p>

          <Link
            to="/contact"
            state={{ service: en ? "Corporate transportation consultation" : "Tư vấn dịch vụ doanh nghiệp" }}
            className="business-button"
          >
            {en ? "Discuss your requirements" : "Trao đổi nhu cầu"}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Business;