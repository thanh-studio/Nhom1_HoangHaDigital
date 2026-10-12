
import { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header, { translations } from "./components/Header";
import Footer from "./components/Footer";
import Personal from "./components/Personal";
import Business from "./components/Business";
import Events from "./components/Events";

import heroImg from "./assets/hero.png";
import "./App.css";

// ==============================
// TRANG CHỦ
// ==============================
function HomePage({ language }) {
  const t = translations[language] || translations.vi;

  // Danh sách dịch vụ
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
      link: "/event",
    },
    {
      id: "automotive",
      number: "04",
      title: t.service4,
      description: t.service4Desc,
      link: "/#services",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-label">{t.heroLabel}</span>

          <h1>
            {t.heroTitle}
            <br />
            <span>{t.heroHighlight}</span>
          </h1>

          <p className="hero-description">
            {t.heroDescription}
          </p>

          <div className="hero-buttons">
            <a href="/#booking" className="hero-primary">
              {t.booking}
              <span>↗</span>
            </a>

            <a href="/#services" className="hero-secondary">
              {t.explore}
            </a>
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
              alt="Dịch vụ tài xế GOChapa"
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
      <section className="services-section" id="services">
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
              id={service.id}
              key={service.id}
            >
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a
                href={service.link}
                className="service-link"
                aria-label={`Xem dịch vụ ${service.title}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* DRIVER SECTION */}
      <section className="info-section" id="driver">
        <span className="section-label">GOCHAPA</span>

        <h2>{t.driverTitle}</h2>

        <p>{t.driverDesc}</p>
      </section>

      {/* COMPANY SECTION */}
      <section
        className="info-section info-section-light"
        id="company"
      >
        <span className="section-label">ABOUT US</span>

        <h2>{t.companyTitle}</h2>

        <p>{t.companyDesc}</p>
      </section>

      {/* CONTACT SECTION */}
      <section className="info-section" id="contact">
        <span className="section-label">GET IN TOUCH</span>

        <h2>{t.contactTitle}</h2>

        <p>{t.contactDesc}</p>

        <a href="/#booking" className="hero-primary">
          {t.booking}
          <span>↗</span>
        </a>
      </section>

      {/* BOOKING SECTION */}
      <section className="booking-section" id="booking">
        <span className="section-label">BOOKING</span>

        <h2>{t.bookingTitle}</h2>

        <p>{t.bookingDesc}</p>

        <a href="/#contact" className="booking-cta">
          {t.contact}
          <span>↗</span>
        </a>
      </section>
    </main>
  );
}

// ==============================
// BỐ CỤC CHUNG WEBSITE
// HEADER - NỘI DUNG - FOOTER
// ==============================
function AppLayout() {
  const [language, setLanguage] = useState("vi");
  const location = useLocation();

  const handleLanguageChange = useCallback((lang) => {
    setLanguage(lang);
  }, []);

  // Cập nhật tiêu đề và ngôn ngữ trình duyệt
  useEffect(() => {
    document.title =
      language === "vi"
        ? "GOChapa | Dịch vụ tài xế chuyên nghiệp"
        : "GOChapa | Professional Driver Services";

    document.documentElement.lang = language;
  }, [language]);

  // Cuộn về đầu trang khi chuyển trang
  useEffect(() => {
    if (location.hash) {
      // Để trình duyệt xử lý liên kết neo sau khi chuyển trang
      const timer = window.setTimeout(() => {
        const target = document.getElementById(
          location.hash.slice(1)
        );

        if (target) {
          target.scrollIntoView({ behavior: "auto" });
        }
      }, 0);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location.pathname, location.hash]);

  return (
    <div className="app">
      {/* HEADER LUÔN Ở ĐẦU */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* NỘI DUNG TRANG */}
      <div className="app-main">
        <Routes>
          {/* TRANG CHỦ */}
          <Route
            path="/"
            element={<HomePage language={language} />}
          />

          {/* TRANG DỊCH VỤ CÁ NHÂN */}
          <Route
            path="/personal"
            element={<Personal language={language} />}
          />

          {/* TRANG DỊCH VỤ DOANH NGHIỆP */}
          <Route
            path="/business"
            element={<Business language={language} />}
          />

          {/* TRANG DỊCH VỤ SỰ KIỆN */}
          <Route
            path="/event"
            element={<Event language={language} />}
          />

          {/* TRANG KHÔNG TỒN TẠI */}
          <Route
            path="*"
            element={
              <main className="not-found">
                <h1>404</h1>
                <p>Không tìm thấy trang bạn yêu cầu.</p>
                <a href="/">Quay về trang chủ</a>
              </main>
            }
          />
        </Routes>
      </div>

      {/* FOOTER LUÔN Ở CUỐI */}
      <Footer language={language} />
    </div>
  );
}

// ==============================
// APP
// ==============================
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
