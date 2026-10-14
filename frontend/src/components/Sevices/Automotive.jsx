import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Plane,
  PlaneTakeoff,
  PlaneLanding,
  Clock3,
  MapPin,
  Luggage,
  ShieldCheck,
  CalendarClock,
  CarFront,
  CheckCircle2,
} from "lucide-react";
import { AutomotiveArt } from "../Illustrations";
import useScrollReveal from "../useScrollReveal";
import "./Automotive.css";

const Automotive = ({ language = "vi" }) => {
  const vi = language === "vi";
  const revealRef = useScrollReveal([language]);

  const services = vi
    ? [
        {
          icon: PlaneLanding,
          title: "Đón khách tại sân bay",
          desc: "Tài xế đón bạn tại sân bay và hỗ trợ di chuyển đến khách sạn, nhà riêng hoặc địa điểm mong muốn.",
        },
        {
          icon: PlaneTakeoff,
          title: "Đưa khách ra sân bay",
          desc: "Chủ động đặt giờ đón để có thời gian di chuyển phù hợp trước chuyến bay.",
        },
        {
          icon: CalendarClock,
          title: "Đặt xe khứ hồi",
          desc: "Sắp xếp cả chiều đi và chiều về để hành trình của bạn thuận tiện hơn.",
        },
        {
          icon: Clock3,
          title: "Đón theo lịch hẹn",
          desc: "Đặt trước thời gian và địa điểm đón để chủ động kế hoạch di chuyển.",
        },
        {
          icon: Luggage,
          title: "Hỗ trợ hành lý",
          desc: "Hỗ trợ sắp xếp hành lý lên xe, phù hợp với khách du lịch và khách công tác.",
        },
        {
          icon: CarFront,
          title: "Đưa đón theo yêu cầu",
          desc: "Tư vấn lựa chọn phương án xe phù hợp với số lượng hành khách và nhu cầu chuyến đi.",
        },
      ]
    : [
        {
          icon: PlaneLanding,
          title: "Airport Pickup",
          desc: "Meet your driver at the airport and travel to your hotel, home or preferred destination.",
        },
        {
          icon: PlaneTakeoff,
          title: "Airport Drop-off",
          desc: "Schedule your pickup in advance to allow suitable travel time before departure.",
        },
        {
          icon: CalendarClock,
          title: "Round-Trip Transfers",
          desc: "Arrange both arrival and return transfers for a more convenient journey.",
        },
        {
          icon: Clock3,
          title: "Scheduled Pickup",
          desc: "Choose your pickup time and location to plan your journey ahead.",
        },
        {
          icon: Luggage,
          title: "Luggage Assistance",
          desc: "Get help arranging luggage in the vehicle, ideal for tourists and business travelers.",
        },
        {
          icon: CarFront,
          title: "Customized Transfers",
          desc: "Discuss suitable vehicle options based on passenger numbers and travel needs.",
        },
      ];

  const benefits = vi
    ? [
        {
          icon: Clock3,
          title: "Chủ động thời gian",
          desc: "Đặt lịch trước để chủ động kế hoạch đến hoặc rời sân bay.",
        },
        {
          icon: ShieldCheck,
          title: "Ưu tiên an toàn",
          desc: "Đề cao sự cẩn thận, thái độ phục vụ và trải nghiệm của hành khách.",
        },
        {
          icon: MapPin,
          title: "Đón trả đúng điểm hẹn",
          desc: "Thống nhất địa điểm đón và trả khách trước khi khởi hành.",
        },
      ]
    : [
        {
          icon: Clock3,
          title: "Plan Ahead",
          desc: "Book in advance to organize your airport arrival or departure.",
        },
        {
          icon: ShieldCheck,
          title: "Safety First",
          desc: "We prioritize careful driving and a considerate passenger experience.",
        },
        {
          icon: MapPin,
          title: "Agreed Pickup Points",
          desc: "Confirm your pickup and drop-off locations before departure.",
        },
      ];

  const steps = vi
    ? [
        {
          number: "01",
          title: "Gửi thông tin chuyến đi",
          desc: "Cung cấp sân bay, địa điểm đón hoặc trả, thời gian và số lượng hành khách.",
        },
        {
          number: "02",
          title: "Xác nhận dịch vụ",
          desc: "Trao đổi phương án di chuyển, loại xe phù hợp và chi phí dự kiến.",
        },
        {
          number: "03",
          title: "Bắt đầu hành trình",
          desc: "Di chuyển theo lịch trình và địa điểm đã được xác nhận.",
        },
      ]
    : [
        {
          number: "01",
          title: "Share Your Trip Details",
          desc: "Provide the airport, pickup or drop-off location, time and passenger count.",
        },
        {
          number: "02",
          title: "Confirm Your Transfer",
          desc: "Discuss the travel plan, suitable vehicle and estimated cost.",
        },
        {
          number: "03",
          title: "Enjoy Your Journey",
          desc: "Travel according to your confirmed schedule and locations.",
        },
      ];

  return (
    <main className="automotive-page" ref={revealRef}>
      {/* HERO */}
      <section className="automotive-hero">
        <div className="automotive-hero-content" data-reveal="left">
          <span className="automotive-label">
            {vi ? "DỊCH VỤ ĐƯA ĐÓN SÂN BAY" : "AIRPORT TRANSFER SERVICE"}
          </span>

          <h1>
            {vi ? "Bắt đầu hành trình," : "Start your journey,"}
            <span>
              {vi ? " nhẹ nhàng từ sân bay." : " stress-free from the airport."}
            </span>
          </h1>

          <p>
            {vi
              ? "GoAnywhere mang đến giải pháp đưa đón sân bay thuận tiện cho chuyến du lịch, công tác và nhu cầu cá nhân. Đặt lịch trước, thống nhất điểm đón và tận hưởng hành trình thoải mái hơn."
              : "GoAnywhere offers convenient airport transfers for holidays, business trips and everyday travel. Book ahead, confirm your pickup point and enjoy a smoother journey."}
          </p>

          <div className="automotive-hero-actions">
            <Link
              to="/contact"
              className="automotive-button"
              state={{ service: vi ? "Dịch vụ đưa đón sân bay" : "Airport Transfer Service" }}
            >
              {vi ? "Đặt xe sân bay" : "Book Airport Transfer"}
              <ArrowUpRight size={18} />
            </Link>

            <a href="#automotive-services" className="automotive-secondary-button">
              {vi ? "Khám phá dịch vụ" : "Explore Services"}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="automotive-hero-note">
            <CheckCircle2 size={17} />
            <span>
              {vi
                ? "Đón sân bay · Tiễn sân bay · Đặt xe khứ hồi"
                : "Airport pickup · Drop-off · Round-trip transfers"}
            </span>
          </div>
        </div>

        <div
          className="automotive-visual"
          data-reveal="zoom"
          style={{ "--reveal-delay": "150ms" }}
        >
          <div className="automotive-visual-glow" />

          <div className="automotive-car">
            <AutomotiveArt
              label={vi ? "Minh họa dịch vụ đưa đón sân bay GoAnywhere" : "GoAnywhere airport transfer illustration"}
            />
          </div>

          <span className="automotive-orbit automotive-orbit-one" />
          <span className="automotive-orbit automotive-orbit-two" />

          <div className="automotive-bubble automotive-bubble-top">
            <span><Plane size={19} /></span>
            <div>
              <strong>{vi ? "Đưa đón sân bay" : "Airport Transfer"}</strong>
              <small>{vi ? "Theo lịch hẹn của bạn" : "On your schedule"}</small>
            </div>
          </div>

          <div className="automotive-bubble automotive-bubble-bottom">
            <MapPin size={17} />
            <span>{vi ? "Đón và trả theo yêu cầu" : "Pickup & drop-off"}</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="automotive-content"
        id="automotive-services"
      >
        <div className="automotive-heading" data-reveal="up">
          <span className="automotive-label">
            {vi ? "GIẢI PHÁP ĐƯA ĐÓN" : "TRANSFER SOLUTIONS"}
          </span>
          <h2>
            {vi
              ? "Mọi hành trình sân bay, một lựa chọn thuận tiện"
              : "One Convenient Choice for Every Airport Journey"}
          </h2>
          <p>
            {vi
              ? "Lựa chọn dịch vụ phù hợp với lịch trình, điểm đến và nhu cầu của bạn."
              : "Choose a service that fits your schedule, destination and travel needs."}
          </p>
        </div>

        <div className="automotive-grid">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="automotive-card"
                key={item.title}
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 100}ms` }}
              >
                <span className="automotive-card-icon">
                  <Icon size={27} />
                </span>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <Link
                  to="/contact"
                  className="automotive-card-link"
                  state={{ service: item.title }}
                >
                  {vi ? "Tìm hiểu thêm" : "Learn More"}
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="automotive-benefits-section">
        <div className="automotive-content">
          <div className="automotive-heading" data-reveal="up">
            <span className="automotive-label">
              {vi ? "ĐỒNG HÀNH CÙNG BẠN" : "TRAVEL WITH CONFIDENCE"}
            </span>
            <h2>
              {vi ? "Thoải mái từ lúc khởi hành" : "Comfort from the Start"}
            </h2>
            <p>
              {vi
                ? "Một kế hoạch đưa đón rõ ràng giúp bạn chủ động hơn trong mỗi chuyến đi."
                : "A clear transfer plan helps you stay organized throughout your journey."}
            </p>
          </div>

          <div className="automotive-benefits-grid">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="automotive-benefit-card"
                  key={item.title}
                  data-reveal="up"
                  style={{ "--reveal-delay": `${index * 120}ms` }}
                >
                  <span><Icon size={25} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="automotive-content automotive-process-section">
        <div className="automotive-heading" data-reveal="up">
          <span className="automotive-label">
            {vi ? "CÁCH THỨC ĐẶT XE" : "HOW TO BOOK"}
          </span>
          <h2>
            {vi ? "Đặt xe sân bay trong 3 bước" : "Book in Three Simple Steps"}
          </h2>
        </div>

        <div className="automotive-process-grid">
          {steps.map((step, index) => (
            <article
              className="automotive-process-card"
              key={step.number}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 120}ms` }}
            >
              <span className="automotive-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>

              {index < steps.length - 1 && (
                <ArrowRight className="automotive-step-arrow" size={22} />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="automotive-cta" data-reveal="zoom">
        <div className="automotive-cta-icon">
          <Plane size={28} />
        </div>

        <span className="automotive-label">
          {vi ? "LÊN KẾ HOẠCH CHUYẾN ĐI" : "PLAN YOUR JOURNEY"}
        </span>

        <h2>
          {vi
            ? "Bạn sắp có chuyến bay?"
            : "Have a flight coming up?"}
        </h2>

        <p>
          {vi
            ? "Gửi thông tin chuyến đi cho GoAnywhere để được tư vấn phương án đưa đón phù hợp."
            : "Share your trip details with GoAnywhere to discuss a suitable airport transfer."}
        </p>

        <Link
          to="/contact"
          className="automotive-button"
          state={{ service: vi ? "Đặt xe đưa đón sân bay" : "Book Airport Transfer" }}
        >
          {vi ? "Liên hệ đặt xe" : "Arrange Your Transfer"}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Automotive;