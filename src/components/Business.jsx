import React from "react";
import "./Business.css";

const businessServices = [
  {
    number: "01",
    icon: "💼",
    title: "Tài xế cho doanh nghiệp",
    description:
      "Bố trí tài xế phục vụ nhu cầu di chuyển hằng ngày của doanh nghiệp, hỗ trợ nhân sự và ban lãnh đạo.",
    tag: "Phục vụ chuyên nghiệp",
  },
  {
    number: "02",
    icon: "🤝",
    title: "Đưa đón đối tác",
    description:
      "Đón tiếp khách hàng, chuyên gia và đối tác với phong cách lịch sự, chỉn chu trong từng hành trình.",
    tag: "Chỉn chu từng chi tiết",
  },
  {
    number: "03",
    icon: "📅",
    title: "Thuê tài xế theo hợp đồng",
    description:
      "Lựa chọn phương án thuê tài xế theo thời hạn và nhu cầu thực tế, giúp doanh nghiệp chủ động kế hoạch.",
    tag: "Linh hoạt thời hạn",
  },
  {
    number: "04",
    icon: "🏢",
    title: "Phục vụ sự kiện doanh nghiệp",
    description:
      "Hỗ trợ nhu cầu tài xế cho hội nghị, cuộc họp, chương trình nội bộ và các sự kiện quan trọng.",
    tag: "Sẵn sàng đồng hành",
  },
];

const businessBenefits = [
  {
    icon: "✓",
    title: "Tối ưu vận hành",
    description:
      "Giảm bớt công việc điều phối phương tiện và tập trung vào hoạt động kinh doanh cốt lõi.",
  },
  {
    icon: "◷",
    title: "Chủ động lịch trình",
    description:
      "Lên kế hoạch di chuyển theo lịch làm việc, cuộc họp và nhu cầu thực tế của doanh nghiệp.",
  },
  {
    icon: "♧",
    title: "Trải nghiệm chuyên nghiệp",
    description:
      "Góp phần tạo hình ảnh chỉn chu khi tiếp đón khách hàng, đối tác và chuyên gia.",
  },
  {
    icon: "↗",
    title: "Giải pháp linh hoạt",
    description:
      "Trao đổi phương án sử dụng dịch vụ phù hợp với quy mô và tần suất di chuyển.",
  },
];

const businessSteps = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    description:
      "Doanh nghiệp cung cấp thông tin về lịch trình và nhu cầu sử dụng tài xế.",
  },
  {
    number: "02",
    title: "Tư vấn giải pháp",
    description:
      "GOChapa trao đổi phương án dịch vụ phù hợp với yêu cầu thực tế.",
  },
  {
    number: "03",
    title: "Thống nhất kế hoạch",
    description:
      "Xác nhận thời gian, phạm vi phục vụ và các điều kiện liên quan.",
  },
  {
    number: "04",
    title: "Triển khai dịch vụ",
    description:
      "Phối hợp thực hiện lịch trình sau khi hai bên xác nhận thông tin.",
  },
];

