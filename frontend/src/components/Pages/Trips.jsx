import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CarFront,
  MapPin,
  CalendarDays,
  Clock3,
  ArrowRight,
  Search,
  Filter,
  ChevronDown,
  Navigation,
  CircleCheck,
  CircleX,
  Clock,
  ReceiptText,
  Route,
  ArrowUpRight,
  History,
  Plus,
} from "lucide-react";

import "./Trips.css";

const translations = {
  vi: {
    badge: "QUẢN LÝ HÀNH TRÌNH",
    title: "Chuyến đi của bạn",
    subtitle:
      "Theo dõi lịch trình, quản lý đặt xe và xem lại những hành trình của bạn cùng GoAnywhere.",
    newBooking: "Đặt chuyến mới",
    searchPlaceholder: "Tìm theo điểm đón, điểm đến...",
    all: "Tất cả chuyến đi",
    upcoming: "Sắp tới",
    completed: "Đã hoàn thành",
    cancelled: "Đã hủy",
    total: "Tổng chuyến đi",
    upcomingStat: "Sắp diễn ra",
    completedStat: "Đã hoàn thành",
    cancelledStat: "Đã hủy",
    listTitle: "Lịch sử chuyến đi",
    listSubtitle: "Danh sách các chuyến xe của bạn",
    filter: "Lọc chuyến đi",
    pickup: "Điểm đón",
    destination: "Điểm đến",
    date: "Ngày khởi hành",
    time: "Giờ đón",
    vehicle: "Loại xe",
    price: "Tổng chi phí",
    details: "Xem chi tiết",
    bookAgain: "Đặt lại",
    noTrips: "Không tìm thấy chuyến đi",
    noTripsDesc:
      "Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để xem các chuyến đi khác.",
    clearFilter: "Xóa bộ lọc",
    statusUpcoming: "Sắp tới",
    statusCompleted: "Hoàn thành",
    statusCancelled: "Đã hủy",
    statusProcessing: "Đang xác nhận",
    sedan: "Xe 4 chỗ",
    suv: "Xe 7 chỗ",
    premium: "Xe cao cấp",
    allVehicles: "Tất cả loại xe",
    allStatuses: "Tất cả trạng thái",
    bookingCode: "Mã chuyến",
    payment: "Thanh toán",
    paid: "Đã thanh toán",
    pending: "Chờ thanh toán",
    footerTitle: "Sẵn sàng cho hành trình tiếp theo?",
    footerDesc:
      "Đặt xe nhanh chóng, di chuyển thoải mái cùng GoAnywhere.",
    footerButton: "Đặt xe ngay",
  },

  en: {
    badge: "TRIP MANAGEMENT",
    title: "Your trips",
    subtitle:
      "Track your schedule, manage bookings, and revisit your journeys with GoAnywhere.",
    newBooking: "Book a ride",
    searchPlaceholder: "Search pickup or destination...",
    all: "All trips",
    upcoming: "Upcoming",
    completed: "Completed",
    cancelled: "Cancelled",
    total: "Total trips",
    upcomingStat: "Upcoming",
    completedStat: "Completed",
    cancelledStat: "Cancelled",
    listTitle: "Trip history",
    listSubtitle: "A list of your rides",
    filter: "Filter trips",
    pickup: "Pickup",
    destination: "Destination",
    date: "Travel date",
    time: "Pickup time",
    vehicle: "Vehicle",
    price: "Total price",
    details: "View details",
    bookAgain: "Book again",
    noTrips: "No trips found",
    noTripsDesc:
      "Try changing your search keyword or filters to find other trips.",
    clearFilter: "Clear filters",
    statusUpcoming: "Upcoming",
    statusCompleted: "Completed",
    statusCancelled: "Cancelled",
    statusProcessing: "Confirming",
    sedan: "4-seater",
    suv: "7-seater",
    premium: "Premium car",
    allVehicles: "All vehicles",
    allStatuses: "All statuses",
    bookingCode: "Trip ID",
    payment: "Payment",
    paid: "Paid",
    pending: "Pending payment",
    footerTitle: "Ready for your next journey?",
    footerDesc:
      "Book quickly and travel comfortably with GoAnywhere.",
    footerButton: "Book now",
  },
};

