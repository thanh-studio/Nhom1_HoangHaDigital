import "./Footer.css";

const currentYear = new Date().getFullYear();

// TODO: Thay null bằng URL thật khi có trang dịch vụ tương ứng.
const services = [
  [null, "DriverX — Lái xe riêng", "DriverX — Private driver"],
  [null, "Lái xe theo giờ", "Hourly driver", true],
  [null, "Lái xe đi tỉnh", "Intercity driver", true],
  [null, "Lái xe cho Sếp", "Executive driver", true],
  [null, "Lái xe gia đình", "Family driver", true],
  [null, "Lái xe đi đăng kiểm", "Vehicle inspection driver", true],
  [null, "Xe Hợp Đồng 16–45 Chỗ", "16–45 Seat Charter Vehicles"],
  [null, "Xe đám cưới", "Wedding vehicles", true],
  [null, "Xe sự kiện", "Event vehicles", true],
  [null, "Xe công ty / đoàn", "Company / group vehicles", true],
  [null, "Xe du lịch đoàn", "Group travel", true],
  [null, "Xe sân bay", "Airport transfers", true],
  ["#business", "Hub Doanh Nghiệp", "Business Hub"],
  [null, "Xe Doanh Nghiệp", "Business vehicles", true],
  [null, "Lái xe cho Sếp", "Executive driver", true],
  [null, "Valet Parking", "Valet Parking", true],
  [null, "Testing Car", "Testing Car", true],
  [null, "Tải Ứng Dụng", "Download the App"],
];
// TODO: Bổ sung URL đăng ký, đào tạo và các trang thông tin đối tác.
const partners = [
  [null, "Đăng Ký Làm Lái Xe", "Become a Driver"],
  [null, "Đối Tác Nhà Xe", "Transport Partners"],
  [null, "Đào Tạo Miễn Phí", "Free Training"],
  [null, "Câu Hỏi Thường Gặp", "Frequently Asked Questions"],
  [null, "Blog", "Blog"],
  [null, "Đánh Giá Dịch Vụ", "Service Reviews"],
  ["#company", "Về Chúng Tôi", "About Us"],
  [null, "Bộ Nhận Diện Thương Hiệu", "Brand Identity"],
];
// TODO: Bổ sung URL các trang chính sách khi được triển khai.
const policies = [
  [null, "Điều khoản dịch vụ", "Terms of Service"],
  [null, "Chính sách hợp tác", "Partnership Policy"],
  [null, "Chính sách bảo mật", "Privacy Policy"],
  [null, "Quy tắc ứng xử", "Code of Conduct"],
];
const quickLinks = [
  ["#personal", "Thuê Lái Xe", "Hire a Driver"],
  [null, "Xe Hợp Đồng", "Charter Vehicles"],
  ["#business", "Doanh Nghiệp", "Business"],
  [null, "Valet Parking", "Valet Parking"],
  [null, "Testing Car", "Testing Car"],
  [null, "Thanh toán", "Payment"],
  [null, "Bảng giá", "Pricing"],
  [null, "Driver Services (EN)", "Driver Services (EN)"],
  [null, "드라이버X (KO)", "드라이버X (KO)"],
  [null, "ĐẠI SỨ 2026", "AMBASSADOR 2026"],
];

