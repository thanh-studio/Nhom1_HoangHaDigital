
import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = ({ language = "vi" }) => {
  const vi = language === "vi";

  const eventServices = vi
    ? [
        { icon: "💍", title: "Tiệc cưới", desc: "Hỗ trợ nhu cầu di chuyển trong những dịp trọng đại." },
        { icon: "🎤", title: "Sự kiện và hội nghị", desc: "Phù hợp cho lịch trình tham dự chương trình, hội họp." },
        { icon: "🎉", title: "Tiệc và gặp mặt", desc: "Giải pháp di chuyển cho các buổi tiệc và cuộc hẹn." },
      ]
    : [
        { icon: "💍", title: "Weddings", desc: "Transportation support for special celebrations." },
        { icon: "🎤", title: "Events and conferences", desc: "For conferences, meetings and organized events." },
        { icon: "🎉", title: "Parties and gatherings", desc: "Transportation solutions for parties and meetups." },
      ];

  return (
    <main className="events-page">
      <section className="events-hero">
        <div>
          <span className="events-label">{vi ? "DỊCH VỤ SỰ KIỆN" : "EVENT SERVICES"}</span>
          <h1>
            {vi ? "Tận hưởng sự kiện," : "Enjoy the occasion,"}
            <span>{vi ? " an tâm chuyện di chuyển." : " leave the ride to us."}</span>
          </h1>
          <p>
            {vi
              ? "Chủ động kế hoạch đi lại cho tiệc cưới, hội nghị, buổi gặp mặt và những sự kiện đáng nhớ."
              : "Plan transportation for weddings, conferences, gatherings and memorable occasions."}
          </p>
          <Link to="/contact" className="events-button">{vi ? "Trao đổi nhu cầu" : "Discuss your needs"} ↗</Link>
        </div>
        <div className="events-visual">
          <div className="events-visual-circle">🎉</div>
          <span className="events-confetti events-confetti-one">✦</span>
          <span className="events-confetti events-confetti-two">✧</span>
          <div className="events-floating">{vi ? "Ngày đặc biệt của bạn" : "Your special day"}</div>
        </div>
      </section>

      <section className="events-content">
        <div className="events-heading">
          <span className="events-label">{vi ? "ĐỒNG HÀNH CÙNG SỰ KIỆN" : "HERE FOR YOUR EVENT"}</span>
          <h2>{vi ? "Di chuyển thuận tiện cho mọi dịp" : "Convenient transportation for every occasion"}</h2>
        </div>
        <div className="events-grid">
          {eventServices.map((item) => (
            <article className="events-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/contact">{vi ? "Liên hệ" : "Contact us"} ↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="events-cta">
        <h2>{vi ? "Lên kế hoạch cho sự kiện sắp tới" : "Plan your upcoming event"}</h2>
        <p>{vi ? "Chia sẻ lịch trình dự kiến để tìm hiểu lựa chọn phù hợp." : "Share your plans to explore suitable options."}</p>
        <Link to="/contact" className="events-button">{vi ? "Liên hệ GoAnywhere" : "Contact GoAnywhere"} ↗</Link>
      </section>
    </main>
  );
};

export default Events;