// Dữ liệu minh họa giao diện.
// Khi tích hợp backend, thay bằng dữ liệu lấy từ API.
const sampleTrips = [
  {
    id: "GA-20261001",
    pickup: "Vincom Plaza Long Xuyên",
    destination: "Sân bay Cần Thơ",
    date: "2026-10-18",
    time: "08:30",
    vehicle: "suv",
    price: 850000,
    status: "upcoming",
    payment: "paid",
    distance: "65 km",
    duration: "Khoảng 1 giờ 30 phút",
  },
  {
    id: "GA-20260928",
    pickup: "Trung tâm TP. Long Xuyên",
    destination: "Bến Ninh Kiều, Cần Thơ",
    date: "2026-10-10",
    time: "09:00",
    vehicle: "sedan",
    price: 650000,
    status: "completed",
    payment: "paid",
    distance: "60 km",
    duration: "Khoảng 1 giờ 20 phút",
  },
  {
    id: "GA-20260915",
    pickup: "Nhà riêng, Tân Châu",
    destination: "TP. Châu Đốc",
    date: "2026-10-06",
    time: "14:00",
    vehicle: "sedan",
    price: 420000,
    status: "cancelled",
    payment: "pending",
    distance: "35 km",
    duration: "Khoảng 50 phút",
  },
  {
    id: "GA-20261004",
    pickup: "Đại học An Giang",
    destination: "Sân bay Tân Sơn Nhất",
    date: "2026-10-22",
    time: "05:00",
    vehicle: "premium",
    price: 1450000,
    status: "upcoming",
    payment: "paid",
    distance: "190 km",
    duration: "Khoảng 4 giờ",
  },
  {
    id: "GA-20260820",
    pickup: "Khu dân cư Mỹ Thới",
    destination: "Trung tâm TP. Long Xuyên",
    date: "2026-10-02",
    time: "16:30",
    vehicle: "sedan",
    price: 180000,
    status: "completed",
    payment: "paid",
    distance: "8 km",
    duration: "Khoảng 20 phút",
  },
];

const formatPrice = (price, language) =>
  new Intl.NumberFormat(
    language === "vi" ? "vi-VN" : "en-US",
    {
      style: "currency",
      currency: language === "vi" ? "VND" : "USD",
      maximumFractionDigits: 0,
    }
  ).format(price);

