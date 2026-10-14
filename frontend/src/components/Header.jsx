import { useState, useEffect, useRef } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  CarFront,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  UserRound,
  UserRoundPlus,
  Languages,
  Clock3,
  BriefcaseBusiness,
  Plane,
  CalendarDays,
  Search,
  CircleHelp,
  Tag,
} from "lucide-react";

import "./Header.css";

export const translations = {
  vi: {
    home: "Trang chủ",
    booking: "Đặt xe",
    trips: "Chuyến đi",
    services: "Dịch vụ",
    pricing: "Bảng giá",
    support: "Hỗ trợ",
    login: "Đăng nhập",
    register: "Đăng ký",
    tagline: "Đồng hành trên mọi hành trình",
    personal: "Thuê tài xế cá nhân",
    hourly: "Thuê tài xế theo giờ",
    airport: "Đưa đón sân bay",
    business: "Dịch vụ doanh nghiệp",
    events: "Xe sự kiện",
    driver: "Dịch vụ tài xế",
    search: "Tìm kiếm...",
    language: "Ngôn ngữ",
    bookNow: "Đặt xe ngay",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },
  en: {
    home: "Home",
    booking: "Book a Ride",
    trips: "Trips",
    services: "Services",
    pricing: "Pricing",
    support: "Support",
    login: "Log in",
    register: "Sign up",
    tagline: "Your trusted travel companion",
    personal: "Personal Driver",
    hourly: "Hourly Driver",
    airport: "Airport Transfer",
    business: "Business Services",
    events: "Event Transportation",
    driver: "Driver Services",
    search: "Search...",
    language: "Language",
    bookNow: "Book now",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

const serviceItems = [
  {
    key: "personal",
    path: "/personal",
    icon: UserRound,
  },
  {
    key: "hourly",
    path: "/driver",
    icon: Clock3,
  },
  {
    key: "airport",
    path: "/automotive",
    icon: Plane,
  },
  {
    key: "business",
    path: "/business",
    icon: BriefcaseBusiness,
  },
  {
    key: "events",
    path: "/events",
    icon: CalendarDays,
  },
];

export default function Header({
  language: languageProp,
  onLanguageChange,
}) {
  const [localLanguage, setLocalLanguage] = useState("vi");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const servicesRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const language = languageProp ?? localLanguage;
  const t = translations[language] || translations.vi;

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "en"
        ? "GoAnywhere | Book a Professional Driver"
        : "GoAnywhere | Đặt xe công nghệ";

  }, [language]);

  useEffect(() => {
    closeMenu();
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        setSearchOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const changeLanguage = (nextLanguage) => {
    if (!["vi", "en"].includes(nextLanguage)) return;

    if (languageProp === undefined) {
      setLocalLanguage(nextLanguage);
    }

    onLanguageChange?.(nextLanguage);
  };

  const goToSection = (sectionId) => {
    closeMenu();

    if (location.pathname !== "/home") {
      navigate(`/home#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(
        null,
        "",
        `/home${location.search}#${sectionId}`
      );
    } else {
      navigate(`/home#${sectionId}`);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const keyword = searchText.trim();
    if (!keyword) return;

    navigate(`/home?search=${encodeURIComponent(keyword)}`);
    setSearchText("");
    setSearchOpen(false);
    closeMenu();
  };

  const renderLanguageSwitch = (mobile = false) => (
    <div
      className={mobile ? "mobile-language-switch" : "language-switch"}
      role="group"
      aria-label={t.language}
    >
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
    </div>
  );

  return (
    <header className="site-header">
      <div className="header-container">
        {/* LOGO */}
        <Link
          to="/home"
          className="header-logo"
          onClick={closeMenu}
          aria-label="GoAnywhere - Trang chủ"
        >
          <span className="header-logo-icon">
            <CarFront size={29} strokeWidth={2.3} />
          </span>

          <span className="header-logo-text">
            <span className="header-logo-name">
              Go<span>Anywhere</span>
            </span>
            <span className="header-logo-tagline">
              {t.tagline}
            </span>
          </span>
        </Link>

        {/* NÚT MENU MOBILE */}
        <button
          type="button"
          className="header-menu-toggle"
          onClick={() => {
            setMenuOpen((value) => !value);
            setServicesOpen(false);
          }}
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* THANH ĐIỀU HƯỚNG */}
        <nav
          id="header-navigation"
          className={`header-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/home"
            end
            className={({ isActive }) =>
              `header-nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            {t.home}
          </NavLink>

         <NavLink
            to="/booking"
            className={({ isActive }) =>
              `header-nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            {t.booking}
          </NavLink>

          <NavLink
            to="/trips"
            className={({ isActive }) =>
              `header-nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            {t.trips}
          </NavLink>

          {/* DROPDOWN DỊCH VỤ */}
          <div
            ref={servicesRef}
            className={`header-services ${
              servicesOpen ? "dropdown-open" : ""
            }`}
          >
            <button
              type="button"
              className="header-nav-link header-services-trigger"
              onClick={() =>
                setServicesOpen((value) => !value)
              }
              aria-expanded={servicesOpen}
              aria-controls="header-services-dropdown"
            >
              <span>{t.services}</span>
              <ChevronDown
                size={16}
                className="header-chevron"
              />
            </button>

            <div
              id="header-services-dropdown"
              className="header-services-dropdown"
              aria-hidden={!servicesOpen}
              inert={!servicesOpen}
            >
              <div className="dropdown-heading">
                <span className="dropdown-heading-icon">
                  <CarFront size={20} />
                </span>
                <span>
                  <strong>{t.services}</strong>
                  <small>
                    {language === "en"
                      ? "Choose the right journey"
                      : "Chọn dịch vụ phù hợp"}
                  </small>
                </span>
              </div>

              {serviceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.key}
                    to={item.path}
                    className="header-dropdown-link"
                    onClick={closeMenu}
                    tabIndex={servicesOpen ? 0 : -1}
                  >
                    <span className="dropdown-item-icon">
                      <Icon size={18} />
                    </span>
                    <span>{t[item.key]}</span>
                    <ArrowRight
                      size={15}
                      className="dropdown-item-arrow"
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `header-nav-link header-nav-button ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            <Tag size={16} className="mobile-nav-icon" />
            {t.pricing}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `header-nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            <CircleHelp size={16} className="mobile-nav-icon" />
            {t.support}
          </NavLink>

          {/* NGÔN NGỮ MOBILE */}
          <div className="header-mobile-language">
            <span>
              <Languages size={17} />
              {t.language}
            </span>
            {renderLanguageSwitch(true)}
          </div>

          {/* TÀI KHOẢN MOBILE */}
          <div className="header-mobile-auth">
            <Link
              to="/login"
              className="header-login-mobile"
              onClick={closeMenu}
            >
              <UserRound size={17} />
              {t.login}
            </Link>

            <Link
              to="/register"
              className="header-register-mobile"
              onClick={closeMenu}
            >
              <UserRoundPlus size={17} />
              {t.register}
            </Link>
          </div>
        </nav>

        {/* CÔNG CỤ DESKTOP */}
        <div className="header-actions">
          {/* TÌM KIẾM */}
          <div
            ref={searchRef}
            className={`header-search ${
              searchOpen ? "search-expanded" : ""
            }`}
          >
            {searchOpen && (
              <form
                className="header-search-form"
                onSubmit={handleSearch}
              >
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchText}
                  onChange={(event) =>
                    setSearchText(event.target.value)
                  }
                  placeholder={t.search}
                  aria-label={t.search}
                />
              </form>
            )}

            <button
              type="button"
              className="header-search-button"
              aria-label={t.search}
              aria-expanded={searchOpen}
              onClick={() =>
                setSearchOpen((value) => !value)
              }
            >
              {searchOpen ? <X size={19} /> : <Search size={19} />}
            </button>
          </div>

          {renderLanguageSwitch()}

          <Link to="/login" className="header-login">
            <UserRound size={17} />
            <span>{t.login}</span>
          </Link>

        </div>
      </div>
    </header>
  );
}