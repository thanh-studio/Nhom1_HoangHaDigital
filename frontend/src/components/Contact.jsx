
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  Send,
} from "lucide-react";
import useScrollReveal from "./useScrollReveal";
import "./Contact.css";

const Contact = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Gửi form đến API backend khi đã có endpoint.
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const services = vi
    ? [
        { value: "personal", label: "Dịch vụ cá nhân" },
        { value: "business", label: "Dịch vụ doanh nghiệp" },
        { value: "events", label: "Dịch vụ sự kiện" },
        { value: "automotive", label: "Dịch vụ ô tô" },
        { value: "driver", label: "Dịch vụ tài xế" },
        { value: "other", label: "Khác" },
      ]
    : [
        { value: "personal", label: "Personal services" },
        { value: "business", label: "Business services" },
        { value: "events", label: "Event services" },
        { value: "automotive", label: "Automotive services" },
        { value: "driver", label: "Driver services" },
        { value: "other", label: "Other" },
      ];

  return (
    <main className="contact-page" ref={revealRef}>
      <section className="contact-hero">
        <div className="contact-hero-content" data-reveal="left">
          <span className="contact-eyebrow">
            {vi ? "LIÊN HỆ GoAnywhere" : "CONTACT GoAnywhere"}
          </span>

          <h1>
            {vi ? "Chúng tôi luôn" : "We're here"}
            <span>
              {vi ? " sẵn sàng hỗ trợ bạn." : " to help you."}
            </span>
          </h1>

          <p>
            {vi
              ? "Chia sẻ nhu cầu của bạn để chúng tôi có thể hỗ trợ và tìm giải pháp phù hợp."
              : "Tell us what you need so we can help you explore the right solution."}
          </p>

          <div className="contact-trust">
            <span><Check size={15} strokeWidth={3} /></span>
            {vi ? "Tư vấn theo nhu cầu" : "Support tailored to your needs"}
          </div>

          <div className="contact-trust">
            <span><Check size={15} strokeWidth={3} /></span>
            {vi ? "Thông tin rõ ràng" : "Clear communication"}
          </div>
        </div>

        <div
          className="contact-hero-art"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="contact-art-circle">
            <svg
              viewBox="0 0 200 200"
              role="img"
              aria-label={vi ? "Tài xế GoAnywhere sẵn sàng hỗ trợ" : "GoAnywhere driver ready to help"}
            >
              <circle cx="30" cy="100" r="1.5" fill="#fff" opacity=".4" />
              <circle cx="170" cy="100" r="2" fill="#fff" opacity=".4" />
              <circle cx="100" cy="28" r="2" fill="#fff" opacity=".5" />
              <path d="M50 74 Q62 98 74 104" stroke="#fff" strokeWidth="2" strokeDasharray="4 5" fill="none" opacity=".45" strokeLinecap="round" />
              <path d="M48 36 a12 12 0 0 1 12 12 c0 10 -12 22 -12 22 s-12 -12 -12 -22 a12 12 0 0 1 12 -12 Z" fill="#ff8a3d" />
              <circle cx="48" cy="48" r="4.5" fill="#fff" />
              <rect x="116" y="28" width="62" height="38" rx="15" fill="#fff" />
              <path d="M128 64 L120 78 L144 64 Z" fill="#fff" />
              <circle cx="134" cy="47" r="4" fill="#6035a5" />
              <circle cx="147" cy="47" r="4" fill="#ff8a3d" />
              <circle cx="160" cy="47" r="4" fill="#6035a5" />
              <g transform="translate(10 14) scale(.9)">
                <polygon points="88,118 112,118 175,200 25,200" fill="#fff" opacity=".12" />
                <path d="M100 160 V205" stroke="#fff" strokeWidth="3" strokeDasharray="8 7" opacity=".5" />
                <rect x="52" y="148" width="20" height="24" rx="5" fill="#2a1450" />
                <rect x="128" y="148" width="20" height="24" rx="5" fill="#2a1450" />
                <ellipse cx="58" cy="104" rx="9" ry="5" fill="#fff" />
                <ellipse cx="142" cy="104" rx="9" ry="5" fill="#fff" />
                <path d="M64 112 L77 78 Q79 71 87 71 L113 71 Q121 71 123 78 L136 112 Z" fill="#fff" />
                <path d="M73 108 L84 82 Q85 78 90 78 L110 78 Q115 78 116 82 L127 108 Z" fill="#4a2589" />
                <circle cx="100" cy="91" r="6.5" fill="#f2eaff" />
                <path d="M86 108 Q86 99 100 99 Q114 99 114 108 Z" fill="#f2eaff" />
                <path d="M89 108 Q100 98 111 108" stroke="#ff8a3d" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <rect x="44" y="106" width="112" height="50" rx="14" fill="#fff" />
                <rect x="54" y="118" width="24" height="11" rx="5.5" fill="#ff8a3d" />
                <rect x="122" y="118" width="24" height="11" rx="5.5" fill="#ff8a3d" />
                <rect x="84" y="120" width="32" height="7" rx="3.5" fill="#d9c8f5" />
                <rect x="87" y="136" width="26" height="11" rx="3" fill="#6035a5" />
              </g>
            </svg>
          </div>
          <div className="contact-art-card">
            <span><MessagesSquare size={22} /></span>
            <div>
              <strong>
                {vi ? "Hãy kết nối" : "Let's connect"}
              </strong>
              <small>
                {vi ? "Chúng tôi sẵn sàng lắng nghe" : "We're ready to listen"}
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-info" data-reveal="left">
          <span className="contact-eyebrow">
            {vi ? "KẾT NỐI VỚI CHÚNG TÔI" : "GET IN TOUCH"}
          </span>

          <h2>
            {vi ? "Hãy bắt đầu cuộc trò chuyện" : "Let's start a conversation"}
          </h2>

          <p>
            {vi
              ? "Điền thông tin vào biểu mẫu. Đội ngũ GoAnywhere sẽ có cơ sở để tìm hiểu yêu cầu của bạn."
              : "Complete the form to tell the GoAnywhere team more about your inquiry."}
          </p>

          <div className="contact-info-card">
            <span className="contact-info-icon"><MapPin size={21} /></span>
            <div>
              <strong>{vi ? "Địa chỉ" : "Address"}</strong>
              <p>
                {vi
                  ? "Vui lòng liên hệ để biết thông tin địa điểm."
                  : "Contact us for location details."}
              </p>
            </div>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-icon"><Mail size={21} /></span>
            <div>
              <strong>{vi ? "Email" : "Email"}</strong>
              <p>
                {vi
                  ? "Vui lòng cập nhật email liên hệ chính thức."
                  : "Please add your official contact email."}
              </p>
            </div>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-icon"><Phone size={21} /></span>
            <div>
              <strong>{vi ? "Điện thoại" : "Phone"}</strong>
              <p>
                {vi
                  ? "Vui lòng cập nhật số điện thoại liên hệ."
                  : "Please add your contact phone number."}
              </p>
            </div>
          </div>

          <Link to="/company" className="contact-back-link">
            <ArrowLeft size={18} />
            {vi ? "Quay về trang chủ" : "Back to home"}
          </Link>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-reveal="right"
          style={{ "--reveal-delay": "150ms" }}
        >
          <h2>{vi ? "Gửi yêu cầu" : "Send an inquiry"}</h2>

          <p className="contact-form-description">
            {vi
              ? "Vui lòng điền đầy đủ thông tin có dấu *."
              : "Please complete all fields marked with *."}
          </p>

          {submitted && (
            <div className="contact-success" role="status">
              {vi
                ? "Biểu mẫu đã được kiểm tra thành công. Lưu ý: dữ liệu chưa được gửi đến máy chủ."
                : "The form passed validation. Note: the data has not been sent to a server."}
            </div>
          )}

          <div className="contact-form-grid">
            <div className="contact-field">
              <label htmlFor="contact-name">
                {vi ? "Họ và tên *" : "Full name *"}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={vi ? "Nhập họ và tên" : "Enter your name"}
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-phone">
                {vi ? "Số điện thoại *" : "Phone number *"}
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={vi ? "Nhập số điện thoại" : "Enter your phone"}
                autoComplete="tel"
                required
              />
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="contact-email">
                {vi ? "Email *" : "Email *"}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={vi ? "example@email.com" : "example@email.com"}
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="contact-service">
                {vi ? "Dịch vụ quan tâm *" : "Service of interest *"}
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  {vi ? "Chọn dịch vụ" : "Select a service"}
                </option>

                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="contact-message">
                {vi ? "Nội dung yêu cầu *" : "Your message *"}
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  vi
                    ? "Mô tả nhu cầu của bạn..."
                    : "Tell us about your needs..."
                }
                rows={5}
                required
              />
            </div>
          </div>

          <button type="submit" className="contact-submit">
            {vi ? "Gửi yêu cầu" : "Submit inquiry"}
            <Send size={18} />
          </button>

          <p className="contact-form-note">
            {vi
              ? "Thông tin sẽ được sử dụng để hỗ trợ yêu cầu của bạn khi hệ thống gửi dữ liệu được kết nối."
              : "Your information can be used to assist your inquiry once form submission is connected."}
          </p>
        </form>
      </section>
    </main>
  );
};

export default Contact;
