import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Search,
  MessageSquareText,
  ArrowLeft,
  ArrowRight,
  Quote,
  ShieldCheck,
  ThumbsUp,
  CarFront,
  SlidersHorizontal,
} from "lucide-react";
import "./Reviews.css";

const demoReviews = [
  {
    id: "review-1",
    name: "Minh Anh",
    role: "Khách hàng cá nhân",
    rating: 5,
    comment:
      "Dịch vụ rất tốt, tài xế thân thiện và đến đúng giờ. Xe sạch sẽ, hành trình thoải mái. Tôi sẽ tiếp tục sử dụng GoAnywhere.",
    route: "Long Xuyên → Cần Thơ",
    date: "2026-10-10",
    initials: "MA",
    vehicle: "SUV",
  },
  {
    id: "review-2",
    name: "Hoàng Nam",
    role: "Khách hàng doanh nghiệp",
    rating: 5,
    comment:
      "Tôi thường xuyên đặt xe đi công tác. Quy trình đặt xe nhanh chóng, giá cả minh bạch và tài xế rất chuyên nghiệp.",
    route: "Long Xuyên → TP. Hồ Chí Minh",
    date: "2026-10-08",
    initials: "HN",
    vehicle: "Premium",
  },
  {
    id: "review-3",
    name: "Thuỳ Linh",
    role: "Khách hàng cá nhân",
    rating: 4,
    comment:
      "Giao diện dễ sử dụng, thông tin chuyến đi rõ ràng. Chuyến đi khá thoải mái, mong rằng ứng dụng sẽ có thêm nhiều lựa chọn xe.",
    route: "Châu Đốc → Long Xuyên",
    date: "2026-10-05",
    initials: "TL",
    vehicle: "Sedan",
  },
  {
    id: "review-4",
    name: "Quốc Bảo",
    role: "Khách hàng cá nhân",
    rating: 5,
    comment:
      "Đặt xe đưa đón sân bay rất tiện lợi. Tài xế hỗ trợ hành lý nhiệt tình và chủ động liên hệ trước giờ đón.",
    route: "Long Xuyên → Sân bay Cần Thơ",
    date: "2026-10-02",
    initials: "QB",
    vehicle: "SUV",
  },
  {
    id: "review-5",
    name: "Ngọc Trâm",
    role: "Khách hàng doanh nghiệp",
    rating: 4,
    comment:
      "Dịch vụ phù hợp cho các chuyến đi công việc. Thông tin đặt xe được trình bày dễ hiểu và thao tác khá thuận tiện.",
    route: "Long Xuyên → Cần Thơ",
    date: "2026-09-28",
    initials: "NT",
    vehicle: "Sedan",
  },
  {
    id: "review-6",
    name: "Thanh Phong",
    role: "Khách hàng cá nhân",
    rating: 5,
    comment:
      "Trải nghiệm tốt từ lúc đặt xe đến khi kết thúc hành trình. Xe thoải mái, tài xế lịch sự và lái xe an toàn.",
    route: "Tân Châu → Châu Đốc",
    date: "2026-09-25",
    initials: "TP",
    vehicle: "Premium",
  },
];