function Business() {
  return (
    <main className="business-page">
      {/* HERO */}
      <section className="business-hero" id="business">
        <div className="business-hero-inner">
          <div className="business-hero-content">
            <span className="business-eyebrow">
              GOCHAPA · BUSINESS SOLUTIONS
            </span>

            <h1>
              Giải pháp tài xế
              <br />
              <span>cho doanh nghiệp.</span>
              <br />
              Vận hành hiệu quả hơn.
            </h1>

            <p className="business-hero-description">
              Đồng hành cùng doanh nghiệp trong những hành trình
              công việc, đưa đón đối tác và nhu cầu di chuyển
              thường xuyên. GOChapa hướng đến giải pháp linh hoạt,
              chuyên nghiệp và phù hợp với kế hoạch của bạn.
            </p>

            <div className="business-hero-actions">
              <a
                href="#business-contact"
                className="business-btn-primary"
              >
                Trao đổi nhu cầu
                <span>↗</span>
              </a>

              <a
                href="#business-services"
                className="business-btn-secondary"
              >
                Khám phá dịch vụ
              </a>
            </div>

            <div className="business-trust-list">
              <span>
                <b>✓</b> Giải pháp linh hoạt
              </span>

              <span>
                <b>✓</b> Phục vụ chuyên nghiệp
              </span>

              <span>
                <b>✓</b> Theo nhu cầu thực tế
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="business-hero-visual">
            <div className="business-orb business-orb-one" />
            <div className="business-orb business-orb-two" />

            <div className="business-visual-card">
              <div className="business-visual-top">
                <div className="business-visual-brand">
                  <span className="business-brand-symbol">
                    G
                  </span>

                  <div>
                    <strong>GOCHAPA</strong>
                    <span>BUSINESS</span>
                  </div>
                </div>

                <span className="business-visual-badge">
                  BUSINESS
                </span>
              </div>

              <div className="business-visual-illustration">
                <div className="business-building building-one">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="business-building building-two">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="business-road">
                  <div className="business-car">
                    <span className="business-car-window" />
                    <span className="business-car-wheel wheel-one" />
                    <span className="business-car-wheel wheel-two" />
                  </div>
                </div>
              </div>

              <div className="business-visual-bottom">
                <div>
                  <span>BUSINESS MOBILITY</span>
                  <h2>
                    Moving business
                    <br />
                    forward.
                  </h2>
                </div>

                <span className="business-visual-arrow">
                  ↗
                </span>
              </div>
            </div>

            <div className="business-floating-note">
              <span className="business-floating-icon">
                ✓
              </span>

              <div>
                <strong>Sẵn sàng đồng hành</strong>
                <p>Giải pháp cho doanh nghiệp</p>
              </div>
            </div>

            <span className="business-decor business-decor-one">
              ✳
            </span>

            <span className="business-decor business-decor-two">
              ✦
            </span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="business-intro">
        <div className="business-intro-label">
          <span className="business-kicker">
            BUSINESS MOBILITY
          </span>

          <span className="business-intro-line" />
        </div>

        <div className="business-intro-grid">
          <h2>
            Di chuyển hiệu quả.
            <br />
            <span>Phát triển bền vững.</span>
          </h2>

          <p>
            Lịch trình công việc luôn cần sự chủ động và phối hợp
            nhịp nhàng. GOChapa cung cấp giải pháp tài xế hướng
            đến việc hỗ trợ doanh nghiệp tổ chức hoạt động di
            chuyển thuận tiện, phù hợp với nhu cầu sử dụng.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="business-services"
        id="business-services"
      >
        <div className="business-section-heading">
          <div>
            <span className="business-kicker">
              OUR SOLUTIONS
            </span>

            <h2>
              Giải pháp dành cho
              <br />
              <span>nhu cầu doanh nghiệp.</span>
            </h2>
          </div>

          <p>
            Tùy chỉnh phương án phục vụ theo lịch trình, mục tiêu
            và nhu cầu di chuyển của từng doanh nghiệp.
          </p>
        </div>

        <div className="business-service-grid">
          {businessServices.map((service) => (
            <article
              className="business-service-card"
              key={service.number}
            >
              <div className="business-service-card-top">
                <span className="business-service-number">
                  {service.number}
                </span>

                <span className="business-service-icon">
                  {service.icon}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="business-service-card-bottom">
                <span>{service.tag}</span>

                <a
                  href="#business-contact"
                  aria-label={`Tìm hiểu ${service.title}`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="business-benefits">
        <div className="business-benefits-heading">
          <span className="business-kicker">
            WHY GOCHAPA
          </span>

          <h2>
            Tối ưu hành trình.
            <br />
            <span>Tập trung tăng trưởng.</span>
          </h2>

          <p>
            Một phương án tài xế phù hợp có thể hỗ trợ doanh
            nghiệp chủ động hơn trong công tác điều phối và
            tổ chức lịch trình làm việc.
          </p>

          <a
            href="#business-contact"
            className="business-text-link"
          >
            Trao đổi với GOChapa
            <span>↗</span>
          </a>
        </div>

        <div className="business-benefits-grid">
          {businessBenefits.map((benefit, index) => (
            <article
              className="business-benefit-item"
              key={benefit.title}
            >
              <div
                className={`business-benefit-icon business-benefit-icon-${index + 1}`}
              >
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="business-process">
        <div className="business-section-heading">
          <div>
            <span className="business-kicker">
              HOW WE WORK
            </span>

            <h2>
              Bắt đầu hợp tác
              <br />
              <span>với 4 bước đơn giản.</span>
            </h2>
          </div>

          <p>
            Trao đổi rõ ràng về nhu cầu để xây dựng phương án
            phục vụ phù hợp.
          </p>
        </div>

        <div className="business-process-grid">
          {businessSteps.map((step) => (
            <article
              className="business-process-step"
              key={step.number}
            >
              <span className="business-step-number">
                {step.number}
              </span>

              <div className="business-step-line" />

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BUSINESS CONTACT CTA */}
      <section
        className="business-contact"
        id="business-contact"
      >
        <div className="business-contact-decoration">
          <span>✦</span>
          <span>✳</span>
        </div>

        <div className="business-contact-content">
          <span className="business-kicker">
            LET'S WORK TOGETHER
          </span>

          <h2>
            Cùng doanh nghiệp
            <br />
            <span>tiến xa hơn.</span>
          </h2>

          <p>
            Chia sẻ nhu cầu di chuyển của doanh nghiệp để cùng
            trao đổi phương án dịch vụ phù hợp với kế hoạch
            hoạt động của bạn.
          </p>

          <a
            href="/#contact"
            className="business-btn-primary"
          >
            Liên hệ GOChapa
            <span>↗</span>
          </a>

          <span className="business-contact-caption">
            GOChapa · Business Driver Solutions
          </span>
        </div>
      </section>
    </main>
  );
}

export default Business;