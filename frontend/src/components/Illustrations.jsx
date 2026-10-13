// HÌNH MINH HỌA SVG DÙNG CHUNG CHO CÁC TRANG DỊCH VỤ

// Đầu xe nhìn thẳng (có tài xế), vẽ trong khung 200x200
const CarFrontShape = ({ bow = false }) => (
  <>
    <polygon points="88,118 112,118 175,200 25,200" fill="#fff" opacity=".12" />
    <path d="M100 160 V205" stroke="#fff" strokeWidth="3" strokeDasharray="8 7" opacity=".5" />
    <rect x="52" y="148" width="20" height="24" rx="5" fill="#2a1450" />
    <rect x="128" y="148" width="20" height="24" rx="5" fill="#2a1450" />
    <ellipse cx="58" cy="104" rx="9" ry="5" fill="#fff" />
    <ellipse cx="142" cy="104" rx="9" ry="5" fill="#fff" />
    <path d="M64 112 L77 78 Q79 71 87 71 L113 71 Q121 71 123 78 L136 112 Z" fill="#fff" />
    <path d="M73 108 L84 82 Q85 78 90 78 L110 78 Q115 78 116 82 L127 108 Z" fill="#4a2589" />
    <circle cx="100" cy="91" r="6.5" fill="#f2eaff" />
    <path d="M86 108 Q86 99 100 99 Q114 99 114 108 Z" fill="#f2eaff" />
    <path d="M89 108 Q100 98 111 108" stroke="#ff8a3d" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <rect x="44" y="106" width="112" height="50" rx="14" fill="#fff" />
    <rect x="54" y="118" width="24" height="11" rx="5.5" fill="#ff8a3d" />
    <rect x="122" y="118" width="24" height="11" rx="5.5" fill="#ff8a3d" />
    <rect x="84" y="120" width="32" height="7" rx="3.5" fill="#d9c8f5" />
    <rect x="87" y="136" width="26" height="11" rx="3" fill="#6035a5" />

    {bow && (
      <>
        <path d="M100 106 Q84 94 82 106 Q84 118 100 106 Z" fill="#ff8a3d" />
        <path d="M100 106 Q116 94 118 106 Q116 118 100 106 Z" fill="#ff8a3d" />
        <path d="M98 108 L92 122 M102 108 L108 122" stroke="#ff8a3d" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="106" r="4" fill="#ffb27d" />
      </>
    )}
  </>
);

// Trang Sự kiện: xe hoa, dây cờ và hoa giấy
export const EventsArt = ({ label }) => (
  <svg viewBox="0 0 200 200" role="img" aria-label={label}>
    <path d="M20 40 Q100 100 180 40" stroke="#fff" strokeWidth="1.5" fill="none" opacity=".6" />
    <polygon points="37,54 51,56 44,68" fill="#ff8a3d" />
    <polygon points="61,64 75,66 68,78" fill="#fff" />
    <polygon points="85,69 99,71 92,83" fill="#d9c8f5" />
    <polygon points="109,68 123,70 116,82" fill="#ff8a3d" />
    <polygon points="133,62 147,64 140,76" fill="#fff" />
    <polygon points="157,50 171,52 164,64" fill="#d9c8f5" />
    <rect x="34" y="104" width="7" height="3.5" rx="1.5" fill="#ff8a3d" transform="rotate(30 37 106)" />
    <rect x="160" y="98" width="7" height="3.5" rx="1.5" fill="#fff" transform="rotate(-25 163 100)" />
    <rect x="26" y="140" width="6" height="3" rx="1.5" fill="#ffb27d" transform="rotate(60 29 141)" />
    <rect x="170" y="138" width="6" height="3" rx="1.5" fill="#fff" transform="rotate(15 173 139)" />
    <circle cx="48" cy="86" r="2" fill="#fff" opacity=".7" />
    <circle cx="152" cy="84" r="2.5" fill="#ffb27d" />
    <g transform="translate(15 28) scale(.85)">
      <CarFrontShape bow />
    </g>
  </svg>
);

