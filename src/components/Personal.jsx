import React from "react";
import "./Personal.css";

const personalServices = [
  {
    number: "01",
    icon: "🚘",
    title: "Lái xe hộ",
    description:
      "Tài xế chuyên nghiệp đưa bạn và xe của bạn về nhà an toàn sau những buổi tiệc hoặc khi bạn không tiện tự lái.",
    tag: "An toàn mỗi hành trình",
  },
  {
    number: "02",
    icon: "✈️",
    title: "Đưa đón sân bay",
    description:
      "Chủ động thời gian di chuyển, hỗ trợ đưa đón sân bay đúng giờ với trải nghiệm thoải mái và tiện lợi.",
    tag: "Đúng giờ, tiện lợi",
  },
  {
    number: "03",
    icon: "💼",
    title: "Tài xế theo giờ",
    description:
      "Thuê tài xế theo nhu cầu cá nhân để đi công việc, gặp đối tác hoặc di chuyển trong thành phố.",
    tag: "Linh hoạt lịch trình",
  },
  {
    number: "04",
    icon: "🗺️",
    title: "Đi tỉnh đường dài",
    description:
      "Có tài xế đồng hành trong những chuyến đi xa, giúp bạn giảm áp lực lái xe và tận hưởng hành trình.",
    tag: "Thoải mái đường dài",
  },
];

const benefits = [
  {
    icon: "✓",
    title: "Tài xế chuyên nghiệp",
    description:
      "Ưu tiên tác phong lịch sự, kỹ năng lái xe và tinh thần phục vụ.",
  },
  {
    icon: "◷",
    title: "Đặt lịch linh hoạt",
    description:
      "Chủ động lựa chọn thời gian và nhu cầu sử dụng dịch vụ.",
  },
  {
    icon: "⌖",
    title: "Hỗ trợ đa khu vực",
    description:
      "Kết nối nhu cầu thuê tài xế tại các tỉnh, thành theo phạm vi phục vụ.",
  },
  {
    icon: "♡",
    title: "Ưu tiên trải nghiệm",
    description:
      "Hướng đến hành trình thuận tiện, thoải mái và an tâm hơn.",
  },
];

const steps = [
  {
    number: "01",
    title: "Chọn dịch vụ",
    description:
      "Xác định nhu cầu, điểm đón, điểm đến và thời gian cần tài xế.",
  },
  {
    number: "02",
    title: "Gửi yêu cầu",
    description:
      "Cung cấp thông tin đặt lịch để được hỗ trợ xác nhận dịch vụ.",
  },
  {
    number: "03",
    title: "Xác nhận lịch",
    description:
      "Kiểm tra thông tin hành trình và chi phí trước khi sử dụng.",
  },
  {
    number: "04",
    title: "Bắt đầu hành trình",
    description:
      "Tài xế đến điểm hẹn theo lịch đã xác nhận.",
  },
];

