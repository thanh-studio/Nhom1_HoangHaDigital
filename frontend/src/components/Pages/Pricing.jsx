import { useMemo, useState } from "react";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  AlertCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import "./Pricing.css";

// ==========================================
// BẢNG GIÁ THEO TUYẾN - DỮ LIỆU THAM KHẢO
// Giá được tính bằng nghìn đồng (k).
// Điểm được giữ nguyên theo quy tắc bạn cung cấp.
// ==========================================

const routes = [
  {
    id: "hp-bn-bg",
    name: "Hải Phòng ↔ Bắc Ninh, Bắc Giang",
    nameEn: "Hai Phong ↔ Bac Ninh, Bac Giang",
    note: "Ghi rõ nếu khách đi cao tốc.",
    noteEn: "Specify expressway travel when applicable.",
    items: [
      { type: "Ghép 1 ghế", typeEn: "Shared seat", price: "450k", points: "0,5đ" },
      { type: "Ghép 1 ghế", typeEn: "Shared seat", price: "600k", points: "0,75đ" },
      { type: "Ghép 2 ghế", typeEn: "2 shared seats", price: "700k", points: "1đ" },
      { type: "Bao hàng ghế", typeEn: "Full row", price: "800k", points: "1đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "900k", points: "1,5đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.100k", points: "2đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.300k", points: "2,5đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.500k", points: "3đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "1.600k", points: "2đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "1.800k", points: "2,5đ" },
    ],
  },
  {
    id: "hp-hd-bn-hd",
    name: "Hải Phòng ↔ Hải Dương / Bắc Ninh ↔ Hải Dương",
    nameEn: "Hai Phong ↔ Hai Duong / Bac Ninh ↔ Hai Duong",
    note: "Áp dụng các mức giá ghép và bao xe bên dưới.",
    noteEn: "Applicable shared-ride and private-car prices below.",
    items: [
      { type: "Ghép", typeEn: "Shared ride", price: "250k", points: "0,25đ" },
      { type: "Ghép", typeEn: "Shared ride", price: "300k", points: "0,5đ" },
      { type: "Bao xe", typeEn: "Private car", price: "450k", points: "0,5đ" },
      { type: "Bao xe", typeEn: "Private car", price: "550k", points: "0,75đ" },
      { type: "Bao xe", typeEn: "Private car", price: "650k", points: "1đ" },
      { type: "Bao xe", typeEn: "Private car", price: "900k", points: "1,5đ" },
    ],
  },
  {
    id: "hp-hn",
    name: "Hải Phòng ↔ Hà Nội",
    nameEn: "Hai Phong ↔ Hanoi",
    note: "Mặc định chạy cao tốc. X7 cộng thêm 100k theo quy định.",
    noteEn: "Expressway by default. Add 100k for X7 as specified.",
    items: [
      { type: "Ghép 1 ghế", typeEn: "Shared seat", price: "400k", points: "0,5đ" },
      { type: "Ghép 1 ghế", typeEn: "Shared seat", price: "600k", points: "0,75đ" },
      { type: "Ghép 2 ghế", typeEn: "2 shared seats", price: "700k", points: "1đ" },
      { type: "Bao hàng ghế", typeEn: "Full row", price: "800k", points: "1đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "900k", points: "1,5đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.100k", points: "2đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.200k", points: "2,5đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.300k", points: "3đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "1.600k", points: "2đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "1.800k", points: "2,5đ" },
    ],
  },
  {
    id: "hn-hl",
    name: "Hà Nội ↔ Hạ Long",
    nameEn: "Hanoi ↔ Ha Long",
    note: "Mặc định cao tốc. Bao xe X7 cộng 100k.",
    noteEn: "Expressway by default. Add 100k for X7.",
    items: [
      { type: "Ghép 1 ghế", typeEn: "Shared seat", price: "450k", points: "0,5đ" },
      { type: "Ghép 2 ghế", typeEn: "2 shared seats", price: "800k", points: "1đ" },
      { type: "Bao xe", typeEn: "Private car", price: "1.100k–1.299k", points: "2đ" },
      { type: "Bao xe", typeEn: "Private car", price: "1.300k", points: "2,5đ" },
      { type: "Bao xe", typeEn: "Private car", price: "1.400k", points: "3đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "1.900k", points: "1,5đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "2.000k", points: "2đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "2.100k", points: "2,5đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "2.200k", points: "3đ" },
    ],
  },
  {
    id: "hl-bn-bg",
    name: "Hạ Long ↔ Bắc Ninh, Bắc Giang",
    nameEn: "Ha Long ↔ Bac Ninh, Bac Giang",
    note: "Ghi rõ nếu khách đi cao tốc. X7 cộng thêm 100k.",
    noteEn: "Specify expressway travel. Add 100k for X7.",
    items: [
      { type: "Ghép 1 ghế", typeEn: "Shared seat", price: "450k", points: "0,5đ" },
      { type: "Ghép 1 ghế", typeEn: "Shared seat", price: "600k", points: "0,75đ" },
      { type: "Ghép 2 ghế", typeEn: "2 shared seats", price: "700k", points: "1đ" },
      { type: "Bao hàng ghế", typeEn: "Full row", price: "800k", points: "1đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "900k", points: "1,5đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.100k", points: "2đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.300k", points: "2,5đ" },
      { type: "Bao xe một chiều", typeEn: "One-way private car", price: "1.500k", points: "3đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "1.600k", points: "2đ" },
      { type: "Bao xe hai chiều - X5", typeEn: "Round trip - 5 seats", price: "1.800k", points: "2,5đ" },
    ],
  },
  {
    id: "hp-tn",
    name: "Hải Phòng ↔ Thái Nguyên",
    nameEn: "Hai Phong ↔ Thai Nguyen",
    note: "Bao xe X7 cộng 100k; cao tốc cộng thêm 100k.",
    noteEn: "Add 100k for X7 and another 100k for expressway.",
    items: [
      { type: "Ghép", typeEn: "Shared ride", price: "600k", points: "0,5đ" },
      { type: "Ghép 2 ghế", typeEn: "2 shared seats", price: "1.000k", points: "1đ" },
      { type: "Bao hàng ghế", typeEn: "Full row", price: "1.200k", points: "1,25đ" },
      { type: "Bao xe", typeEn: "Private car", price: "1.500k", points: "1,5đ" },
      { type: "Bao xe", typeEn: "Private car", price: "1.700k", points: "1,75đ" },
    ],
  },
  {
    id: "hp-hl",
    name: "Hải Phòng ↔ Hạ Long",
    nameEn: "Hai Phong ↔ Ha Long",
    note: "Mặc định cao tốc. X7 cộng 100k; bao xe hai chiều X7 cộng 200k.",
    noteEn: "Expressway by default. Add 100k for X7 and 200k for round trips.",
    items: [
      { type: "Ghép", typeEn: "Shared ride", price: "250k", points: "0,5đ" },
      { type: "Bao xe một chiều - X5", typeEn: "One-way private car - 5 seats", price: "400k", points: "0,75đ" },
      { type: "Bao xe một chiều - X5", typeEn: "One-way private car - 5 seats", price: "500k", points: "1,25đ" },
      { type: "Bao xe hai chiều", typeEn: "Round trip", price: "700k", points: "1đ" },
      { type: "Bao xe hai chiều", typeEn: "Round trip", price: "800k", points: "1,5đ" },
      { type: "Bao xe hai chiều", typeEn: "Round trip", price: "900k", points: "2đ" },
    ],
  },
  {
    id: "hp-cp",
    name: "Hải Phòng ↔ Cẩm Phả",
    nameEn: "Hai Phong ↔ Cam Pha",
    note: "Mặc định cao tốc. Khu vực ven biển có thể phát sinh phụ phí.",
    noteEn: "Expressway by default. Coastal areas may incur surcharges.",
    items: [
      { type: "Ghép", typeEn: "Shared ride", price: "300k–350k", points: "0,5đ" },
      { type: "Ghép 2 ghế", typeEn: "2 shared seats", price: "500k", points: "0,75đ" },
      { type: "Bao xe một chiều - X5", typeEn: "One-way private car - 5 seats", price: "500k", points: "0,75đ" },
      { type: "Bao xe một chiều - X5", typeEn: "One-way private car - 5 seats", price: "600k", points: "1,25đ" },
      { type: "Bao xe hai chiều", typeEn: "Round trip", price: "800k", points: "1đ" },
      { type: "Bao xe hai chiều", typeEn: "Round trip", price: "900k", points: "1,5đ" },
      { type: "Bao xe hai chiều", typeEn: "Round trip", price: "1.000k", points: "2đ" },
    ],
  },
];

const generalRules = [
  {
    points: "±0,25đ",
    title: "Gửi đồ / nội thành",
    description: "Gửi đồ 150k–249k; lịch nội thành 150k–299k.",
  },
  {
    points: "±0,5đ",
    title: "Gửi đồ / ghép khách / lịch tỉnh",
    description: "Gửi đồ 250k–549k; ghép 1 khách từ 300k tùy tuyến; lịch tỉnh 300k–549k.",
  },
  {
    points: "±1đ",
    title: "Lịch từ 550k",
    description: "Gửi đồ 550k–849k; lịch tỉnh 550k–849k; ghép 2 khách từ 600k tùy tuyến.",
  },
  {
    points: "±1,5đ",
    title: "Lịch từ 850k",
    description: "Gửi đồ từ 850k; lịch tỉnh 850k–1.049k.",
  },
  {
    points: "±2đ",
    title: "Lịch tỉnh từ 1.050k",
    description: "Lịch tỉnh một chiều hoặc hai chiều 1.050k–1.499k.",
  },
  {
    points: "±2,5đ",
    title: "Lịch tỉnh từ 1.500k",
    description: "Lịch tỉnh một chiều hoặc hai chiều 1.500k–1.999k.",
  },
  {
    points: "±3đ",
    title: "Lịch tỉnh từ 2.000k",
    description: "Lịch tỉnh một chiều hoặc hai chiều 2.000k–2.999k.",
  },
];

const filters = [
  { id: "all", vi: "Tất cả", en: "All" },
  { id: "Ghép", vi: "Lịch ghép", en: "Shared rides" },
  { id: "một chiều", vi: "Bao xe một chiều", en: "One-way" },
  { id: "hai chiều", vi: "Bao xe hai chiều", en: "Round trip" },
];

export default function Pricing({ language = "vi" }) {
  const [search, setSearch] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const navigate = useNavigate();
  const isVi = language === "vi";

  const filteredRoutes = useMemo(() => {
    const keyword = search.trim().toLocaleLowerCase("vi");

    return routes
      .filter((route) => {
        const routeName = isVi ? route.name : route.nameEn;
        const matchesSearch =
          !keyword ||
          routeName.toLocaleLowerCase("vi").includes(keyword);

        const matchesRoute =
          selectedRoute === "all" || route.id === selectedRoute;

        return matchesSearch && matchesRoute;
      })
      .map((route) => ({
        ...route,
        items: route.items.filter((item) => {
          if (selectedType === "all") return true;

          const type = item.type.toLocaleLowerCase("vi");

          if (selectedType === "Ghép") {
            return type.includes("ghép");
          }

          if (selectedType === "một chiều") {
            return type.includes("một chiều");
          }

          if (selectedType === "hai chiều") {
            return type.includes("hai chiều");
          }

          return true;
        }),
      }))
      .filter((route) => route.items.length > 0);
  }, [search, selectedRoute, selectedType, isVi]);

  const handleBooking = (route, item) => {
    const params = new URLSearchParams({
      route: route.name,
      service: item.type,
      price: item.price,
      points: item.points,
    });

    navigate(`/booking?${params.toString()}`);
  };

  return (
    <main className="pricing-page">
      {/* HERO */}
      <section className="pricing-hero">
        <div className="pricing-hero-orb pricing-hero-orb-one" />
        <div className="pricing-hero-orb pricing-hero-orb-two" />

        <div className="pricing-container pricing-hero-grid">
          <div className="pricing-hero-content">
            <div className="pricing-eyebrow">
              <Sparkles size={16} />
              {isVi ? "BẢNG GIÁ THEO TUYẾN" : "ROUTE-BASED PRICING"}
            </div>

            <h1>
              {isVi ? "Chọn tuyến đường," : "Choose your route,"}
              <span>
                {isVi ? "tra cứu giá và điểm" : "check fares and points"}
              </span>
            </h1>

            <p className="pricing-hero-description">
              {isVi
                ? "Tra cứu giá lịch ghép, bao xe một chiều và hai chiều theo quy tắc từng tuyến."
                : "Check shared rides and one-way or round-trip fares by route."}
            </p>

            <div className="pricing-hero-actions">
              <button
                className="pricing-button pricing-button-primary"
                onClick={() =>
                  document
                    .getElementById("pricing-routes")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {isVi ? "Tra cứu bảng giá" : "Explore fares"}
                <ArrowRight size={18} />
              </button>

              <button
                className="pricing-button pricing-button-outline"
                onClick={() =>
                  document
                    .getElementById("pricing-rules")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {isVi ? "Quy tắc tính điểm" : "Point rules"}
              </button>
            </div>

            <div className="pricing-trust-row">
              <div className="pricing-trust-item">
                <ShieldCheck size={19} />
                <span>{isVi ? "Tra cứu minh bạch" : "Clear information"}</span>
              </div>

              <div className="pricing-trust-item">
                <Clock3 size={19} />
                <span>{isVi ? "Cập nhật theo tuyến" : "Route-based rules"}</span>
              </div>
            </div>
          </div>

          <div className="pricing-hero-visual">
            <div className="pricing-visual-glow" />

            <div className="pricing-visual-card pricing-visual-card-main">
              <div className="pricing-visual-top">
                <div className="pricing-visual-icon">
                  <CarFront size={30} />
                </div>

                <span className="pricing-visual-status">
                  <span />
                  {isVi ? "Bảng giá tham khảo" : "Reference fares"}
                </span>
              </div>

              <div className="pricing-visual-route">
                <div className="pricing-route-point">
                  <span className="pricing-route-dot pickup" />
                  <div>
                    <small>{isVi ? "ĐIỂM ĐÓN" : "PICKUP"}</small>
                    <strong>Hải Phòng</strong>
                  </div>
                </div>

                <div className="pricing-route-line">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="pricing-route-point">
                  <span className="pricing-route-dot destination" />
                  <div>
                    <small>{isVi ? "ĐIỂM ĐẾN" : "DESTINATION"}</small>
                    <strong>Bắc Ninh / Hà Nội</strong>
                  </div>
                </div>
              </div>

              <div className="pricing-visual-bottom">
                <div>
                  <span>{isVi ? "Điểm theo lịch" : "Points per booking"}</span>
                  <strong>0,25đ – 3đ+</strong>
                </div>

                <div className="pricing-visual-car">
                  <MapPin size={28} />
                </div>
              </div>
            </div>

            <div className="pricing-floating-card pricing-floating-card-top">
              <div className="pricing-floating-icon orange">
                <MapPin size={19} />
              </div>
              <div>
                <strong>{isVi ? "Theo từng tuyến" : "By route"}</strong>
                <span>{isVi ? "Giá và điểm cụ thể" : "Fare and points"}</span>
              </div>
            </div>

            <div className="pricing-floating-card pricing-floating-card-bottom">
              <div className="pricing-floating-icon purple">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <strong>{isVi ? "Chủ động tra cứu" : "Easy lookup"}</strong>
                <span>{isVi ? "Lọc loại lịch nhanh" : "Filter booking types"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRA CỨU GIÁ */}
      <section className="pricing-plans" id="pricing-routes">
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-section-label">
              {isVi ? "DANH SÁCH TUYẾN" : "ROUTE LIST"}
            </span>
            <h2>{isVi ? "Bảng giá và điểm theo tuyến" : "Fares and points by route"}</h2>
            <p>
              {isVi
                ? "Chọn tuyến, loại lịch hoặc nhập tên địa điểm để tra cứu."
                : "Select a route, booking type or search for a destination."}
            </p>
          </div>

          <div className="pricing-toolbar">
            <div className="pricing-search">
              <Search size={19} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={
                  isVi
                    ? "Tìm Hải Phòng, Bắc Ninh, Hạ Long..."
                    : "Search routes..."
                }
                aria-label={isVi ? "Tìm tuyến đường" : "Search routes"}
              />
            </div>

            <select
              value={selectedRoute}
              onChange={(event) => setSelectedRoute(event.target.value)}
              aria-label={isVi ? "Chọn tuyến" : "Select route"}
            >
              <option value="all">
                {isVi ? "Tất cả tuyến" : "All routes"}
              </option>
              {routes.map((route) => (
                <option key={route.id} value={route.id}>
                  {isVi ? route.name : route.nameEn}
                </option>
              ))}
            </select>
          </div>

          <div className="pricing-filter">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`pricing-filter-button ${
                  selectedType === filter.id ? "active" : ""
                }`}
                onClick={() => setSelectedType(filter.id)}
              >
                {filter.id === "all" ? (
                  <Sparkles size={16} />
                ) : filter.id === "Ghép" ? (
                  <Users size={16} />
                ) : (
                  <CarFront size={16} />
                )}
                {isVi ? filter.vi : filter.en}
              </button>
            ))}
          </div>

          <div className="pricing-route-list">
            {filteredRoutes.map((route) => (
              <article className="pricing-route-card" key={route.id}>
                <div className="pricing-route-card-heading">
                  <div className="pricing-route-heading-icon">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3>{isVi ? route.name : route.nameEn}</h3>
                    <p>
                      {isVi ? "Giá tính theo lịch" : "Fare per booking"}
                    </p>
                  </div>
                </div>

                <div className="pricing-route-note">
                  <AlertCircle size={17} />
                  <span>{isVi ? route.note : route.noteEn}</span>
                </div>

                <div className="pricing-table-wrapper">
                  <table className="pricing-table">
                    <thead>
                      <tr>
                        <th>{isVi ? "Loại lịch" : "Booking type"}</th>
                        <th>{isVi ? "Mức giá" : "Fare"}</th>
                        <th>{isVi ? "Điểm" : "Points"}</th>
                        <th>{isVi ? "Đặt xe" : "Book"}</th>
                      </tr>
                    </thead>

                    <tbody>
                      {route.items.map((item, index) => (
                        <tr key={`${route.id}-${item.type}-${index}`}>
                          <td>
                            <span className="pricing-type-label">
                              {isVi ? item.type : item.typeEn}
                            </span>
                          </td>
                          <td className="pricing-price-cell">{item.price}</td>
                          <td>
                            <span className="pricing-points-badge">
                              {item.points}
                            </span>
                          </td>
                          <td>
                            <button
                              className="pricing-row-book"
                              onClick={() => handleBooking(route, item)}
                              aria-label={`${isVi ? "Đặt xe" : "Book"} ${route.name} - ${item.type}`}
                            >
                              <ArrowRight size={17} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            ))}

            {filteredRoutes.length === 0 && (
              <div className="pricing-empty">
                <Search size={30} />
                <h3>{isVi ? "Không tìm thấy tuyến phù hợp" : "No routes found"}</h3>
                <p>
                  {isVi
                    ? "Hãy thử từ khóa khác hoặc chọn lại bộ lọc."
                    : "Try another keyword or reset the filters."}
                </p>
                <button
                  className="pricing-button pricing-button-primary"
                  onClick={() => {
                    setSearch("");
                    setSelectedRoute("all");
                    setSelectedType("all");
                  }}
                >
                  {isVi ? "Xóa bộ lọc" : "Reset filters"}
                </button>
              </div>
            )}
          </div>

          <div className="pricing-disclaimer">
            <div className="pricing-disclaimer-icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3>{isVi ? "Lưu ý khi áp dụng giá" : "Pricing notes"}</h3>
              <p>
                {isVi
                  ? "Đơn vị giá là nghìn đồng (k). Đây là dữ liệu tham khảo được nhập từ quy tắc bạn cung cấp; cần xác nhận các mức giá, phụ phí cao tốc, loại xe và những khoảng giá chưa rõ trước khi dùng làm quy định chính thức."
                  : "Fares are shown in thousands of VND. Confirm unclear ranges, vehicle types and expressway surcharges before using these as official rules."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUY TẮC TÍNH ĐIỂM CHUNG */}
      <section className="pricing-benefits" id="pricing-rules">
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-section-label">
              {isVi ? "QUY TẮC TÍNH ĐIỂM" : "POINT RULES"}
            </span>
            <h2>{isVi ? "Mức điểm lịch thông thường" : "General booking point tiers"}</h2>
            <p>
              {isVi
                ? "Các mức dưới đây được tách riêng để dễ tra cứu. Nếu quy tắc riêng của tuyến khác với quy tắc chung, cần ưu tiên theo quy định nội bộ đã xác nhận."
                : "General point tiers are listed separately. Confirm which route-specific rule takes precedence."}
            </p>
          </div>

          <div className="pricing-benefit-grid">
            {generalRules.map((rule, index) => (
              <article className="pricing-benefit-card" key={rule.points}>
                <div className={`pricing-benefit-icon icon-${(index % 3) + 1}`}>
                  <Sparkles size={25} />
                </div>
                <span className="pricing-points-badge">{rule.points}</span>
                <h3>{rule.title}</h3>
                <p>{rule.description}</p>
              </article>
            ))}
          </div>

          <div className="pricing-disclaimer">
            <div className="pricing-disclaimer-icon">
              <AlertCircle size={22} />
            </div>
            <div>
              <h3>{isVi ? "Các quy định cần nhớ" : "Important rules"}</h3>
              <ul>
                <li>
                  {isVi
                    ? "Thành viên san điểm phải để lại tối thiểu 1 điểm."
                    : "Members transferring points must retain at least 1 point."}
                </li>
                <li>
                  {isVi
                    ? "Giá bán điểm được quy định là 180.000đ/điểm."
                    : "The stated point selling price is VND 180,000 per point."}
                </li>
                <li>
                  {isVi
                    ? "Lịch ngoại tuyến: X5 là 8k/km, X7 là 9k/km theo nội dung quy định; cần xác nhận phạm vi áp dụng và các ngoại lệ."
                    : "Off-route rates are stated as 8k/km for X5 and 9k/km for X7; confirm exceptions."}
                </li>
                <li>
                  {isVi
                    ? "Từ 3.000k trở lên, chủ lịch tự ghi mức điểm (+/-); không mặc định 3,5 điểm."
                    : "For fares of 3,000k or above, the owner specifies the points."}
                </li>
                <li>
                  {isVi
                    ? "Lịch ngoại tuyến không áp giá sàn riêng của tuyến trong một số trường hợp; cần đối chiếu đúng quy định phòng."
                    : "Check room-specific minimum fare rules for off-route bookings."}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta-section">
        <div className="pricing-container">
          <div className="pricing-cta">
            <div className="pricing-cta-decoration pricing-cta-decoration-one" />
            <div className="pricing-cta-decoration pricing-cta-decoration-two" />

            <div className="pricing-cta-content">
              <div className="pricing-cta-label">
                <Sparkles size={15} />
                GoAnywhere
              </div>

              <h2>
                {isVi
                  ? "Sẵn sàng cho hành trình tiếp theo?"
                  : "Ready for your next journey?"}
              </h2>

              <p>
                {isVi
                  ? "Chọn tuyến và loại xe phù hợp để bắt đầu đặt chuyến."
                  : "Choose a route and vehicle to start your booking."}
              </p>

              <button
                className="pricing-button pricing-cta-button"
                onClick={() => navigate("/booking")}
              >
                {isVi ? "Bắt đầu đặt xe" : "Book your ride"}
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="pricing-cta-illustration">
              <div className="pricing-cta-circle">
                <CarFront size={100} strokeWidth={1.2} />
              </div>
              <div className="pricing-cta-mini-card">
                <MapPin size={20} />
                <span>{isVi ? "Đi xa, đi gần" : "Near or far"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}