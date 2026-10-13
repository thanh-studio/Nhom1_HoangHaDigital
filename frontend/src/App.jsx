import {
  useState,
  useCallback,
  useEffect,
} from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
  Link,
} from "react-router-dom";

import Header, { translations } from "./components/Header";
import Footer from "./components/Footer";

import Personal from "./components/Sevices/Personal";
import Automotive from "./components/Sevices/Automotive";

import Events from "./components/Events";
import Driver from "./components/Driver";
import Company from "./components/Company";
import Contact from "./components/Contact";

import heroImg from "./assets/hero.png";

import "./App.css";

// ========================================
// BẢN DỊCH CHO TRANG CHỦ
// ========================================

const homeTranslations = {
  vi: {
    heroLabel: "DỊCH VỤ TÀI XẾ CHUYÊN NGHIỆP",
    heroTitle: "Hành trình của bạn,",
    heroHighlight: "chúng tôi đồng hành",
    heroDescription:
      "Dịch vụ tài xế chuyên nghiệp, an toàn và đáng tin cậy cho mọi hành trình.",

    explore: "Khám phá dịch vụ",

    feature1: "An toàn và tin cậy",
    feature2: "Tài xế chuyên nghiệp",
    feature3: "Phục vụ tận tâm",

    servicesLabel: "DỊCH VỤ CỦA CHÚNG TÔI",
    servicesTitle: "Giải pháp di chuyển toàn diện",
    servicesDescription:
      "Lựa chọn dịch vụ phù hợp với nhu cầu của bạn.",

    service1: "Dịch vụ cá nhân",
    service1Desc:
      "Dịch vụ tài xế riêng linh hoạt và tiện lợi.",

    service2: "Dịch vụ doanh nghiệp",
    service2Desc:
      "Giải pháp tài xế chuyên nghiệp dành cho doanh nghiệp.",

    service3: "Dịch vụ sự kiện",
    service3Desc:
      "Đưa đón chuyên nghiệp cho các sự kiện đặc biệt.",

    service4: "Đưa đón & hành trình",
    service4Desc:
      "Đồng hành trên những hành trình của bạn.",

    viewService: "Xem dịch vụ",

    driverSectionLabel: "ĐỘI NGŨ TÀI XẾ",
    driverTitle: "Đồng hành cùng tài xế chuyên nghiệp",
    driverDesc:
      "Tìm hiểu dịch vụ tài xế cho nhu cầu di chuyển của bạn.",

    companySectionLabel: "VỀ CHÚNG TÔI",
    companyTitle: "Về GoAnywhere",
    companyDesc:
      "Mang đến giải pháp di chuyển an toàn và chuyên nghiệp.",

    contactSectionLabel: "KẾT NỐI VỚI CHÚNG TÔI",
    contactTitle: "Chúng tôi luôn sẵn sàng hỗ trợ",
    contactDesc:
      "Liên hệ với chúng tôi để được tư vấn dịch vụ.",

    bookingSectionLabel: "ĐẶT DỊCH VỤ",
    bookingTitle: "Sẵn sàng cho hành trình tiếp theo?",
    bookingDesc:
      "Liên hệ để được tư vấn và đặt tài xế.",

    learnMore: "Tìm hiểu thêm",
    aboutUs: "Về chúng tôi",
  },

  en: {
    heroLabel: "PROFESSIONAL DRIVER SERVICES",
    heroTitle: "Your journey,",
    heroHighlight: "our commitment",
    heroDescription:
      "Professional, safe, and reliable driver services for every journey.",

    explore: "Explore services",

    feature1: "Safe and reliable",
    feature2: "Professional drivers",
    feature3: "Dedicated service",

    servicesLabel: "OUR SERVICES",
    servicesTitle: "Complete mobility solutions",
    servicesDescription:
      "Choose the service that suits your needs.",

    service1: "Personal",
    service1Desc:
      "Flexible and convenient private driver services.",

    service2: "Business",
    service2Desc:
      "Professional driver solutions for businesses.",

    service3: "Events",
    service3Desc:
      "Professional transportation for special events.",

    service4: "Transfers & Trips",
    service4Desc:
      "Professional support throughout your journey.",

    viewService: "View service",

    driverSectionLabel: "OUR DRIVERS",
    driverTitle: "Professional drivers by your side",
    driverDesc:
      "Explore driver services for your travel needs.",

    companySectionLabel: "ABOUT US",
    companyTitle: "About GoAnywhere",
    companyDesc:
      "Providing safe and professional mobility solutions.",

    contactSectionLabel: "GET IN TOUCH",
    contactTitle: "We are here to help",
    contactDesc:
      "Contact us for service information and assistance.",

    bookingSectionLabel: "BOOKING",
    bookingTitle: "Ready for your next journey?",
    bookingDesc:
      "Contact us for advice and driver bookings.",

    learnMore: "Learn more",
    aboutUs: "About us",
  },
};

// ========================================
// TRANG CHỦ
// ========================================

