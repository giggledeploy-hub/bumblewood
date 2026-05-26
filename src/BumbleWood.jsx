import { useState, useRef } from "react";

// ============= CHARACTER ILLUSTRATIONS (SVG) =============

function FizzySvg({ size = 150 }) {
  return (
    <svg viewBox="0 0 200 240" style={{ width: size, height: size * 1.2, display: "block", margin: "0 auto" }}>
      <text x="15" y="40" fontSize="18">✨</text>
      <text x="175" y="55" fontSize="16">⭐</text>
      <text x="25" y="200" fontSize="14">💫</text>
      <text x="172" y="200" fontSize="16">✨</text>
      <path d="M 55 145 Q 50 230 100 230 Q 150 230 145 145 L 130 130 L 70 130 Z" fill="#7e57c2" stroke="#5e35b1" strokeWidth="2" />
      <rect x="55" y="155" width="90" height="7" fill="#ffd54f" />
      <text x="73" y="183" fontSize="14" fill="#ffd54f">★</text>
      <text x="115" y="198" fontSize="13" fill="#ffd54f">★</text>
      <text x="92" y="215" fontSize="11" fill="#ffd54f">★</text>
      <rect x="92" y="120" width="16" height="15" fill="#ffe0b2" />
      <circle cx="100" cy="105" r="32" fill="#ffe0b2" />
      <circle cx="72" cy="85" r="14" fill="#6d4c41" />
      <circle cx="128" cy="85" r="14" fill="#6d4c41" />
      <circle cx="65" cy="100" r="12" fill="#6d4c41" />
      <circle cx="135" cy="100" r="12" fill="#6d4c41" />
      <circle cx="100" cy="78" r="13" fill="#6d4c41" />
      <circle cx="80" cy="92" r="7" fill="#6d4c41" />
      <circle cx="120" cy="92" r="7" fill="#6d4c41" />
      <path d="M 70 80 L 100 22 L 130 80 Z" fill="#7e57c2" stroke="#5e35b1" strokeWidth="2" />
      <ellipse cx="100" cy="80" rx="32" ry="7" fill="#5e35b1" />
      <text x="92" y="60" fontSize="14" fill="#ffd54f">★</text>
      <circle cx="88" cy="105" r="3.5" fill="#3e2723" />
      <circle cx="112" cy="105" r="3.5" fill="#3e2723" />
      <circle cx="89" cy="104" r="1.2" fill="#fff" />
      <circle cx="113" cy="104" r="1.2" fill="#fff" />
      <circle cx="80" cy="115" r="6" fill="#ffab91" opacity="0.5" />
      <circle cx="120" cy="115" r="6" fill="#ffab91" opacity="0.5" />
      <circle cx="82" cy="115" r="1.3" fill="#bf360c" />
      <circle cx="92" cy="118" r="1.3" fill="#bf360c" />
      <circle cx="108" cy="118" r="1.3" fill="#bf360c" />
      <circle cx="118" cy="115" r="1.3" fill="#bf360c" />
      <path d="M 90 122 Q 100 130 110 122" stroke="#3e2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="148" y1="170" x2="183" y2="125" stroke="#8d6e63" strokeWidth="3.5" strokeLinecap="round" />
      <text x="172" y="128" fontSize="18" fill="#ffd54f">★</text>
      <circle cx="146" cy="172" r="7" fill="#ffe0b2" />
    </svg>
  );
}

function MimsySvg({ size = 150 }) {
  return (
    <svg viewBox="0 0 200 180" style={{ width: size, height: size * 0.9, display: "block", margin: "0 auto" }}>
      <path d="M 20 90 L 38 88" stroke="#66bb6a" strokeWidth="3" strokeLinecap="round" />
      <path d="M 22 105 L 38 105" stroke="#66bb6a" strokeWidth="3" strokeLinecap="round" />
      <path d="M 20 120 L 38 122" stroke="#66bb6a" strokeWidth="3" strokeLinecap="round" />
      <text x="155" y="40" fontSize="16">✨</text>
      <text x="40" y="40" fontSize="14">💫</text>
      <text x="160" y="150" fontSize="14">⭐</text>
      <ellipse cx="115" cy="105" rx="42" ry="32" fill="#43a047" />
      <ellipse cx="108" cy="120" rx="28" ry="16" fill="#ec407a" />
      <circle cx="80" cy="85" r="22" fill="#43a047" />
      <ellipse cx="80" cy="98" rx="11" ry="6" fill="#ec407a" />
      <path d="M 60 88 L 30 92 L 60 96 Z" fill="#fb8c00" stroke="#e65100" strokeWidth="1" />
      <line x1="42" y1="93" x2="55" y2="93" stroke="#bf360c" strokeWidth="0.8" />
      <circle cx="82" cy="80" r="4" fill="#1a1a1a" />
      <circle cx="83" cy="79" r="1.5" fill="#fff" />
      <path d="M 75 92 Q 70 96 72 100" stroke="#3e2723" strokeWidth="1" fill="none" />
      <path d="M 115 95 Q 138 70 168 78 Q 158 95 138 108 Q 125 113 115 105 Z" fill="#2e7d32" opacity="0.85" />
      <path d="M 120 100 Q 145 85 168 90" stroke="#1b5e20" strokeWidth="1.5" fill="none" />
      <path d="M 130 110 Q 152 95 168 100" stroke="#1b5e20" strokeWidth="1.5" fill="none" />
      <path d="M 150 125 L 180 115 L 178 130 L 175 145 Z" fill="#2e7d32" />
      <line x1="105" y1="140" x2="98" y2="155" stroke="#fb8c00" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="120" y1="140" x2="125" y2="155" stroke="#fb8c00" strokeWidth="2.5" strokeLinecap="round" />
      <text x="60" y="35" fontSize="11" fill="#2e7d32" fontWeight="bold">zip zip!</text>
    </svg>
  );
}