const formatDate = (date, language) =>
  new Date(`${date}T00:00:00`).toLocaleDateString(
    language === "vi" ? "vi-VN" : "en-US",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

export default function Trips({ language = "vi" }) {
  const en = language === "en";
  const t = translations[en ? "en" : "vi"];

  const [activeTab, setActiveTab] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedTrip, setSelectedTrip] = useState(null);

  const getStatusLabel = (status) => {
    const labels = {
      upcoming: t.statusUpcoming,
      completed: t.statusCompleted,
      cancelled: t.statusCancelled,
      processing: t.statusProcessing,
    };

    return labels[status] || status;
  };

  const getVehicleLabel = (vehicle) => {
    const labels = {
      sedan: t.sedan,
      suv: t.suv,
      premium: t.premium,
    };

    return labels[vehicle] || vehicle;
  };

  const getStatusIcon = (status) => {
    if (status === "completed") {
      return <CircleCheck size={15} />;
    }

    if (status === "cancelled") {
      return <CircleX size={15} />;
    }

    if (status === "processing") {
      return <Clock size={15} />;
    }

    return <CalendarDays size={15} />;
  };

  const normalizedKeyword = keyword.trim().toLowerCase();

  const filteredTrips = sampleTrips.filter((trip) => {
    const matchesTab =
      activeTab === "all" || trip.status === activeTab;

    const matchesKeyword =
      !normalizedKeyword ||
      [
        trip.id,
        trip.pickup,
        trip.destination,
      ].some((value) =>
        value.toLowerCase().includes(normalizedKeyword)
      );

    const matchesVehicle =
      vehicleFilter === "all" ||
      trip.vehicle === vehicleFilter;

    const matchesStatus =
      statusFilter === "all" ||
      trip.status === statusFilter;

    return (
      matchesTab &&
      matchesKeyword &&
      matchesVehicle &&
      matchesStatus
    );
  });

  const stats = {
    total: sampleTrips.length,
    upcoming: sampleTrips.filter(
      (trip) => trip.status === "upcoming"
    ).length,
    completed: sampleTrips.filter(
      (trip) => trip.status === "completed"
    ).length,
    cancelled: sampleTrips.filter(
      (trip) => trip.status === "cancelled"
    ).length,
  };

  const resetFilters = () => {
    setActiveTab("all");
    setKeyword("");
    setVehicleFilter("all");
    setStatusFilter("all");
  };

  return (
    <main className="trips-page">
      {/* HERO */}
      <section className="trips-hero">
        <div className="trips-hero-orb trips-hero-orb-one" />
        <div className="trips-hero-orb trips-hero-orb-two" />

        <div className="trips-container trips-hero-content">
          <div className="trips-hero-copy">
            <span className="trips-eyebrow">
              <History size={15} />
              {t.badge}
            </span>

            <h1>{t.title}</h1>

            <p>{t.subtitle}</p>

            <Link
              to="/booking"
              className="trips-primary-button"
            >
              <Plus size={19} />
              {t.newBooking}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="trips-hero-illustration">
            <div className="trips-illustration-circle">
              <div className="trips-illustration-route">
                <span className="trips-route-point trips-route-start">
                  <MapPin size={20} />
                </span>

                <span className="trips-route-dash" />

                <span className="trips-route-point trips-route-end">
                  <Navigation size={20} />
                </span>
              </div>

              <div className="trips-illustration-car">
                <CarFront size={104} strokeWidth={1.35} />
              </div>

              <div className="trips-floating-card trips-floating-card-top">
                <CircleCheck size={18} />
                <span>
                  {en ? "Your trip, your way" : "Hành trình của bạn"}
                </span>
              </div>

              <div className="trips-floating-card trips-floating-card-bottom">
                <Route size={18} />
                <span>
                  {en ? "Travel with ease" : "Di chuyển dễ dàng"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="trips-container trips-main">
        {/* THỐNG KÊ */}
        <section className="trips-stats">
          <article className="trips-stat-card">
            <div className="trips-stat-icon purple">
              <CarFront size={23} />
            </div>

            <div>
              <span>{t.total}</span>
              <strong>{stats.total}</strong>
              <small>
                {en ? "All bookings" : "Tất cả đặt xe"}
              </small>
            </div>
          </article>

          <article className="trips-stat-card">
            <div className="trips-stat-icon orange">
              <CalendarDays size={23} />
            </div>

            <div>
              <span>{t.upcomingStat}</span>
              <strong>{stats.upcoming}</strong>
              <small>
                {en ? "Upcoming rides" : "Chuyến sắp khởi hành"}
              </small>
            </div>
          </article>

          <article className="trips-stat-card">
            <div className="trips-stat-icon green">
              <CircleCheck size={23} />
            </div>

            <div>
              <span>{t.completedStat}</span>
              <strong>{stats.completed}</strong>
              <small>
                {en ? "Successfully completed" : "Chuyến thành công"}
              </small>
            </div>
          </article>

          <article className="trips-stat-card">
            <div className="trips-stat-icon red">
              <CircleX size={23} />
            </div>

            <div>
              <span>{t.cancelledStat}</span>
              <strong>{stats.cancelled}</strong>
              <small>
                {en ? "Cancelled rides" : "Chuyến đã hủy"}
              </small>
            </div>
          </article>
        </section>

        {/* LỊCH SỬ CHUYẾN ĐI */}
        <section className="trips-history-section">
          <div className="trips-section-heading">
            <div>
              <h2>{t.listTitle}</h2>
              <p>{t.listSubtitle}</p>
            </div>

            <span className="trips-results-count">
              {filteredTrips.length}{" "}
              {en ? "trips" : "chuyến đi"}
            </span>
          </div>

          {/* TAB TRẠNG THÁI */}
          <div className="trips-tabs">
            {[
              { key: "all", label: t.all },
              { key: "upcoming", label: t.upcoming },
              { key: "completed", label: t.completed },
              { key: "cancelled", label: t.cancelled },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`trips-tab ${
                  activeTab === tab.key ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}

                <span>
                  {tab.key === "all"
                    ? stats.total
                    : stats[tab.key]}
                </span>
              </button>
            ))}
          </div>

          {/* TÌM KIẾM VÀ BỘ LỌC */}
          <div className="trips-toolbar">
            <label className="trips-search">
              <Search size={19} />

              <input
                type="search"
                value={keyword}
                onChange={(event) =>
                  setKeyword(event.target.value)
                }
                placeholder={t.searchPlaceholder}
              />

              {keyword && (
                <button
                  type="button"
                  onClick={() => setKeyword("")}
                  aria-label={en ? "Clear search" : "Xóa tìm kiếm"}
                >
                  <CircleX size={17} />
                </button>
              )}
            </label>

            <div className="trips-filters">
              <label className="trips-select-wrap">
                <Filter size={17} />

                <select
                  value={vehicleFilter}
                  onChange={(event) =>
                    setVehicleFilter(event.target.value)
                  }
                  aria-label={t.vehicle}
                >
                  <option value="all">{t.allVehicles}</option>
                  <option value="sedan">{t.sedan}</option>
                  <option value="suv">{t.suv}</option>
                  <option value="premium">{t.premium}</option>
                </select>

                <ChevronDown size={15} />
              </label>

              <label className="trips-select-wrap">
                <select
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(event.target.value)
                  }
                  aria-label={t.filter}
                >
                  <option value="all">{t.allStatuses}</option>
                  <option value="upcoming">{t.statusUpcoming}</option>
                  <option value="completed">{t.statusCompleted}</option>
                  <option value="cancelled">{t.statusCancelled}</option>
                </select>

                <ChevronDown size={15} />
              </label>
            </div>
          </div>

          {/* DANH SÁCH CHUYẾN */}
          {filteredTrips.length > 0 ? (
            <div className="trips-list">
              {filteredTrips.map((trip) => (
                <article
                  className="trips-card"
                  key={trip.id}
                >
                  <div className="trips-card-top">
                    <div className="trips-card-code">
                      <span className="trips-car-icon">
                        <CarFront size={24} />
                      </span>

                      <div>
                        <span>{t.bookingCode}</span>
                        <strong>{trip.id}</strong>
                      </div>
                    </div>

                    <span
                      className={`trips-status trips-status-${trip.status}`}
                    >
                      {getStatusIcon(trip.status)}
                      {getStatusLabel(trip.status)}
                    </span>
                  </div>

                  <div className="trips-card-content">
                    <div className="trips-route">
                      <div className="trips-route-line">
                        <span className="trips-dot pickup-dot" />
                        <span className="trips-route-vertical" />
                        <span className="trips-dot destination-dot" />
                      </div>

                      <div className="trips-route-locations">
                        <div className="trips-location">
                          <span>{t.pickup}</span>
                          <strong>{trip.pickup}</strong>
                        </div>

                        <div className="trips-location">
                          <span>{t.destination}</span>
                          <strong>{trip.destination}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="trips-card-details">
                      <div className="trips-detail-item">
                        <CalendarDays size={18} />
                        <div>
                          <span>{t.date}</span>
                          <strong>
                            {formatDate(trip.date, language)}
                          </strong>
                        </div>
                      </div>

                      <div className="trips-detail-item">
                        <Clock3 size={18} />
                        <div>
                          <span>{t.time}</span>
                          <strong>{trip.time}</strong>
                        </div>
                      </div>

                      <div className="trips-detail-item">
                        <CarFront size={18} />
                        <div>
                          <span>{t.vehicle}</span>
                          <strong>
                            {getVehicleLabel(trip.vehicle)}
                          </strong>
                        </div>
                      </div>
                    </div>

                    <div className="trips-card-price">
                      <span>{t.price}</span>
                      <strong>
                        {formatPrice(trip.price, language)}
                      </strong>

                      <span
                        className={`trips-payment ${
                          trip.payment === "paid"
                            ? "trips-payment-paid"
                            : "trips-payment-pending"
                        }`}
                      >
                        <ReceiptText size={14} />
                        {trip.payment === "paid"
                          ? t.paid
                          : t.pending}
                      </span>
                    </div>
                  </div>

                  <div className="trips-card-footer">
                    <span className="trips-distance">
                      <Route size={16} />
                      {trip.distance}
                      <span className="trips-distance-separator">
                        ·
                      </span>
                      {trip.duration}
                    </span>

                    <div className="trips-card-actions">
                      <button
                        type="button"
                        className="trips-details-button"
                        onClick={() => setSelectedTrip(trip)}
                      >
                        {t.details}
                        <ArrowUpRight size={17} />
                      </button>

                      {trip.status !== "cancelled" && (
                        <Link
                          to={`/booking?pickup=${encodeURIComponent(
                            trip.pickup
                          )}&destination=${encodeURIComponent(
                            trip.destination
                          )}`}
                          className="trips-book-again"
                        >
                          {t.bookAgain}
                          <ArrowRight size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="trips-empty">
              <div className="trips-empty-icon">
                <CarFront size={36} />
              </div>

              <h3>{t.noTrips}</h3>
              <p>{t.noTripsDesc}</p>

              <button
                type="button"
                className="trips-reset-button"
                onClick={resetFilters}
              >
                {t.clearFilter}
              </button>
            </div>
          )}
        </section>

        {/* CTA CUỐI TRANG */}
        <section className="trips-cta">
          <div className="trips-cta-icon">
            <CarFront size={36} />
          </div>

          <div className="trips-cta-copy">
            <h2>{t.footerTitle}</h2>
            <p>{t.footerDesc}</p>
          </div>

          <Link to="/booking" className="trips-cta-button">
            {t.footerButton}
            <ArrowRight size={18} />
          </Link>
        </section>
      </div>

      {/* MODAL CHI TIẾT CHUYẾN ĐI */}
      {selectedTrip && (
        <div
          className="trips-modal-overlay"
          onClick={() => setSelectedTrip(null)}
          role="presentation"
        >
          <section
            className="trips-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="trips-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="trips-modal-header">
              <div>
                <span>{t.bookingCode}</span>
                <h2 id="trips-modal-title">
                  {selectedTrip.id}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTrip(null)}
                aria-label={en ? "Close details" : "Đóng chi tiết"}
              >
                <CircleX size={23} />
              </button>
            </div>

            <div className="trips-modal-status">
              <span
                className={`trips-status trips-status-${selectedTrip.status}`}
              >
                {getStatusIcon(selectedTrip.status)}
                {getStatusLabel(selectedTrip.status)}
              </span>
            </div>

            <div className="trips-modal-route">
              <div>
                <MapPin size={19} />
                <section>
                  <span>{t.pickup}</span>
                  <strong>{selectedTrip.pickup}</strong>
                </section>
              </div>

              <div>
                <Navigation size={19} />
                <section>
                  <span>{t.destination}</span>
                  <strong>{selectedTrip.destination}</strong>
                </section>
              </div>
            </div>

            <div className="trips-modal-grid">
              <div>
                <span>{t.date}</span>
                <strong>
                  {formatDate(selectedTrip.date, language)}
                </strong>
              </div>

              <div>
                <span>{t.time}</span>
                <strong>{selectedTrip.time}</strong>
              </div>

              <div>
                <span>{t.vehicle}</span>
                <strong>
                  {getVehicleLabel(selectedTrip.vehicle)}
                </strong>
              </div>

              <div>
                <span>{t.payment}</span>
                <strong>
                  {selectedTrip.payment === "paid"
                    ? t.paid
                    : t.pending}
                </strong>
              </div>
            </div>

            <div className="trips-modal-total">
              <span>{t.price}</span>
              <strong>
                {formatPrice(selectedTrip.price, language)}
              </strong>
            </div>

            <button
              type="button"
              className="trips-modal-close-button"
              onClick={() => setSelectedTrip(null)}
            >
              {en ? "Close" : "Đóng"}
            </button>
          </section>
        </div>
      )}
    </main>
  );
}