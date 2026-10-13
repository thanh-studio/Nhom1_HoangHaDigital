import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CarFront,
  UserRound,
  Mail,
  Phone,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import "./Register.css";

export default function Register({ language = "vi" }) {
  const isVietnamese = language === "vi";
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const t = isVietnamese
    ? {
        badge: "Gia nhập GoAnywhere",
        title: "Tạo tài khoản",
        titleAccent: "của bạn",
        subtitle:
          "Đăng ký ngay để đặt xe dễ dàng và quản lý mọi hành trình của bạn.",
        fullName: "Họ và tên",
        fullNamePlaceholder: "Nhập họ và tên của bạn",
        email: "Địa chỉ email",
        emailPlaceholder: "example@email.com",
        phone: "Số điện thoại",
        phonePlaceholder: "Nhập số điện thoại",
        password: "Mật khẩu",
        passwordPlaceholder: "Tạo mật khẩu",
        confirmPassword: "Xác nhận mật khẩu",
        confirmPasswordPlaceholder: "Nhập lại mật khẩu",
        termsStart: "Tôi đồng ý với",
        terms: "Điều khoản sử dụng",
        and: "và",
        privacy: "Chính sách bảo mật",
        register: "Tạo tài khoản",
        registering: "Đang xử lý...",
        haveAccount: "Bạn đã có tài khoản?",
        login: "Đăng nhập",
        secure: "Thông tin được bảo vệ",
        secureText: "Chúng tôi luôn chú trọng bảo mật tài khoản của bạn.",
        feature1: "Đặt xe nhanh chóng, tiện lợi",
        feature2: "Quản lý hành trình dễ dàng",
        feature3: "Trải nghiệm dịch vụ chuyên nghiệp",
        nameRequired: "Vui lòng nhập họ và tên.",
        emailRequired: "Vui lòng nhập địa chỉ email.",
        emailInvalid: "Địa chỉ email không hợp lệ.",
        phoneRequired: "Vui lòng nhập số điện thoại.",
        phoneInvalid: "Số điện thoại không hợp lệ.",
        passwordRequired: "Vui lòng nhập mật khẩu.",
        passwordShort: "Mật khẩu cần có ít nhất 8 ký tự.",
        passwordMismatch: "Mật khẩu xác nhận không khớp.",
        termsRequired: "Vui lòng đồng ý với điều khoản và chính sách.",
        registerError: "Đăng ký chưa thành công. Vui lòng thử lại.",
        notConnected:
          "Giao diện chưa kết nối API đăng ký. Vui lòng tích hợp backend.",
      }
    : {
        badge: "Join GoAnywhere",
        title: "Create your",
        titleAccent: "account",
        subtitle:
          "Sign up to book rides easily and manage all your journeys.",
        fullName: "Full name",
        fullNamePlaceholder: "Enter your full name",
        email: "Email address",
        emailPlaceholder: "example@email.com",
        phone: "Phone number",
        phonePlaceholder: "Enter your phone number",
        password: "Password",
        passwordPlaceholder: "Create a password",
        confirmPassword: "Confirm password",
        confirmPasswordPlaceholder: "Re-enter your password",
        termsStart: "I agree to the",
        terms: "Terms of Service",
        and: "and",
        privacy: "Privacy Policy",
        register: "Create account",
        registering: "Processing...",
        haveAccount: "Already have an account?",
        login: "Sign in",
        secure: "Your information is protected",
        secureText: "We take your account security seriously.",
        feature1: "Book rides quickly and easily",
        feature2: "Manage your journeys effortlessly",
        feature3: "Enjoy professional service",
        nameRequired: "Please enter your full name.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please enter a valid email address.",
        phoneRequired: "Please enter your phone number.",
        phoneInvalid: "Please enter a valid phone number.",
        passwordRequired: "Please enter a password.",
        passwordShort: "Password must contain at least 8 characters.",
        passwordMismatch: "Passwords do not match.",
        termsRequired: "Please accept the terms and privacy policy.",
        registerError: "Registration failed. Please try again.",
        notConnected:
          "Registration is not connected to the backend API yet.",
      };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!fullName) {
      setError(t.nameRequired);
      return;
    }

    if (!email) {
      setError(t.emailRequired);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.emailInvalid);
      return;
    }

    if (!phone) {
      setError(t.phoneRequired);
      return;
    }

    if (!/^[0-9+\s().-]{9,15}$/.test(phone)) {
      setError(t.phoneInvalid);
      return;
    }

    if (!formData.password) {
      setError(t.passwordRequired);
      return;
    }

    if (formData.password.length < 8) {
      setError(t.passwordShort);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError(t.passwordMismatch);
      return;
    }

    if (!agreeTerms) {
      setError(t.termsRequired);
      return;
    }

    setLoading(true);

    try {
      /*
       * TODO: Kết nối API đăng ký của Spring Boot.
       *
       * Ví dụ:
       * const response = await fetch(
       *   "http://localhost:8080/api/auth/register",
       *   {
       *     method: "POST",
       *     headers: { "Content-Type": "application/json" },
       *     body: JSON.stringify({
       *       fullName,
       *       email,
       *       phone,
       *       password: formData.password,
       *     }),
       *   }
       * );
       *
       * if (!response.ok) {
       *   throw new Error("REGISTER_FAILED");
       * }
       *
       * setSuccess("Đăng ký thành công!");
       * navigate("/login");
       */

      setError(t.notConnected);
    } catch {
      setError(t.registerError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="register-page">
      <div className="register-bg-circle register-bg-circle-one" />
      <div className="register-bg-circle register-bg-circle-two" />

      <div className="register-container">
        {/* KHU VỰC GIỚI THIỆU */}
        <section className="register-showcase">
          <Link
            to="/home"
            className="register-brand"
            aria-label="GoAnywhere - Trang chủ"
          >
            <span className="register-brand-icon">
              <CarFront size={28} strokeWidth={2.4} />
            </span>

            <span className="register-brand-name">
              Go<span>Anywhere</span>
            </span>
          </Link>

          <div className="register-showcase-content">
            <span className="register-eyebrow">
              <span className="register-eyebrow-dot" />
              {t.badge}
            </span>

            <h1>
              {t.title}
              <br />
              <span>{t.titleAccent}</span>
            </h1>

            <p className="register-showcase-description">
              {t.subtitle}
            </p>

            <div className="register-feature-list">
              <div className="register-feature-item">
                <span className="register-feature-check">
                  <CheckCircle2 size={19} />
                </span>
                {t.feature1}
              </div>

              <div className="register-feature-item">
                <span className="register-feature-check">
                  <CheckCircle2 size={19} />
                </span>
                {t.feature2}
              </div>

              <div className="register-feature-item">
                <span className="register-feature-check">
                  <CheckCircle2 size={19} />
                </span>
                {t.feature3}
              </div>
            </div>
          </div>

          <div className="register-showcase-footer">
            <span className="register-footer-line" />
            {isVietnamese
              ? "Cùng bạn đi xa hơn, mỗi ngày."
              : "Taking you further, every day."}
          </div>

          <div className="register-decoration register-decoration-one" />
          <div className="register-decoration register-decoration-two" />
        </section>

        {/* FORM ĐĂNG KÝ */}
        <section className="register-form-section">
          <div className="register-form-wrapper">
            <div className="register-mobile-brand">
              <span className="register-brand-icon">
                <CarFront size={25} strokeWidth={2.4} />
              </span>

              <span className="register-brand-name">
                Go<span>Anywhere</span>
              </span>
            </div>

            <div className="register-heading">
              <span className="register-heading-label">
                {isVietnamese ? "BẮT ĐẦU NGAY HÔM NAY" : "GET STARTED TODAY"}
              </span>

              <h2>{t.register}</h2>

              <p>
                {isVietnamese
                  ? "Điền thông tin bên dưới để tạo tài khoản."
                  : "Fill in the details below to create an account."}
              </p>
            </div>

            <form
              className="register-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* HỌ VÀ TÊN */}
              <div className="register-field">
                <label htmlFor="register-fullName">{t.fullName}</label>

                <div className="register-input-wrapper">
                  <UserRound
                    size={18}
                    className="register-input-icon"
                  />

                  <input
                    id="register-fullName"
                    type="text"
                    name="fullName"
                    placeholder={t.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="register-field">
                <label htmlFor="register-email">{t.email}</label>

                <div className="register-input-wrapper">
                  <Mail size={18} className="register-input-icon" />

                  <input
                    id="register-email"
                    type="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>
              </div>

              {/* SỐ ĐIỆN THOẠI */}
              <div className="register-field">
                <label htmlFor="register-phone">{t.phone}</label>

                <div className="register-input-wrapper">
                  <Phone size={18} className="register-input-icon" />

                  <input
                    id="register-phone"
                    type="tel"
                    name="phone"
                    placeholder={t.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    maxLength={15}
                    required
                  />
                </div>
              </div>

              {/* MẬT KHẨU */}
              <div className="register-field">
                <label htmlFor="register-password">{t.password}</label>

                <div className="register-input-wrapper">
                  <LockKeyhole
                    size={18}
                    className="register-input-icon"
                  />

                  <input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={t.passwordPlaceholder}
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
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
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                <span className="register-field-hint">
                  {isVietnamese
                    ? "Mật khẩu cần có ít nhất 8 ký tự."
                    : "Password must contain at least 8 characters."}
                </span>
              </div>

              {/* XÁC NHẬN MẬT KHẨU */}
              <div className="register-field">
                <label htmlFor="register-confirmPassword">
                  {t.confirmPassword}
                </label>

                <div className="register-input-wrapper">
                  <LockKeyhole
                    size={18}
                    className="register-input-icon"
                  />

                  <input
                    id="register-confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder={t.confirmPasswordPlaceholder}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword((previous) => !previous)
                    }
                    aria-label={
                      showConfirmPassword
                        ? isVietnamese
                          ? "Ẩn mật khẩu xác nhận"
                          : "Hide confirmation password"
                        : isVietnamese
                          ? "Hiện mật khẩu xác nhận"
                          : "Show confirmation password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* ĐIỀU KHOẢN */}
              <label className="register-terms">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(event) =>
                    setAgreeTerms(event.target.checked)
                  }
                />

                <span className="register-custom-checkbox" />

                <span className="register-terms-text">
                  {t.termsStart}{" "}
                  <Link to="/terms" onClick={(event) => event.stopPropagation()}>
                    {t.terms}
                  </Link>{" "}
                  {t.and}{" "}
                  <Link
                    to="/privacy"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {t.privacy}
                  </Link>
                </span>
              </label>

              {error && (
                <div className="register-message register-error" role="alert">
                  {error}
                </div>
              )}

              {success && (
                <div
                  className="register-message register-success"
                  role="status"
                >
                  {success}
                </div>
              )}

              <button
                type="submit"
                className="register-submit-button"
                disabled={loading}
              >
                <span>{loading ? t.registering : t.register}</span>
                {!loading && <ArrowRight size={19} />}
              </button>
            </form>

            <div className="register-login-prompt">
              {t.haveAccount}
              <Link to="/login">{t.login}</Link>
            </div>

            <div className="register-security-note">
              <ShieldCheck size={18} />

              <div>
                <strong>{t.secure}</strong>
                <span>{t.secureText}</span>
              </div>
            </div>

            <Link to="/home" className="register-back-home">
              <ArrowRight size={15} className="register-back-arrow" />
              {isVietnamese ? "Quay về trang chủ" : "Back to home"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