function TobbleSvg({ size = 150 }) {
  return (
    <svg viewBox="0 0 200 230" style={{ width: size, height: size * 1.15, display: "block", margin: "0 auto" }}>
      <text x="20" y="50" fontSize="14">✨</text>
      <text x="170" y="60" fontSize="14">⭐</text>
      <ellipse cx="100" cy="155" rx="48" ry="55" fill="#9e9e9e" stroke="#757575" strokeWidth="1.5" />
      <ellipse cx="100" cy="165" rx="30" ry="32" fill="#e0e0e0" />
      <circle cx="100" cy="100" r="36" fill="#9e9e9e" stroke="#757575" strokeWidth="1.5" />
      <circle cx="70" cy="76" r="13" fill="#9e9e9e" stroke="#757575" strokeWidth="1.5" />
      <circle cx="130" cy="76" r="13" fill="#9e9e9e" stroke="#757575" strokeWidth="1.5" />
      <circle cx="70" cy="76" r="7" fill="#f8bbd0" />
      <circle cx="130" cy="76" r="7" fill="#f8bbd0" />
      <rect x="78" y="35" width="44" height="38" fill="#1a1a1a" />
      <ellipse cx="100" cy="73" rx="30" ry="5" fill="#1a1a1a" />
      <ellipse cx="100" cy="35" rx="22" ry="4" fill="#2c2c2c" />
      <rect x="78" y="62" width="44" height="6" fill="#c62828" />
      <ellipse cx="100" cy="62" rx="22" ry="2" fill="#8b0000" opacity="0.5" />
      <circle cx="85" cy="100" r="4" fill="#1a1a1a" />
      <circle cx="115" cy="100" r="4" fill="#1a1a1a" />
      <circle cx="86" cy="99" r="1.3" fill="#fff" />
      <circle cx="116" cy="99" r="1.3" fill="#fff" />
      <ellipse cx="100" cy="115" rx="4.5" ry="3" fill="#ec407a" />
      <line x1="76" y1="115" x2="58" y2="111" stroke="#424242" strokeWidth="1" />
      <line x1="76" y1="118" x2="58" y2="121" stroke="#424242" strokeWidth="1" />
      <line x1="124" y1="115" x2="142" y2="111" stroke="#424242" strokeWidth="1" />
      <line x1="124" y1="118" x2="142" y2="121" stroke="#424242" strokeWidth="1" />
      <path d="M 90 124 Q 100 132 110 124" stroke="#1a1a1a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 82 142 L 100 132 L 118 142 L 100 152 Z" fill="#c62828" />
      <circle cx="100" cy="142" r="3.5" fill="#8b0000" />
      <rect x="138" y="170" width="16" height="20" fill="#ffd54f" stroke="#5d4037" strokeWidth="1" rx="1" />
      <line x1="141" y1="176" x2="151" y2="176" stroke="#5d4037" strokeWidth="0.7" />
      <line x1="141" y1="180" x2="151" y2="180" stroke="#5d4037" strokeWidth="0.7" />
      <line x1="141" y1="184" x2="148" y2="184" stroke="#5d4037" strokeWidth="0.7" />
      <path d="M 145 178 Q 165 178 168 200" stroke="#9e9e9e" strokeWidth="7" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function WobbleSvg({ size = 150 }) {
  return (
    <svg viewBox="0 0 200 280" style={{ width: size, height: size * 1.4, display: "block", margin: "0 auto" }}>
      <text x="15" y="60" fontSize="14">✨</text>
      <text x="175" y="80" fontSize="14">⭐</text>
      <path d="M 50 150 Q 38 275 100 275 Q 162 275 150 150 L 130 132 L 70 132 Z" fill="#5e35b1" stroke="#311b92" strokeWidth="2" />
      <text x="68" y="195" fontSize="14" fill="#ffd54f">★</text>
      <text x="115" y="205" fontSize="13" fill="#ffd54f">★</text>
      <text x="82" y="225" fontSize="12" fill="#ffd54f">★</text>
      <text x="125" y="245" fontSize="13" fill="#ffd54f">★</text>
      <text x="72" y="255" fontSize="11" fill="#ffd54f">★</text>
      <text x="108" y="265" fontSize="11" fill="#ffd54f">★</text>
      <rect x="50" y="160" width="100" height="7" fill="#ffd54f" />
      <circle cx="100" cy="98" r="30" fill="#ffccbc" />
      <path d="M 76 120 Q 70 205 100 225 Q 130 205 124 120 Z" fill="#fafafa" stroke="#bdbdbd" strokeWidth="1.5" />
      <path d="M 82 200 Q 86 218 100 222 Q 114 218 118 200" fill="#fafafa" stroke="#bdbdbd" strokeWidth="1" />
      <path d="M 90 222 Q 95 235 100 238 Q 105 235 110 222" fill="#fafafa" stroke="#bdbdbd" strokeWidth="1" />
      <path d="M 70 78 L 100 12 L 130 78 Z" fill="#5e35b1" stroke="#311b92" strokeWidth="2" />
      <ellipse cx="100" cy="78" rx="32" ry="7" fill="#311b92" />
      <text x="92" y="50" fontSize="16" fill="#ffd54f">★</text>
      <text x="105" y="38" fontSize="11" fill="#ffd54f">★</text>
      <circle cx="86" cy="98" r="9" fill="rgba(255,255,255,0.6)" stroke="#3e2723" strokeWidth="2.2" />
      <circle cx="114" cy="98" r="9" fill="rgba(255,255,255,0.6)" stroke="#3e2723" strokeWidth="2.2" />
      <line x1="95" y1="98" x2="105" y2="98" stroke="#3e2723" strokeWidth="2.2" />
      <circle cx="86" cy="98" r="2.5" fill="#3e2723" />
      <circle cx="114" cy="98" r="2.5" fill="#3e2723" />
      <path d="M 76 86 Q 86 82 96 86" stroke="#fafafa" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 104 86 Q 114 82 124 86" stroke="#fafafa" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <ellipse cx="100" cy="113" rx="4" ry="4.5" fill="#ffab91" />
      <path d="M 88 122 Q 100 118 112 122" stroke="#fafafa" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <line x1="158" y1="275" x2="170" y2="98" stroke="#8d6e63" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="170" cy="98" r="11" fill="#ffd54f" stroke="#f57f17" strokeWidth="2" />
      <text x="163" y="104" fontSize="13" fill="#f57f17">★</text>
    </svg>
  );
}

// === Supporting Character SVGs ===

function TinkuSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 80" style={{ width: size, height: size * 0.8 }}>
      <ellipse cx="48" cy="50" rx="34" ry="22" fill="#5d4037" stroke="#3e2723" strokeWidth="1.5" />
      <path d="M 22 50 Q 48 32 74 50" stroke="#3e2723" strokeWidth="1.2" fill="none" />
      <circle cx="36" cy="48" r="4.5" fill="#8d6e63" />
      <circle cx="48" cy="42" r="4.5" fill="#8d6e63" />
      <circle cx="60" cy="48" r="4.5" fill="#8d6e63" />
      <circle cx="42" cy="56" r="4" fill="#8d6e63" />
      <circle cx="54" cy="56" r="4" fill="#8d6e63" />
      <circle cx="80" cy="48" r="11" fill="#7cb342" stroke="#558b2f" strokeWidth="1" />
      <circle cx="83" cy="46" r="4" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <circle cx="83" cy="46" r="1.5" fill="#1a1a1a" />
      <path d="M 80 51 Q 84 54 88 51" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <rect x="26" y="65" width="7" height="9" fill="#7cb342" rx="2" />
      <rect x="62" y="65" width="7" height="9" fill="#7cb342" rx="2" />
    </svg>
  );
}

function PikuSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
      <ellipse cx="50" cy="55" rx="22" ry="28" fill="#43a047" stroke="#1b5e20" strokeWidth="1.5" />
      <ellipse cx="48" cy="62" rx="13" ry="18" fill="#ffd54f" />
      <circle cx="50" cy="32" r="16" fill="#43a047" stroke="#1b5e20" strokeWidth="1.5" />
      <path d="M 50 38 L 36 42 L 50 46 Z" fill="#e65100" stroke="#bf360c" strokeWidth="0.8" />
      <circle cx="52" cy="28" r="3" fill="#1a1a1a" />
      <circle cx="53" cy="27" r="1" fill="#fff" />
      <path d="M 65 35 Q 72 30 75 35" stroke="#43a047" strokeWidth="3" fill="none" />
      <line x1="48" y1="78" x2="45" y2="88" stroke="#1976d2" strokeWidth="2" />
      <line x1="55" y1="78" x2="58" y2="88" stroke="#1976d2" strokeWidth="2" />
      <text x="75" y="22" fontSize="11">🎵</text>
      <text x="78" y="55" fontSize="9">🎵</text>
    </svg>
  );
}

function HulaSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 80" style={{ width: size, height: size * 0.8 }}>
      <ellipse cx="50" cy="50" rx="32" ry="22" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5" />
      <polygon points="25,38 28,28 32,38" fill="#5d4037" />
      <polygon points="35,32 38,22 42,32" fill="#5d4037" />
      <polygon points="45,30 48,20 52,30" fill="#5d4037" />
      <polygon points="55,32 58,22 62,32" fill="#5d4037" />
      <polygon points="65,38 68,28 72,38" fill="#5d4037" />
      <polygon points="30,48 33,38 37,48" fill="#5d4037" />
      <polygon points="63,48 67,38 70,48" fill="#5d4037" />
      <circle cx="80" cy="50" r="9" fill="#ffccbc" />
      <circle cx="82" cy="48" r="2" fill="#1a1a1a" />
      <ellipse cx="86" cy="52" rx="2" ry="1.5" fill="#1a1a1a" />
      <path d="M 80 56 Q 84 58 88 56" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
      <rect x="22" y="62" width="6" height="6" fill="#5d4037" rx="1" />
      <rect x="70" y="62" width="6" height="6" fill="#5d4037" rx="1" />
      <rect x="14" y="55" width="14" height="12" fill="#ef6c00" stroke="#bf360c" strokeWidth="1" rx="1" />
      <text x="15" y="65" fontSize="7">🗺️</text>
    </svg>
  );
}

function BeenaSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
      <ellipse cx="50" cy="55" rx="25" ry="22" fill="#fdd835" stroke="#f57f17" strokeWidth="1.5" />
      <rect x="32" y="48" width="36" height="5" fill="#1a1a1a" />
      <rect x="32" y="58" width="36" height="5" fill="#1a1a1a" />
      <ellipse cx="35" cy="45" rx="14" ry="10" fill="#fff" opacity="0.7" stroke="#90caf9" strokeWidth="1" />
      <ellipse cx="65" cy="45" rx="14" ry="10" fill="#fff" opacity="0.7" stroke="#90caf9" strokeWidth="1" />
      <circle cx="50" cy="33" r="12" fill="#fdd835" stroke="#f57f17" strokeWidth="1.5" />
      <polygon points="42,22 45,12 48,22 51,10 54,22 57,12 60,22" fill="#ffd54f" stroke="#f57f17" strokeWidth="1" />
      <circle cx="47" cy="20" r="1.5" fill="#e91e63" />
      <circle cx="53" cy="20" r="1.5" fill="#e91e63" />
      <circle cx="45" cy="32" r="2.5" fill="#1a1a1a" />
      <circle cx="55" cy="32" r="2.5" fill="#1a1a1a" />
      <circle cx="46" cy="31" r="0.8" fill="#fff" />
      <circle cx="56" cy="31" r="0.8" fill="#fff" />
      <path d="M 46 37 Q 50 40 54 37" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
      <line x1="42" y1="22" x2="38" y2="15" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="58" y1="22" x2="62" y2="15" stroke="#1a1a1a" strokeWidth="1" />
      <polygon points="73,55 80,55 76,65" fill="#1a1a1a" />
    </svg>
  );
}

function OmkarSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
      <ellipse cx="50" cy="60" rx="30" ry="32" fill="#795548" stroke="#4e342e" strokeWidth="1.5" />
      <path d="M 28 55 L 32 80 L 22 82 Z" fill="#5d4037" />
      <path d="M 72 55 L 68 80 L 78 82 Z" fill="#5d4037" />
      <polygon points="32,35 36,25 40,35" fill="#5d4037" />
      <polygon points="60,35 64,25 68,35" fill="#5d4037" />
      <circle cx="38" cy="50" r="11" fill="#ffd54f" />
      <circle cx="62" cy="50" r="11" fill="#ffd54f" />
      <circle cx="38" cy="50" r="6" fill="#fff" />
      <circle cx="62" cy="50" r="6" fill="#fff" />
      <circle cx="38" cy="50" r="3" fill="#1a1a1a" />
      <circle cx="62" cy="50" r="3" fill="#1a1a1a" />
      <polygon points="48,58 52,58 50,68" fill="#ef6c00" stroke="#bf360c" strokeWidth="0.5" />
      <path d="M 35 75 Q 50 78 65 75" stroke="#4e342e" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 30 65 Q 35 70 30 75" stroke="#4e342e" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 70 65 Q 65 70 70 75" stroke="#4e342e" strokeWidth="1" fill="none" opacity="0.5" />
      <text x="74" y="22" fontSize="10">🌙</text>
    </svg>
  );
}

function PariSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
      <path d="M 50 70 Q 20 50 15 25 Q 25 30 30 45 Q 28 25 35 18 Q 40 30 42 45 Q 45 18 50 12 Q 55 18 58 45 Q 60 25 65 18 Q 72 25 70 45 Q 75 30 85 25 Q 80 50 50 70 Z" fill="#00897b" stroke="#004d40" strokeWidth="1" />
      <circle cx="25" cy="32" r="3" fill="#0d47a1" />
      <circle cx="35" cy="22" r="3" fill="#0d47a1" />
      <circle cx="50" cy="18" r="3" fill="#0d47a1" />
      <circle cx="65" cy="22" r="3" fill="#0d47a1" />
      <circle cx="75" cy="32" r="3" fill="#0d47a1" />
      <circle cx="25" cy="32" r="1.5" fill="#ffd54f" />
      <circle cx="35" cy="22" r="1.5" fill="#ffd54f" />
      <circle cx="50" cy="18" r="1.5" fill="#ffd54f" />
      <circle cx="65" cy="22" r="1.5" fill="#ffd54f" />
      <circle cx="75" cy="32" r="1.5" fill="#ffd54f" />
      <ellipse cx="50" cy="78" rx="14" ry="12" fill="#0277bd" stroke="#01579b" strokeWidth="1.5" />
      <circle cx="50" cy="62" r="9" fill="#01579b" stroke="#0d47a1" strokeWidth="1" />
      <line x1="50" y1="50" x2="50" y2="55" stroke="#0d47a1" strokeWidth="1" />
      <line x1="46" y1="51" x2="44" y2="55" stroke="#0d47a1" strokeWidth="1" />
      <line x1="54" y1="51" x2="56" y2="55" stroke="#0d47a1" strokeWidth="1" />
      <circle cx="48" cy="61" r="1.5" fill="#fff" />
      <polygon points="50,65 47,68 53,68" fill="#fb8c00" />
    </svg>
  );
}

function ChikuSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 80" style={{ width: size, height: size * 0.8 }}>
      <ellipse cx="45" cy="48" rx="24" ry="14" fill="#558b2f" stroke="#33691e" strokeWidth="1.5" />
      <circle cx="28" cy="42" r="10" fill="#558b2f" stroke="#33691e" strokeWidth="1.5" />
      <circle cx="26" cy="40" r="2.5" fill="#1a1a1a" />
      <circle cx="27" cy="39" r="0.8" fill="#fff" />
      <path d="M 23 45 Q 27 48 32 45" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
      <line x1="22" y1="32" x2="18" y2="22" stroke="#33691e" strokeWidth="1.5" />
      <line x1="28" y1="30" x2="28" y2="20" stroke="#33691e" strokeWidth="1.5" />
      <line x1="40" y1="58" x2="35" y2="68" stroke="#33691e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="58" x2="48" y2="68" stroke="#33691e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="55" y1="55" x2="62" y2="68" stroke="#33691e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="63" y1="42" x2="80" y2="22" stroke="#8d6e63" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="78" y="18" width="5" height="10" fill="#8d6e63" stroke="#5d4037" strokeWidth="1" rx="1" />
      <text x="68" y="14" fontSize="11">🏆</text>
    </svg>
  );
}

function OttoSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 80" style={{ width: size, height: size * 0.8 }}>
      <ellipse cx="50" cy="50" rx="30" ry="20" fill="#6d4c41" stroke="#4e342e" strokeWidth="1.5" />
      <ellipse cx="50" cy="55" rx="22" ry="14" fill="#a1887f" />
      <circle cx="30" cy="38" r="13" fill="#6d4c41" stroke="#4e342e" strokeWidth="1.5" />
      <circle cx="22" cy="30" r="3" fill="#6d4c41" />
      <circle cx="38" cy="30" r="3" fill="#6d4c41" />
      <circle cx="27" cy="36" r="2.5" fill="#1a1a1a" />
      <circle cx="33" cy="36" r="2.5" fill="#1a1a1a" />
      <circle cx="28" cy="35" r="0.8" fill="#fff" />
      <circle cx="34" cy="35" r="0.8" fill="#fff" />
      <ellipse cx="30" cy="42" rx="2" ry="1.5" fill="#1a1a1a" />
      <path d="M 27 45 Q 30 48 33 45" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
      <line x1="22" y1="43" x2="14" y2="42" stroke="#1a1a1a" strokeWidth="0.6" />
      <line x1="22" y1="45" x2="14" y2="46" stroke="#1a1a1a" strokeWidth="0.6" />
      <line x1="38" y1="43" x2="46" y2="42" stroke="#1a1a1a" strokeWidth="0.6" />
      <line x1="38" y1="45" x2="46" y2="46" stroke="#1a1a1a" strokeWidth="0.6" />
      <path d="M 78 52 Q 90 50 92 65" stroke="#6d4c41" strokeWidth="6" fill="none" strokeLinecap="round" />
      <text x="55" y="20" fontSize="11">🎵</text>
    </svg>
  );
}

function BabluSvg({ size = 80 }) {
  return (
    <svg viewBox="0 0 100 90" style={{ width: size, height: size * 0.9 }}>
      <path d="M 50 50 Q 20 30 8 45 Q 15 55 22 50 Q 18 60 25 60 Q 30 55 35 58 Z" fill="#5d4037" stroke="#3e2723" strokeWidth="1.5" />
      <path d="M 50 50 Q 80 30 92 45 Q 85 55 78 50 Q 82 60 75 60 Q 70 55 65 58 Z" fill="#5d4037" stroke="#3e2723" strokeWidth="1.5" />
      <path d="M 38 55 L 32 75 L 52 70 L 68 75 L 62 55 Z" fill="#c62828" stroke="#8b0000" strokeWidth="1" />
      <ellipse cx="50" cy="48" rx="14" ry="16" fill="#6d4c41" stroke="#3e2723" strokeWidth="1.5" />
      <polygon points="40,36 38,28 44,32" fill="#6d4c41" />
      <polygon points="60,36 62,28 56,32" fill="#6d4c41" />
      <circle cx="44" cy="46" r="2.5" fill="#fff" />
      <circle cx="56" cy="46" r="2.5" fill="#fff" />
      <circle cx="44" cy="46" r="1.5" fill="#1a1a1a" />
      <circle cx="56" cy="46" r="1.5" fill="#1a1a1a" />
      <polygon points="48,52 52,52 50,55" fill="#1a1a1a" />
      <path d="M 46 58 Q 50 60 54 58" stroke="#fff" strokeWidth="0.8" fill="none" />
      <ellipse cx="50" cy="80" rx="6" ry="4" fill="#ff9800" stroke="#e65100" strokeWidth="1" />
      <path d="M 50 76 L 50 73" stroke="#388e3c" strokeWidth="1.5" />
    </svg>
  );
}

const SUPPORTING_SVGS = {
  tinku: TinkuSvg,
  piku: PikuSvg,
  hula: HulaSvg,
  beena: BeenaSvg,
  omkar: OmkarSvg,
  pari: PariSvg,
  chiku: ChikuSvg,
  otto: OttoSvg,
  bablu: BabluSvg,
};

const MAIN_SVGS = {
  fizzy: FizzySvg,
  mimsy: MimsySvg,
  tobble: TobbleSvg,
  wobble: WobbleSvg,
};

// ============= INTRO PAGES =============

