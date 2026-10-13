
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, Mic, PartyPopper, Sparkles } from "lucide-react";
import { EventsArt } from "./Illustrations";
import useScrollReveal from "./useScrollReveal";
import "./Events.css";

const Events = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const eventServices = vi
    ? [
        { icon: Heart, title: "Tiệc cưới", desc: "Hỗ trợ nhu cầu di chuyển trong những dịp trọng đại." },
        { icon: Mic, title: "Sự kiện và hội nghị", desc: "Phù hợp cho lịch trình tham dự chương trình, hội họp." },
        { icon: PartyPopper, title: "Tiệc và gặp mặt", desc: "Giải pháp di chuyển cho các buổi tiệc và cuộc hẹn." },
      ]
    : [
        { icon: Heart, title: "Weddings", desc: "Transportation support for special celebrations." },
        { icon: Mic, title: "Events and conferences", desc: "For conferences, meetings and organized events." },
        { icon: PartyPopper, title: "Parties and gatherings", desc: "Transportation solutions for parties and meetups." },
      ];

  return (
    <main className="events-page" ref={revealRef}>
      <section className="events-hero">
        <div data-reveal="left">
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
          <Link to="/contact" className="events-button">{vi ? "Trao đổi nhu cầu" : "Discuss your needs"} <ArrowUpRight size={18} /></Link>
        </div>
        <div
          className="events-visual"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="events-visual-circle">
            <EventsArt label={vi ? "Xe hoa GoAnywhere cho sự kiện" : "GoAnywhere event car"} />
          </div>
          <span className="events-confetti events-confetti-one">
            <Sparkles size={44} />
          </span>
          <span className="events-confetti events-confetti-two">
            <Sparkles size={34} />
          </span>
          <div className="events-floating">{vi ? "Ngày đặc biệt của bạn" : "Your special day"}</div>
        </div>
      </section>

      <section className="events-content">
        <div className="events-heading" data-reveal="up">
          <span className="events-label">{vi ? "ĐỒNG HÀNH CÙNG SỰ KIỆN" : "HERE FOR YOUR EVENT"}</span>
          <h2>{vi ? "Di chuyển thuận tiện cho mọi dịp" : "Convenient transportation for every occasion"}</h2>
        </div>
        <div className="events-grid">
          {eventServices.map((item, index) => (
            <article
              className="events-card"
              key={item.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <span>
                <item.icon size={28} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to="/contact">{vi ? "Liên hệ" : "Contact us"} <ArrowUpRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="events-cta" data-reveal="zoom">
        <h2>{vi ? "Lên kế hoạch cho sự kiện sắp tới" : "Plan your upcoming event"}</h2>
        <p>{vi ? "Chia sẻ lịch trình dự kiến để tìm hiểu lựa chọn phù hợp." : "Share your plans to explore suitable options."}</p>
        <Link to="/contact" className="events-button">{vi ? "Liên hệ GoAnywhere" : "Contact GoAnywhere"} <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
};

export default Events;
