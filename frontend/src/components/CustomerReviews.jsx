import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./CustomerReviews.css";

const demoReviews = [
  {
    name: "Minh Anh",
    role: "Khách hàng cá nhân",
    rating: 5,
    content:
      "Đặt xe nhanh chóng, tài xế thân thiện và đến đúng giờ. Xe sạch sẽ, hành trình rất thoải mái.",
    initials: "MA",
  },
  {
    name: "Hoàng Nam",
    role: "Khách hàng doanh nghiệp",
    rating: 5,
    content:
      "Dịch vụ chuyên nghiệp, giá cả rõ ràng. Tôi thường sử dụng GoAnywhere cho các chuyến công tác.",
    initials: "HN",
  },
  {
    name: "Thuỳ Linh",
    role: "Khách hàng cá nhân",
    rating: 5,
    content:
      "Giao diện đặt xe dễ sử dụng, thông tin chuyến đi rõ ràng. Đây là lựa chọn đáng tin cậy cho gia đình.",
    initials: "TL",
  },
];

export default function CustomerReviews({ language = "vi" }) {
  const isVi = language === "vi";

  return (
    <section className="customer-reviews-section" id="customer-reviews">
      <div className="customer-reviews-container">
        <div className="customer-reviews-heading">
          <span className="customer-reviews-eyebrow">
            {isVi ? "KHÁCH HÀNG NÓI GÌ?" : "CUSTOMER STORIES"}
          </span>

          <h2>
            {isVi ? "Trải nghiệm tốt, " : "Great journeys, "}
            <span>
              {isVi ? "niềm tin trọn vẹn" : "trusted experiences"}
            </span>
          </h2>

          <p>
            {isVi
              ? "Mỗi hành trình là một cơ hội để GoAnywhere phục vụ bạn tốt hơn."
              : "Every journey is an opportunity for GoAnywhere to serve you better."}
          </p>
        </div>

        <div className="customer-reviews-grid">
          {demoReviews.map((review) => (
            <article className="customer-review-card" key={review.initials}>
              <div className="customer-review-top">
                <div className="customer-review-quote">
                  <Quote size={23} />
                </div>

                <div className="customer-review-stars" aria-label={`${review.rating} stars`}>
                  {Array.from({ length: review.rating }, (_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="customer-review-content">
                “{review.content}”
              </p>

              <div className="customer-review-author">
                <div className="customer-review-avatar">
                  {review.initials}
                </div>

                <div>
                  <strong>{review.name}</strong>
                  <span>
                    {isVi
                      ? review.role
                      : review.role === "Khách hàng cá nhân"
                        ? "Individual customer"
                        : "Business customer"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="customer-reviews-bottom">
          <p>
            {isVi
              ? "Bạn đã trải nghiệm GoAnywhere?"
              : "Have you travelled with GoAnywhere?"}
          </p>

          <Link to="/trips" className="customer-review-cta">
            {isVi ? "Đánh giá chuyến đi" : "Review your trip"}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}