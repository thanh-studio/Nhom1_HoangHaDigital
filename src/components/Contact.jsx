
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = ({ language = "vi" }) => {
  const vi = language === "vi";

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
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
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
            <span>✓</span>
            {vi ? "Tư vấn theo nhu cầu" : "Support tailored to your needs"}
          </div>

          <div className="contact-trust">
            <span>✓</span>
            {vi ? "Thông tin rõ ràng" : "Clear communication"}
          </div>
        </div>

        <div className="contact-hero-art">
          <div className="contact-art-circle">✉</div>
          <div className="contact-art-card">
            <span>💬</span>
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
        <div className="contact-info">
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
            <span className="contact-info-icon">📍</span>
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
            <span className="contact-info-icon">✉️</span>
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
            <span className="contact-info-icon">☎️</span>
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
            ← {vi ? "Quay về trang chủ" : "Back to home"}
          </Link>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
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
            <span>↗</span>
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
