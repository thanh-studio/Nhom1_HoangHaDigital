import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  CarFront,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import "./Header.css";

const translations = {
  vi: {
    home: "Trang chủ",
    personal: "Cá nhân",
    business: "Doanh nghiệp",
    events: "Sự kiện",
    automotive: "Đưa đón & hành trình",
    driver: "Dịch vụ tài xế",
    company: "Về GoAnywhere",
    contact: "Liên hệ",
    booking: "Đặt tài xế",
    language: "Chọn ngôn ngữ",
    services: "Dịch vụ",
    tagline: "DỊCH VỤ TÀI XẾ CHUYÊN NGHIỆP",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    mainNavigation: "Menu điều hướng chính",
  },

  en: {
    home: "Home",
    personal: "Personal",
    business: "Business",
    events: "Events",
    automotive: "Transfers & Trips",
    driver: "Driver Services",
    company: "About GoAnywhere",
    contact: "Contact",
    booking: "Book a Driver",
    language: "Select language",
    services: "Services",
    tagline: "PROFESSIONAL DRIVER SERVICES",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNavigation: "Main navigation",
  },
};

export default function Header({
  language: languageProp,
  onLanguageChange,
}) {
  const [localLanguage, setLocalLanguage] = useState("vi");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const navigate = useNavigate();

  const language = languageProp ?? localLanguage;
  const t = translations[language] || translations.vi;

  // Cập nhật tiêu đề và ngôn ngữ của trang.
  useEffect(() => {
    document.title =
      language === "en"
        ? "GoAnywhere | Professional Driver Services"
        : "GoAnywhere | Dịch vụ tài xế chuyên nghiệp";

    document.documentElement.lang = language;
  }, [language]);

  // Các mục điều hướng chính.
  const navItems = useMemo(
    () => [
      {
        key: "home",
        label: t.home,
        path: "/home",
        end: true,
      },
      {
        key: "events",
        label: t.events,
        path: "/events",
      },
      {
        key: "driver",
        label: t.driver,
        path: "/driver",
      },
      {
        key: "company",
        label: t.company,
        path: "/company",
      },
    ],
    [t]
  );

  // Đóng menu và dropdown.
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, []);

  // Chuyển ngôn ngữ.
  const changeLanguage = useCallback(
    (nextLanguage) => {
      if (!["vi", "en"].includes(nextLanguage)) {
        return;
      }

      if (languageProp === undefined) {
        setLocalLanguage(nextLanguage);
      }

      onLanguageChange?.(nextLanguage);
      closeMenu();
    },
    [languageProp, onLanguageChange, closeMenu]
  );

  // Mở hoặc đóng dropdown dịch vụ.
  const toggleServices = useCallback(() => {
    setServicesOpen((previous) => !previous);
  }, []);

  // Đặt tài xế.
  const handleBooking = useCallback(() => {
    closeMenu();

    const bookingSection = document.getElementById("booking");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/home#booking");
    }
  }, [closeMenu, navigate]);

  // Đóng dropdown khi nhấn bên ngoài.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, []);

  // Đóng menu bằng phím Escape.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu]);

  // Nút chuyển ngôn ngữ dùng chung.
  const renderLanguageButtons = () => (
    <>
      <button
        type="button"
        className={language === "vi" ? "selected" : ""}
        onClick={() => changeLanguage("vi")}
        aria-pressed={language === "vi"}
      >
        VI
      </button>

      <button
        type="button"
        className={language === "en" ? "selected" : ""}
        onClick={() => changeLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </>
  );

  return (
    <header className="site-header">
      <div className="header-container">
        {/* LOGO */}
        <Link
          to="/home"
          className="header-logo"
          aria-label="GoAnywhere - Home"
          onClick={closeMenu}
        >
          <span className="logo-symbol">
            <CarFront size={27} strokeWidth={2.2} />
          </span>

          <span className="logo-content">
            <span className="logo-name">
              Go<span>Anywhere</span>
            </span>

            <span className="logo-tagline">
              {t.tagline}
            </span>
          </span>
        </Link>

        {/* NÚT MENU MOBILE */}
        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={() => {
            setMenuOpen((previous) => !previous);
            setServicesOpen(false);
          }}
          aria-label={
            menuOpen ? t.closeMenu : t.openMenu
          }
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* MENU ĐIỀU HƯỚNG */}
        <nav
          id="header-navigation"
          className={`header-nav ${
            menuOpen ? "nav-open" : ""
          }`}
          aria-label={t.mainNavigation}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "nav-active" : ""
                }`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          {/* DROPDOWN DỊCH VỤ */}
          <div
            ref={servicesRef}
            className={`nav-services ${
              servicesOpen ? "services-open" : ""
            }`}
          >
            <button
              type="button"
              className="services-trigger"
              onClick={toggleServices}
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              aria-label={t.services}
            >
              <span>{t.services}</span>

              <ChevronDown
                size={16}
                className="services-chevron"
                aria-hidden="true"
              />
            </button>

            <div
              id="services-dropdown"
              className="services-dropdown"
              aria-hidden={!servicesOpen}
              inert={!servicesOpen}
            >
              <NavLink
                to="/personal"
                className="dropdown-link"
                onClick={closeMenu}
                tabIndex={servicesOpen ? 0 : -1}
              >
                {t.personal}
              </NavLink>

              <NavLink
                to="/business"
                className="dropdown-link"
                onClick={closeMenu}
                tabIndex={servicesOpen ? 0 : -1}
              >
                {t.business}
              </NavLink>

              <NavLink
                to="/automotive"
                className="dropdown-link"
                onClick={closeMenu}
                tabIndex={servicesOpen ? 0 : -1}
              >
                {t.automotive}
              </NavLink>
            </div>
          </div>

          {/* NGÔN NGỮ MOBILE */}
          <div className="mobile-language">
            <span className="language-label">
              {t.language}
            </span>

            <div
              className="language-options"
              role="group"
              aria-label={t.language}
            >
              {renderLanguageButtons()}
            </div>
          </div>

          {/* LIÊN HỆ MOBILE */}
          <Link
            to="/contact"
            className="mobile-contact"
            onClick={closeMenu}
          >
            {t.contact}
            <ArrowRight size={17} />
          </Link>

          {/* ĐẶT TÀI XẾ MOBILE */}
          <button
            type="button"
            className="mobile-booking"
            onClick={handleBooking}
          >
            {t.booking}
            <ArrowRight size={17} />
          </button>
        </nav>

        {/* CỤM NÚT DESKTOP */}
        <div className="header-actions">
          <div
            className="language-switcher"
            role="group"
            aria-label={t.language}
          >
            {renderLanguageButtons()}
          </div>

          <Link
            to="/contact"
            className="header-contact"
            onClick={closeMenu}
          >
            {t.contact}
          </Link>

          <button
            type="button"
            className="booking-button"
            onClick={handleBooking}
          >
            {t.booking}

            <span className="booking-icon">
              <ArrowRight size={17} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export { translations };