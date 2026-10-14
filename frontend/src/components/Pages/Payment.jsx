
import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  CalendarDays,
  CarFront,
  Check,
  CheckCircle2,
  Clock3,
  CreditCard,
  Headphones,
  LockKeyhole,
  MapPin,
  MapPinned,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Wallet,
  XCircle,
} from "lucide-react";

import "./Payment.css";

const PAYMENT_METHODS = [
  {
    id: "cash",
    name: "Tiền mặt",
    description: "Thanh toán trực tiếp cho tài xế",
    icon: Banknote,
  },
  {
    id: "bank",
    name: "Chuyển khoản QR",
    description: "Quét mã bằng ứng dụng ngân hàng",
    icon: QrCode,
  },
  {
    id: "vnpay",
    name: "VNPay",
    description: "Thanh toán qua cổng VNPay",
    icon: CreditCard,
  },
  {
    id: "momo",
    name: "MoMo",
    description: "Thanh toán bằng ví điện tử MoMo",
    icon: Wallet,
  },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);

const formatDate = (value) => {
  if (!value) return "Chưa chọn thời gian";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getBookingData = (bookingId) => {
  // Dữ liệu minh họa cho frontend khi chưa kết nối backend.
  // Khi tích hợp API, thay phần này bằng dữ liệu đơn đặt xe thật.
  try {
    const savedBooking = sessionStorage.getItem("goanywhere_booking");

    if (savedBooking) {
      const parsed = JSON.parse(savedBooking);

      if (
        !bookingId ||
        !parsed.id ||
        String(parsed.id) === String(bookingId)
      ) {
        return parsed;
      }
    }
  } catch {
    // Dùng dữ liệu mẫu nếu không đọc được sessionStorage.
  }

  return {
    id: bookingId || "GA-DEMO-001",
    pickup: "Sân bay Tân Sơn Nhất, TP. Hồ Chí Minh",
    destination: "Trung tâm TP. Hồ Chí Minh",
    carType: "Xe 7 chỗ",
    bookingDate: "",
    distance: 25,
    price: 350000,
    customerName: "",
    customerPhone: "",
  };
};

export default function Payment({ language = "vi" }) {
  const isVietnamese = language === "vi";
  const navigate = useNavigate();
  const { bookingId } = useParams();

  const booking = useMemo(
    () => getBookingData(bookingId),
    [bookingId]
  );

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [processing, setProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  const amount = Number(booking.price) || 0;

  const t = {
    back: isVietnamese ? "Quay lại" : "Go back",
    title: isVietnamese ? "Thanh toán chuyến đi" : "Trip payment",
    subtitle: isVietnamese
      ? "Kiểm tra thông tin và chọn phương thức thanh toán phù hợp."
      : "Review your trip and choose a payment method.",
    tripInfo: isVietnamese ? "Thông tin chuyến đi" : "Trip details",
    pickup: isVietnamese ? "Điểm đón" : "Pickup location",
    destination: isVietnamese ? "Điểm đến" : "Destination",
    vehicle: isVietnamese ? "Loại xe" : "Vehicle",
    date: isVietnamese ? "Thời gian đón" : "Pickup time",
    distance: isVietnamese ? "Quãng đường dự kiến" : "Estimated distance",
    paymentMethod: isVietnamese
      ? "Phương thức thanh toán"
      : "Payment method",
    summary: isVietnamese ? "Chi tiết thanh toán" : "Payment summary",
    tripFee: isVietnamese ? "Chi phí chuyến đi" : "Trip fare",
    discount: isVietnamese ? "Ưu đãi" : "Discount",
    total: isVietnamese ? "Tổng thanh toán" : "Total amount",
    terms: isVietnamese
      ? "Tôi xác nhận thông tin chuyến đi và đồng ý với điều khoản dịch vụ."
      : "I confirm my trip details and agree to the service terms.",
    submit: isVietnamese
      ? "Xác nhận thanh toán"
      : "Confirm payment",
    secure: isVietnamese
      ? "Thông tin của bạn được bảo vệ"
      : "Your information is protected",
    support: isVietnamese
      ? "Cần hỗ trợ thanh toán?"
      : "Need payment assistance?",
    contact: isVietnamese ? "Liên hệ hỗ trợ" : "Contact support",
    processing: isVietnamese
      ? "Đang xử lý..."
      : "Processing...",
    pending: isVietnamese
      ? "Đã ghi nhận lựa chọn thanh toán"
      : "Payment selection recorded",
    success: isVietnamese
      ? "Đã ghi nhận yêu cầu"
      : "Request recorded",
    cashMessage: isVietnamese
      ? "Bạn sẽ thanh toán trực tiếp cho tài xế theo hướng dẫn của GoAnywhere."
      : "Pay your driver directly according to GoAnywhere instructions.",
    onlineMessage: isVietnamese
      ? "Đây là bản demo giao diện. Phương thức này cần được kết nối backend và cổng thanh toán trước khi giao dịch thật."
      : "This is a UI demo. Connect a backend and payment gateway before real transactions.",
    close: isVietnamese ? "Đóng" : "Close",
    order: isVietnamese ? "Mã đơn đặt xe" : "Booking ID",
    noBooking: isVietnamese
      ? "Đây là dữ liệu minh họa. Hãy kết nối đơn đặt xe thật để thanh toán chính xác."
      : "This is sample data. Connect a real booking for accurate payment.",
  };

  const selectedMethod = PAYMENT_METHODS.find(
    (method) => method.id === paymentMethod
  );

  const handlePayment = () => {
    if (!acceptedTerms || processing) return;

    setProcessing(true);

    // DEMO FRONTEND:
    // Không tự đánh dấu giao dịch ngân hàng/ví điện tử là đã thanh toán.
    window.setTimeout(() => {
      setProcessing(false);

      if (paymentMethod === "cash") {
        setPaymentResult({
          type: "pending",
          title: t.pending,
          message: t.cashMessage,
        });
      } else {
        setPaymentResult({
          type: "demo",
          title: t.success,
          message: t.onlineMessage,
        });
      }
    }, 500);
  };

  const closeResult = () => {
    setPaymentResult(null);
  };

  return (
    <main className="payment-page">
      <div className="payment-container">
        {/* ĐẦU TRANG */}
        <div className="payment-topbar">
          <Link to="/home" className="payment-back">
            <ArrowLeft size={18} />
            <span>{t.back}</span>
          </Link>

          <div className="payment-brand">
            <span className="payment-brand-icon">
              <CarFront size={23} />
            </span>
            <span>
              Go<span>Anywhere</span>
            </span>
          </div>

          <div className="payment-secure-label">
            <LockKeyhole size={15} />
            <span>{t.secure}</span>
          </div>
        </div>

        {/* TIÊU ĐỀ */}
        <section className="payment-heading">
          <div className="payment-eyebrow">
            <span />
            {isVietnamese ? "HOÀN TẤT ĐẶT XE" : "COMPLETE YOUR BOOKING"}
          </div>

          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </section>

        <div className="payment-layout">
          {/* CỘT TRÁI */}
          <div className="payment-main">
            {/* THÔNG TIN CHUYẾN ĐI */}
            <section className="payment-card payment-trip-card">
              <div className="payment-card-heading">
                <div className="payment-section-icon">
                  <MapPinned size={21} />
                </div>

                <div>
                  <h2>{t.tripInfo}</h2>
                  <p>
                    {t.order}: {booking.id}
                  </p>
                </div>
              </div>

              <div className="payment-route">
                <div className="payment-route-line">
                  <span className="payment-route-dot pickup-dot" />
                  <span className="payment-route-dash" />
                  <span className="payment-route-dot destination-dot" />
                </div>

                <div className="payment-route-points">
                  <div className="payment-route-point">
                    <span>{t.pickup}</span>
                    <strong>
                      {booking.pickup || "Chưa có thông tin điểm đón"}
                    </strong>
                  </div>

                  <div className="payment-route-point">
                    <span>{t.destination}</span>
                    <strong>
                      {booking.destination || "Chưa có thông tin điểm đến"}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="payment-trip-details">
                <div className="payment-detail-item">
                  <CarFront size={19} />
                  <div>
                    <span>{t.vehicle}</span>
                    <strong>{booking.carType || "Chưa chọn xe"}</strong>
                  </div>
                </div>

                <div className="payment-detail-item">
                  <CalendarDays size={19} />
                  <div>
                    <span>{t.date}</span>
                    <strong>{formatDate(booking.bookingDate)}</strong>
                  </div>
                </div>

                <div className="payment-detail-item">
                  <MapPin size={19} />
                  <div>
                    <span>{t.distance}</span>
                    <strong>
                      {booking.distance
                        ? `${booking.distance} km`
                        : "Theo lộ trình thực tế"}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="payment-demo-note">
                <Clock3 size={17} />
                <span>{t.noBooking}</span>
              </div>
            </section>

            {/* CHỌN PHƯƠNG THỨC THANH TOÁN */}
            <section className="payment-card">
              <div className="payment-card-heading">
                <div className="payment-section-icon">
                  <Wallet size={21} />
                </div>

                <div>
                  <h2>{t.paymentMethod}</h2>
                  <p>
                    {isVietnamese
                      ? "Chọn cách bạn muốn thanh toán"
                      : "Choose how you want to pay"}
                  </p>
                </div>
              </div>

              <div className="payment-method-list">
                {PAYMENT_METHODS.map((method) => {
                  const MethodIcon = method.icon;
                  const selected = paymentMethod === method.id;

                  return (
                    <button
                      type="button"
                      key={method.id}
                      className={`payment-method ${
                        selected ? "is-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentMethod(method.id);
                        setPaymentResult(null);
                      }}
                      aria-pressed={selected}
                    >
                      <span className="payment-method-icon">
                        <MethodIcon size={23} />
                      </span>

                      <span className="payment-method-copy">
                        <strong>
                          {method.id === "cash"
                            ? isVietnamese
                              ? "Tiền mặt"
                              : "Cash"
                            : method.id === "bank"
                              ? isVietnamese
                                ? "Chuyển khoản QR"
                                : "Bank transfer / QR"
                              : method.name}
                        </strong>

                        <span>
                          {method.id === "cash"
                            ? isVietnamese
                              ? "Thanh toán trực tiếp cho tài xế"
                              : "Pay the driver directly"
                            : method.id === "bank"
                              ? isVietnamese
                                ? "Quét mã bằng ứng dụng ngân hàng"
                                : "Scan with your banking app"
                              : method.id === "vnpay"
                                ? isVietnamese
                                  ? "Thanh toán qua cổng VNPay"
                                  : "Pay using VNPay"
                                : isVietnamese
                                  ? "Thanh toán bằng ví MoMo"
                                  : "Pay using MoMo wallet"}
                        </span>
                      </span>

                      <span
                        className={`payment-radio ${
                          selected ? "is-checked" : ""
                        }`}
                      >
                        {selected && <Check size={13} />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {paymentMethod === "cash" && (
                <div className="payment-method-info">
                  <Banknote size={19} />
                  <p>
                    {isVietnamese
                      ? "Bạn thanh toán trực tiếp cho tài xế. Trạng thái thanh toán sẽ được xác nhận sau khi thu tiền."
                      : "Pay the driver directly. Payment is confirmed after the fare is collected."}
                  </p>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="payment-method-info">
                  <QrCode size={19} />
                  <p>
                    {isVietnamese
                      ? "Mã QR và thông tin tài khoản sẽ hiển thị khi backend được cấu hình. Không chuyển tiền vào tài khoản chưa được xác minh."
                      : "QR and account details will appear after backend setup. Do not transfer to an unverified account."}
                  </p>
                </div>
              )}

              {(paymentMethod === "vnpay" ||
                paymentMethod === "momo") && (
                <div className="payment-method-info">
                  <ShieldCheck size={19} />
                  <p>
                    {isVietnamese
                      ? "Cần tích hợp cổng thanh toán và xác minh giao dịch từ backend trước khi sử dụng thật."
                      : "A payment gateway and server-side transaction verification are required."}
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* CỘT PHẢI: TÓM TẮT */}
          <aside className="payment-sidebar">
            <section className="payment-card payment-summary">
              <div className="payment-card-heading">
                <div className="payment-section-icon">
                  <CreditCard size={21} />
                </div>

                <div>
                  <h2>{t.summary}</h2>
                  <p>
                    {isVietnamese
                      ? "Tổng chi phí dự kiến"
                      : "Estimated trip cost"}
                  </p>
                </div>
              </div>

              <div className="payment-summary-row">
                <span>{t.tripFee}</span>
                <strong>{formatCurrency(amount)}</strong>
              </div>

              <div className="payment-summary-row">
                <span>{t.discount}</span>
                <strong className="payment-discount">
                  {formatCurrency(0)}
                </strong>
              </div>

              <div className="payment-summary-total">
                <span>{t.total}</span>
                <strong>{formatCurrency(amount)}</strong>
              </div>

              <p className="payment-price-note">
                {isVietnamese
                  ? "Giá cuối cùng cần được xác nhận bởi hệ thống đặt xe."
                  : "The final fare must be confirmed by the booking system."}
              </p>

              <label className="payment-terms">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) =>
                    setAcceptedTerms(event.target.checked)
                  }
                />

                <span>{t.terms}</span>
              </label>

              <button
                type="button"
                className="payment-submit"
                onClick={handlePayment}
                disabled={!acceptedTerms || processing}
              >
                {processing ? (
                  <>
                    <span className="payment-spinner" />
                    {t.processing}
                  </>
                ) : (
                  <>
                    {t.submit}
                    <ArrowRight size={19} />
                  </>
                )}
              </button>

              <div className="payment-trust">
                <ShieldCheck size={17} />
                <span>
                  {isVietnamese
                    ? "Thanh toán an toàn và minh bạch"
                    : "Safe and transparent payment"}
                </span>
              </div>
            </section>

            {/* HỖ TRỢ */}
            <section className="payment-support-card">
              <div className="payment-support-icon">
                <Headphones size={23} />
              </div>

              <div>
                <h3>{t.support}</h3>
                <p>
                  {isVietnamese
                    ? "Đội ngũ GoAnywhere sẵn sàng hỗ trợ bạn."
                    : "GoAnywhere support is here to help."}
                </p>

                <Link to="/contact" className="payment-support-link">
                  {t.contact}
                  <ArrowRight size={16} />
                </Link>
              </div>

              <MessageCircle className="payment-support-decoration" />
            </section>
          </aside>
        </div>

        <footer className="payment-footer">
          <Link to="/home">
            <ArrowLeft size={15} />
            {isVietnamese ? "Quay lại trang chủ" : "Back to home"}
          </Link>

          <span>
            © {new Date().getFullYear()} GoAnywhere
          </span>
        </footer>
      </div>

      {/* HỘP THÔNG BÁO KẾT QUẢ DEMO */}
      {paymentResult && (
        <div
          className="payment-modal-backdrop"
          role="presentation"
          onClick={closeResult}
        >
          <section
            className="payment-result-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-result-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`payment-result-icon ${
                paymentResult.type === "pending"
                  ? "is-pending"
                  : "is-demo"
              }`}
            >
              {paymentResult.type === "pending" ? (
                <CheckCircle2 size={34} />
              ) : (
                <XCircle size={34} />
              )}
            </div>

            <h2 id="payment-result-title">
              {paymentResult.title}
            </h2>

            <p>{paymentResult.message}</p>

            <div className="payment-result-detail">
              <span>{t.order}</span>
              <strong>{booking.id}</strong>

              <span>{t.total}</span>
              <strong>{formatCurrency(amount)}</strong>

              <span>
                {isVietnamese ? "Phương thức" : "Method"}
              </span>
              <strong>{selectedMethod?.name}</strong>
            </div>

            <button
              type="button"
              className="payment-submit"
              onClick={() => {
                closeResult();

                if (paymentResult.type === "pending") {
                  navigate("/home");
                }
              }}
            >
              {t.close}
              <Check size={18} />
            </button>

            <p className="payment-result-disclaimer">
              {isVietnamese
                ? "Đây là kết quả minh họa phía frontend. Chưa có giao dịch thực tế nào được tạo."
                : "This is a frontend demo. No real transaction has been created."}
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
