
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import "./Header.css";

// ================================
// NGÔN NGỮ VIỆT - ANH CHO HEADER
// ================================
const translations = {
  vi: {
    Main: "Trang chủ",
    personal: "Cá nhân",
    business: "Doanh nghiệp",
    events: "Sự kiện",
    automotive: "Ô tô",
    driver: "Tài xế",
    company: "Công ty",
    contact: "Liên hệ",
    booking: "Đặt tài xế",
    home: "Trang chủ",
    tagline: "Dịch vụ tài xế chuyên nghiệp",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },

  en: {
    Main: "Home",
    personal: "Personal",
    business: "Business",
    events: "Events",
    automotive: "Automotive",
    driver: "Driver",
    company: "Company",
    contact: "Contact",
    booking: "Book a Driver",
    home: "Home",
    tagline: "Professional Driver Services",
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

  const t = translations[language] || translations.vi;

  // Cập nhật tiêu đề và ngôn ngữ trình duyệt
  useEffect(() => {
    document.title =
      language === "vi"
        ? "Ten doanh nghiệp | Dịch vụ tài xế"
        : "Ten doanh nghiệp | Driver Services";

    document.documentElement.lang = language;
  }, [language]);

  // Danh sách menu điều hướng
  const navItems = useMemo(
    () => [
      { label: t.Main, href: "Home" },
      { label: t.personal, href: "Personal" },
      { label: t.business, href: "Business" },
      { label: t.events, href: "Events" },
      { label: t.automotive, href: "Automotive" },
      { label: t.driver, href: "Driver" },
      { label: t.company, href: "Company" },
      {
        label: t.contact,
        href: "#contact",
        highlight: true,
      },
    ],
    [t]
  );

  // Chuyển đổi ngôn ngữ
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
          aria-label={t.home}
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
          id="header-navigation"
          aria-label={language === "vi" ? "Điều hướng chính" : "Main navigation"}
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

          {/* CHUYỂN NGÔN NGỮ MOBILE */}
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

          {/* NÚT ĐẶT TÀI XẾ MOBILE */}
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
            aria-controls="header-navigation"
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

// Cho phép App.jsx sử dụng bản dịch của Header
export { translations };