const INTRO_PAGES = [
  {
    type: "cover",
    emoji: "🍄✨📖",
    title: "Bumblewood Adventures",
    subtitle: "Book One: The Shrinking Spell",
    body: "A story of friendship, magic, and one very tiny mistake.",
    quote: "Where even the smallest mouse can be the biggest hero.",
  },
  {
    type: "world",
    emoji: "🗺️🌳🏡",
    title: "The World of Bumblewood",
    intro: "Far away, past the Sleeping Hills and across the Whispering River, there is a little village called Bumblewood.",
    sections: [
      { head: "🏡 The Village", body: "Bumblewood sits in the middle of a green forest. It has round little cottages with smoke curling from their chimneys, cobblestone paths, and a big stone fountain in the town square that bubbles all day long. The air always smells like fresh bread and wildflowers." },
      { head: "🌍 The Land Around", body: "Around the village, you'll find:\n🌳 The Whispering Woods — full of magical creatures\n🍋 The Lemonade River — yes, it really is lemonade\n🍄 The Mushroom Meadows — where mushrooms grow as tall as houses\n🏔️ The Sleeping Hills — gentle and always wearing a blanket of fog\n🌸 The Spell Garden — where all magic in the land begins" },
      { head: "🗼 The Wobble Tower", body: "At the edge of the village, on a small hill, stands a tall stone tower. This is where our story begins." },
    ],
  },
  {
    type: "character",
    svgKey: "fizzy",
    title: "Fizzwick Bumblewand",
    subtitle: "Everyone calls her Fizzy.",
    quickFacts: [["Age", "9 years old"], ["Lives in", "Wobble Tower — top floor, with the round window"], ["Job", "Apprentice wizard"]],
    story: "Fizzy is small, curious, and almost always covered in sparkles from her latest spell experiment. Her hair is curly and brown. Her nose is freckled. She wears a purple wizard hat with stars and carries a small wand with a golden star on top.",
    origin: "She was born in a quiet village far from here, where nobody believed in magic. But she made the kitchen spoons dance when she was just three years old. Her parents knew she was special, so they brought her to Professor Wobble. He took one look at her and said, 'Yes, yes, this one is a wizard.' She has been his apprentice ever since.",
    traits: [
      ["❤️ Likes", "Sticky toffee pudding, jumping in puddles, drawing maps of imaginary lands, the smell of old books, fireflies"],
      ["❌ Dislikes", "Boring rules, anything bitter, being told she's 'too small' to do something"],
      ["💪 Strengths", "Brave, kind, very quick on her feet, never gives up"],
      ["🌪️ Weaknesses", "Forgetful, clumsy, sometimes too curious for her own good"],
      ["😨 Biggest fear", "That she will never be a 'real' wizard"],
      ["✨ Biggest dream", "To one day be the Royal Wizard of the whole forest"],
    ],
  },
  {
    type: "character",
    svgKey: "mimsy",
    title: "Mimsy",
    subtitle: "A tiny hummingbird with the biggest heart.",
    quickFacts: [["Age", "Nobody knows — hummingbirds don't count birthdays"], ["Lives in", "A nest made of silver thread in the Whispering Woods"], ["Job", "Best friend, scout, official cheerleader"]],
    story: "Mimsy is small with bright green feathers and a hot-pink belly. Her wings beat so fast they almost vanish. She has a long, thin beak and a tiny bright eye that misses nothing. She talks in quick little bursts and adds 'zip zip!' to almost everything she says. If you are sad, Mimsy will hover six inches from your face until you laugh.",
    origin: "Mimsy was the smallest hummingbird in her flock — so small that the others teased her. One rainy day, she got lost in a storm and tumbled right into Fizzy's tower window. Fizzy gave her a thimble of honey and a warm towel. They have been best friends ever since.",
    traits: [
      ["❤️ Likes", "Sunshine, flower nectar (especially marigold!), shiny things, going fast, helping people"],
      ["❌ Dislikes", "Sitting still, dark caves, anyone who teases her friends"],
      ["💪 Strengths", "Super fast flyer, sharp eyes, brave despite her size, always positive"],
      ["🌪️ Weaknesses", "Easily distracted (oh look, sparkles!), gets tired quickly"],
      ["😨 Biggest fear", "Being left behind because she's small"],
      ["✨ Biggest dream", "To fly across the whole world someday"],
    ],
  },
  {
    type: "character",
    svgKey: "tobble",
    title: "Tobble",
    subtitle: "A polite mouse with a tiny top hat and the manners of a gentleman.",
    quickFacts: [["Age", "6 mouse-years (wise but still young)"], ["Lives in", "A cozy hole in the roots of the big oak tree"], ["Job", "Best friend, riddle-master, snack-bringer"]],
    story: "Tobble is a grey, neat little mouse. He almost always wears his tiny black top hat with a red band — even when he sleeps. He wears a small red bow tie, has long whiskers, and carries a tiny book of riddles with him at all times. He talks slowly and carefully. He is quiet, but when he speaks, you listen.",
    origin: "Tobble grew up in a big family with twelve brothers and sisters. He was always the gentle one — the one who read books while the others played rough games. One rainy night, Fizzy found a tiny lost mouse on her doorstep and gave him a thimble of warm milk. That mouse was Tobble. He decided right then that he had found his real family.",
    traits: [
      ["❤️ Likes", "Cheese (obviously), riddles, neat handwriting, tea with honey, his top hat"],
      ["❌ Dislikes", "Rudeness, loud noises, anyone making fun of his hat"],
      ["💪 Strengths", "Smart, brave, calm in scary moments, knows everything about riddles"],
      ["🌪️ Weaknesses", "Very small (even smaller than usual), sometimes too cautious, his hat falls off when he runs"],
      ["😨 Biggest fear", "Losing his top hat (it belonged to his grandfather)"],
      ["✨ Biggest dream", "To write the world's biggest book of riddles"],
    ],
  },
  {
    type: "character",
    svgKey: "wobble",
    title: "Professor Wobble",
    subtitle: "The grumpy-but-kind wizard of Bumblewood.",
    quickFacts: [["Age", "Very, very old. Even he forgets."], ["Lives in", "Wobble Tower (bottom three floors)"], ["Job", "Royal Wizard of Bumblewood, Fizzy's teacher"]],
    story: "Professor Wobble has a long flowing white beard that almost reaches the floor. He wears big round black spectacles, a tall pointy purple hat dotted with golden stars, and matching purple robes. He carries a wooden wizard staff topped with a glowing star. He grumbles a lot, but he loves Fizzy like his own granddaughter.",
    origin: "Wobble was the youngest wizard at the Royal Magic Academy a hundred years ago. He invented many famous spells — including the 'Make Your Bed By Itself' spell (which everyone uses) and the 'Why Did I Walk Into This Room' spell (which nobody likes). He never married, but he has a thousand magical books and one very brave apprentice.",
    traits: [
      ["❤️ Likes", "Quiet mornings, strong tea, a clean workshop, when Fizzy gets a spell right"],
      ["❌ Dislikes", "Sticky surfaces, being interrupted, the other wizard down the road who is 'show-offy'"],
      ["💪 Strengths", "Powerful magic, deep wisdom, very patient (usually)"],
      ["🌪️ Weaknesses", "Forgets where he put his glasses (they're on his head), gets very grumpy without tea"],
      ["😨 Biggest fear", "That his magic will fade away as he gets older"],
      ["✨ Biggest dream", "That Fizzy will one day be a greater wizard than him"],
    ],
  },
  {
    type: "family",
    emoji: "🌍🤝",
    title: "The Wider Bumblewood Family",
    intro: "The forest is full of friends Fizzy, Mimsy, and Tobble have made on their adventures. Here are some you will meet:",
    members: [
      { svgKey: "tinku", name: "Tinku the Tortoise", desc: "The wise old grandmother of the woods — everyone affectionately calls her Dadi Tinku. Lives in a cozy hollow with shelves of books and pots of laddoos. Knows every spell and every secret. Wears tiny round glasses. Calls everyone 'beta' (child)." },
      { svgKey: "piku", name: "Piku the Parrot", desc: "A bright green chatterbox who repeats EVERYTHING. He means well but he is a bit much. He once repeated a wizard's spell three hundred times. Loves to sing." },
      { svgKey: "hula", name: "Hula the Hedgehog", desc: "The market keeper at the edge of Mushroom Meadows. Sells maps, cookies, and small magical items from his cart. Talks a lot — sometimes for hours." },
      { svgKey: "beena", name: "Beena the Bee (Queen Beena)", desc: "Rules the golden honeybee hive. Wears a tiny gold crown. The bees bake mini jalebis in her royal kitchen. Kind, but very particular about manners." },
      { svgKey: "omkar", name: "Omkar the Owl", desc: "Sleeps all day. Reads all night. Lives in a hollow tree with hundreds of scrolls. Asks tricky riddles. Three hundred years old and very wise." },
      { svgKey: "pari", name: "Pari the Peacock", desc: "Leads the peacock troupe on the pier of the Lemonade River. Dances Bollywood-style every evening. Her tail feathers are golden-blue-green and SHIMMER in the sunlight." },
      { svgKey: "chiku", name: "Chiku the Cricket", desc: "A boastful but lovable cricketer who claims he is the best player in the forest. Has a tiny cricket bat made from a matchstick and a trophy he won (probably) fairly." },
      { svgKey: "otto", name: "Otto the Otter", desc: "The kind boatman of the Lemonade River. Always singing sailor songs. Always helpful. Knows every twist and turn of the river by heart." },
      { svgKey: "bablu", name: "Bablu the Bat (Captain Bablu)", desc: "A brave little fruit-bat who wears a tiny red cape. Guards the magical mango grove. Small but full of courage." },
    ],
  },
  {
    type: "origin",
    emoji: "✨🤝💖",
    title: "How Three Became Inseparable",
    paragraphs: [
      "Three years ago, on a stormy night, six-year-old Fizzy heard a 'thunk' at her tower window. There, soaked and tiny, was Mimsy — the smallest hummingbird in the forest. Fizzy brought her in and gave her warm honey. They became friends in seconds.",
      "A few months later, Fizzy and Mimsy were exploring the forest when they heard a tiny 'achoo!' from inside a hollow log. It was Tobble — lost, hungry, and clutching his grandfather's top hat. They took him home and gave him cheese.",
      "Since then, the three have been inseparable. They have a secret handshake (Fizzy clicks her fingers, Mimsy zips around them once, Tobble bows). They have a favourite hiding spot (the hollow under the big oak tree). They share everything — sweets, stories, secrets, and adventures.",
      "When one is scared, the others are brave for them.\nWhen one is sad, the others tell jokes until everyone laughs.\nWhen one is in trouble, the others ALWAYS show up.",
      "This is what they call DOSTI — friendship that is bigger than magic itself.",
    ],
  },
  {
    type: "prologue",
    emoji: "📖🌅",
    title: "Prologue",
    subtitle: "Book One: The Shrinking Spell",
    paragraphs: [
      "It is a sunny afternoon in Bumblewood. The bakery smells like fresh bread. The fountain bubbles happily. The villagers are going about their day.",
      "Up in the Wobble Tower, Fizzy is helping Professor Wobble organize his bottle shelf. He has told her — twice — not to touch the big sparkly one on the top shelf.",
      "But it is SO sparkly.",
      "And SO interesting.",
      "And Fizzy is SO curious.",
      "What could possibly go wrong?",
    ],
    cta: "Begin the Adventure!",
  },
];

// ============= STORY DATA =============