function HomePage({ language }) {
  const t = {
    ...(translations[language] || translations.vi),
    ...homeTranslations[language],
  };

  const services = [
    {
      id: "personal",
      number: "01",
      title: t.service1,
      description: t.service1Desc,
      link: "/personal",
    },
    {
      id: "business",
      number: "02",
      title: t.service2,
      description: t.service2Desc,
      link: "/business",
    },
    {
      id: "events",
      number: "03",
      title: t.service3,
      description: t.service3Desc,
      link: "/events",
    },
    {
      id: "automotive",
      number: "04",
      title: t.service4,
      description: t.service4Desc,
      link: "/automotive",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-label">
            {t.heroLabel}
          </span>

          <h1>
            {t.heroTitle}
            <br />
            <span>{t.heroHighlight}</span>
          </h1>

          <p className="hero-description">
            {t.heroDescription}
          </p>

          <div className="hero-buttons">
            <Link
              to="/home#booking"
              className="hero-primary"
            >
              {t.booking}
              <span>↗</span>
            </Link>

            <Link
              to="/home#services"
              className="hero-secondary"
            >
              {t.explore}
            </Link>
          </div>

          <div className="hero-features">
            <div>
              <span className="feature-check">✓</span>
              {t.feature1}
            </div>

            <div>
              <span className="feature-check">✓</span>
              {t.feature2}
            </div>

            <div>
              <span className="feature-check">✓</span>
              {t.feature3}
            </div>
          </div>
        </div>

        {/* HÌNH ẢNH HERO */}
        <div className="hero-visual">
          <div className="hero-image">
            <img
              src={heroImg}
              alt="Dịch vụ tài xế chuyên nghiệp"
              className="hero-img"
            />
          </div>

          <div className="floating-card">
            <span className="floating-icon">✓</span>

            <div>
              <strong>{t.feature1}</strong>
              <p>Safe · Reliable · Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        className="services-section"
        id="services"
      >
        <span className="section-label">
          {t.servicesLabel}
        </span>

        <h2>{t.servicesTitle}</h2>

        <p className="section-description">
          {t.servicesDescription}
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <article
              className="service-card"
              id={`service-${service.id}`}
              key={service.id}
            >
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link
                to={service.link}
                className="service-link"
                aria-label={`${t.viewService}: ${service.title}`}
              >
                ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* DRIVER SECTION */}
      <section className="info-section" id="driver">
        <span className="section-label">
          {t.driverSectionLabel}
        </span>

        <h2>{t.driverTitle}</h2>

        <p>{t.driverDesc}</p>

        <Link to="/driver" className="hero-primary">
          {t.learnMore}
          <span>↗</span>
        </Link>
      </section>

      {/* COMPANY SECTION */}
      <section
        className="info-section info-section-light"
        id="company"
      >
        <span className="section-label">
          {t.companySectionLabel}
        </span>

        <h2>{t.companyTitle}</h2>

        <p>{t.companyDesc}</p>

        <Link to="/company" className="hero-primary">
          {t.aboutUs}
          <span>↗</span>
        </Link>
      </section>

      {/* CONTACT SECTION */}
      <section className="info-section" id="contact">
        <span className="section-label">
          {t.contactSectionLabel}
        </span>

        <h2>{t.contactTitle}</h2>

        <p>{t.contactDesc}</p>

        <Link to="/contact" className="hero-primary">
          {t.contact}
          <span>↗</span>
        </Link>
      </section>

      {/* BOOKING SECTION */}
      <section
        className="booking-section"
        id="booking"
      >
        <span className="section-label">
          {t.bookingSectionLabel}
        </span>

        <h2>{t.bookingTitle}</h2>

        <p>{t.bookingDesc}</p>

        <Link to="/contact" className="booking-cta">
          {t.contact}
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

// ========================================
// BỐ CỤC CHUNG WEBSITE
// ========================================

function AppLayout() {
  const [language, setLanguage] = useState("vi");
  const location = useLocation();

  // ĐỔI NGÔN NGỮ
  const handleLanguageChange = useCallback((lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  }, []);

  // CẬP NHẬT TIÊU ĐỀ VÀ NGÔN NGỮ TRÌNH DUYỆT
  useEffect(() => {
    document.title =
      language === "en"
        ? "GoAnywhere | Professional Driver Services"
        : "GoAnywhere | Dịch vụ tài xế chuyên nghiệp";

    document.documentElement.lang = language;
  }, [language]);

  // XỬ LÝ CUỘN TRANG KHI CHUYỂN ROUTE HOẶC HASH
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        const targetId = decodeURIComponent(
          location.hash.slice(1)
        );

        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "auto",
            block: "start",
          });

          return;
        }
      }

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="app">
      {/* HEADER */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* NỘI DUNG */}
      <div className="app-main">
        <Routes>
          {/* TRANG CHỦ */}
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />
          
          {/* DỊCH VỤ CÁ NHÂN */}
          <Route
            path="/personal"
            element={<Personal language={language} />}
          />

          <Route
            path="/services/personal"
            element={<Navigate to="/personal" replace />}
          />

          {/* DỊCH VỤ SỰ KIỆN */}
          <Route
            path="/events"
            element={<Events language={language} />}
          />

          <Route
            path="/event"
            element={<Navigate to="/events" replace />}
          />

          {/* ĐƯA ĐÓN VÀ HÀNH TRÌNH */}
          <Route
            path="/automotive"
            element={<Automotive language={language} />}
          />

          <Route
            path="/services/automotive"
            element={<Navigate to="/automotive" replace />}
          />

          {/* TÀI XẾ */}
          <Route
            path="/driver"
            element={<Driver language={language} />}
          />

          {/* GIỚI THIỆU CÔNG TY */}
          <Route
            path="/company"
            element={<Company language={language} />}
          />

          {/* LIÊN HỆ */}
          <Route
            path="/contact"
            element={<Contact language={language} />}
          />

          {/* TRANG KHÔNG TỒN TẠI */}
          <Route
            path="*"
            element={
              <main className="not-found">
                <h1>404</h1>

                <p>
                  {language === "vi"
                    ? "Không tìm thấy trang bạn yêu cầu."
                    : "The page you requested could not be found."}
                </p>

                <Link to="/home">
                  {language === "vi"
                    ? "Quay về trang chủ"
                    : "Back to home"}
                </Link>
              </main>
            }
          />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer language={language} />
    </div>
  );
}

// ========================================
// APP
// ========================================

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;