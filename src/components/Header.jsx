
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import "./Header.css";

// ================================
// NGÔN NGỮ VIỆT - ANH
// ================================
const translations = {
  vi: {
    personal: "Cá nhân",
    business: "Doanh nghiệp",
    events: "Sự kiện",
    automotive: "Ô tô",
    driver: "Tài xế",
    company: "Công ty",
    contact: "Liên hệ",
    booking: "Đặt tài xế",
    home: "Trang chủ",
    tagline: "Ten doanh nghiệp",

    heroLabel: "DỊCH VỤ TÀI XẾ CHUYÊN NGHIỆP",
    heroTitle: "Di chuyển dễ dàng.",
    heroHighlight: "An tâm trên mọi hành trình.",
    heroDescription:
      "Giải pháp tài xế chuyên nghiệp, an toàn và linh hoạt dành cho cá nhân, doanh nghiệp và mọi nhu cầu di chuyển.",

    explore: "Khám phá dịch vụ",
    learnMore: "Tìm hiểu thêm",

    feature1: "Tài xế chuyên nghiệp",
    feature2: "An toàn mọi hành trình",
    feature3: "Phục vụ linh hoạt",

    servicesLabel: "DỊCH VỤ CỦA CHÚNG TÔI",
    servicesTitle: "Di chuyển theo cách của bạn",
    servicesDescription:
      "Những giải pháp tài xế phù hợp với cuộc sống và công việc của bạn.",

    service1: "Cá nhân",
    service1Desc: "Đồng hành trong những chuyến đi hằng ngày.",
    service2: "Doanh nghiệp",
    service2Desc: "Dịch vụ tài xế chuyên nghiệp cho doanh nghiệp.",
    service3: "Sự kiện",
    service3Desc: "Di chuyển thuận tiện trong những dịp đặc biệt.",
    service4: "Ô tô",
    service4Desc: "Giải pháp lái xe linh hoạt theo nhu cầu.",

    driverTitle: "Đội ngũ tài xế",
    driverDesc: "Chuyên nghiệp, tận tâm và đáng tin cậy.",
    companyTitle: "Về doanh nghiệp",
    companyDesc: "Đồng hành cùng bạn trên mọi hành trình.",
    contactTitle: "Liên hệ với chúng tôi",
    contactDesc: "Kết nối với chúng tôi để được tư vấn.",
    bookingTitle: "Đặt tài xế ngay hôm nay",
    bookingDesc:
      "Liên hệ với chúng tôi để tìm giải pháp di chuyển phù hợp.",
    footer: "Giải pháp di chuyển hiện đại cho mọi hành trình.",

    loading: "Đang xử lý...",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },

  en: {
    personal: "Personal",
    business: "Business",
    events: "Events",
    automotive: "Automotive",
    driver: "Driver",
    company: "Company",
    contact: "Contact",
    booking: "Book a Driver",
    home: "Home",
    tagline: "Company Name",

    heroLabel: "PROFESSIONAL DRIVER SERVICES",
    heroTitle: "Move with ease.",
    heroHighlight: "Feel confident on every journey.",
    heroDescription:
      "Professional, safe, and flexible driver solutions for individuals, businesses, and every travel need.",

    explore: "Explore Services",
    learnMore: "Learn More",

    feature1: "Professional drivers",
    feature2: "Safe journeys",
    feature3: "Flexible service",

    servicesLabel: "OUR SERVICES",
    servicesTitle: "Mobility on your terms",
    servicesDescription:
      "Driver solutions designed around your lifestyle and business needs.",

    service1: "Personal",
    service1Desc: "Reliable support for your everyday journeys.",
    service2: "Business",
    service2Desc: "Professional driver services for businesses.",
    service3: "Events",
    service3Desc: "Convenient transportation for special occasions.",
    service4: "Automotive",
    service4Desc: "Flexible driving solutions for your vehicle.",

    driverTitle: "Our Drivers",
    driverDesc: "Professional, dedicated, and reliable.",
    companyTitle: "About Us",
    companyDesc: "We accompany you on every journey.",
    contactTitle: "Contact Us",
    contactDesc: "Connect with us for professional assistance.",
    bookingTitle: "Book a Driver Today",
    bookingDesc:
      "Contact us to find the right transportation solution.",
    footer: "Modern mobility solutions for every journey.",

    loading: "Loading...",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

// ================================
// HEADER COMPONENT
// ================================
export default function Header({
  language = "vi",
  onLanguageChange,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = translations[language] || translations.vi;

  // Cập nhật tiêu đề và ngôn ngữ trình duyệt
  useEffect(() => {
    document.title =
      language === "vi"
        ? "GOChapa | Dịch vụ tài xế"
        : "GOChapa | Driver Services";

    document.documentElement.lang = language;
  }, [language]);

  // Danh sách menu
  const navItems = useMemo(
    () => [
      { label: t.personal, href: "#personal" },
      { label: t.business, href: "#business" },
      { label: t.events, href: "#events" },
      { label: t.automotive, href: "#automotive" },
      { label: t.driver, href: "#driver" },
      { label: t.company, href: "#company" },
      {
        label: t.contact,
        href: "#contact",
        highlight: true,
      },
    ],
    [t]
  );

  // Chuyển ngôn ngữ toàn website
  const changeLanguage = useCallback(
    (lang) => {
      if (lang !== "vi" && lang !== "en") return;

      onLanguageChange?.(lang);
      setMenuOpen(false);
    },
    [onLanguageChange]
  );

  // Đóng menu
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Cuộn đến khu vực đặt tài xế
  const handleBooking = useCallback(() => {
    setMenuOpen(false);

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">

        {/* LOGO */}
        <a
          href="#home"
          className="header-logo"
          aria-label="Home"
          onClick={closeMenu}
        >
          <span className="logo-symbol">GO</span>

          <span className="logo-content">
            <span className="logo-name">
              Ten doanh nghiệp
            </span>

            <span className="logo-tagline">
              {t.tagline}
            </span>
          </span>
        </a>

        {/* MENU ĐIỀU HƯỚNG */}
        <nav
          className={`header-nav ${
            menuOpen ? "nav-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${
                item.highlight ? "nav-contact" : ""
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          {/* NGÔN NGỮ TRÊN MOBILE */}
          <div className="mobile-language">
            <button
              type="button"
              className={language === "vi" ? "selected" : ""}
              onClick={() => changeLanguage("vi")}
              aria-pressed={language === "vi"}
            >
              VI
            </button>

            <span>|</span>

            <button
              type="button"
              className={language === "en" ? "selected" : ""}
              onClick={() => changeLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          {/* ĐẶT TÀI XẾ TRÊN MOBILE */}
          <button
            type="button"
            className="mobile-booking"
            onClick={handleBooking}
          >
            {t.booking}
          </button>
        </nav>

        {/* CÁC NÚT BÊN PHẢI */}
        <div className="header-actions">

          {/* CHUYỂN NGÔN NGỮ DESKTOP */}
          <div
            className="language-switcher"
            aria-label="Language selector"
          >
            <button
              type="button"
              className={language === "vi" ? "selected" : ""}
              onClick={() => changeLanguage("vi")}
              aria-label="Chuyển sang tiếng Việt"
              aria-pressed={language === "vi"}
            >
              VN
            </button>

            <button
              type="button"
              className={language === "en" ? "selected" : ""}
              onClick={() => changeLanguage("en")}
              aria-label="Switch to English"
              aria-pressed={language === "en"}
            >
              EN
            </button>

            <span className="language-chevron"></span>
          </div>

          {/* NÚT ĐẶT TÀI XẾ DESKTOP */}
          <button
            type="button"
            className="booking-button"
            onClick={handleBooking}
          >
            {t.booking}
          </button>

          {/* NÚT MENU MOBILE */}
          <button
            type="button"
            className={`menu-toggle ${
              menuOpen ? "is-open" : ""
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? t.closeMenu : t.openMenu
            }
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

// Cho phép App.jsx sử dụng chung bản dịch
export { translations };
