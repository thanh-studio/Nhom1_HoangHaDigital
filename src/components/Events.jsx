import { useState } from "react";
import { Link } from "react-router-dom";
import "./Events.css";

const eventServices = [
  {
    number: "01",
    title: "Đưa đón khách mời",
    enTitle: "Guest Transportation",
    description:
      "Đón và đưa khách mời đến địa điểm tổ chức sự kiện an toàn, đúng giờ và chuyên nghiệp.",
    enDescription:
      "Safe and punctual transportation for guests traveling to and from your event.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Tài xế cho sự kiện",
    enTitle: "Event Driver Service",
    description:
      "Bố trí tài xế phục vụ hội nghị, tiệc cưới, lễ khai trương và các chương trình đặc biệt.",
    enDescription:
      "Driver arrangements for conferences, weddings, openings and special occasions.",
    icon: "♧",
  },
  {
    number: "03",
    title: "Đưa đón VIP",
    enTitle: "VIP Transportation",
    description:
      "Dịch vụ tài xế riêng dành cho khách VIP, diễn giả, đối tác và khách hàng quan trọng.",
    enDescription:
      "Dedicated transportation for VIPs, speakers, partners and important guests.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Điều phối phương tiện",
    enTitle: "Transportation Coordination",
    description:
      "Hỗ trợ sắp xếp lịch trình và điều phối việc đưa đón nhiều khách trong cùng sự kiện.",
    enDescription:
      "Coordinate schedules and transportation for multiple guests at the same event.",
    icon: "↗",
  },
];

const eventBenefits = [
  {
    vi: "Đúng giờ và chuyên nghiệp",
    en: "Punctual and Professional",
  },
  {
    vi: "Lịch trình linh hoạt",
    en: "Flexible Scheduling",
  },
  {
    vi: "Phục vụ theo nhu cầu",
    en: "Tailored Service",
  },
  {
    vi: "Hỗ trợ điều phối đưa đón",
    en: "Transportation Coordination",
  },
];

const eventSteps = [
  {
    number: "01",
    title: "Tiếp nhận thông tin",
    enTitle: "Share Your Requirements",
    description:
      "Ghi nhận loại sự kiện, thời gian, địa điểm và số lượng khách cần phục vụ.",
    enDescription:
      "Tell us about your event, schedule, locations and transportation needs.",
  },
  {
    number: "02",
    title: "Tư vấn phương án",
    enTitle: "Plan Your Solution",
    description:
      "Đề xuất phương án tài xế và lịch trình phù hợp với chương trình.",
    enDescription:
      "Discuss a driver and transportation plan suitable for your program.",
  },
  {
    number: "03",
    title: "Xác nhận dịch vụ",
    enTitle: "Confirm the Service",
    description:
      "Thống nhất thời gian, địa điểm, số lượng tài xế và chi phí.",
    enDescription:
      "Confirm the schedule, locations, driver arrangements and costs.",
  },
  {
    number: "04",
    title: "Triển khai sự kiện",
    enTitle: "Event Day Coordination",
    description:
      "Sắp xếp tài xế theo kế hoạch và hỗ trợ quá trình đưa đón khách.",
    enDescription:
      "Coordinate drivers according to the agreed plan and assist with guest transportation.",
  },
];

