
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CarFront, Clock, Route } from "lucide-react";
import { AutomotiveArt } from "../Illustrations";
import useScrollReveal from "../useScrollReveal";
import "./Automotive.css";

const Automotive = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const services = vi
    ? [
        { icon: CarFront, title: "Tài xế lái xe hộ", desc: "Hỗ trợ bạn di chuyển bằng chính phương tiện của mình." },
        { icon: Route, title: "Di chuyển đường dài", desc: "Phù hợp cho các chuyến đi liên tỉnh và hành trình dài." },
        { icon: Clock, title: "Đặt lịch linh hoạt", desc: "Chủ động lựa chọn thời gian theo nhu cầu cá nhân." },
      ]
    : [
        { icon: CarFront, title: "Designated driver", desc: "Travel in your own vehicle with a driver." },
        { icon: Route, title: "Long-distance trips", desc: "Suitable for intercity and extended journeys." },
        { icon: Clock, title: "Flexible scheduling", desc: "Choose a schedule that fits your needs." },
      ];

  return (
    <main className="automotive-page" ref={revealRef}>
      <section className="automotive-hero">
        <div data-reveal="left">
          <span className="automotive-label">{vi ? "DỊCH VỤ Ô TÔ" : "AUTOMOTIVE SERVICES"}</span>
          <h1>
            {vi ? "Lái xe an tâm," : "Drive with confidence,"}
            <span>{vi ? " hành trình thoải mái." : " enjoy the journey."}</span>
          </h1>
          <p>
            {vi
              ? "Giải pháp tài xế hỗ trợ bạn di chuyển linh hoạt bằng xe riêng, phù hợp với nhu cầu cá nhân và công việc."
              : "Flexible driver solutions for personal vehicles, daily needs and business travel."}
          </p>
          <Link to="/contact" className="automotive-button">
            {vi ? "Đặt dịch vụ" : "Book a service"} <ArrowUpRight size={18} />
          </Link>
        </div>
        <div
          className="automotive-visual"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="automotive-car">
            <AutomotiveArt label={vi ? "Tài xế GoAnywhere lái xe hộ" : "GoAnywhere designated driver"} />
          </div>
          <span className="automotive-orbit automotive-orbit-one" />
          <span className="automotive-orbit automotive-orbit-two" />
          <div className="automotive-bubble">{vi ? "Chủ động · Linh hoạt" : "Flexible · Convenient"}</div>
        </div>
      </section>

      <section className="automotive-content">
        <div className="automotive-heading" data-reveal="up">
          <span className="automotive-label">{vi ? "GIẢI PHÁP DI CHUYỂN" : "MOBILITY SOLUTIONS"}</span>
          <h2>{vi ? "Dịch vụ dành cho hành trình của bạn" : "Services for your journey"}</h2>
        </div>
        <div className="automotive-grid">
          {services.map((item, index) => (
            <article
              className="automotive-card"
              key={item.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <span>
                <item.icon size={28} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="automotive-cta" data-reveal="zoom">
        <h2>{vi ? "Bạn đã sẵn sàng cho chuyến đi tiếp theo?" : "Ready for your next journey?"}</h2>
        <p>{vi ? "Liên hệ với chúng tôi để được hỗ trợ." : "Contact us to get started."}</p>
        <Link to="/contact" className="automotive-button">{vi ? "Liên hệ ngay" : "Contact us"} <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
};

export default Automotive;