const translations = {
  vi: {
    eyebrow: "ĐÁNH GIÁ KHÁCH HÀNG",
    title: "Niềm tin được xây dựng",
    titleHighlight: "qua mỗi hành trình",
    description:
      "Khám phá những chia sẻ từ khách hàng đã trải nghiệm dịch vụ của GoAnywhere.",
    average: "Điểm đánh giá trung bình",
    reviews: "lượt đánh giá",
    satisfaction: "Khách hàng hài lòng",
    trips: "Đồng hành cùng mọi hành trình",
    all: "Tất cả",
    search: "Tìm theo tên khách hàng hoặc hành trình...",
    filter: "Lọc đánh giá",
    newest: "Mới nhất",
    highest: "Điểm cao nhất",
    lowest: "Điểm thấp nhất",
    result: "Kết quả đánh giá",
    noResult: "Không tìm thấy đánh giá",
    noResultDesc: "Hãy thử thay đổi từ khóa hoặc bộ lọc của bạn.",
    clear: "Xóa bộ lọc",
    verified: "Khách hàng",
    route: "Hành trình",
    vehicle: "Loại xe",
    helpful: "hữu ích",
    bookingTitle: "Sẵn sàng cho hành trình tiếp theo?",
    bookingDesc:
      "Đặt xe cùng GoAnywhere để có trải nghiệm di chuyển thoải mái và thuận tiện.",
    bookingButton: "Đặt xe ngay",
    home: "Về trang chủ",
    page: "Trang",
    of: "trên",
    stars: "sao",
    customer: "khách hàng",
    allRatings: "Tất cả số sao",
  },
  en: {
    eyebrow: "CUSTOMER REVIEWS",
    title: "Trust built",
    titleHighlight: "on every journey",
    description:
      "Discover what customers say about their GoAnywhere travel experiences.",
    average: "Average rating",
    reviews: "reviews",
    satisfaction: "Customer satisfaction",
    trips: "Here for every journey",
    all: "All",
    search: "Search by customer name or route...",
    filter: "Filter reviews",
    newest: "Newest",
    highest: "Highest rated",
    lowest: "Lowest rated",
    result: "Review results",
    noResult: "No reviews found",
    noResultDesc: "Try changing your search or filters.",
    clear: "Clear filters",
    verified: "Customer",
    route: "Route",
    vehicle: "Vehicle",
    helpful: "helpful",
    bookingTitle: "Ready for your next journey?",
    bookingDesc:
      "Book with GoAnywhere for a comfortable and convenient travel experience.",
    bookingButton: "Book a ride",
    home: "Back to home",
    page: "Page",
    of: "of",
    stars: "stars",
    customer: "customers",
    allRatings: "All ratings",
  },
};

const ITEMS_PER_PAGE = 6;