function Event({ language = "vi" }) {
  const isVietnamese = language === "vi";

  const text = {
    heroLabel: "GOCHAPA · EVENT SERVICES",
    heroTitle: isVietnamese ? "Dịch vụ tài xế" : "Professional Driver",
    heroTitleAccent: isVietnamese ? "cho sự kiện" : "for Events",
    heroDescription: isVietnamese
      ? "Đồng hành cùng những sự kiện đáng nhớ với giải pháp đưa đón khách chuyên nghiệp, linh hoạt và chỉn chu."
      : "Make every event memorable with professional, flexible and reliable transportation support.",
    contact: isVietnamese ? "Liên hệ tư vấn" : "Contact Us",
    explore: isVietnamese ? "Khám phá dịch vụ" : "Explore Services",
    heroNote: isVietnamese
      ? "Linh hoạt theo quy mô và lịch trình sự kiện"
      : "Flexible solutions for events of all sizes",
    visualSmall: "GOCHAPA EXPERIENCE",
    visualTitle: isVietnamese
      ? "Chuyên nghiệp trong từng hành trình"
      : "Professional in Every Journey",
    visualFooter: isVietnamese ? "Dịch vụ sự kiện" : "Event Services",
    tagTop: isVietnamese ? "Đúng lịch trình" : "On Schedule",
    tagBottom: isVietnamese ? "Phục vụ tận tâm" : "Dedicated Service",
    servicesLabel: isVietnamese
      ? "GIẢI PHÁP CỦA CHÚNG TÔI"
      : "OUR SOLUTIONS",
    servicesTitle: isVietnamese
      ? "Mọi hành trình, một trải nghiệm chỉn chu"
      : "A Better Journey for Every Event",
    servicesDescription: isVietnamese
      ? "Các giải pháp đưa đón được thiết kế phù hợp với nhu cầu của từng chương trình."
      : "Transportation solutions tailored to the needs of your event.",
    introLabel: isVietnamese
      ? "TRẢI NGHIỆM GOCHAPA"
      : "THE GOCHAPA EXPERIENCE",
    introTitle: isVietnamese
      ? "Để bạn tập trung vào những khoảnh khắc quan trọng"
      : "Focus on What Matters Most",
    introDescription: isVietnamese
      ? "Việc di chuyển là một phần quan trọng trong trải nghiệm sự kiện. GOChapa hướng đến việc giúp ban tổ chức, doanh nghiệp và khách mời chủ động hơn trong lịch trình đưa đón."
      : "Transportation is an important part of every event. GOChapa helps organizers, businesses and guests manage their transportation schedules with greater confidence.",
    introLink: isVietnamese
      ? "Trao đổi nhu cầu của bạn"
      : "Discuss Your Needs",
    processLabel: isVietnamese ? "QUY TRÌNH PHỤC VỤ" : "HOW IT WORKS",
    processTitle: isVietnamese
      ? "Đơn giản từ bước đầu tiên"
      : "Simple from the Start",
    processDescription: isVietnamese
      ? "Quy trình rõ ràng giúp bạn chủ động chuẩn bị cho sự kiện."
      : "A clear process helps you plan your event with confidence.",
    ctaLabel: "GOCHAPA · LET'S CONNECT",
    ctaTitle: isVietnamese
      ? "Sẵn sàng lên kế hoạch đưa đón cho sự kiện của bạn?"
      : "Ready to Plan Transportation for Your Event?",
    ctaDescription: isVietnamese
      ? "Chia sẻ nhu cầu để cùng tìm ra phương án phù hợp với chương trình của bạn."
      : "Tell us what you need and let's find the right solution for your event.",
    ctaButton: isVietnamese ? "Liên hệ GOChapa" : "Contact GOChapa",
  };

  return (
    <main className="event-page">
      {/* HERO */}
      <section className="event-hero">
        <div className="event-hero-content">
          <span className="event-label">{text.heroLabel}</span>

          <h1>
            {text.heroTitle}
            <span>{text.heroTitleAccent}</span>
          </h1>

          <p className="event-hero-description">
            {text.heroDescription}
          </p>

          <div className="event-hero-actions">
            <Link to="/#contact" className="event-btn-primary">
              {text.contact}
              <span aria-hidden="true">↗</span>
            </Link>

            <a
              href="#event-services"
              className="event-btn-secondary"
            >
              {text.explore}
            </a>
          </div>

          <div className="event-hero-note">
            <span className="event-note-dot" />
            {text.heroNote}
          </div>
        </div>

        <div className="event-hero-visual">
          <div className="event-visual-circle" />

          <div className="event-visual-card">
            <span className="event-visual-icon" aria-hidden="true">
              ✦
            </span>

            <span className="event-visual-small">
              {text.visualSmall}
            </span>

            <h2>{text.visualTitle}</h2>

            <div className="event-visual-line" />

            <div className="event-visual-footer">
              <span>01</span>
              <span>{text.visualFooter}</span>
            </div>
          </div>

          <div className="event-floating-tag event-tag-top">
            <span aria-hidden="true">✓</span>
            {text.tagTop}
          </div>

          <div className="event-floating-tag event-tag-bottom">
            <span aria-hidden="true">✦</span>
            {text.tagBottom}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="event-services-section"
        id="event-services"
      >
        <div className="event-section-heading">
          <span className="event-label">{text.servicesLabel}</span>
          <h2>{text.servicesTitle}</h2>
          <p>{text.servicesDescription}</p>
        </div>

        <div className="event-service-grid">
          {eventServices.map((service) => (
            <article
              className="event-service-card"
              key={service.number}
            >
              <div className="event-service-top">
                <span className="event-service-icon">
                  {service.icon}
                </span>

                <span className="event-service-number">
                  {service.number}
                </span>
              </div>

              <h3>
                {isVietnamese ? service.title : service.enTitle}
              </h3>

              <p>
                {isVietnamese
                  ? service.description
                  : service.enDescription}
              </p>

              <Link
                to="/#contact"
                className="event-service-link"
                aria-label={
                  isVietnamese
                    ? `Liên hệ ${service.title}`
                    : `Contact ${service.enTitle}`
                }
              >
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="event-intro-section">
        <div className="event-intro-decoration" aria-hidden="true">
          G
        </div>

        <div className="event-intro-content">
          <span className="event-label">{text.introLabel}</span>

          <h2>{text.introTitle}</h2>

          <p>{text.introDescription}</p>

          <Link to="/#contact" className="event-text-link">
            {text.introLink}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="event-benefits">
          {eventBenefits.map((benefit, index) => (
            <div className="event-benefit-item" key={benefit.vi}>
              <span className="event-benefit-check" aria-hidden="true">
                ✓
              </span>

              <div>
                <span className="event-benefit-number">
                  0{index + 1}
                </span>

                <h3>
                  {isVietnamese ? benefit.vi : benefit.en}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="event-process-section">
        <div className="event-section-heading">
          <span className="event-label">{text.processLabel}</span>
          <h2>{text.processTitle}</h2>
          <p>{text.processDescription}</p>
        </div>

        <div className="event-process-grid">
          {eventSteps.map((step) => (
            <article
              className="event-process-card"
              key={step.number}
            >
              <span className="event-process-number">
                {step.number}
              </span>

              <div className="event-process-marker" />

              <h3>
                {isVietnamese ? step.title : step.enTitle}
              </h3>

              <p>
                {isVietnamese
                  ? step.description
                  : step.enDescription}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="event-cta-section">
        <div
          className="event-cta-decoration event-cta-decoration-one"
          aria-hidden="true"
        />

        <div
          className="event-cta-decoration event-cta-decoration-two"
          aria-hidden="true"
        />

        <div className="event-cta-content">
          <span className="event-label">{text.ctaLabel}</span>

          <h2>{text.ctaTitle}</h2>

          <p>{text.ctaDescription}</p>

          <Link
            to="/#contact"
            className="event-btn-primary event-cta-button"
          >
            {text.ctaButton}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Event;