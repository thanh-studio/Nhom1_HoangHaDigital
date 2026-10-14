import { useEffect, useState } from "react";
import {
  Star,
  X,
  MessageSquareText,
  Send,
  CarFront,
  MapPin,
} from "lucide-react";
import "./ReviewModal.css";

export default function ReviewModal({
  isOpen,
  trip,
  language = "vi",
  existingReview = null,
  onClose,
  onSubmit,
}) {
  const isVi = language === "vi";

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setRating(existingReview?.rating || 5);
      setComment(existingReview?.comment || "");
      setHoverRating(0);
      setError("");
    }
  }, [isOpen, existingReview, trip]);

  if (!isOpen || !trip) return null;

  const ratingLabels = isVi
    ? {
        1: "Rất không hài lòng",
        2: "Chưa hài lòng",
        3: "Bình thường",
        4: "Hài lòng",
        5: "Tuyệt vời",
      }
    : {
        1: "Very dissatisfied",
        2: "Dissatisfied",
        3: "Average",
        4: "Satisfied",
        5: "Excellent",
      };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!rating) {
      setError(isVi ? "Vui lòng chọn số sao." : "Please select a rating.");
      return;
    }

    if (!comment.trim()) {
      setError(
        isVi
          ? "Vui lòng nhập nhận xét của bạn."
          : "Please enter your review."
      );
      return;
    }

    onSubmit?.({
      tripId: trip.id || trip._id,
      rating,
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div
      className="review-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <section
        className="review-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="review-modal-close"
          onClick={onClose}
          aria-label={isVi ? "Đóng" : "Close"}
        >
          <X size={21} />
        </button>

        <div className="review-modal-icon">
          <MessageSquareText size={27} />
        </div>

        <span className="review-modal-eyebrow">
          {isVi ? "CHIA SẺ TRẢI NGHIỆM" : "SHARE YOUR EXPERIENCE"}
        </span>

        <h2 id="review-modal-title">
          {existingReview
            ? isVi
              ? "Chỉnh sửa đánh giá"
              : "Edit your review"
            : isVi
              ? "Đánh giá chuyến đi"
              : "Rate your trip"}
        </h2>

        <p className="review-modal-description">
          {isVi
            ? "Ý kiến của bạn giúp GoAnywhere cải thiện chất lượng dịch vụ."
            : "Your feedback helps GoAnywhere improve its services."}
        </p>

        <div className="review-trip-summary">
          <div className="review-trip-icon">
            <CarFront size={22} />
          </div>

          <div className="review-trip-info">
            <strong>{trip.id || trip._id || "GoAnywhere"}</strong>
            <span>
              <MapPin size={14} />
              {trip.pickup || trip.from || "Điểm đón"}
            </span>
            <span className="review-trip-destination">
              → {trip.destination || trip.to || "Điểm đến"}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="review-rating-section">
            <label>
              {isVi ? "Bạn cảm thấy chuyến đi thế nào?" : "How was your trip?"}
            </label>

            <div className="review-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`review-star-button ${
                    star <= (hoverRating || rating) ? "active" : ""
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`${star} ${isVi ? "sao" : "stars"}`}
                  aria-pressed={rating === star}
                >
                  <Star
                    size={32}
                    fill={star <= (hoverRating || rating) ? "currentColor" : "none"}
                  />
                </button>
              ))}
            </div>

            <span className="review-rating-label">
              {ratingLabels[hoverRating || rating]}
            </span>
          </div>

          <div className="review-comment-section">
            <label htmlFor="review-comment">
              {isVi ? "Nhận xét của bạn" : "Your review"}
            </label>

            <textarea
              id="review-comment"
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
                if (error) setError("");
              }}
              placeholder={
                isVi
                  ? "Chia sẻ về tài xế, chất lượng xe và trải nghiệm của bạn..."
                  : "Tell us about the driver, vehicle and your experience..."
              }
              rows={4}
              maxLength={1000}
              required
            />

            <div className="review-comment-footer">
              <span>
                {isVi
                  ? "Vui lòng chia sẻ đánh giá chân thực."
                  : "Please share an honest review."}
              </span>
              <span>{comment.length}/1000</span>
            </div>
          </div>

          {error && <p className="review-form-error">{error}</p>}

          <div className="review-modal-actions">
            <button
              type="button"
              className="review-cancel-button"
              onClick={onClose}
            >
              {isVi ? "Để sau" : "Cancel"}
            </button>

            <button type="submit" className="review-submit-button">
              <Send size={17} />
              {existingReview
                ? isVi
                  ? "Cập nhật đánh giá"
                  : "Update review"
                : isVi
                  ? "Gửi đánh giá"
                  : "Submit review"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}