function formatReviewDate(date, language) {
  if (!date) return "";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat(language === "vi" ? "vi-VN" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

function RatingStars({ rating, size = 16 }) {
  return (
    <div
      className="reviews-rating-stars"
      aria-label={`${rating} / 5`}
      title={`${rating} / 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          fill={star <= rating ? "currentColor" : "none"}
          className={star <= rating ? "is-filled" : "is-empty"}
        />
      ))}
    </div>
  );
}

function readSavedReviews() {
  try {
    const stored = localStorage.getItem("goanywhere-trip-reviews");
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return [];
    }

    return Object.entries(parsed).map(([tripId, review]) => ({
      id: `saved-${tripId}`,
      tripId,
      name: review.name || "GoAnywhere Customer",
      role: review.role || "Khách hàng",
      rating: Number(review.rating) || 5,
      comment: review.comment || "",
      route: review.route || "",
      date: review.createdAt || new Date().toISOString(),
      initials: (review.name || "GA")
        .trim()
        .split(/\s+/)
        .slice(-2)
        .map((word) => word[0])
        .join("")
        .toUpperCase(),
      vehicle: review.vehicle || "",
      isSaved: true,
    }));
  } catch {
    return [];
  }
}

export default function Reviews({ language = "vi" }) {
  const isVi = language === "vi";
  const t = translations[isVi ? "vi" : "en"];

  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [helpfulReviews, setHelpfulReviews] = useState([]);

  const savedReviews = useMemo(() => readSavedReviews(), []);

  const allReviews = useMemo(
    () => [...savedReviews, ...demoReviews],
    [savedReviews]
  );

  const averageRating = allReviews.length
    ? (
        allReviews.reduce((sum, review) => sum + review.rating, 0) /
        allReviews.length
      ).toFixed(1)
    : "0.0";

  const filteredReviews = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    const result = allReviews.filter((review) => {
      const matchesKeyword =
        !keyword ||
        review.name?.toLowerCase().includes(keyword) ||
        review.route?.toLowerCase().includes(keyword) ||
        review.comment?.toLowerCase().includes(keyword);

      const matchesRating =
        ratingFilter === "all" ||
        review.rating === Number(ratingFilter);

      return matchesKeyword && matchesRating;
    });

    return result.sort((a, b) => {
      if (sortBy === "highest") return b.rating - a.rating;
      if (sortBy === "lowest") return a.rating - b.rating;

      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [allReviews, searchTerm, ratingFilter, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredReviews.length / ITEMS_PER_PAGE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const visibleReviews = filteredReviews.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  const resetFilters = () => {
    setSearchTerm("");
    setRatingFilter("all");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const handleHelpful = (reviewId) => {
    setHelpfulReviews((previous) =>
      previous.includes(reviewId)
        ? previous.filter((id) => id !== reviewId)
        : [...previous, reviewId]
    );
  };

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: allReviews.filter((review) => review.rating === rating).length,
  }));

  return (
    <main className="reviews-page">
      <section className="reviews-hero">
        <div className="reviews-hero-decoration reviews-hero-decoration-one" />
        <div className="reviews-hero-decoration reviews-hero-decoration-two" />

        <div className="reviews-container reviews-hero-inner">
          <div className="reviews-hero-copy">
            <span className="reviews-eyebrow">
              <MessageSquareText size={16} />
              {t.eyebrow}
            </span>

            <h1>
              {t.title}
              <span>{t.titleHighlight}</span>
            </h1>

            <p>{t.description}</p>

            <div className="reviews-hero-actions">
              <Link to="/home#booking" className="reviews-primary-button">
                <CarFront size={18} />
                {t.bookingButton}
                <ArrowRight size={17} />
              </Link>

              <Link to="/home" className="reviews-secondary-link">
                <ArrowLeft size={16} />
                {t.home}
              </Link>
            </div>
          </div>

          <div className="reviews-overview-card">
            <div className="reviews-overview-icon">
              <Star size={25} fill="currentColor" />
            </div>

            <div className="reviews-overview-score">{averageRating}</div>

            <RatingStars rating={Math.round(Number(averageRating))} size={19} />

            <p>{t.average}</p>

            <div className="reviews-overview-total">
              {allReviews.length} {t.reviews}
            </div>

            <div className="reviews-rating-breakdown">
              {ratingCounts.map((item) => (
                <div className="reviews-rating-row" key={item.rating}>
                  <span>{item.rating}</span>
                  <Star size={12} fill="currentColor" />
                  <div className="reviews-rating-track">
                    <span
                      style={{
                        width: `${
                          allReviews.length
                            ? (item.count / allReviews.length) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                  <span className="reviews-rating-count">{item.count}</span>
                </div>
              ))}
            </div>

            <div className="reviews-overview-footer">
              <ShieldCheck size={17} />
              <span>{t.trips}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-content-section">
        <div className="reviews-container">
          <div className="reviews-section-heading">
            <div>
              <span className="reviews-section-eyebrow">
                {t.eyebrow}
              </span>
              <h2>{t.result}</h2>
              <p>
                {filteredReviews.length} {t.reviews}
              </p>
            </div>
          </div>

          <div className="reviews-toolbar">
            <div className="reviews-search-box">
              <Search size={19} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder={t.search}
                aria-label={t.search}
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                  aria-label={isVi ? "Xóa tìm kiếm" : "Clear search"}
                >
                  ×
                </button>
              )}
            </div>

            <div className="reviews-filter-control">
              <SlidersHorizontal size={17} />
              <select
                value={ratingFilter}
                onChange={(event) => {
                  setRatingFilter(event.target.value);
                  setCurrentPage(1);
                }}
                aria-label={t.filter}
              >
                <option value="all">{t.allRatings}</option>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <option value={rating} key={rating}>
                    {rating} {t.stars}
                  </option>
                ))}
              </select>
            </div>

            <select
              className="reviews-sort-select"
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value);
                setCurrentPage(1);
              }}
              aria-label={isVi ? "Sắp xếp đánh giá" : "Sort reviews"}
            >
              <option value="newest">{t.newest}</option>
              <option value="highest">{t.highest}</option>
              <option value="lowest">{t.lowest}</option>
            </select>
          </div>

          {visibleReviews.length > 0 ? (
            <div className="reviews-list">
              {visibleReviews.map((review) => {
                const isHelpful = helpfulReviews.includes(review.id);

                return (
                  <article className="reviews-card" key={review.id}>
                    <div className="reviews-card-top">
                      <div className="reviews-reviewer">
                        <div className="reviews-avatar">
                          {review.initials}
                        </div>

                        <div className="reviews-reviewer-info">
                          <strong>{review.name}</strong>
                          <span>{isVi ? review.role : "GoAnywhere customer"}</span>
                          <div className="reviews-reviewer-badge">
                            <ShieldCheck size={13} />
                            {t.verified}
                          </div>
                        </div>
                      </div>

                      <time className="reviews-date">
                        {formatReviewDate(review.date, language)}
                      </time>
                    </div>

                    <div className="reviews-card-rating">
                      <RatingStars rating={review.rating} />
                      <span>{review.rating}.0/5</span>
                    </div>

                    <div className="reviews-route">
                      <CarFront size={17} />
                      <span>{t.route}: </span>
                      <strong>
                        {review.route ||
                          (isVi ? "Chuyến đi GoAnywhere" : "GoAnywhere trip")}
                      </strong>
                      {review.vehicle && (
                        <span className="reviews-vehicle-tag">
                          {review.vehicle}
                        </span>
                      )}
                    </div>

                    <div className="reviews-card-quote">
                      <Quote size={20} />
                      <p>{review.comment}</p>
                    </div>

                    <div className="reviews-card-footer">
                      <span className="reviews-thank-you">
                        {isVi
                          ? "Cảm ơn bạn đã chia sẻ trải nghiệm!"
                          : "Thank you for sharing your experience!"}
                      </span>

                      <button
                        type="button"
                        className={`reviews-helpful-button ${
                          isHelpful ? "is-helpful" : ""
                        }`}
                        onClick={() => handleHelpful(review.id)}
                        aria-pressed={isHelpful}
                      >
                        <ThumbsUp size={15} />
                        {isHelpful
                          ? isVi
                            ? "Đã thấy hữu ích"
                            : "Marked helpful"
                          : isVi
                            ? "Hữu ích"
                            : "Helpful"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="reviews-empty-state">
              <div className="reviews-empty-icon">
                <Search size={28} />
              </div>
              <h3>{t.noResult}</h3>
              <p>{t.noResultDesc}</p>
              <button
                type="button"
                className="reviews-primary-button"
                onClick={resetFilters}
              >
                {t.clear}
              </button>
            </div>
          )}

          {filteredReviews.length > ITEMS_PER_PAGE && (
            <nav className="reviews-pagination" aria-label="Pagination">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={safePage === 1}
                aria-label={isVi ? "Trang trước" : "Previous page"}
              >
                <ArrowLeft size={17} />
              </button>

              <span>
                {t.page} <strong>{safePage}</strong> {t.of}{" "}
                <strong>{totalPages}</strong>
              </span>

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                disabled={safePage === totalPages}
                aria-label={isVi ? "Trang tiếp theo" : "Next page"}
              >
                <ArrowRight size={17} />
              </button>
            </nav>
          )}
        </div>
      </section>

      <section className="reviews-bottom-cta">
        <div className="reviews-container reviews-bottom-cta-inner">
          <div className="reviews-bottom-cta-icon">
            <CarFront size={30} />
          </div>

          <div className="reviews-bottom-cta-copy">
            <h2>{t.bookingTitle}</h2>
            <p>{t.bookingDesc}</p>
          </div>

          <Link to="/home#booking" className="reviews-primary-button">
            {t.bookingButton}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}