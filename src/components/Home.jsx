import { Link } from "react-router-dom";
import "./Home.css";

const content = {
  vi: {
    eyebrow: "CHÀO MỪNG ĐẾN VỚI GOANYWHERE",
    title: "Kết nối tiện ích,",
    highlight: "mở lối tương lai.",
    description:
      "GoAnywhere đồng hành cùng cá nhân, tài xế và doanh nghiệp thông qua hệ sinh thái dịch vụ đa dạng, hướng đến trải nghiệm thuận tiện và những cơ hội kết nối mới.",
    explore: "Khám phá GoAnywhere",
    servicesButton: "Tìm hiểu dịch vụ",
    note: "Kết nối dịch vụ · Đồng hành phát triển",
    ecosystem: "HỆ SINH THÁI GOANYWHERE",
    groups: ["CÁ NHÂN", "DOANH NGHIỆP", "TÀI XẾ", "ĐỐI TÁC"],
    servicesLabel: "HỆ SINH THÁI GOANYWHERE",
    servicesTitle: "Khám phá dịch vụ dành cho bạn",
    servicesDescription:
      "Lựa chọn lĩnh vực phù hợp và bắt đầu hành trình kết nối cùng GoAnywhere.",
    services: [
      {
        title: "Dịch vụ cá nhân",
        description:
          "Khám phá các tiện ích giúp cuộc sống hằng ngày trở nên thuận tiện và dễ dàng hơn.",
        link: "/personal",
        label: "Khám phá ngay",
        icon: "👤",
        className: "home-service-orange",
      },
      {
        title: "Giải pháp doanh nghiệp",
        description:
          "Kết nối doanh nghiệp với các giải pháp dịch vụ linh hoạt, tối ưu trải nghiệm khách hàng.",
        link: "/business",
        label: "Tìm hiểu thêm",
        icon: "🏢",
        className: "home-service-purple",
      },
      {
        title: "Sự kiện nổi bật",
        description:
          "Cập nhật các sự kiện, hoạt động kết nối cộng đồng và cơ hội hợp tác mới.",
        link: "/events",
        label: "Xem sự kiện",
        icon: "🎉",
        className: "home-service-yellow",
      },
      {
        title: "Dịch vụ đưa đón",
        description:
          "Tìm kiếm giải pháp di chuyển linh hoạt dành cho cá nhân, gia đình và doanh nghiệp.",
        link: "/automotive",
        label: "Khám phá dịch vụ",
        icon: "🚘",
        className: "home-service-blue",
      },
    ],
    aboutLabel: "VỀ GOANYWHERE",
    aboutTitle: "Nơi những kết nối",
    aboutHighlight: "tạo nên giá trị.",
    aboutDescription:
      "Chúng tôi hướng đến việc xây dựng một nền tảng giúp người dùng dễ dàng tiếp cận dịch vụ, tìm kiếm thông tin và mở rộng mối quan hệ hợp tác.",
    aboutExtra:
      "Dù bạn là khách hàng cá nhân, tài xế hay doanh nghiệp, GoAnywhere mong muốn trở thành cầu nối giúp hành trình của bạn thêm thuận tiện và nhiều cơ hội.",
    aboutButton: "Tìm hiểu về chúng tôi",
    valuesLabel: "GIÁ TRỊ CỐT LÕI",
    valuesTitle: "Vì sao chọn GoAnywhere?",
    valuesDescription:
      "Hướng đến trải nghiệm dễ tiếp cận, kết nối hiệu quả và phát triển bền vững.",
    advantages: [
      {
        icon: "✦",
        title: "Trải nghiệm thuận tiện",
        description:
          "Tiếp cận các dịch vụ và thông tin cần thiết trong một nền tảng.",
      },
      {
        icon: "◎",
        title: "Kết nối linh hoạt",
        description:
          "Hỗ trợ kết nối giữa khách hàng, tài xế, đối tác và cộng đồng.",
      },
      {
        icon: "↗",
        title: "Mở rộng cơ hội",
        description:
          "Khám phá cơ hội hợp tác và phát triển dành cho cá nhân, doanh nghiệp.",
      },
    ],
    ctaEyebrow: "CÙNG GOANYWHERE TIẾN XA HƠN",
    ctaTitle: "Bắt đầu kết nối ngay hôm nay!",
    ctaDescription:
      "Liên hệ với chúng tôi để tìm hiểu thêm về dịch vụ, cơ hội hợp tác và những giải pháp phù hợp với bạn.",
    contact: "Liên hệ ngay",
    learnMore: "Tìm hiểu thêm",
    imageAlt: "Đội ngũ GoAnywhere kết nối và hợp tác",
    safe: "Kết nối mọi cơ hội",
  },

  en: {
    eyebrow: "WELCOME TO GOANYWHERE",
    title: "Connecting possibilities,",
    highlight: "creating the future.",
    description:
      "GoAnywhere connects individuals, drivers, and businesses through a diverse service ecosystem designed for convenience and new opportunities.",
    explore: "Discover GoAnywhere",
    servicesButton: "Explore services",
    note: "Connected services · Growing together",
    ecosystem: "THE GOANYWHERE ECOSYSTEM",
    groups: ["PERSONAL", "BUSINESS", "DRIVERS", "PARTNERS"],
    servicesLabel: "THE GOANYWHERE ECOSYSTEM",
    servicesTitle: "Discover services for you",
    servicesDescription:
      "Choose the right service and start connecting with GoAnywhere.",
    services: [
      {
        title: "Personal Services",
        description:
          "Discover convenient services that make everyday life easier.",
        link: "/personal",
        label: "Discover more",
        icon: "👤",
        className: "home-service-orange",
      },
      {
        title: "Business Solutions",
        description:
          "Flexible service solutions designed for businesses and their customers.",
        link: "/business",
        label: "Learn more",
        icon: "🏢",
        className: "home-service-purple",
      },
      {
        title: "Featured Events",
        description:
          "Discover events, community activities, and new collaboration opportunities.",
        link: "/events",
        label: "View events",
        icon: "🎉",
        className: "home-service-yellow",
      },
      {
        title: "Transfers & Trips",
        description:
          "Flexible transportation solutions for individuals, families, and businesses.",
        link: "/automotive",
        label: "Explore services",
        icon: "🚘",
        className: "home-service-blue",
      },
    ],
    aboutLabel: "ABOUT GOANYWHERE",
    aboutTitle: "Where connections",
    aboutHighlight: "create value.",
    aboutDescription:
      "We aim to build a platform that helps people access services, find information, and develop meaningful partnerships.",
    aboutExtra:
      "Whether you are an individual customer, driver, or business, GoAnywhere strives to make every journey more convenient and full of opportunities.",
    aboutButton: "About us",
    valuesLabel: "OUR CORE VALUES",
    valuesTitle: "Why GoAnywhere?",
    valuesDescription:
      "We focus on accessibility, effective connections, and sustainable growth.",
    advantages: [
      {
        icon: "✦",
        title: "Convenient Experience",
        description:
          "Access essential services and information on one platform.",
      },
      {
        icon: "◎",
        title: "Flexible Connections",
        description:
          "Connect customers, drivers, partners, and communities.",
      },
      {
        icon: "↗",
        title: "More Opportunities",
        description:
          "Discover collaboration and growth opportunities for individuals and businesses.",
      },
    ],
    ctaEyebrow: "GO FURTHER WITH GOANYWHERE",
    ctaTitle: "Start connecting today!",
    ctaDescription:
      "Contact us to learn more about our services, partnerships, and solutions tailored to your needs.",
    contact: "Contact us",
    learnMore: "Learn more",
    imageAlt: "The GoAnywhere team connecting and collaborating",
    safe: "Connecting possibilities",
  },
};

