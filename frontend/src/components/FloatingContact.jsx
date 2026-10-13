import {
  MessageCircle,
  Phone,
  Headset,
  Plane,
  CarFront,
  X,
} from "lucide-react";

import "./FloatingContact.css";

export default function FloatingContact() {
  const zaloUrl = "https://zalo.me/SDT_CUA_BAN";
  const messengerUrl = "https://m.me/FACEBOOK_PAGE_ID";
  const phoneNumber = "0900000000";

  return (
    <aside className="floating-contact" aria-label="Liên hệ nhanh">
      <a
        href="#driver"
        className="floating-contact-item"
        aria-label="Dịch vụ tài xế"
        title="Dịch vụ tài xế"
      >
        <CarFront />
        <span>Tài xế</span>
      </a>

      <a
        href="#booking"
        className="floating-contact-item"
        aria-label="Đặt xe"
        title="Đặt xe"
      >
        <Plane />
        <span>Đặt xe</span>
      </a>

      <a
        href="/contact"
        className="floating-contact-item"
        aria-label="Liên hệ doanh nghiệp"
        title="Liên hệ doanh nghiệp"
      >
        <Headset />
        <span>Liên hệ</span>
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className="floating-contact-item"
        aria-label="Gọi hotline"
        title="Gọi hotline"
      >
        <Phone />
        <span>Hotline</span>
      </a>

      <div className="floating-contact-socials">
        <a
          href={zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social-link floating-zalo"
          aria-label="Chat qua Zalo"
          title="Chat Zalo"
        >
          Zalo
        </a>

        <a
          href={messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social-link floating-messenger"
          aria-label="Chat qua Messenger"
          title="Chat Messenger"
        >
          <MessageCircle />
        </a>
      </div>
    </aside>
  );
}