import { useEffect, useState } from "react";
import {
  MessageCircle,
  Phone,
  Headset,
  Plane,
  CarFront,
  X,
} from "lucide-react";

import "./FloatingContact.css";

const STORAGE_KEY = "floating-contact-open";

// Mặc định: máy tính mở sẵn, điện thoại thu gọn (tránh che nội dung).
// Nếu người xem đã bấm ẩn/hiện trước đó thì giữ theo lựa chọn đó.
const getInitialOpen = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
      return saved === "1";
    }
  } catch {
    // Trình duyệt chặn localStorage: dùng mặc định bên dưới
  }

  return !window.matchMedia("(max-width: 768px)").matches;
};

export default function FloatingContact() {
  const zaloUrl = "https://zalo.me/SDT_CUA_BAN";
  const messengerUrl = "https://m.me/FACEBOOK_PAGE_ID";
  const phoneNumber = "0900000000";

  const [open, setOpen] = useState(getInitialOpen);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, open ? "1" : "0");
    } catch {
      // Bỏ qua nếu không lưu được
    }
  }, [open]);

  return (
    <>
      <aside
        id="floating-contact-panel"
        className={`floating-contact ${open ? "" : "is-hidden"}`}
        aria-label="Liên hệ nhanh"
        aria-hidden={!open}
        inert={!open}
      >
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

        <button
          type="button"
          className="floating-contact-close"
          onClick={() => setOpen(false)}
          aria-label="Ẩn liên hệ nhanh"
          aria-controls="floating-contact-panel"
          title="Ẩn"
        >
          <X />
        </button>
      </aside>

      <button
        type="button"
        className={`floating-contact-fab ${open ? "is-hidden" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Mở liên hệ nhanh"
        aria-controls="floating-contact-panel"
        aria-expanded={open}
        tabIndex={open ? -1 : 0}
        title="Liên hệ nhanh"
      >
        <Headset />
      </button>
    </>
  );
}