function Home({ language = "vi" }) {
  const t = content[language] || content.vi;

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero" id="home">
        <div className="home-hero-content">
          <span className="home-eyebrow">{t.eyebrow}</span>

          <h1>
            {t.title}
            <span>{t.highlight}</span>
          </h1>

          <p>{t.description}</p>

          <div className="home-hero-actions">
            <Link to="/company" className="home-btn-primary">
              {t.explore} <span>→</span>
            </Link>

            <a href="#home-services" className="home-btn-secondary">
              {t.servicesButton}
            </a>
          </div>

          <div className="home-hero-note">
            <span className="home-note-dot" />
            {t.note}
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="home-hero-circle home-circle-one" />
          <div className="home-hero-circle home-circle-two" />

          <div className="home-hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt={t.imageAlt}
            />

            <div className="home-image-caption">
              <div className="home-brand-mark">GO</div>
              <div>
                <strong>{t.safe}</strong>
                <span>{t.note}</span>
              </div>
            </div>
          </div>

          <div className="home-floating-card home-floating-top">
            <span className="home-floating-icon">✦</span>
            <div>
              <strong>{t.servicesLabel}</strong>
              <span>{t.servicesButton}</span>
            </div>
          </div>

          <div className="home-floating-card home-floating-bottom">
            <span className="home-floating-icon home-floating-yellow">
              ↗
            </span>
            <div>
              <strong>{t.aboutTitle}</strong>
              <span>{t.aboutHighlight}</span>
            </div>
          </div>
        </div>
      </section>

      {/* HỆ SINH THÁI */}
      <section className="home-partner-strip">
        <p>{t.ecosystem}</p>

        <div className="home-partner-list">
          {t.groups.map((group, index) => (
            <span className="home-partner-item" key={group}>
              {index > 0 && <i aria-hidden="true" />}
              {group}
            </span>
          ))}
        </div>
      </section>

      {/* DỊCH VỤ */}
      <section
        className="home-services-section"
        id="home-services"
      >
        <div className="home-section-heading">
          <div>
            <span className="home-section-label">
              {t.servicesLabel}
            </span>
            <h2>{t.servicesTitle}</h2>
          </div>

          <p>{t.servicesDescription}</p>
        </div>

        <div className="home-services-grid">
          {t.services.map((service, index) => (
            <article
              className={`home-service-card ${service.className}`}
              key={service.link}
            >
              <div className="home-service-card-top">
                <div className="home-service-icon">
                  {service.icon}
                </div>

                <span className="home-service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link
                to={service.link}
                className="home-service-link"
              >
                {service.label} <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* GIỚI THIỆU */}
      <section className="home-about-section" id="home-about">
        <div className="home-about-visual">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=85"
            alt={t.imageAlt}
            loading="lazy"
          />

          <div className="home-about-badge">
            <span>GO</span>
            <div>
              <strong>{t.aboutTitle}</strong>
              <small>{t.aboutHighlight}</small>
            </div>
          </div>
        </div>

        <div className="home-about-content">
          <span className="home-section-label">
            {t.aboutLabel}
          </span>

          <h2>
            {t.aboutTitle}
            <span>{t.aboutHighlight}</span>
          </h2>

          <p>{t.aboutDescription}</p>
          <p>{t.aboutExtra}</p>

          <Link to="/company" className="home-about-link">
            {t.aboutButton} <span>→</span>
          </Link>
        </div>
      </section>

      {/* GIÁ TRỊ CỐT LÕI */}
      <section className="home-advantages-section">
        <div className="home-advantages-heading">
          <span className="home-section-label">
            {t.valuesLabel}
          </span>

          <h2>{t.valuesTitle}</h2>
          <p>{t.valuesDescription}</p>
        </div>

        <div className="home-advantages-grid">
          {t.advantages.map((item, index) => (
            <article className="home-advantage-card" key={item.title}>
              <div
                className={`home-advantage-icon home-advantage-icon-${index + 1}`}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* LIÊN HỆ */}
      <section className="home-cta-section">
        <div className="home-cta-decoration" aria-hidden="true">
          GO
        </div>

        <div className="home-cta-content">
          <span>{t.ctaEyebrow}</span>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaDescription}</p>
        </div>

        <Link to="/contact" className="home-cta-button">
          {t.contact} <span>→</span>
        </Link>
      </section>
    </main>
  );
}

export default Home;