function Personal() {
  return (
    <main className="personal-page">
      {/* HERO SECTION */}
      <section className="personal-hero" id="personal">
        <div className="personal-hero-inner">
          <div className="personal-hero-content">
            <span className="personal-eyebrow">
              GOCHAPA · PERSONAL DRIVER
            </span>

            <h1>
              Bạn tận hưởng
              <br />
              <span>chuyến đi.</span>
              <br />
              Chúng tôi lo tay lái.
            </h1>

            <p className="personal-hero-description">
              Dịch vụ tài xế cá nhân linh hoạt cho những chuyến
              đi hằng ngày, lịch trình công việc và hành trình
              đường dài. Bạn chủ động kế hoạch, GOChapa đồng
              hành trên từng chặng đường.
            </p>

            <div className="personal-hero-actions">
              <a
                href="#personal-booking"
                className="personal-btn-primary"
              >
                Đặt tài xế ngay <span>↗</span>
              </a>

              <a
                href="#personal-services"
                className="personal-btn-secondary"
              >
                Khám phá dịch vụ
              </a>
            </div>

            <div className="personal-trust-list">
              <span>
                <b>✓</b> Linh hoạt theo nhu cầu
              </span>

              <span>
                <b>✓</b> Ưu tiên an toàn
              </span>

              <span>
                <b>✓</b> Hỗ trợ đặt lịch
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="personal-hero-visual">
            <div className="personal-hero-orb personal-orb-one" />
            <div className="personal-hero-orb personal-orb-two" />

            <div className="personal-hero-card">
              <div className="personal-car-icon">🚘</div>

              <span className="personal-card-label">
                YOUR JOURNEY, YOUR WAY
              </span>

              <h2>
                Mỗi hành trình
                <br />
                một trải nghiệm tốt hơn.
              </h2>

              <div className="personal-card-divider" />

              <div className="personal-card-bottom">
                <span className="personal-status-dot" />
                <span>Đồng hành cùng bạn</span>
                <span className="personal-card-arrow">↗</span>
              </div>
            </div>

            <div className="personal-floating-note">
              <span className="personal-floating-icon">✦</span>

              <div>
                <strong>Chủ động lịch trình</strong>
                <p>Phù hợp nhu cầu cá nhân</p>
              </div>
            </div>

            <span className="personal-decor decor-one">✳</span>
            <span className="personal-decor decor-two">✦</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="personal-intro">
        <div className="personal-intro-label">
          <span className="personal-section-kicker">
            PERSONAL SERVICE
          </span>

          <span className="personal-intro-line" />
        </div>

        <div className="personal-intro-grid">
          <h2>
            Dịch vụ dành riêng
            <br />
            <span>cho nhịp sống của bạn.</span>
          </h2>

          <p>
            Không cần tự mình cầm lái trong mọi tình huống.
            Chọn dịch vụ phù hợp với lịch trình, để mỗi chuyến
            đi trở nên thuận tiện và thoải mái hơn.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        className="personal-services"
        id="personal-services"
      >
        <div className="personal-section-heading">
          <div>
            <span className="personal-section-kicker">
              OUR SERVICES
            </span>

            <h2>
              Chọn dịch vụ
              <span> phù hợp với bạn</span>
            </h2>
          </div>

          <p>
            Giải pháp linh hoạt cho những nhu cầu di chuyển
            khác nhau.
          </p>
        </div>

        <div className="personal-service-grid">
          {personalServices.map((service) => (
            <article
              className="personal-service-card"
              key={service.number}
            >
              <div className="personal-service-card-top">
                <span className="personal-service-number">
                  {service.number}
                </span>

                <span className="personal-service-icon">
                  {service.icon}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="personal-service-card-bottom">
                <span>{service.tag}</span>

                <a
                  href="#personal-booking"
                  aria-label={`Đặt dịch vụ ${service.title}`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="personal-benefits">
        <div className="personal-benefits-heading">
          <span className="personal-section-kicker">
            WHY GOCHAPA
          </span>

          <h2>
            Thêm sự an tâm,
            <br />
            <span>bớt áp lực di chuyển.</span>
          </h2>

          <p>
            Chúng tôi hướng đến trải nghiệm đặt tài xế đơn giản,
            linh hoạt và phù hợp với nhu cầu thực tế của bạn.
          </p>
        </div>

        <div className="personal-benefits-grid">
          {benefits.map((benefit, index) => (
            <article
              className="personal-benefit-item"
              key={benefit.title}
            >
              <div
                className={`personal-benefit-icon personal-benefit-icon-${index + 1}`}
              >
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="personal-process">
        <div className="personal-section-heading">
          <div>
            <span className="personal-section-kicker">
              HOW IT WORKS
            </span>

            <h2>
              Đặt tài xế
              <span> thật đơn giản</span>
            </h2>
          </div>

          <p>
            Bốn bước rõ ràng để chuẩn bị cho hành trình của bạn.
          </p>
        </div>

        <div className="personal-process-grid">
          {steps.map((step) => (
            <article
              className="personal-process-step"
              key={step.number}
            >
              <span className="personal-step-number">
                {step.number}
              </span>

              <div className="personal-step-line" />

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section
        className="personal-booking"
        id="personal-booking"
      >
        <div className="personal-booking-decoration">
          <span>✦</span>
          <span>✳</span>
        </div>

        <div className="personal-booking-content">
          <span className="personal-section-kicker">
            YOUR NEXT JOURNEY STARTS HERE
          </span>

          <h2>
            Sẵn sàng cho
            <br />
            <span>hành trình tiếp theo?</span>
          </h2>

          <p>
            Chọn lịch trình phù hợp và liên hệ GOChapa để được
            hỗ trợ thông tin dịch vụ tài xế cá nhân.
          </p>

          <a
            href="/#booking"
            className="personal-btn-primary"
          >
            Bắt đầu đặt tài xế <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Personal;