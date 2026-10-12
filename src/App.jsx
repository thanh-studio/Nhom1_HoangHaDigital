
import { useState, useCallback, useEffect } from "react";
import Header, { translations } from "./components/Header";
import Footer from "./components/Footer";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("vi");
  const t = translations[language];

  // Cập nhật ngôn ngữ cho toàn bộ website
  const handleLanguageChange = useCallback((lang) => {
    setLanguage(lang);
  }, []);

  // Cập nhật tiêu đề trình duyệt
  useEffect(() => {
    document.title =
      language === "vi"
        ? "Ten doanh nghiệp | Dịch vụ tài xế chuyên nghiệp"
        : "Ten doanh nghiệp | Professional Driver Services";

    document.documentElement.lang = language;
  }, [language]);

  // Danh sách dịch vụ
  const services = [
    {
      id: "personal",
      number: "01",
      title: t.service1,
      description: t.service1Desc,
    },
    {
      id: "business",
      number: "02",
      title: t.service2,
      description: t.service2Desc,
    },
    {
      id: "events",
      number: "03",
      title: t.service3,
      description: t.service3Desc,
    },
    {
      id: "automotive",
      number: "04",
      title: t.service4,
      description: t.service4Desc,
    },
  ];

  return (
    <>
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
      />

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
              <a href="#booking" className="hero-primary">
                {t.booking}
                <span>↗</span>
              </a>

              <a href="#services" className="hero-secondary">
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

          {/* Hình ảnh Hero */}
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
                  href="#booking"
                  className="service-link"
                  aria-label={service.title}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* DRIVER SECTION */}
        <section className="info-section" id="driver">
          <span className="section-label">Ten doanh nghiệp</span>

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

          <a href="#booking" className="hero-primary">
            {t.booking}
            <span>↗</span>
          </a>
        </section>

        {/* BOOKING SECTION */}
        <section className="booking-section" id="booking">
          <span className="section-label">BOOKING</span>

          <h2>{t.bookingTitle}</h2>

          <p>{t.bookingDesc}</p>

          <a href="#contact" className="booking-cta">
            {t.contact}
            <span>↗</span>
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <Footer language={language} />
    </>
  );
}

export default App;