// Trang Ô tô: xe nhìn ngang đang chạy, bong bóng chìa khóa (lái xe hộ)
export const AutomotiveArt = ({ label }) => (
  <svg viewBox="0 0 200 200" role="img" aria-label={label}>
    <circle cx="40" cy="50" r="2" fill="#fff" opacity=".5" />
    <circle cx="100" cy="34" r="1.5" fill="#fff" opacity=".5" />
    <rect x="0" y="150" width="200" height="50" fill="#fff" opacity=".1" />
    <path d="M0 176 H200" stroke="#fff" strokeWidth="3" strokeDasharray="14 10" opacity=".45" />
    <path d="M8 112 H26 M2 126 H22 M10 138 H24" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".5" />
    <path d="M30 140 Q30 122 48 120 L66 118 L84 96 Q88 92 96 92 L128 92 Q136 92 141 98 L156 118 L166 120 Q176 122 176 134 L176 142 Q176 148 170 148 L36 148 Q30 148 30 142 Z" fill="#fff" />
    <path d="M118 98 L131 98 Q134 98 136 100 L150 117 L118 117 Z" fill="#4a2589" />
    <path d="M88 117 L98 100 Q99 98 102 98 L112 98 L112 117 Z" fill="#4a2589" />
    <circle cx="128" cy="106" r="5" fill="#f2eaff" />
    <path d="M120 117 Q120 111 128 111 Q136 111 136 117 Z" fill="#f2eaff" />
    <path d="M115 121 V144" stroke="#e7dcf7" strokeWidth="2" />
    <rect x="120" y="126" width="9" height="3" rx="1.5" fill="#d9c8f5" />
    <rect x="168" y="126" width="8" height="7" rx="3" fill="#ff8a3d" />
    <rect x="30" y="126" width="6" height="7" rx="3" fill="#ff8a3d" />
    <circle cx="62" cy="148" r="15" fill="#2a1450" />
    <circle cx="62" cy="148" r="6" fill="#d9c8f5" />
    <circle cx="146" cy="148" r="15" fill="#2a1450" />
    <circle cx="146" cy="148" r="6" fill="#d9c8f5" />
    <circle cx="158" cy="56" r="20" fill="#fff" />
    <path d="M146 76 L140 86 L152 75 Z" fill="#fff" />
    <circle cx="151" cy="56" r="6" stroke="#6035a5" strokeWidth="3" fill="none" />
    <path d="M157 56 H170 M166 56 V61 M170 56 V60" stroke="#ff8a3d" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// Trang Cá nhân: xe trong thành phố về đêm, trăng và máy bay
export const PersonalArt = ({ label }) => (
  <svg viewBox="0 0 200 200" role="img" aria-label={label}>
    <circle cx="52" cy="50" r="24" fill="#ffe2c7" opacity=".15" />
    <circle cx="52" cy="50" r="14" fill="#ffe2c7" />
    <circle cx="30" cy="80" r="1.5" fill="#fff" opacity=".6" />
    <circle cx="90" cy="30" r="1.5" fill="#fff" opacity=".6" />
    <circle cx="176" cy="70" r="2" fill="#fff" opacity=".5" />
    <path d="M96 66 Q118 52 138 46" stroke="#fff" strokeWidth="1.6" strokeDasharray="3 4" fill="none" opacity=".55" />
    <g transform="translate(150 42) rotate(-18)">
      <ellipse rx="13" ry="3.2" fill="#fff" />
      <path d="M-1 0 L-7 -11 L-3 -11 L7 0 Z" fill="#fff" />
      <path d="M-1 0 L-7 11 L-3 11 L7 0 Z" fill="#fff" />
      <path d="M-9 0 L-13 -6 L-10 -6 L-6 0 Z" fill="#fff" />
    </g>
    <g fill="#fff" opacity=".16">
      <rect x="14" y="104" width="26" height="70" />
      <rect x="42" y="84" width="22" height="90" />
      <rect x="66" y="112" width="18" height="60" />
      <rect x="118" y="112" width="18" height="60" />
      <rect x="136" y="90" width="24" height="84" />
      <rect x="162" y="74" width="22" height="100" />
    </g>
    <g fill="#ffd27d" opacity=".8">
      <rect x="20" y="112" width="5" height="5" rx="1" />
      <rect x="30" y="124" width="5" height="5" rx="1" />
      <rect x="48" y="94" width="5" height="5" rx="1" />
      <rect x="56" y="108" width="5" height="5" rx="1" />
      <rect x="142" y="100" width="5" height="5" rx="1" />
      <rect x="150" y="116" width="5" height="5" rx="1" />
      <rect x="168" y="84" width="5" height="5" rx="1" />
      <rect x="174" y="100" width="5" height="5" rx="1" />
    </g>
    <g transform="translate(30 52) scale(.7)">
      <CarFrontShape />
    </g>
  </svg>
);