function LinkColumn({ title, items, english, variant }) {
  return (
    <nav className={`footer-column ${variant || ""}`} aria-label={title}>
      <h2>{title}</h2>
      <ul>
        {items.map(([path, vi, en, nested], index) => (
          <li key={`${path}-${index}`} className={nested ? "footer-nested" : undefined}>
            {path ? (
              <a href={path}>
                <span aria-hidden="true">{nested ? "·" : "›"}</span>
                {english ? en : vi}
              </a>
            ) : (
              // TODO: Chỉ hiển thị nhãn, gắn liên kết khi có URL thật.
              <span className="footer-link-label">
                <span aria-hidden="true">{nested ? "·" : "›"}</span>{english ? en : vi}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function AppCard({ driver = false, english }) {
  const title = driver
    ? (english ? "Become a driver" : "Đăng ký làm lái xe")
    : (english ? "GOChapa App" : "Ứng dụng GOChapa");

  return (
    <article className={`footer-app-card ${driver ? "footer-driver-card" : ""}`}>
      <h2>{title}</h2>
      <span className="footer-app-badge">{driver ? "DRIVERX" : (english ? "FREE" : "MIỄN PHÍ")}</span>
      <div className="footer-app-preview" aria-hidden="true">
        <span>GO</span>
        <strong>{driver ? "Driver" : "GOChapa"}</strong>
      </div>
      <div className="footer-store-links">
        {/* TODO: Gắn URL Google Play / App Store khi ứng dụng của project sẵn sàng. */}
        <img src="/images/google-play.png" alt="Google Play" loading="lazy" />
        <img src="/images/app-store.png" alt="App Store" loading="lazy" />
      </div>
      <p>{driver
        ? (english ? "Flexible work · Earn more" : "Kiếm tiền linh hoạt - Thu nhập cao")
        : (english ? "Hire a driver · Safe journeys · 24/7" : "Thuê lái xe · Lái xe hộ · An toàn · 24/7")}</p>
    </article>
  );
}

export default function Footer({ language = "vi" }) {
  const english = language === "en";

  return (
    <footer className="site-footer">
      {/* TODO: Gắn URL chương trình hợp tác khi có trang tương ứng. */}
      <div className="footer-ambassador">
        <span className="footer-ambassador-icon" aria-hidden="true">↗</span>
        <span className="footer-ambassador-copy">
          <strong>{english ? "BECOME A PARTNER — Grow with GOChapa!" : "TRỞ THÀNH ĐỐI TÁC — Đồng hành cùng GOChapa!"}</strong>
          <span>{english ? "Connect with us to explore partnership opportunities" : "Kết nối với chúng tôi để tìm hiểu cơ hội hợp tác"}</span>
        </span>
        <span className="footer-ambassador-cta">{english ? "Join now" : "Tham gia ngay"} <span aria-hidden="true">→</span></span>
      </div>

      <div className="footer-apps">
        <div className="footer-container footer-app-grid">
          <AppCard english={english} />
          <AppCard driver english={english} />
        </div>
      </div>

      <div className="footer-info">
        <div className="footer-container">
          <div className="footer-info-grid">
            <div className="footer-company">
              <a href="#home" aria-label={english ? "GOChapa home" : "Trang chủ GOChapa"}>
                <span className="footer-brand"><span className="logo-symbol">GO</span>GOChapa</span>
              </a>
              <p className="footer-company-name">{english ? "COMPANY NAME" : "TÊN DOANH NGHIỆP"}</p>
              <p>{english ? "Professional driver services for individuals, businesses and events." : "Dịch vụ tài xế chuyên nghiệp dành cho cá nhân, doanh nghiệp và sự kiện."}</p>
              <address>
                <a href="#company">{english ? "Company information" : "Thông tin doanh nghiệp"}</a>
                <a href="#contact">{english ? "Contact us" : "Liên hệ với chúng tôi"}</a>
                <a href="#booking">{english ? "Book a driver" : "Đặt tài xế"}</a>
              </address>
            </div>
            <LinkColumn title={english ? "Services" : "Dịch Vụ"} items={services} english={english} variant="footer-services" />
            <LinkColumn title={english ? "Partners" : "Đối Tác"} items={partners} english={english} />
            <LinkColumn title={english ? "Policies" : "Chính sách"} items={policies} english={english} />
          </div>
          <div className="footer-bottom">
            <nav className="footer-quick-links" aria-label={english ? "More links" : "Liên kết khác"}>
              {quickLinks.map(([path, vi, en], index) => (
                path ? <a key={`${path}-${index}`} href={path}>{english ? en : vi}</a>
                  // TODO: Bổ sung URL thật cho các mục chưa có trang đích.
                  : <span key={`pending-${index}`}>{english ? en : vi}</span>
              ))}
            </nav>
            <p>© {currentYear} GOChapa. {english ? "All rights reserved." : "Bảo lưu mọi quyền."}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