const STORY = {
  start: {
    art: "🧙‍♀️✨🏡💫",
    story: `CRASH! Fizzy's elbow knocks over Professor Wobble's biggest, sparkliest bottle! 🫧 WHOOSH! BOING! The whole village of Bumblewood shrinks to thimble-size! 😱 Mimsy zips in: "Zip zip — don't worry Fizzy!" 🐦 Tobble adjusts his top hat: "Adventure awaits, dosto!" 🐭🎩 They must find the un-shrinking spell before sundown! Which way?`,
    choices: [
      { text: "🍄 Climb the giant mushroom!", next: "mushroom", color: "#2e7d32", bg: "#e8f5e9", stars: 1 },
      { text: "🐜 Visit the ant kingdom", next: "ants", color: "#e65100", bg: "#fff3e0", stars: 1 },
      { text: "🦋 Follow the glowing butterfly", next: "butterfly", color: "#6a1b9a", bg: "#f3e5f5", stars: 1 },
      { text: "🍋 Sail the lemonade river", next: "lemonade", color: "#0277bd", bg: "#e1f5fe", stars: 1 },
    ],
  },
  mushroom: {
    art: "🍄🔭🦜",
    story: `Mimsy zips to the top: "I see EVERYTHING from here, zip zip!" 🐦 Fizzy spots three friends nearby — a beehive that smells like fresh jalebis 🍯, Omkar the wise old owl reading a glowing book 🦉, and Piku the chatterbox parrot swinging on a leaf! 🦜 "Hello hello, who's there there?" Piku calls!`,
    choices: [
      { text: "🐝 Race Mimsy to Queen Beena's beehive!", next: "beehive", color: "#e65100", bg: "#fff3e0", stars: 2 },
      { text: "🦉 Tobble bows to Omkar the owl", next: "owl", color: "#6a1b9a", bg: "#f3e5f5", stars: 2 },
      { text: "🦜 Climb up to chat with Piku!", next: "piku", color: "#388e3c", bg: "#e8f5e9", stars: 2 },
    ],
  },
  ants: {
    art: "🐜🪖✨",
    story: `The ant army salutes! "HALT!" shouts the tiny general in a teeny helmet. 🪖 Tobble bows politely. Fizzy sees three options — a giant crumb the ants need help moving 🍞, a sparkly tunnel glowing behind them ✨, and a group of fireflies setting up a tiny Diwali festival! 💡🪔`,
    choices: [
      { text: "💪 Help carry the giant crumb!", next: "teamwork", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "✨ Sneak into the sparkly tunnel", next: "tunnel", color: "#6a1b9a", bg: "#f3e5f5", stars: 2 },
      { text: "🪔 Join the firefly Diwali festival!", next: "firefly_fest", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },
  butterfly: {
    art: "🦋🌸🥭",
    story: `The butterfly leads them past a huge mango tree with tiny fruit-bats hanging upside down! 🥭🦇 They reach a clearing where Hula the Hedgehog runs his little market — maps, mango slices, acorn cookies! 🦔 Tobble's tummy rumbles. Mimsy spots something glowing behind the stall! ✨`,
    choices: [
      { text: "🗺️ Buy a treasure map from Hula", next: "map_buy", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🥭 Climb up the magic mango tree!", next: "mango_tree", color: "#f57c00", bg: "#fff8e1", stars: 2 },
      { text: "🍪 Buy cookies and chat with Hula", next: "cookie_chat", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },
  lemonade: {
    art: "🍋🌊🦚",
    story: `The lemonade river FIZZES! 🍋 Tobble pulls a leaf-boat from his coat. Otto the Otter offers a ride. 🦦 But wait — Mimsy spots Pari the Peacock and her troupe with golden feathers dancing on a pier! 🦚 "Zip zip — they're SHIMMERY!" she squeaks!`,
    choices: [
      { text: "🚣 Sail safely with Otto", next: "river_boat", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
      { text: "🌊 Take the WILD rapids — yahoo!", next: "rapids", color: "#0277bd", bg: "#e1f5fe", stars: 3 },
      { text: "🦚 Visit Pari and the dancing peacocks!", next: "peacock_pier", color: "#6a1b9a", bg: "#f3e5f5", stars: 2 },
    ],
  },
  beehive: {
    art: "🐝🍯👑",
    story: `The bees are baking mini jalebis! 🍯 So sweet! Queen Beena buzzes over in her tiny crown. 👑 "Welcome, dears! To earn the spell, choose a test — Dance, Riddle, or Kitchen-Help?"`,
    choices: [
      { text: "🕺 Dance the Bee Wiggle!", next: "bee_dance", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
      { text: "🧠 Try Queen Beena's riddle", next: "bee_riddle", color: "#6a1b9a", bg: "#f3e5f5", stars: 3 },
      { text: "🍯 Help bake mini jalebis!", next: "honey_kitchen", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },
  owl: {
    art: "🦉📚🌙",
    story: `Omkar opens one giant eye. "Hoo-hoo-hooo seeks me?" 🦉 Tobble bows deeply. Omkar smiles: "I offer three things — a riddle, a moonbeam quest, or an introduction to wise Dadi Tinku. Choose!" 🐢`,
    choices: [
      { text: "🧠 Try Omkar's riddle", next: "owl_riddle", color: "#6a1b9a", bg: "#f3e5f5", stars: 3 },
      { text: "🌙 Catch a moonbeam quest!", next: "owl_quest", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
      { text: "🐢 Meet wise Dadi Tinku", next: "dadi_tortoise", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },
  piku: {
    art: "🦜🌳🗝️",
    story: `Piku copies EVERYTHING! "Hello!" → "Hello hello hello!" 🦜 Tobble tries to ask serious questions but Piku just sings funny songs! Then suddenly Piku drops a GOLDEN KEY from his beak! "Key key key for spell garden!"`,
    choices: [
      { text: "🗝️ Take the key and thank Piku!", next: "piku_key", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🎶 Sing a song WITH Piku first", next: "piku_song", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },
  teamwork: {
    art: "🐜💪🎉",
    story: `Heave! Ho! PUSH! 🏋️ Fizzy, Mimsy, Tobble and ALL the ants roll the crumb together! 🎉 The general bows: "True DOSTI (friendship)!" He gives Fizzy a golden scroll and a tiny key! "Now — feast with us, or rush to the garden?"`,
    choices: [
      { text: "🍛 Stay for the ant victory feast!", next: "ant_feast", color: "#f57c00", bg: "#fff8e1", stars: 2 },
      { text: "🗝️ Rush to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
    ],
  },
  tunnel: {
    art: "✨🕳️💎",
    story: `The tunnel sparkles with crystals! 💎 They find a wishing pool — Tobble tosses a sunflower seed. 🌻 The pool ripples and shows a GLOWING MAP! Suddenly a tiny door opens in the wall — and Dadi Tinku pokes her head out! 🐢 "Aap kahan ja rahe ho, bachhon? (Where are you going, children?)"`,
    choices: [
      { text: "🗺️ Follow the magical map", next: "spell_garden_secret", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🐢 Greet Dadi Tinku politely", next: "dadi_tortoise", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },
  firefly_fest: {
    art: "🪔💡🎆",
    story: `Hundreds of fireflies are setting up a Diwali festival! 🪔 Tiny diyas everywhere! The air smells of sweets! "Help us, and we'll guide you anywhere!" 💡 Mimsy zips around helping. Tobble carefully lights diyas with a matchstick! ✨`,
    choices: [
      { text: "🪔 Light ALL the diyas together!", next: "diya_blessing", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🍬 Sample the festival sweets first", next: "festival_sweets", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },
  map_buy: {
    art: "🗺️🌟🥭",
    story: `Hula's map has tiny drawings of jalebis marking tasty spots! 🍪 It shows the spell garden AND a hidden mango grove! 🥭 Mimsy spots a lost firefly looking very sad. 💛`,
    choices: [
      { text: "💛 Help the lost firefly!", next: "firefly_help", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🥭 Detour to the magic mango grove!", next: "mango_grove", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },
  mango_tree: {
    art: "🥭🦇🦸",
    story: `The mango tree is GIGANTIC! Captain Bablu — a brave fruit-bat in a tiny red cape — swoops down! 🦇 "Welcome, brave travelers!" He hands Fizzy a magic golden mango. "Eat it for super-jump powers, OR save it for the spell itself!" 🚀`,
    choices: [
      { text: "🥭 EAT it and super-jump!", next: "super_jump", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🎁 Save it for the spell garden", next: "spell_garden_gate", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },
  cookie_chat: {
    art: "🍪🦔🏏",
    story: `Hula's acorn cookies are amazing! 🍪 He whispers: "Psst — the garden has a hidden back gate. A shiny pebble opens it!" Suddenly Chiku the boastful cricket hops in with a bat! 🦗 "Cricket match anyone? Winner gets a magic pebble!" 🏏`,
    choices: [
      { text: "🏏 Play cricket with Chiku!", next: "cricket_match", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "✨ Skip cricket — find a pebble nearby", next: "spell_garden_secret", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },
  river_boat: {
    art: "⛵🦦🍯",
    story: `Otto rows beautifully, singing! 🎵 They float past Honey Island — a tiny island made of pure honey! 🍯 Suddenly — Mimsy gets stuck in sticky honeysuckle! "Help help, zip zip!" 🐦`,
    choices: [
      { text: "🤝 Tobble bravely rescues Mimsy!", next: "mimsy_rescue", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🍯 Stop at Honey Island for snacks!", next: "honey_island", color: "#f57c00", bg: "#fff8e1", stars: 2 },
    ],
  },
  rapids: {
    art: "🌊🎢🐟",
    story: `WHOOSH! The lemonade rapids are so bouncy! 🎢 They zoom past minnows wearing scarves 🐟🧣! At the bottom they meet Goldie, a wise old goldfish in tiny spectacles! 🐟 "I can offer a secret SHORTCUT or teach you WATER MAGIC!"`,
    choices: [
      { text: "🎣 Take the secret shortcut!", next: "fish_shortcut", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "💧 Learn Goldie's water magic", next: "water_magic", color: "#0277bd", bg: "#e1f5fe", stars: 2 },
    ],
  },
  peacock_pier: {
    art: "🦚💃✨",
    story: `Pari and her peacock troupe SHIMMER with golden-blue-green feathers! 🦚 "Welcome, travelers! Will you dance with us Bollywood-style, OR solve our feather riddle?" Pari twirls gracefully! 💃`,
    choices: [
      { text: "💃 BOLLYWOOD DANCE-OFF with Pari!", next: "peacock_dance", color: "#2e7d32", bg: "#e8f5e9", stars: 3 },
      { text: "🧠 Try Pari's feather riddle", next: "peacock_riddle", color: "#6a1b9a", bg: "#f3e5f5", stars: 2 },
    ],
  },
  bee_dance: {
    art: "🐝💃🌟",
    story: `Everyone wiggles! Even Tobble's top hat wiggles! 🕺 Queen Beena is delighted and gives Fizzy a magic honeycomb piece that opens any door! 🍯✨`,
    choices: [{ text: "🌸 To the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  bee_riddle: {
    art: "🐝🧠🥭",
    story: `Queen Beena asks: "I'm sweet, I'm gold, I grow on trees but I'm not honey!" Tobble thinks hard... "MANGO!" 🥭 "CORRECT!" Queen Beena gives them a magic mango seed! ✨`,
    choices: [{ text: "🌟 To the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  honey_kitchen: {
    art: "🍯👩‍🍳🥧",
    story: `Fizzy makes the best mini jalebis ever! Even Tobble (a serious foodie) is amazed! 🍯 Queen Beena declares: "You have honey-magic hands!" She gives Fizzy a golden glaze-vial for the spell. ✨`,
    choices: [{ text: "🌸 Hurry to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  owl_riddle: {
    art: "🦉🔥⭐",
    story: `Omkar asks: "What grows when it eats and dies when it drinks?" Tobble shouts: "FIRE!" 🔥 "Correct!" Omkar hands Fizzy the golden flower. 🌼`,
    choices: [{ text: "🌟 To the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  owl_quest: {
    art: "🌙✨🍶",
    story: `Mimsy zips up and catches a moonbeam in a tiny bottle! 🌙✨ Omkar is amazed: "Wings of wisdom, little ones!" He gives them the golden flower and a moon-blessing. 🌼`,
    choices: [{ text: "🌸 Go to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  dadi_tortoise: {
    art: "🐢🍡💖",
    story: `Dadi Tinku is so sweet! 🐢 "Beta, come, sit! Have a laddoo!" 🍡 "I know the spell — 'BUMBLE-WOBBLE-ZOOM-KA-ZAP'. But you must say it with love and dosti. Now go, bachhon!" She blesses them with her wrinkled flipper. ✨`,
    choices: [{ text: "🙏 Touch Dadi Tinku's feet, then go!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  piku_key: {
    art: "🗝️🦜⭐",
    story: `Piku hops on Fizzy's shoulder! "Friend friend friend!" 🦜 He guides them to the spell garden, chattering non-stop. They laugh so hard their tummies ache! 😂`,
    choices: [{ text: "🌸 Use Piku's key at the secret gate!", next: "spell_garden_secret", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  piku_song: {
    art: "🎶🦜🌳",
    story: `They sing together — Piku does the chorus 100 times! 🎶 The trees sway! A magical pathway of musical notes appears! 🎵✨`,
    choices: [{ text: "🎼 Follow the music pathway!", next: "spell_garden_secret", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  ant_feast: {
    art: "🍛🐜🎊",
    story: `The feast is incredible — tiny rice grains, sugar-crystal sweets, leaf-curry! 🍛 Tobble has seven helpings! 🐭 The ants present Fizzy with the golden gate key and special blessings! 🗝️✨`,
    choices: [{ text: "🌸 Off to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  diya_blessing: {
    art: "🪔✨🌟",
    story: `Every diya is lit! The forest glows with golden light! ✨ The fireflies bless Fizzy: "May your spell glow as bright as our flames!" 🪔 They escort her to the spell garden, lighting the path! 🌟`,
    choices: [{ text: "🌸 To the spell garden in glowing glory!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  festival_sweets: {
    art: "🍬🪔😋",
    story: `Tiny gulab jamuns! Mini laddoos! Itty-bitty barfi! 🍬 Mimsy's beak is sticky. Tobble's whiskers are sugary! 😂 A firefly chef gives Fizzy a magic strength-sweet! 💪`,
    choices: [{ text: "🌸 Continue to the spell garden!", next: "spell_garden_gate", color: "#e65100", bg: "#fff3e0", stars: 1 }],
  },
  firefly_help: {
    art: "💛✨🐛",
    story: `The lost firefly is Twinkle! 💛 They reunite her with her family, who form a glowing escort to the spell garden! ✨🌟`,
    choices: [{ text: "🌸 Sparkle on to the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  mango_grove: {
    art: "🥭🌳✨",
    story: `The magic mango grove smells of dreams! 🥭 Fizzy plucks a sparkly magic mango. Captain Bablu appears: "Brave one! Take this for strength in your spell!" 💪✨`,
    choices: [{ text: "🌸 To the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  super_jump: {
    art: "🚀🦘✨",
    story: `BOING! Fizzy super-jumps over rocks and rivers in seconds! 🚀 Tobble holds his hat tight! They land at the spell garden in record time!`,
    choices: [{ text: "🌸 Land at the spell garden!", next: "spell_garden_gate", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  cricket_match: {
    art: "🏏🦗🏆",
    story: `Tobble BOWLS! Mimsy FIELDS! Fizzy BATS with a twig and hits a SIX! 🏏 The bugs cheer wildly! 🎉 Chiku bows: "You play with great spirit!" He hands over the shiny magic pebble! ✨`,
    choices: [{ text: "🗝️ Open the secret garden gate!", next: "spell_garden_secret", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  mimsy_rescue: {
    art: "🐭🤝🐦",
    story: `Tobble heroically scoops Mimsy from the honey! 🤝 "Are you okay, friend?" "Zip zip — yes!" 🐦 The honey is yummy too — bonus snack! 🍯 Otto rows them right to the garden!`,
    choices: [{ text: "🌸 To the spell garden!", next: "spell_garden_river", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  honey_island: {
    art: "🍯🏝️😋",
    story: `Honey Island is yummy! 🍯 They eat their fill and pack some for later. Then — uh oh, time! Otto rows fast! 🚣`,
    choices: [{ text: "🌸 Rush to the spell garden!", next: "spell_garden_river", color: "#e65100", bg: "#fff3e0", stars: 1 }],
  },
  fish_shortcut: {
    art: "🐟🌊⚡",
    story: `Goldie shows them a secret underwater tunnel! 🐟 Hold breath... swim... POP! Right inside the spell garden! 🌸`,
    choices: [{ text: "✨ Find the spell stone!", next: "spell_garden_river", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  water_magic: {
    art: "💧🌊✨",
    story: `Goldie teaches Fizzy water magic! 💧 Now she can make water DANCE! ✨ "Use this in your spell, brave one!" They reach the garden refreshed!`,
    choices: [{ text: "🌸 To the spell garden!", next: "spell_garden_river", color: "#0277bd", bg: "#e1f5fe", stars: 2 }],
  },
  peacock_dance: {
    art: "🦚💃🎬",
    story: `BOLLYWOOD TIME! 💃🕺 Fizzy, Mimsy, Tobble and Pari's peacocks dance! Hands up! Hips swing! SPIN SPIN SPIN! 🎵 Pari is so impressed she gives Fizzy a golden feather — the most magical thing in all Bumblewood! 🪶✨`,
    choices: [{ text: "🌸 Dance to the grand spell garden!", next: "spell_garden_grand", color: "#2e7d32", bg: "#e8f5e9", stars: 3 }],
  },
  peacock_riddle: {
    art: "🦚🧠🪶",
    story: `Pari asks: "I have eyes but cannot see, I'm bright but make no light. What am I?" Tobble bows: "A peacock feather!" 🪶 "CORRECT!" Pari gives Fizzy a small magic feather. ✨`,
    choices: [{ text: "🌸 To the grand spell garden!", next: "spell_garden_grand", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  spell_garden_gate: {
    art: "🌸🚪✨",
    story: `The Spell Garden gate is HUGE! 🌸 A gentle moss-guard asks: "Password please?" Tobble whispers: "I read it in a book — was it PLEASE or NAMASTE?" 🎩`,
    choices: [
      { text: "🙏 Say 'Please!' politely", next: "spell_cast", color: "#2e7d32", bg: "#e8f5e9", stars: 2 },
      { text: "🙏 Say 'Namaste!' with folded hands", next: "spell_cast", color: "#e65100", bg: "#fff3e0", stars: 2 },
    ],
  },
  spell_garden_secret: {
    art: "🚪✨🌟",
    story: `The secret back gate opens silently! ✨ They tiptoe in and find the spell stone glowing in moonlight! 🌟 Mimsy quivers with excitement. Tobble straightens his hat one last time! 🎩`,
    choices: [{ text: "✨ Approach the spell stone!", next: "spell_cast", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  spell_garden_river: {
    art: "🌸🌊⭐",
    story: `The river deposits them at the spell stone! 🌊 Lily pads form a magical path. Fireflies dance overhead. ✨`,
    choices: [{ text: "✨ Walk to the spell stone!", next: "spell_cast", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  spell_garden_grand: {
    art: "🎆🌸🪶",
    story: `The grand entrance opens with a flourish! 🎆 The spell garden is decorated with peacock feathers and glowing flowers — it looks like Diwali night! 🪔✨`,
    choices: [{ text: "🌟 Stand before the spell stone!", next: "spell_cast", color: "#2e7d32", bg: "#e8f5e9", stars: 2 }],
  },
  spell_cast: {
    art: "✨🌟💫",
    story: `Fizzy holds her magical items high! 🌼 Mimsy zooms in circles above! 🐦 Tobble takes her hand, hat firmly on! 🎩 "Ready, dosto?" "READY!" Together they shout — "BUMBLE-WOBBLE-ZOOM-KA-ZAP!" three times! And spin! ✨🌀✨`,
    choices: [{ text: "🎊 BOING! POP! ZOOM!", next: "ending_check", color: "#2e7d32", bg: "#e8f5e9", stars: 1 }],
  },
  ending_check: { end: "check" },
};

const ENDINGS = {
  hero: {
    art: "🎉🌈🏡✨🌟",
    title: "The Legendary Hero of Bumblewood!",
    text: `BOING-POP-ZOOM! 🎊 Bumblewood blooms back to full size! 🏡 The villagers cheer! There is cake, balloons, and a Diwali-style fireworks display! 🎆 The village makes Fizzy, Mimsy and Tobble honorary Royal Wizards with tiny golden crowns! 👑 Professor Wobble shakes Fizzy's hand: "Outstanding, Fizzwick. Best apprentice ever." Dadi Tinku sends a basket of laddoos! 🍡 Piku shouts "Hooray hooray hooray!" 🦜 Captain Bablu salutes with his cape. Chiku awards her a tiny trophy! What an adventure! 🌟`,
  },
  almost: {
    art: "🤗🌸🏡💝",
    title: "The Almost-Hero Ending!",
    text: `POP! Bumblewood grows back — mostly! 🏡 A few houses wobble. The bakery is upside down. But everyone is safe and laughing! 😄 Mimsy and Tobble hug Fizzy tight. The villagers throw a small chai party in her honour. 🍵 Professor Wobble pats her shoulder: "Not bad, beta. We will fix the rest tomorrow — together." 💝 What a sweet, slightly-wonky day!`,
  },
};

const colors = {
  paper: "#fff9e6",
  paperDark: "#fff3c4",
  ink: "#3e2723",
  inkSoft: "#5d4037",
  accent: "#2e7d32",
  accent2: "#e65100",
  accent3: "#6a1b9a",
  border: "#d7ccc8",
};

const fontFamily = "'Nunito', 'Comic Sans MS', cursive, sans-serif";

export default function BumbleWood() {
  const [phase, setPhase] = useState("intro");
  const [introPage, setIntroPage] = useState(0);
  const [scene, setScene] = useState("start");
  const [stars, setStars] = useState(0);
  const [step, setStep] = useState(0);
  const [muted, setMuted] = useState(false);
  const audioCtxRef = useRef(null);

  const totalSteps = 6;
  const starGoal = 10;

  function getCtx() {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtxRef.current;
  }

  function playTone(freq, duration = 0.15, type = "triangle", volume = 0.18) {
    if (muted) return;
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  function playClick() { playTone(660, 0.08, "sine", 0.12); }
  function playPageTurn() {
    playTone(440, 0.12, "sine", 0.1);
    setTimeout(() => playTone(660, 0.1, "sine", 0.1), 60);
  }
  function playStar(count) {
    if (count <= 0) return;
    const notes = [880, 1175, 1568, 2093];
    for (let i = 0; i < Math.min(count, notes.length); i++) {
      setTimeout(() => playTone(notes[i], 0.18, "triangle", 0.15), 100 + i * 110);
    }
  }
  function playWin() {
    const melody = [523, 659, 784, 1047, 1319];
    melody.forEach((f, i) => { setTimeout(() => playTone(f, 0.3, "triangle", 0.2), i * 130); });
    setTimeout(() => playTone(1568, 0.5, "triangle", 0.22), melody.length * 130);
  }
  function playAlmost() {
    playTone(523, 0.25, "triangle", 0.18);
    setTimeout(() => playTone(659, 0.25, "triangle", 0.18), 200);
    setTimeout(() => playTone(784, 0.4, "triangle", 0.2), 400);
  }

  function nextIntroPage() {
    playPageTurn();
    if (introPage < INTRO_PAGES.length - 1) setIntroPage(introPage + 1);
    else startStory();
  }
  function prevIntroPage() {
    playPageTurn();
    if (introPage > 0) setIntroPage(introPage - 1);
  }
  function startStory() { playClick(); setPhase("story"); }
  function skipIntro() { playClick(); setPhase("story"); }
  function reopenIntro() { playClick(); setPhase("intro"); setIntroPage(0); }

  function choose(choice) {
    playClick();
    const newStars = stars + (choice.stars || 0);
    setStars(newStars);
    setStep(s => s + 1);
    if (choice.stars > 0) playStar(choice.stars);
    if (choice.next === "ending_check") {
      setTimeout(() => {
        if (newStars >= starGoal) playWin();
        else playAlmost();
      }, 600);
    }
    setScene(choice.next);
  }

  function restartStory() {
    playClick();
    setScene("start");
    setStars(0);
    setStep(0);
  }

  if (phase === "intro") {
    const page = INTRO_PAGES[introPage];
    const isLast = introPage === INTRO_PAGES.length - 1;
    const isFirst = introPage === 0;

    return (
      <div style={{ fontFamily, padding: "1rem 0.5rem 2rem" }}>
        <div style={{ background: `linear-gradient(170deg, ${colors.paper} 0%, ${colors.paperDark} 100%)`, borderRadius: 24, border: `3px solid ${colors.border}`, padding: "1.75rem 1.5rem", position: "relative", boxShadow: "0 8px 24px rgba(93,64,55,0.15)", minHeight: 400 }}>
          {!isFirst && (
            <button onClick={skipIntro} style={{ position: "absolute", top: 14, right: 14, background: "transparent", border: `1.5px solid ${colors.inkSoft}`, borderRadius: 14, padding: "4px 10px", fontSize: 11, fontWeight: 800, color: colors.inkSoft, cursor: "pointer" }}>Skip Intro →</button>
          )}
          <IntroPage page={page} />
          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <button onClick={prevIntroPage} disabled={isFirst} style={{ background: isFirst ? "#e0d4c3" : "#fff", border: `2px solid ${colors.inkSoft}`, borderRadius: 14, padding: "0.6rem 1rem", fontSize: 14, fontWeight: 800, color: colors.inkSoft, cursor: isFirst ? "not-allowed" : "pointer", opacity: isFirst ? 0.4 : 1 }}>← Back</button>
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              {INTRO_PAGES.map((_, i) => (
                <div key={i} style={{ width: i === introPage ? 18 : 7, height: 7, borderRadius: 7, background: i === introPage ? colors.accent : colors.border, transition: "all 0.3s" }} />
              ))}
            </div>
            <button onClick={nextIntroPage} style={{ background: colors.accent, border: "none", borderRadius: 14, padding: "0.6rem 1rem", fontSize: 14, fontWeight: 800, color: "#fff", cursor: "pointer", boxShadow: `0 3px 0 ${colors.accent2}` }}>
              {isLast ? "✨ Begin Adventure!" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const node = STORY[scene];

  if (node.end) {
    const ending = stars >= starGoal ? ENDINGS.hero : ENDINGS.almost;
    return (
      <div style={{ fontFamily, padding: "1rem 0.5rem 2rem" }}>
        <div style={{ background: "linear-gradient(160deg, #fff9c4 0%, #e1f5fe 50%, #f8bbd0 100%)", borderRadius: 24, border: "4px solid #ffb74d", padding: "1.5rem", textAlign: "center", boxShadow: "0 8px 24px rgba(255,183,77,0.25)" }}>
          <div style={{ fontSize: 60, lineHeight: 1.2, marginBottom: 8 }}>{ending.art}</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#bf360c", marginBottom: 8 }}>{ending.title}</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#4a4a4a", lineHeight: 1.7, background: "rgba(255,255,255,0.85)", borderRadius: 14, padding: "1rem", marginBottom: 12, border: "3px dashed #ffb74d" }}>{ending.text}</div>
          <div style={{ fontSize: 20, marginBottom: 12, color: "#e65100", fontWeight: 800 }}>⭐ You collected {stars} of {starGoal} stars!</div>
          {stars < starGoal && (
            <div style={{ fontSize: 14, fontWeight: 700, color: "#6a1b9a", marginBottom: 12, background: "#f3e5f5", padding: "0.5rem 1rem", borderRadius: 12 }}>💡 Try different choices to unlock the Legendary Hero ending!</div>
          )}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={restartStory} style={{ background: "#42a5f5", border: "none", borderRadius: 18, padding: "0.75rem 1.5rem", fontSize: 15, fontWeight: 800, color: "#fff", cursor: "pointer", boxShadow: "0 4px 0 #1565c0" }}>🔄 Play Again!</button>
            <button onClick={reopenIntro} style={{ background: "#fff", border: "2px solid #6a1b9a", borderRadius: 18, padding: "0.75rem 1.5rem", fontSize: 15, fontWeight: 800, color: "#6a1b9a", cursor: "pointer" }}>📖 Re-read Guide</button>
          </div>
        </div>
      </div>
    );
  }

  const progress = Math.min(step / totalSteps, 1);
  const starProgress = Math.min(stars / starGoal, 1);

  return (
    <div style={{ fontFamily, padding: "1rem 0.5rem 2rem" }}>
      <div style={{ background: "linear-gradient(160deg, #fffde7 0%, #e8f5e9 100%)", borderRadius: 24, border: "3px solid #81c784", padding: "1.5rem", position: "relative", boxShadow: "0 6px 20px rgba(129,199,132,0.2)" }}>
        <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 6 }}>
          <button onClick={reopenIntro} title="Re-read World Guide" style={{ background: "#e1bee7", border: "2px solid #8e24aa", borderRadius: 50, width: 38, height: 38, fontSize: 16, cursor: "pointer", fontWeight: 800 }}>📖</button>
          <button onClick={() => setMuted(m => !m)} style={{ background: muted ? "#ffcdd2" : "#c8e6c9", border: "2px solid " + (muted ? "#e57373" : "#66bb6a"), borderRadius: 50, width: 38, height: 38, fontSize: 16, cursor: "pointer", fontWeight: 800 }}>{muted ? "🔇" : "🔊"}</button>
        </div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#2e7d32", textAlign: "center", marginBottom: 2 }}>🍄 Bumblewood Adventure</div>
        <div style={{ fontSize: 10, fontWeight: 800, color: "#66bb6a", textAlign: "center", marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>Book One · The Shrinking Spell</div>
        <div style={{ marginBottom: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#558b2f", marginBottom: 4 }}>📖 Journey progress</div>
          <div style={{ height: 8, background: "#c8e6c9", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${Math.round(progress * 100)}%`, background: "linear-gradient(90deg,#66bb6a,#42a5f5)", borderRadius: 8, transition: "width 0.4s" }} />
          </div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#f57f17", marginBottom: 4 }}>⭐ Stars: {stars} / {starGoal}</div>
          <div style={{ height: 8, background: "#ffe0b2", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${Math.round(starProgress * 100)}%`, background: "linear-gradient(90deg,#ffd54f,#ffa726)", borderRadius: 8, transition: "width 0.4s" }} />
          </div>
        </div>
        <div style={{ fontSize: 52, textAlign: "center", lineHeight: 1, margin: "0.5rem 0 1rem" }}>{node.art}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#3e3e3e", lineHeight: 1.7, background: "rgba(255,255,255,0.85)", borderRadius: 14, padding: "1rem 1.2rem", marginBottom: 14, border: "2px dashed #a5d6a7" }}>{node.story}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {node.choices.map((c, i) => (
            <button key={i} onClick={() => choose(c)} style={{ background: c.bg, border: `3px solid ${c.color}`, borderRadius: 18, padding: "0.85rem 1rem", fontSize: 15, fontWeight: 800, color: c.color, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8, transition: "transform 0.12s", boxShadow: `0 3px 0 ${c.color}` }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
              {c.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function IntroPage({ page }) {
  if (page.type === "cover") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0.5rem" }}>
        <div style={{ fontSize: 72, lineHeight: 1.1, marginBottom: 16 }}>{page.emoji}</div>
        <div style={{ fontSize: 30, fontWeight: 800, color: colors.ink, marginBottom: 8, lineHeight: 1.2 }}>{page.title}</div>
        <div style={{ fontSize: 16, fontWeight: 800, color: colors.accent2, marginBottom: 24, letterSpacing: 1, textTransform: "uppercase" }}>{page.subtitle}</div>
        <div style={{ fontSize: 17, fontWeight: 700, color: colors.inkSoft, marginBottom: 28, fontStyle: "italic", lineHeight: 1.6 }}>{page.body}</div>
        <div style={{ display: "inline-block", padding: "12px 20px", background: "rgba(255,255,255,0.6)", border: `2px dashed ${colors.border}`, borderRadius: 14, fontSize: 14, fontWeight: 700, color: colors.accent3, fontStyle: "italic", maxWidth: 320, lineHeight: 1.5 }}>"{page.quote}"</div>
      </div>
    );
  }
  if (page.type === "world") {
    return (
      <div>
        <div style={{ fontSize: 50, textAlign: "center", marginBottom: 8 }}>{page.emoji}</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: colors.ink, textAlign: "center", marginBottom: 16 }}>{page.title}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: colors.inkSoft, marginBottom: 18, lineHeight: 1.6, fontStyle: "italic", textAlign: "center" }}>{page.intro}</div>
        {page.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 14, padding: "0.85rem 1rem", background: "rgba(255,255,255,0.5)", borderRadius: 12, borderLeft: `4px solid ${colors.accent}` }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: colors.accent, marginBottom: 6 }}>{s.head}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: colors.ink, lineHeight: 1.6, whiteSpace: "pre-line" }}>{s.body}</div>
          </div>
        ))}
      </div>
    );
  }
  if (page.type === "character") {
    const SvgComp = MAIN_SVGS[page.svgKey];
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: 14, padding: "8px 0", background: "rgba(255,255,255,0.4)", borderRadius: 16, border: `2px dashed ${colors.border}` }}>
          {SvgComp && <SvgComp />}
          <div style={{ fontSize: 24, fontWeight: 800, color: colors.ink, marginTop: 8 }}>{page.title}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: colors.inkSoft, fontStyle: "italic", marginTop: 3 }}>{page.subtitle}</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: 12, padding: "0.75rem 1rem", marginBottom: 12, border: `1.5px dashed ${colors.border}` }}>
          {page.quickFacts.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < page.quickFacts.length - 1 ? 6 : 0, fontSize: 13 }}>
              <span style={{ fontWeight: 800, color: colors.accent2, minWidth: 70 }}>{f[0]}:</span>
              <span style={{ fontWeight: 700, color: colors.ink, flex: 1, lineHeight: 1.5 }}>{f[1]}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: colors.ink, lineHeight: 1.65, marginBottom: 12 }}>{page.story}</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: colors.ink, lineHeight: 1.65, marginBottom: 14, padding: "0.7rem 0.9rem", background: "rgba(255,224,178,0.4)", borderRadius: 10, borderLeft: `3px solid ${colors.accent2}` }}>
          <strong style={{ color: colors.accent2 }}>How they came here:</strong> {page.origin}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
          {page.traits.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, padding: "6px 10px", background: "rgba(255,255,255,0.5)", borderRadius: 8 }}>
              <span style={{ fontWeight: 800, color: colors.accent3, minWidth: 130 }}>{t[0]}:</span>
              <span style={{ fontWeight: 700, color: colors.ink, flex: 1, lineHeight: 1.5 }}>{t[1]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (page.type === "family") {
    return (
      <div>
        <div style={{ fontSize: 50, textAlign: "center", marginBottom: 8 }}>{page.emoji}</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: colors.ink, textAlign: "center", marginBottom: 12 }}>{page.title}</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: colors.inkSoft, marginBottom: 16, lineHeight: 1.6, fontStyle: "italic", textAlign: "center" }}>{page.intro}</div>
        {page.members.map((m, i) => {
          const SvgComp = SUPPORTING_SVGS[m.svgKey];
          return (
            <div key={i} style={{ marginBottom: 10, padding: "0.7rem 0.9rem", background: "rgba(255,255,255,0.6)", borderRadius: 12, borderLeft: `3px solid ${colors.accent3}`, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, background: "rgba(243,229,245,0.4)", borderRadius: 10, padding: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {SvgComp && <SvgComp size={70} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: colors.accent3, marginBottom: 3 }}>{m.name}</div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: colors.ink, lineHeight: 1.55 }}>{m.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (page.type === "origin") {
    return (
      <div>
        <div style={{ fontSize: 50, textAlign: "center", marginBottom: 8 }}>{page.emoji}</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: colors.ink, textAlign: "center", marginBottom: 16 }}>{page.title}</div>
        {page.paragraphs.map((p, i) => {
          const isLast = i === page.paragraphs.length - 1;
          return (
            <div key={i} style={{ fontSize: 14.5, lineHeight: 1.7, marginBottom: 12, whiteSpace: "pre-line", fontStyle: isLast ? "italic" : "normal", textAlign: isLast ? "center" : "left", fontWeight: isLast ? 800 : 600, color: isLast ? colors.accent3 : colors.ink, padding: isLast ? "10px" : 0, background: isLast ? "rgba(243,229,245,0.5)" : "transparent", borderRadius: isLast ? 10 : 0 }}>{p}</div>
          );
        })}
      </div>
    );
  }
  if (page.type === "prologue") {
    return (
      <div>
        <div style={{ fontSize: 50, textAlign: "center", marginBottom: 8 }}>{page.emoji}</div>
        <div style={{ fontSize: 26, fontWeight: 800, color: colors.ink, textAlign: "center", marginBottom: 4 }}>{page.title}</div>
        <div style={{ fontSize: 13, fontWeight: 800, color: colors.accent2, textAlign: "center", marginBottom: 20, letterSpacing: 1, textTransform: "uppercase" }}>{page.subtitle}</div>
        {page.paragraphs.map((p, i) => (
          <div key={i} style={{ fontSize: 15, fontWeight: 600, color: colors.ink, lineHeight: 1.75, marginBottom: 12, textAlign: p.length < 15 ? "center" : "left", fontStyle: p.length < 15 ? "italic" : "normal" }}>{p}</div>
        ))}
        <div style={{ marginTop: 18, padding: "0.8rem 1rem", background: "rgba(255,224,178,0.5)", border: `2px dashed ${colors.accent2}`, borderRadius: 12, textAlign: "center", fontSize: 14, fontWeight: 800, color: colors.accent2, fontStyle: "italic" }}>
          Tap "Begin Adventure!" below to start Book One...
        </div>
      </div>
    );
  }
  return null;
}
