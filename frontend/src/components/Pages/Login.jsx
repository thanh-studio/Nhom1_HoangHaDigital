import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CarFront,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
} from "lucide-react";

import "./Login.css";

export default function Login({ language = "vi" }) {
  const isVietnamese = language === "vi";
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const t = isVietnamese
    ? {
        badge: "Chào mừng trở lại",
        title: "Bắt đầu hành trình",
        titleAccent: "của bạn",
        subtitle:
          "Đăng nhập GoAnywhere để đặt xe, quản lý chuyến đi và tận hưởng hành trình thuận tiện hơn.",
        email: "Email",
        emailPlaceholder: "Nhập địa chỉ email",
        password: "Mật khẩu",
        passwordPlaceholder: "Nhập mật khẩu",
        remember: "Ghi nhớ đăng nhập",
        forgot: "Quên mật khẩu?",
        login: "Đăng nhập",
        loggingIn: "Đang xử lý...",
        noAccount: "Bạn chưa có tài khoản?",
        register: "Đăng ký ngay",
        secure: "Đăng nhập an toàn",
        secureText: "Thông tin của bạn được bảo vệ",
        feature1: "Đặt xe nhanh chóng",
        feature2: "Theo dõi chuyến đi",
        feature3: "Đồng hành mọi hành trình",
        emailRequired: "Vui lòng nhập địa chỉ email.",
        emailInvalid: "Địa chỉ email không hợp lệ.",
        passwordRequired: "Vui lòng nhập mật khẩu.",
        loginError: "Không thể đăng nhập lúc này. Vui lòng thử lại.",
      }
    : {
        badge: "Welcome back",
        title: "Start your journey",
        titleAccent: "with us",
        subtitle:
          "Sign in to GoAnywhere to book rides, manage your trips, and enjoy a smoother journey.",
        email: "Email address",
        emailPlaceholder: "Enter your email address",
        password: "Password",
        passwordPlaceholder: "Enter your password",
        remember: "Remember me",
        forgot: "Forgot password?",
        login: "Sign in",
        loggingIn: "Signing in...",
        noAccount: "Don't have an account?",
        register: "Create account",
        secure: "Secure sign in",
        secureText: "Your information is protected",
        feature1: "Book rides easily",
        feature2: "Track your trips",
        feature3: "Enjoy every journey",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please enter a valid email address.",
        passwordRequired: "Please enter your password.",
        loginError: "Unable to sign in. Please try again.",
      };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const email = formData.email.trim();

    if (!email) {
      setError(t.emailRequired);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.emailInvalid);
      return;
    }

    if (!formData.password) {
      setError(t.passwordRequired);
      return;
    }

    /*
      Giao diện hiện tại chưa kết nối API xác thực.
      Khi có backend, gọi API đăng nhập tại đây.
    */
    setLoading(true);

    try {
      // TODO: Gọi API đăng nhập Spring Boot tại đây.
      // Ví dụ:
      // const response = await fetch("http://localhost:8080/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email,
      //     password: formData.password,
      //     rememberMe,
      //   }),
      // });
      //
      // if (!response.ok) {
      //   throw new Error("LOGIN_FAILED");
      // }
      //
      // const data = await response.json();
      // Lưu thông tin xác thực theo cơ chế backend cung cấp.
      // navigate("/home");

      setError(
        isVietnamese
          ? "Giao diện chưa kết nối hệ thống đăng nhập. Vui lòng tích hợp API backend."
          : "Sign-in is not connected yet. Please integrate the backend API."
      );
    } catch {
      setError(t.loginError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-background-shape login-shape-one" />
      <div className="login-background-shape login-shape-two" />

      <div className="login-container">
        {/* KHU VỰC GIỚI THIỆU */}
        <section className="login-showcase">
          <Link
            to="/home"
            className="login-brand"
            aria-label="GoAnywhere - Trang chủ"
          >
            <span className="login-brand-icon">
              <CarFront size={28} strokeWidth={2.4} />
            </span>

            <span className="login-brand-name">
              Go<span>Anywhere</span>
            </span>
          </Link>

          <div className="login-showcase-content">
            <span className="login-eyebrow">
              <span className="login-eyebrow-dot" />
              {t.badge}
            </span>

            <h1>
              {t.title}
              <br />
              <span>{t.titleAccent}</span>
            </h1>

            <p className="login-showcase-description">
              {t.subtitle}
            </p>

            <div className="login-feature-list">
              <div className="login-feature-item">
                <span className="login-feature-icon">
                  <MapPin size={19} />
                </span>
                <span>{t.feature1}</span>
              </div>

              <div className="login-feature-item">
                <span className="login-feature-icon">
                  <Clock size={19} />
                </span>
                <span>{t.feature2}</span>
              </div>

              <div className="login-feature-item">
                <span className="login-feature-icon">
                  <ShieldCheck size={19} />
                </span>
                <span>{t.feature3}</span>
              </div>
            </div>
          </div>

          <div className="login-showcase-footer">
            <span className="login-footer-line" />
            {isVietnamese
              ? "Mỗi hành trình, một trải nghiệm tốt hơn."
              : "Every journey, a better experience."}
          </div>

          <div className="login-decoration-circle login-circle-one" />
          <div className="login-decoration-circle login-circle-two" />
        </section>

        {/* FORM ĐĂNG NHẬP */}
        <section className="login-form-section">
          <div className="login-form-wrapper">
            <div className="login-mobile-brand">
              <span className="login-brand-icon">
                <CarFront size={25} strokeWidth={2.4} />
              </span>
              <span className="login-brand-name">
                Go<span>Anywhere</span>
              </span>
            </div>

            <div className="login-heading">
              <span className="login-heading-label">
                {isVietnamese ? "TÀI KHOẢN CỦA BẠN" : "YOUR ACCOUNT"}
              </span>

              <h2>{t.login}</h2>

              <p>
                {isVietnamese
                  ? "Vui lòng nhập thông tin để tiếp tục."
                  : "Enter your details to continue."}
              </p>
            </div>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              <div className="login-field">
                <label htmlFor="login-email">{t.email}</label>

                <div className="login-input-wrapper">
                  <Mail size={19} className="login-input-icon" />

                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="login-field">
                <div className="login-password-label">
                  <label htmlFor="login-password">{t.password}</label>

                  <Link to="/forgot-password" className="login-forgot-link">
                    {t.forgot}
                  </Link>
                </div>

                <div className="login-input-wrapper">
                  <LockKeyhole size={19} className="login-input-icon" />

                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t.passwordPlaceholder}
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={
                      showPassword
                        ? isVietnamese
                          ? "Ẩn mật khẩu"
                          : "Hide password"
                        : isVietnamese
                          ? "Hiện mật khẩu"
                          : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span className="login-custom-checkbox" />
                <span>{t.remember}</span>
              </label>

              {error && (
                <div className="login-error-message" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="login-submit-button"
                disabled={loading}
              >
                <span>{loading ? t.loggingIn : t.login}</span>
                {!loading && <ArrowRight size={19} />}
              </button>
            </form>

            <div className="login-divider">
              <span />
              <span>
                {isVietnamese ? "HOẶC" : "OR"}
              </span>
              <span />
            </div>

            <p className="login-register-prompt">
              {t.noAccount}
              <Link to="/register" onClick={() => navigate("/register")}>
                {t.register}
              </Link>
            </p>

            <div className="login-security-note">
              <ShieldCheck size={17} />
              <div>
                <strong>{t.secure}</strong>
                <span>{t.secureText}</span>
              </div>
            </div>

            <Link to="/home" className="login-back-home">
              <ArrowRight size={15} className="login-back-arrow" />
              {isVietnamese ? "Quay về trang chủ" : "Back to home"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}