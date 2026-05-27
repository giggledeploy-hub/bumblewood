import { useState, useRef } from "react";

// ============= CHARACTER ILLUSTRATIONS (SVG) =============

function FizzySvg({ size = 150 }) {
  return (
    <svg viewBox="0 0 200 240" style={{ width: size, height: size * 1.2, display: "block", margin: "0 auto" }}>
      <defs>
        <radialGradient id="fz_face" cx="0.4" cy="0.3"><stop offset="0" stopColor="#fff3e0"/><stop offset="1" stopColor="#ffab91"/></radialGradient>
        <linearGradient id="fz_hat" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ab47bc"/><stop offset="0.5" stopColor="#7b1fa2"/><stop offset="1" stopColor="#4a148c"/></linearGradient>
        <linearGradient id="fz_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9575cd"/><stop offset="0.5" stopColor="#7e57c2"/><stop offset="1" stopColor="#311b92"/></linearGradient>
        <radialGradient id="fz_wand" cx="0.5" cy="0.5"><stop offset="0" stopColor="#fff59d" stopOpacity="0.9"/><stop offset="0.5" stopColor="#ffd54f" stopOpacity="0.5"/><stop offset="1" stopColor="#ff9800" stopOpacity="0"/></radialGradient>
        <filter id="fz_shd" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2"/><feOffset dx="0" dy="3"/><feComponentTransfer><feFuncA type="linear" slope="0.35"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="20" cy="40" r="2.5" fill="#fff59d"/>
      <circle cx="180" cy="55" r="3" fill="#ffd54f"/>
      <circle cx="30" cy="200" r="2" fill="#fff59d"/>
      <circle cx="175" cy="200" r="2.5" fill="#fff59d"/>
      <circle cx="160" cy="100" r="2" fill="#fff59d" opacity="0.6"/>
      <circle cx="35" cy="120" r="1.5" fill="#ffd54f" opacity="0.7"/>
      <path d="M 55 145 Q 48 232 100 232 Q 152 232 145 145 L 130 130 L 70 130 Z" fill="url(#fz_robe)" stroke="#311b92" strokeWidth="1.5" filter="url(#fz_shd)"/>
      <path d="M 65 145 Q 70 200 75 220" stroke="#b39ddb" strokeWidth="3" fill="none" opacity="0.4"/>
      <rect x="55" y="155" width="90" height="9" fill="#ffd54f"/>
      <rect x="55" y="155" width="90" height="2" fill="#fff59d"/>
      <rect x="55" y="162" width="90" height="2" fill="#bf360c" opacity="0.3"/>
      <circle cx="100" cy="159.5" r="4" fill="#ff9800" stroke="#bf360c" strokeWidth="1"/>
      <circle cx="100" cy="158" r="1.5" fill="#fff59d"/>
      <text x="73" y="185" fontSize="15" fill="#fff59d">★</text>
      <text x="115" y="200" fontSize="14" fill="#fff59d">★</text>
      <text x="92" y="220" fontSize="12" fill="#fff59d">★</text>
      <rect x="92" y="120" width="16" height="15" fill="url(#fz_face)"/>
      <circle cx="100" cy="105" r="34" fill="url(#fz_face)" stroke="#ffab91" strokeWidth="0.5"/>
      <circle cx="70" cy="82" r="15" fill="#5d4037"/>
      <circle cx="130" cy="82" r="15" fill="#5d4037"/>
      <circle cx="62" cy="98" r="13" fill="#5d4037"/>
      <circle cx="138" cy="98" r="13" fill="#5d4037"/>
      <circle cx="100" cy="74" r="14" fill="#5d4037"/>
      <circle cx="78" cy="92" r="9" fill="#5d4037"/>
      <circle cx="122" cy="92" r="9" fill="#5d4037"/>
      <circle cx="55" cy="105" r="9" fill="#5d4037"/>
      <circle cx="145" cy="105" r="9" fill="#5d4037"/>
      <circle cx="68" cy="78" r="4" fill="#795548"/>
      <circle cx="128" cy="78" r="4" fill="#795548"/>
      <circle cx="98" cy="70" r="3" fill="#795548"/>
      <path d="M 68 80 L 100 16 L 132 80 Z" fill="url(#fz_hat)" stroke="#311b92" strokeWidth="1.5" filter="url(#fz_shd)"/>
      <ellipse cx="100" cy="80" rx="34" ry="7" fill="#311b92"/>
      <ellipse cx="100" cy="78" rx="32" ry="3" fill="#7b1fa2"/>
      <path d="M 78 70 Q 90 45 100 22" stroke="#ce93d8" strokeWidth="2.5" fill="none" opacity="0.5"/>
      <text x="92" y="56" fontSize="15" fill="#ffd54f">★</text>
      <text x="106" y="40" fontSize="11" fill="#fff59d">★</text>
      <ellipse cx="88" cy="106" rx="5" ry="5.5" fill="#fff"/>
      <ellipse cx="112" cy="106" rx="5" ry="5.5" fill="#fff"/>
      <circle cx="88" cy="107" r="4" fill="#5d4037"/>
      <circle cx="112" cy="107" r="4" fill="#5d4037"/>
      <circle cx="88" cy="108" r="2.5" fill="#1a1a1a"/>
      <circle cx="112" cy="108" r="2.5" fill="#1a1a1a"/>
      <circle cx="89.5" cy="104.5" r="1.5" fill="#fff"/>
      <circle cx="113.5" cy="104.5" r="1.5" fill="#fff"/>
      <circle cx="86" cy="109" r="0.7" fill="#fff"/>
      <circle cx="110" cy="109" r="0.7" fill="#fff"/>
      <ellipse cx="76" cy="118" rx="9" ry="6.5" fill="#ff8a65" opacity="0.5"/>
      <ellipse cx="124" cy="118" rx="9" ry="6.5" fill="#ff8a65" opacity="0.5"/>
      <circle cx="80" cy="114" r="1.4" fill="#bf360c"/>
      <circle cx="92" cy="117" r="1.4" fill="#bf360c"/>
      <circle cx="108" cy="117" r="1.4" fill="#bf360c"/>
      <circle cx="120" cy="114" r="1.4" fill="#bf360c"/>
      <ellipse cx="100" cy="115" rx="2.5" ry="2" fill="#ff8a65"/>
      <path d="M 87 124 Q 100 135 113 124" stroke="#3e2723" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 92 127 Q 100 131 108 127" fill="#ef5350"/>
      <rect x="97" y="127" width="3" height="2.5" fill="#fff"/>
      <circle cx="180" cy="125" r="18" fill="url(#fz_wand)"/>
      <line x1="150" y1="170" x2="180" y2="125" stroke="#6d4c41" strokeWidth="4" strokeLinecap="round"/>
      <line x1="151" y1="168" x2="178" y2="127" stroke="#a1887f" strokeWidth="1" opacity="0.7"/>
      <g transform="translate(180 125)"><path d="M 0 -9 L 2.5 -2.5 L 9 -2 L 3.5 2 L 5.5 9 L 0 4.5 L -5.5 9 L -3.5 2 L -9 -2 L -2.5 -2.5 Z" fill="#fff59d" stroke="#ff9800" strokeWidth="1.2"/><circle r="2" fill="#fff"/></g>
      <circle cx="148" cy="172" r="7" fill="url(#fz_face)" stroke="#ffab91" strokeWidth="0.5"/>
      <path d="M 165 95 L 167 92 L 170 95 L 167 98 Z" fill="#fff59d"/>
      <path d="M 195 110 L 197 107 L 200 110 L 197 113 Z" fill="#ffd54f"/>
      <path d="M 160 140 L 162 137 L 165 140 L 162 143 Z" fill="#fff59d"/>
      <ellipse cx="100" cy="234" rx="42" ry="5" fill="#3e2723" opacity="0.25"/>
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
      <defs>
        <linearGradient id="wb_robe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7e57c2"/><stop offset="0.5" stopColor="#5e35b1"/><stop offset="1" stopColor="#311b92"/></linearGradient>
        <linearGradient id="wb_beard" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#bdbdbd"/></linearGradient>
        <radialGradient id="wb_staff" cx="0.5" cy="0.5"><stop offset="0" stopColor="#fff59d" stopOpacity="1"/><stop offset="0.5" stopColor="#ffd54f" stopOpacity="0.6"/><stop offset="1" stopColor="#f57f17" stopOpacity="0"/></radialGradient>
        <filter id="wb_shd"><feGaussianBlur stdDeviation="2"/><feOffset dx="1" dy="3"/><feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="20" cy="50" r="2" fill="#fff59d"/>
      <circle cx="175" cy="75" r="2.5" fill="#fff59d"/>
      <circle cx="25" cy="180" r="2" fill="#fff59d"/>
      <circle cx="180" cy="200" r="2.5" fill="#fff59d"/>
      <path d="M 50 145 Q 35 275 100 278 Q 165 275 150 145 L 130 130 L 70 130 Z" fill="url(#wb_robe)" stroke="#311b92" strokeWidth="2" filter="url(#wb_shd)"/>
      <path d="M 60 145 Q 65 220 70 270" stroke="#b39ddb" strokeWidth="3" fill="none" opacity="0.35"/>
      <text x="65" y="195" fontSize="14" fill="#fff59d">★</text>
      <text x="115" y="205" fontSize="13" fill="#fff59d">★</text>
      <text x="78" y="225" fontSize="12" fill="#fff59d">★</text>
      <text x="125" y="245" fontSize="13" fill="#fff59d">★</text>
      <text x="68" y="255" fontSize="11" fill="#fff59d">★</text>
      <text x="105" y="265" fontSize="11" fill="#fff59d">★</text>
      <rect x="50" y="160" width="100" height="8" fill="#ffd54f"/>
      <rect x="50" y="160" width="100" height="2" fill="#fff59d"/>
      <rect x="50" y="166" width="100" height="2" fill="#bf360c" opacity="0.3"/>
      <circle cx="100" cy="164" r="4" fill="#ff9800" stroke="#bf360c" strokeWidth="1"/>
      <circle cx="100" cy="162.5" r="1.5" fill="#fff59d"/>
      <circle cx="100" cy="98" r="30" fill="#ffccbc"/>
      <path d="M 74 122 Q 65 215 100 230 Q 135 215 126 122 Z" fill="url(#wb_beard)" stroke="#bdbdbd" strokeWidth="1.5"/>
      <path d="M 82 200 Q 86 220 100 225 Q 114 220 118 200" fill="url(#wb_beard)" stroke="#bdbdbd" strokeWidth="1"/>
      <path d="M 90 222 Q 95 238 100 240 Q 105 238 110 222" fill="url(#wb_beard)" stroke="#bdbdbd" strokeWidth="1"/>
      <path d="M 80 140 Q 85 160 82 180" stroke="#e0e0e0" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M 120 140 Q 115 160 118 180" stroke="#e0e0e0" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M 100 130 Q 100 170 100 200" stroke="#e0e0e0" strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M 68 78 L 100 8 L 132 78 Z" fill="url(#wb_robe)" stroke="#311b92" strokeWidth="2"/>
      <ellipse cx="100" cy="78" rx="34" ry="7" fill="#311b92"/>
      <ellipse cx="100" cy="76" rx="32" ry="3" fill="#5e35b1"/>
      <path d="M 80 70 Q 92 40 100 18" stroke="#ce93d8" strokeWidth="2.5" fill="none" opacity="0.5"/>
      <text x="92" y="48" fontSize="17" fill="#ffd54f">★</text>
      <text x="105" y="32" fontSize="10" fill="#fff59d">★</text>
      <circle cx="85" cy="100" r="10" fill="rgba(255,255,255,0.4)" stroke="#1a1a1a" strokeWidth="2.5"/>
      <circle cx="115" cy="100" r="10" fill="rgba(255,255,255,0.4)" stroke="#1a1a1a" strokeWidth="2.5"/>
      <line x1="95" y1="100" x2="105" y2="100" stroke="#1a1a1a" strokeWidth="2.5"/>
      <line x1="75" y1="100" x2="68" y2="98" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="125" y1="100" x2="132" y2="98" stroke="#1a1a1a" strokeWidth="2"/>
      <path d="M 81 95 Q 84 92 88 95" stroke="#fff" strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M 111 95 Q 114 92 118 95" stroke="#fff" strokeWidth="2" fill="none" opacity="0.8"/>
      <circle cx="85" cy="100" r="2.5" fill="#1a1a1a"/>
      <circle cx="115" cy="100" r="2.5" fill="#1a1a1a"/>
      <circle cx="86" cy="99" r="0.9" fill="#fff"/>
      <circle cx="116" cy="99" r="0.9" fill="#fff"/>
      <path d="M 73 86 Q 85 80 96 86" stroke="url(#wb_beard)" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
      <path d="M 104 86 Q 115 80 127 86" stroke="url(#wb_beard)" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="100" cy="115" rx="4.5" ry="5" fill="#ff8a65"/>
      <ellipse cx="98.5" cy="113" rx="1.5" ry="1.5" fill="#ffccbc" opacity="0.7"/>
      <path d="M 86 125 Q 100 120 114 125 Q 100 128 86 125" fill="url(#wb_beard)" stroke="#bdbdbd" strokeWidth="0.8"/>
      <circle cx="170" cy="100" r="22" fill="url(#wb_staff)"/>
      <line x1="158" y1="275" x2="170" y2="100" stroke="#6d4c41" strokeWidth="5" strokeLinecap="round"/>
      <line x1="159" y1="270" x2="168" y2="105" stroke="#a1887f" strokeWidth="1" opacity="0.6"/>
      <circle cx="170" cy="100" r="12" fill="#ffd54f" stroke="#e65100" strokeWidth="1.8"/>
      <g transform="translate(170 100)"><path d="M 0 -8 L 2.5 -2.5 L 8 -2 L 3 2 L 5 8 L 0 4 L -5 8 L -3 2 L -8 -2 L -2.5 -2.5 Z" fill="#fff59d" stroke="#f57f17" strokeWidth="1"/><circle r="2" fill="#fff"/></g>
      <circle cx="155" cy="80" r="1.5" fill="#fff59d"/>
      <circle cx="190" cy="90" r="1.5" fill="#ffd54f"/>
      <circle cx="160" cy="125" r="1.5" fill="#fff59d"/>
      <ellipse cx="100" cy="280" rx="55" ry="6" fill="#3e2723" opacity="0.3"/>
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
  tinku: TinkuSvg, piku: PikuSvg, hula: HulaSvg, beena: BeenaSvg,
  omkar: OmkarSvg, pari: PariSvg, chiku: ChikuSvg, otto: OttoSvg, bablu: BabluSvg,
};

const MAIN_SVGS = {
  fizzy: FizzySvg, mimsy: MimsySvg, tobble: TobbleSvg, wobble: WobbleSvg,
};

// ============= SCENE ILLUSTRATIONS =============

const sceneFrame = { width: "100%", maxWidth: 360, display: "block", margin: "0 auto", borderRadius: 14, border: "2px solid rgba(141,110,99,0.3)" };

// 🎨 DISNEY/PIXAR STYLE IMAGES
// Generate images with Midjourney / DALL-E / Leonardo using prompts below.
// Save them to public/scenes/ in your project, then uncomment lines here.
const SCENE_IMAGES = {
  // start: '/scenes/start.png',
  // mushroom: '/scenes/mushroom.png',
  // ants: '/scenes/ants.png',
  // butterfly: '/scenes/butterfly.png',
  // lemonade: '/scenes/lemonade.png',
  // beehive: '/scenes/beehive.png',
  // owl: '/scenes/owl.png',
  // piku: '/scenes/piku.png',
  // teamwork: '/scenes/teamwork.png',
  // tunnel: '/scenes/tunnel.png',
  // firefly_fest: '/scenes/firefly_fest.png',
  // map_buy: '/scenes/map_buy.png',
  // mango_tree: '/scenes/mango_tree.png',
  // cookie_chat: '/scenes/cookie_chat.png',
  // river_boat: '/scenes/river_boat.png',
  // rapids: '/scenes/rapids.png',
  // peacock_pier: '/scenes/peacock_pier.png',
  // dadi_tortoise: '/scenes/dadi_tortoise.png',
  // cricket_match: '/scenes/cricket_match.png',
  // spell_garden_gate: '/scenes/spell_garden.png',
  // spell_cast: '/scenes/spell_cast.png',
};

// 🎨 Character portraits (Disney/Pixar style)
// Save to public/characters/ and uncomment to use
const CHARACTER_IMAGES = {
  // fizzy: '/characters/fizzy.png',
  // mimsy: '/characters/mimsy.png',
  // tobble: '/characters/tobble.png',
  // wobble: '/characters/wobble.png',
  // tinku: '/characters/tinku.png',
  // piku: '/characters/piku.png',
  // hula: '/characters/hula.png',
  // beena: '/characters/beena.png',
  // omkar: '/characters/omkar.png',
  // pari: '/characters/pari.png',
  // chiku: '/characters/chiku.png',
  // otto: '/characters/otto.png',
  // bablu: '/characters/bablu.png',
};

function SceneArt({ sceneKey, emoji }) {
  const aliases = { bee_dance: 'beehive', bee_riddle: 'beehive', honey_kitchen: 'beehive', owl_riddle: 'owl', owl_quest: 'owl', piku_key: 'piku', piku_song: 'piku', ant_feast: 'teamwork', diya_blessing: 'firefly_fest', festival_sweets: 'firefly_fest', firefly_help: 'map_buy', mango_grove: 'mango_tree', super_jump: 'mango_tree', mimsy_rescue: 'river_boat', honey_island: 'river_boat', fish_shortcut: 'rapids', water_magic: 'rapids', peacock_dance: 'peacock_pier', peacock_riddle: 'peacock_pier' };
  const sk = aliases[sceneKey] || sceneKey;
  // High-quality image takes priority if defined
  if (SCENE_IMAGES[sk]) {
    return <img src={SCENE_IMAGES[sk]} alt={sk + ' scene'} style={{ width: '100%', maxWidth: 360, display: 'block', margin: '0 auto', borderRadius: 14, border: '2px solid rgba(141,110,99,0.3)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />;
  }
  // Wobble Tower interior with falling bottle
  if (sk === "start") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs>
        <linearGradient id="s_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe082"/><stop offset="0.5" stopColor="#ffcc80"/><stop offset="1" stopColor="#ffab91"/></linearGradient>
        <radialGradient id="s_light" cx="0.5" cy="0.3"><stop offset="0" stopColor="#fff59d" stopOpacity="0.7"/><stop offset="1" stopColor="#fff59d" stopOpacity="0"/></radialGradient>
        <linearGradient id="s_wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8d6e63"/><stop offset="1" stopColor="#5d4037"/></linearGradient>
        <radialGradient id="s_bottle" cx="0.5" cy="0.4"><stop offset="0" stopColor="#fff59d"/><stop offset="0.7" stopColor="#ffd54f"/><stop offset="1" stopColor="#f57f17"/></radialGradient>
        <filter id="s_glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="250" height="140" fill="url(#s_sky)"/>
      <rect x="0" y="0" width="24" height="140" fill="url(#s_wall)" opacity="0.6"/>
      <rect x="226" y="0" width="24" height="140" fill="url(#s_wall)" opacity="0.6"/>
      <line x1="0" y1="40" x2="24" y2="40" stroke="#3e2723" strokeWidth="0.6"/>
      <line x1="0" y1="80" x2="24" y2="80" stroke="#3e2723" strokeWidth="0.6"/>
      <line x1="226" y1="55" x2="250" y2="55" stroke="#3e2723" strokeWidth="0.6"/>
      <line x1="226" y1="95" x2="250" y2="95" stroke="#3e2723" strokeWidth="0.6"/>
      <ellipse cx="125" cy="50" rx="90" ry="45" fill="url(#s_light)"/>
      <rect x="30" y="34" width="190" height="8" fill="#5d4037"/>
      <rect x="30" y="36" width="190" height="2" fill="#a1887f" opacity="0.6"/>
      <rect x="30" y="40" width="190" height="2" fill="#3e2723"/>
      <g filter="url(#s_glow)">
        <rect x="45" y="20" width="11" height="15" fill="#7e57c2" stroke="#4a148c" strokeWidth="0.5" rx="2"/>
        <ellipse cx="50.5" cy="22" rx="3" ry="1" fill="#ce93d8" opacity="0.7"/>
        <rect x="62" y="17" width="11" height="18" fill="#43a047" stroke="#1b5e20" strokeWidth="0.5" rx="2"/>
        <ellipse cx="67.5" cy="20" rx="3" ry="1" fill="#a5d6a7" opacity="0.7"/>
        <rect x="80" y="21" width="11" height="14" fill="#e91e63" stroke="#880e4f" strokeWidth="0.5" rx="2"/>
        <ellipse cx="85.5" cy="23" rx="3" ry="1" fill="#f48fb1" opacity="0.7"/>
        <rect x="195" y="20" width="11" height="15" fill="#0277bd" stroke="#01579b" strokeWidth="0.5" rx="2"/>
        <ellipse cx="200.5" cy="22" rx="3" ry="1" fill="#90caf9" opacity="0.7"/>
      </g>
      <g transform="translate(125 30) rotate(-35)" filter="url(#s_glow)">
        <rect x="-8" y="-13" width="16" height="22" fill="url(#s_bottle)" stroke="#bf360c" strokeWidth="1.5" rx="3"/>
        <ellipse cx="0" cy="-14" rx="6" ry="1.5" fill="#fff" opacity="0.6"/>
        <ellipse cx="-3" cy="-7" rx="1.5" ry="2.5" fill="#fff" opacity="0.4"/>
      </g>
      <circle cx="105" cy="20" r="2.5" fill="#fff59d"/>
      <circle cx="135" cy="48" r="3.5" fill="#ffd54f"/>
      <circle cx="160" cy="35" r="2.5" fill="#fff59d"/>
      <circle cx="115" cy="60" r="2.5" fill="#ffd54f"/>
      <circle cx="148" cy="65" r="2" fill="#fff59d"/>
      <circle cx="98" cy="48" r="1.8" fill="#fff59d"/>
      <path d="M 130 30 L 132 25 L 135 30 L 132 35 Z" fill="#fff59d"/>
      <path d="M 150 50 L 152 47 L 155 50 L 152 53 Z" fill="#ffd54f"/>
      <path d="M 115 40 L 117 37 L 120 40 L 117 43 Z" fill="#fff59d"/>
      <path d="M 24 102 L 226 102 L 226 140 L 24 140 Z" fill="#8d6e63"/>
      <path d="M 24 102 Q 125 96 226 102" stroke="#5d4037" strokeWidth="1" fill="none"/>
      <rect x="55" y="110" width="14" height="15" fill="#a1887f" stroke="#5d4037" strokeWidth="0.8" rx="0.5"/>
      <polygon points="53,110 62,102 71,110" fill="#c62828" stroke="#5d4037" strokeWidth="0.8"/>
      <rect x="59" y="117" width="3" height="5" fill="#5d4037"/>
      <rect x="65" y="116" width="3" height="3" fill="#fff59d"/>
      <rect x="80" y="113" width="11" height="12" fill="#d7ccc8" stroke="#5d4037" strokeWidth="0.8" rx="0.5"/>
      <polygon points="78,113 85,107 92,113" fill="#1565c0" stroke="#5d4037" strokeWidth="0.8"/>
      <rect x="84" y="118" width="3" height="4" fill="#5d4037"/>
      <rect x="100" y="108" width="14" height="17" fill="#a1887f" stroke="#5d4037" strokeWidth="0.8" rx="0.5"/>
      <polygon points="98,108 107,100 116,108" fill="#388e3c" stroke="#5d4037" strokeWidth="0.8"/>
      <rect x="104" y="116" width="3" height="5" fill="#5d4037"/>
      <rect x="110" y="115" width="3" height="3" fill="#fff59d"/>
      <rect x="125" y="113" width="11" height="12" fill="#d7ccc8" stroke="#5d4037" strokeWidth="0.8" rx="0.5"/>
      <polygon points="123,113 130,107 137,113" fill="#ef6c00" stroke="#5d4037" strokeWidth="0.8"/>
      <rect x="145" y="110" width="14" height="15" fill="#a1887f" stroke="#5d4037" strokeWidth="0.8" rx="0.5"/>
      <polygon points="143,110 152,102 161,110" fill="#6a1b9a" stroke="#5d4037" strokeWidth="0.8"/>
      <rect x="150" y="117" width="3" height="5" fill="#5d4037"/>
      <rect x="170" y="113" width="11" height="12" fill="#d7ccc8" stroke="#5d4037" strokeWidth="0.8" rx="0.5"/>
      <polygon points="168,113 175,107 182,113" fill="#bf360c" stroke="#5d4037" strokeWidth="0.8"/>
      <ellipse cx="200" cy="118" rx="5" ry="2.5" fill="#90caf9" stroke="#1565c0" strokeWidth="0.5"/>
      <circle cx="200" cy="115" r="1" fill="#fff"/>
      <text x="55" y="138" fontSize="7" fontWeight="bold" fill="#3e2723" fontStyle="italic">~ Bumblewood village, now thimble-sized! ~</text>
      <g transform="translate(208 80) scale(0.7)">
        <path d="M -18 28 Q -20 65 0 65 Q 20 65 18 28 L 10 18 L -10 18 Z" fill="#7e57c2" stroke="#311b92" strokeWidth="1"/>
        <rect x="-18" y="32" width="36" height="4" fill="#ffd54f"/>
        <circle cx="0" cy="5" r="14" fill="#ffe0b2"/>
        <circle cx="-9" cy="-7" r="6" fill="#5d4037"/>
        <circle cx="9" cy="-7" r="6" fill="#5d4037"/>
        <circle cx="0" cy="-12" r="6" fill="#5d4037"/>
        <path d="M -10 -5 L 0 -25 L 10 -5 Z" fill="#7b1fa2" stroke="#311b92" strokeWidth="1"/>
        <ellipse cx="0" cy="-5" rx="11" ry="2" fill="#311b92"/>
        <circle cx="-4" cy="6" r="3" fill="#fff"/>
        <circle cx="4" cy="6" r="3" fill="#fff"/>
        <circle cx="-4" cy="6" r="2" fill="#1a1a1a"/>
        <circle cx="4" cy="6" r="2" fill="#1a1a1a"/>
        <ellipse cx="0" cy="14" rx="2.5" ry="3" fill="#3e2723"/>
        <text x="-14" y="-12" fontSize="13" fontWeight="bold" fill="#bf360c">!?</text>
      </g>
      <g transform="translate(16 82) scale(0.75)">
        <ellipse cx="0" cy="0" rx="12" ry="9" fill="#43a047"/>
        <ellipse cx="-3" cy="2" rx="7" ry="4" fill="#ec407a"/>
        <polygon points="-10,-1 -18,0 -10,2" fill="#fb8c00"/>
        <circle cx="-7" cy="-3" r="2" fill="#fff"/>
        <circle cx="-7" cy="-3" r="1.2" fill="#1a1a1a"/>
        <path d="M 4 -3 Q 10 -8 16 -5" stroke="#1b5e20" strokeWidth="1.8" fill="none"/>
        <line x1="-20" y1="-2" x2="-32" y2="-3" stroke="#43a047" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="-20" y1="2" x2="-32" y2="3" stroke="#43a047" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="-20" y1="6" x2="-32" y2="7" stroke="#43a047" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      </g>
    </svg>
  );
  // Giant mushroom field
  if (sk === "mushroom") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_mush" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b3e5fc"/><stop offset="0.6" stopColor="#dcedc8"/><stop offset="1" stopColor="#aed581"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_mush)"/>
      <ellipse cx="125" cy="60" rx="90" ry="40" fill="#e53935" stroke="#b71c1c" strokeWidth="2"/>
      <ellipse cx="125" cy="55" rx="85" ry="35" fill="#ef5350"/>
      <circle cx="80" cy="55" r="8" fill="#fff"/>
      <circle cx="120" cy="40" r="10" fill="#fff"/>
      <circle cx="160" cy="55" r="9" fill="#fff"/>
      <circle cx="100" cy="70" r="6" fill="#fff"/>
      <circle cx="145" cy="68" r="7" fill="#fff"/>
      <rect x="115" y="90" width="20" height="40" fill="#fff8e1" stroke="#f0e6c8" strokeWidth="1.5"/>
      <ellipse cx="125" cy="130" rx="14" ry="4" fill="#8d6e63" opacity="0.3"/>
      <text x="190" y="120" fontSize="20">🌳</text>
      <text x="15" y="120" fontSize="18">🌲</text>
      <text x="30" y="135" fontSize="14">🌿</text>
      <text x="215" y="135" fontSize="14">🌿</text>
      <g transform="translate(125 30)"><ellipse cx="0" cy="0" rx="9" ry="7" fill="#43a047"/><ellipse cx="-2" cy="2" rx="5" ry="3" fill="#ec407a"/><polygon points="-7,-1 -13,0 -7,2" fill="#fb8c00"/><circle cx="-5" cy="-2" r="1" fill="#1a1a1a"/><path d="M 3 -2 Q 8 -6 12 -3" stroke="#2e7d32" strokeWidth="1.2" fill="none"/><text x="-22" y="-8" fontSize="9" fontWeight="bold" fill="#1b5e20">zip!</text></g>
      <text x="190" y="40" fontSize="20">🦜</text>
      <text x="40" y="50" fontSize="18">🦉</text>
      <text x="195" y="65" fontSize="14">🐝</text>
    </svg>
  );
  // Ant army with crumb and tunnel
  if (sk === "ants") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_ants" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff8e1"/><stop offset="1" stopColor="#d7ccc8"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_ants)"/>
      <path d="M 0 90 Q 125 70 250 90 L 250 140 L 0 140 Z" fill="#8d6e63"/>
      <path d="M 30 110 Q 55 80 80 110 L 80 95 L 30 95 Z" fill="#3e2723"/>
      <ellipse cx="55" cy="92" rx="22" ry="14" fill="#1a1a1a"/>
      <text x="45" y="95" fontSize="14" fill="#ffd54f">✨</text>
      <ellipse cx="180" cy="105" rx="35" ry="20" fill="#d4a574" stroke="#a1887f" strokeWidth="2"/>
      <text x="170" y="110" fontSize="10" fontWeight="bold" fill="#5d4037">CRUMB</text>
      <g transform="translate(110 100)"><ellipse cx="0" cy="0" rx="6" ry="4" fill="#5d4037"/><ellipse cx="-3" cy="-3" rx="3" ry="2.5" fill="#5d4037"/><ellipse cx="-7" cy="-1" rx="2.5" ry="2" fill="#5d4037"/><line x1="-2" y1="-3" x2="-1" y2="-7" stroke="#3e2723" strokeWidth="0.8"/><line x1="0" y1="-3" x2="1" y2="-7" stroke="#3e2723" strokeWidth="0.8"/><polygon points="-2,-5 -2,-8 0,-7" fill="#1a1a1a"/></g>
      <g transform="translate(130 95)"><ellipse cx="0" cy="0" rx="5" ry="3" fill="#5d4037"/><ellipse cx="-3" cy="-2" rx="2.5" ry="2" fill="#5d4037"/></g>
      <g transform="translate(95 110)"><ellipse cx="0" cy="0" rx="5" ry="3" fill="#5d4037"/><ellipse cx="-3" cy="-2" rx="2.5" ry="2" fill="#5d4037"/></g>
      <g transform="translate(150 115)"><ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#5d4037"/></g>
      <text x="15" y="50" fontSize="22">🪔</text>
      <text x="35" y="55" fontSize="14">💡</text>
      <text x="22" y="75" fontSize="14">✨</text>
    </svg>
  );
  // Butterfly meadow with mango tree
  if (sk === "butterfly") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_btf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e1bee7"/><stop offset="0.6" stopColor="#c8e6c9"/><stop offset="1" stopColor="#a5d6a7"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_btf)"/>
      <ellipse cx="200" cy="60" rx="35" ry="40" fill="#388e3c" stroke="#1b5e20" strokeWidth="2"/>
      <rect x="195" y="90" width="10" height="35" fill="#5d4037"/>
      <circle cx="185" cy="55" r="5" fill="#fb8c00"/>
      <circle cx="215" cy="60" r="5" fill="#fb8c00"/>
      <circle cx="200" cy="45" r="4" fill="#fb8c00"/>
      <circle cx="195" cy="75" r="4" fill="#fb8c00"/>
      <circle cx="210" cy="80" r="4" fill="#fb8c00"/>
      <g transform="translate(60 50)"><path d="M 0 0 L -10 -10 L -8 -2 L -12 5 Z" fill="#ce93d8" stroke="#6a1b9a" strokeWidth="1"/><path d="M 0 0 L 10 -10 L 8 -2 L 12 5 Z" fill="#ce93d8" stroke="#6a1b9a" strokeWidth="1"/><ellipse cx="0" cy="0" rx="2" ry="4" fill="#1a1a1a"/><text x="-5" y="-15" fontSize="10">✨</text></g>
      <g transform="translate(35 65)"><circle r="3" fill="#ffd54f" stroke="#f57f17" strokeWidth="0.5"/></g>
      <g transform="translate(85 65)"><circle r="3" fill="#e91e63" stroke="#ad1457" strokeWidth="0.5"/></g>
      <rect x="20" y="105" width="55" height="25" fill="#ef6c00" stroke="#bf360c" strokeWidth="1.5" rx="2"/>
      <text x="25" y="120" fontSize="10" fontWeight="bold" fill="#fff">MARKET</text>
      <text x="28" y="100" fontSize="20">🦔</text>
      <text x="170" y="50" fontSize="14">🦇</text>
      <text x="220" y="48" fontSize="14">🦇</text>
      <g transform="translate(120 100)"><ellipse cx="0" cy="0" rx="9" ry="7" fill="#43a047"/><polygon points="-7,-1 -13,0 -7,2" fill="#fb8c00"/><circle cx="-5" cy="-2" r="1" fill="#1a1a1a"/></g>
    </svg>
  );
  // Lemonade river
  if (sk === "lemonade") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_lem" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff9c4"/><stop offset="0.5" stopColor="#fff176"/><stop offset="1" stopColor="#fdd835"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_lem)"/>
      <path d="M 0 70 Q 125 60 250 75 L 250 140 L 0 140 Z" fill="#ffd54f"/>
      <path d="M 20 80 Q 40 75 60 82" stroke="#fff" strokeWidth="2" fill="none" opacity="0.7"/>
      <path d="M 80 90 Q 100 85 120 92" stroke="#fff" strokeWidth="2" fill="none" opacity="0.7"/>
      <path d="M 140 95 Q 160 90 180 97" stroke="#fff" strokeWidth="2" fill="none" opacity="0.7"/>
      <ellipse cx="200" cy="90" rx="35" ry="6" fill="#8d6e63"/>
      <rect x="167" y="65" width="3" height="25" fill="#5d4037"/>
      <rect x="195" y="65" width="3" height="25" fill="#5d4037"/>
      <rect x="223" y="65" width="3" height="25" fill="#5d4037"/>
      <text x="170" y="58" fontSize="14">🦚</text>
      <text x="195" y="55" fontSize="16">🦚</text>
      <text x="220" y="58" fontSize="14">🦚</text>
      <ellipse cx="80" cy="95" rx="25" ry="8" fill="#66bb6a" stroke="#2e7d32" strokeWidth="1.5"/>
      <ellipse cx="80" cy="93" rx="18" ry="5" fill="#a5d6a7"/>
      <g transform="translate(85 87)"><ellipse cx="0" cy="0" rx="6" ry="4" fill="#6d4c41"/><circle cx="-4" cy="-2" r="3" fill="#6d4c41"/><circle cx="-5" cy="-3" r="0.8" fill="#1a1a1a"/></g>
      <text x="105" y="78" fontSize="10">🎵</text>
      <text x="30" y="30" fontSize="22">☀️</text>
      <text x="60" y="40" fontSize="14">☁️</text>
      <text x="130" y="35" fontSize="14">☁️</text>
    </svg>
  );
  // Beehive
  if (sk === "beehive") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_bee" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff9c4"/><stop offset="1" stopColor="#fff176"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_bee)"/>
      <path d="M 95 30 Q 75 50 75 80 Q 75 110 125 115 Q 175 110 175 80 Q 175 50 155 30 Z" fill="#ffa726" stroke="#e65100" strokeWidth="2"/>
      <ellipse cx="125" cy="45" rx="40" ry="6" fill="#fb8c00"/>
      <ellipse cx="125" cy="60" rx="45" ry="6" fill="#fb8c00"/>
      <ellipse cx="125" cy="75" rx="47" ry="6" fill="#fb8c00"/>
      <ellipse cx="125" cy="90" rx="45" ry="6" fill="#fb8c00"/>
      <ellipse cx="125" cy="105" rx="35" ry="6" fill="#fb8c00"/>
      <circle cx="125" cy="75" r="10" fill="#1a1a1a"/>
      <text x="190" y="60" fontSize="14">🐝</text>
      <text x="35" y="55" fontSize="14">🐝</text>
      <text x="210" y="100" fontSize="12">🐝</text>
      <text x="30" y="105" fontSize="12">🐝</text>
      <text x="115" y="25" fontSize="20">👑</text>
      <g transform="translate(225 35)"><circle r="6" fill="#fdd835" stroke="#f57f17" strokeWidth="1"/><path d="M -4 -2 Q -2 -5 0 -2 Q 2 -5 4 -2 Q 2 1 0 -2 Q -2 1 -4 -2" fill="#ef6c00"/></g>
      <g transform="translate(25 30)"><circle r="6" fill="#fdd835" stroke="#f57f17" strokeWidth="1"/><path d="M -4 -2 Q -2 -5 0 -2 Q 2 -5 4 -2 Q 2 1 0 -2 Q -2 1 -4 -2" fill="#ef6c00"/></g>
      <text x="40" y="125" fontSize="9" fontWeight="bold" fill="#bf360c" fontStyle="italic">— Mini jalebis baking! 🍯 —</text>
    </svg>
  );
  // Owl in tree
  if (sk === "owl") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_owl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1a237e"/><stop offset="1" stopColor="#3949ab"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_owl)"/>
      <circle cx="200" cy="35" r="18" fill="#fff59d" opacity="0.9"/>
      <circle cx="195" cy="32" r="3" fill="#fff" opacity="0.5"/>
      <text x="40" y="35" fontSize="10" fill="#fff">⭐</text>
      <text x="80" y="50" fontSize="8" fill="#fff">✨</text>
      <text x="160" y="80" fontSize="9" fill="#fff">✨</text>
      <text x="60" y="100" fontSize="10" fill="#fff">⭐</text>
      <rect x="80" y="60" width="90" height="80" fill="#5d4037" stroke="#3e2723" strokeWidth="2"/>
      <ellipse cx="125" cy="60" rx="55" ry="20" fill="#5d4037" stroke="#3e2723" strokeWidth="2"/>
      <ellipse cx="125" cy="100" rx="35" ry="32" fill="#1a1a1a"/>
      <g transform="translate(125 95)"><ellipse cx="0" cy="5" rx="22" ry="24" fill="#795548"/><polygon points="-15,-15 -11,-5 -19,-8" fill="#5d4037"/><polygon points="15,-15 11,-5 19,-8" fill="#5d4037"/><circle cx="-9" cy="-2" r="9" fill="#ffd54f"/><circle cx="9" cy="-2" r="9" fill="#ffd54f"/><circle cx="-9" cy="-2" r="5" fill="#fff"/><circle cx="9" cy="-2" r="5" fill="#fff"/><circle cx="-9" cy="-2" r="2.5" fill="#1a1a1a"/><circle cx="9" cy="-2" r="2.5" fill="#1a1a1a"/><polygon points="-3,8 3,8 0,15" fill="#ef6c00"/></g>
      <rect x="145" y="115" width="20" height="15" fill="#ffd54f" stroke="#5d4037" strokeWidth="1"/>
      <line x1="148" y1="120" x2="162" y2="120" stroke="#5d4037" strokeWidth="0.7"/>
      <line x1="148" y1="124" x2="162" y2="124" stroke="#5d4037" strokeWidth="0.7"/>
    </svg>
  );
  // Piku parrot
  if (sk === "piku") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_pik" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b2dfdb"/><stop offset="1" stopColor="#80cbc4"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_pik)"/>
      <rect x="50" y="50" width="12" height="90" fill="#5d4037"/>
      <ellipse cx="80" cy="60" rx="40" ry="25" fill="#2e7d32" stroke="#1b5e20" strokeWidth="2"/>
      <ellipse cx="170" cy="50" rx="45" ry="28" fill="#388e3c" stroke="#1b5e20" strokeWidth="2"/>
      <path d="M 55 50 Q 90 30 130 35" stroke="#5d4037" strokeWidth="3" fill="none"/>
      <path d="M 130 35 Q 170 30 210 40" stroke="#5d4037" strokeWidth="3" fill="none"/>
      <g transform="translate(140 55)"><ellipse cx="0" cy="0" rx="20" ry="25" fill="#43a047" stroke="#1b5e20" strokeWidth="1.5"/><ellipse cx="-2" cy="6" rx="12" ry="16" fill="#ffd54f"/><circle cx="0" cy="-20" r="14" fill="#43a047" stroke="#1b5e20" strokeWidth="1.5"/><polygon points="0,-15 -12,-12 0,-9" fill="#e65100" stroke="#bf360c" strokeWidth="1"/><circle cx="3" cy="-22" r="2.5" fill="#1a1a1a"/><circle cx="4" cy="-23" r="0.8" fill="#fff"/><path d="M 20 -10 Q 30 -25 36 -10" stroke="#43a047" strokeWidth="4" fill="none"/></g>
      <g transform="translate(115 80) rotate(15)"><rect x="-4" y="0" width="3" height="12" fill="#ffd54f" stroke="#f57f17" strokeWidth="1"/><circle cx="-3" cy="12" r="3" fill="#ffd54f" stroke="#f57f17" strokeWidth="1"/></g>
      <text x="190" y="20" fontSize="14">🎵</text>
      <text x="210" y="38" fontSize="12">🎵</text>
      <text x="220" y="62" fontSize="10">🎵</text>
      <text x="20" y="125" fontSize="20">🌿</text>
      <text x="220" y="125" fontSize="18">🌿</text>
    </svg>
  );
  // Teamwork crumb
  if (sk === "teamwork") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_tw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff8e1"/><stop offset="1" stopColor="#ffd54f"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_tw)"/>
      <path d="M 0 100 L 250 100 L 250 140 L 0 140 Z" fill="#a1887f"/>
      <ellipse cx="125" cy="65" rx="60" ry="40" fill="#d4a574" stroke="#a1887f" strokeWidth="2"/>
      <ellipse cx="115" cy="55" rx="45" ry="28" fill="#e0c39a"/>
      <text x="105" y="70" fontSize="16" fontWeight="bold" fill="#5d4037">CRUMB!</text>
      <g transform="translate(60 110)"><ellipse cx="0" cy="0" rx="7" ry="5" fill="#5d4037"/><ellipse cx="-4" cy="-3" rx="3" ry="2.5" fill="#5d4037"/><polygon points="-2,-5 -2,-9 0,-8" fill="#1a1a1a"/></g>
      <g transform="translate(80 113)"><ellipse cx="0" cy="0" rx="6" ry="4" fill="#5d4037"/><ellipse cx="-3" cy="-2" rx="2.5" ry="2" fill="#5d4037"/></g>
      <g transform="translate(200 115)"><ellipse cx="0" cy="0" rx="6" ry="4" fill="#5d4037"/><ellipse cx="3" cy="-2" rx="2.5" ry="2" fill="#5d4037"/></g>
      <g transform="translate(180 113)"><ellipse cx="0" cy="0" rx="7" ry="5" fill="#5d4037"/><ellipse cx="4" cy="-3" rx="3" ry="2.5" fill="#5d4037"/></g>
      <g transform="translate(130 110)"><ellipse cx="0" cy="0" rx="6" ry="4" fill="#5d4037"/></g>
      <text x="100" y="35" fontSize="14">💪</text>
      <text x="155" y="35" fontSize="14">💪</text>
      <text x="35" y="95" fontSize="11" fontWeight="bold" fill="#bf360c">HEAVE!</text>
      <text x="195" y="95" fontSize="11" fontWeight="bold" fill="#bf360c">HO!</text>
    </svg>
  );
  // Crystal tunnel
  if (sk === "tunnel") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><radialGradient id="g_tun" cx="0.5" cy="0.5"><stop offset="0" stopColor="#ce93d8"/><stop offset="1" stopColor="#4a148c"/></radialGradient></defs>
      <rect width="250" height="140" fill="url(#g_tun)"/>
      <ellipse cx="125" cy="70" rx="100" ry="55" fill="#311b92" opacity="0.6"/>
      <ellipse cx="125" cy="70" rx="80" ry="45" fill="#1a237e" opacity="0.5"/>
      <polygon points="40,30 50,50 30,55" fill="#e1bee7" stroke="#9c27b0" strokeWidth="1"/>
      <polygon points="200,40 215,60 195,65" fill="#e1bee7" stroke="#9c27b0" strokeWidth="1"/>
      <polygon points="20,90 35,110 15,115" fill="#ce93d8" stroke="#9c27b0" strokeWidth="1"/>
      <polygon points="220,100 235,120 215,125" fill="#ce93d8" stroke="#9c27b0" strokeWidth="1"/>
      <ellipse cx="125" cy="115" rx="40" ry="12" fill="#80deea" stroke="#00838f" strokeWidth="1.5"/>
      <ellipse cx="125" cy="113" rx="35" ry="8" fill="#b2ebf2"/>
      <text x="95" y="118" fontSize="14">🗺️</text>
      <text x="60" y="40" fontSize="14">✨</text>
      <text x="170" y="50" fontSize="14">💎</text>
      <text x="40" y="80" fontSize="12">💫</text>
      <text x="180" y="85" fontSize="12">✨</text>
      <text x="110" y="60" fontSize="14">⭐</text>
    </svg>
  );
  // Firefly Diwali festival
  if (sk === "firefly_fest") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_ff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1a237e"/><stop offset="1" stopColor="#311b92"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_ff)"/>
      <path d="M 0 100 L 250 100 L 250 140 L 0 140 Z" fill="#3e2723"/>
      <g transform="translate(40 95)"><ellipse cx="0" cy="0" rx="12" ry="6" fill="#c62828" stroke="#b71c1c" strokeWidth="1"/><ellipse cx="0" cy="-3" rx="10" ry="4" fill="#ef5350"/><path d="M -3 -8 Q 0 -16 3 -8" fill="#ffd54f" stroke="#ef6c00" strokeWidth="0.5"/><circle cx="0" cy="-13" r="4" fill="#fff9c4" opacity="0.7"/></g>
      <g transform="translate(80 95)"><ellipse cx="0" cy="0" rx="12" ry="6" fill="#c62828" stroke="#b71c1c" strokeWidth="1"/><ellipse cx="0" cy="-3" rx="10" ry="4" fill="#ef5350"/><path d="M -3 -8 Q 0 -16 3 -8" fill="#ffd54f" stroke="#ef6c00" strokeWidth="0.5"/><circle cx="0" cy="-13" r="4" fill="#fff9c4" opacity="0.7"/></g>
      <g transform="translate(125 95)"><ellipse cx="0" cy="0" rx="14" ry="7" fill="#c62828" stroke="#b71c1c" strokeWidth="1"/><ellipse cx="0" cy="-3" rx="12" ry="5" fill="#ef5350"/><path d="M -4 -9 Q 0 -19 4 -9" fill="#ffd54f" stroke="#ef6c00" strokeWidth="0.5"/><circle cx="0" cy="-16" r="5" fill="#fff9c4" opacity="0.8"/></g>
      <g transform="translate(170 95)"><ellipse cx="0" cy="0" rx="12" ry="6" fill="#c62828" stroke="#b71c1c" strokeWidth="1"/><ellipse cx="0" cy="-3" rx="10" ry="4" fill="#ef5350"/><path d="M -3 -8 Q 0 -16 3 -8" fill="#ffd54f" stroke="#ef6c00" strokeWidth="0.5"/><circle cx="0" cy="-13" r="4" fill="#fff9c4" opacity="0.7"/></g>
      <g transform="translate(210 95)"><ellipse cx="0" cy="0" rx="12" ry="6" fill="#c62828" stroke="#b71c1c" strokeWidth="1"/><ellipse cx="0" cy="-3" rx="10" ry="4" fill="#ef5350"/><path d="M -3 -8 Q 0 -16 3 -8" fill="#ffd54f" stroke="#ef6c00" strokeWidth="0.5"/><circle cx="0" cy="-13" r="4" fill="#fff9c4" opacity="0.7"/></g>
      <circle cx="60" cy="40" r="3" fill="#fff59d"/>
      <circle cx="100" cy="30" r="3" fill="#ffd54f"/>
      <circle cx="150" cy="35" r="3" fill="#fff59d"/>
      <circle cx="190" cy="45" r="3" fill="#ffd54f"/>
      <circle cx="30" cy="55" r="2" fill="#fff59d"/>
      <circle cx="220" cy="25" r="2" fill="#ffd54f"/>
      <text x="130" y="20" fontSize="11" fontWeight="bold" fill="#ffd54f">✨ Diwali in Bumblewood ✨</text>
    </svg>
  );
  // Hula's market with map
  if (sk === "map_buy") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_map" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff8e1"/><stop offset="1" stopColor="#ffe082"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_map)"/>
      <rect x="60" y="60" width="130" height="70" fill="#ef6c00" stroke="#bf360c" strokeWidth="2" rx="3"/>
      <rect x="60" y="55" width="130" height="10" fill="#bf360c"/>
      <text x="85" y="63" fontSize="9" fontWeight="bold" fill="#fff">HULA'S MARKET</text>
      <rect x="70" y="75" width="50" height="45" fill="#fff9c4" stroke="#5d4037" strokeWidth="1.5"/>
      <path d="M 75 85 Q 85 88 95 82" stroke="#5d4037" strokeWidth="0.8" fill="none"/>
      <path d="M 80 95 Q 95 100 110 95" stroke="#5d4037" strokeWidth="0.8" fill="none"/>
      <text x="78" y="103" fontSize="9">🍪</text>
      <text x="98" y="103" fontSize="9">🌸</text>
      <text x="85" y="115" fontSize="9">🍯</text>
      <text x="105" y="115" fontSize="9">⭐</text>
      <rect x="130" y="80" width="50" height="40" fill="#fff" stroke="#bf360c" strokeWidth="1" rx="2"/>
      <text x="138" y="92" fontSize="8" fontWeight="bold" fill="#bf360c">MAP</text>
      <text x="140" y="105" fontSize="9">🍪→🌸</text>
      <text x="140" y="116" fontSize="9">→🌟</text>
      <g transform="translate(35 105)"><ellipse cx="0" cy="0" rx="14" ry="10" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5"/><polygon points="-10,-5 -7,-13 -4,-5" fill="#5d4037"/><polygon points="-3,-8 0,-15 3,-8" fill="#5d4037"/><polygon points="4,-8 7,-15 10,-8" fill="#5d4037"/><polygon points="-12,-2 -9,-8 -6,-2" fill="#5d4037"/><polygon points="6,-2 9,-8 12,-2" fill="#5d4037"/><circle cx="8" cy="0" r="4" fill="#ffccbc"/><circle cx="9" cy="-1" r="1" fill="#1a1a1a"/></g>
      <text x="200" y="55" fontSize="16">💛</text>
      <text x="215" y="70" fontSize="12">✨</text>
    </svg>
  );
  // Mango tree with Captain Bablu
  if (sk === "mango_tree") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_mt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff9c4"/><stop offset="1" stopColor="#c8e6c9"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_mt)"/>
      <rect x="115" y="80" width="20" height="60" fill="#5d4037"/>
      <ellipse cx="125" cy="60" rx="80" ry="50" fill="#2e7d32" stroke="#1b5e20" strokeWidth="2"/>
      <ellipse cx="100" cy="50" rx="35" ry="25" fill="#388e3c"/>
      <ellipse cx="150" cy="55" rx="40" ry="28" fill="#388e3c"/>
      <ellipse cx="60" cy="65" r="8" fill="#ff9800" stroke="#e65100" strokeWidth="1"/>
      <ellipse cx="90" cy="80" r="9" fill="#ffb74d" stroke="#e65100" strokeWidth="1"/>
      <ellipse cx="125" cy="40" r="8" fill="#ff9800" stroke="#e65100" strokeWidth="1"/>
      <ellipse cx="160" cy="70" r="9" fill="#ffb74d" stroke="#e65100" strokeWidth="1"/>
      <ellipse cx="190" cy="60" r="8" fill="#ff9800" stroke="#e65100" strokeWidth="1"/>
      <ellipse cx="180" cy="85" r="7" fill="#ffb74d" stroke="#e65100" strokeWidth="1"/>
      <ellipse cx="70" cy="85" r="7" fill="#ff9800" stroke="#e65100" strokeWidth="1"/>
      <g transform="translate(40 50)"><path d="M 0 0 Q -10 -8 -15 0 Q -12 5 -8 3" fill="#5d4037"/><path d="M 0 0 Q 10 -8 15 0 Q 12 5 8 3" fill="#5d4037"/><ellipse cx="0" cy="2" rx="5" ry="6" fill="#6d4c41"/><circle cx="-2" cy="0" r="1.5" fill="#fff"/><circle cx="2" cy="0" r="1.5" fill="#fff"/></g>
      <g transform="translate(210 50)"><path d="M 0 0 Q -10 -8 -15 0 Q -12 5 -8 3" fill="#5d4037"/><path d="M 0 0 Q 10 -8 15 0 Q 12 5 8 3" fill="#5d4037"/><ellipse cx="0" cy="2" rx="5" ry="6" fill="#6d4c41"/><path d="M -3 5 L 3 5" stroke="#c62828" strokeWidth="2"/></g>
      <text x="35" y="125" fontSize="16">🌿</text>
      <text x="200" y="125" fontSize="16">🌿</text>
    </svg>
  );
  // Cookies and cricket bat
  if (sk === "cookie_chat") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_cc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff8e1"/><stop offset="1" stopColor="#ffcc80"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_cc)"/>
      <ellipse cx="125" cy="100" rx="100" ry="15" fill="#a1887f" opacity="0.4"/>
      <circle cx="65" cy="85" r="22" fill="#8d6e63" stroke="#5d4037" strokeWidth="2"/>
      <circle cx="60" cy="82" r="2" fill="#3e2723"/>
      <circle cx="70" cy="80" r="2" fill="#3e2723"/>
      <circle cx="63" cy="90" r="2" fill="#3e2723"/>
      <circle cx="72" cy="92" r="2" fill="#3e2723"/>
      <circle cx="100" cy="92" r="20" fill="#8d6e63" stroke="#5d4037" strokeWidth="2"/>
      <circle cx="96" cy="89" r="2" fill="#3e2723"/>
      <circle cx="105" cy="92" r="2" fill="#3e2723"/>
      <circle cx="100" cy="97" r="2" fill="#3e2723"/>
      <text x="50" y="50" fontSize="11" fontWeight="bold" fill="#5d4037">YUMMY COOKIES!</text>
      <g transform="translate(170 75) rotate(35)"><rect x="-3" y="-30" width="6" height="35" fill="#5d4037"/><rect x="-8" y="-5" width="16" height="30" fill="#a1887f" stroke="#5d4037" strokeWidth="1.5"/></g>
      <text x="195" y="40" fontSize="18">🦗</text>
      <text x="210" y="58" fontSize="14">🏆</text>
      <text x="180" y="115" fontSize="9" fontWeight="bold" fill="#bf360c">Match time!</text>
    </svg>
  );
  // Otto rowing river boat
  if (sk === "river_boat") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_rb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff9c4"/><stop offset="0.5" stopColor="#fff176"/><stop offset="1" stopColor="#fdd835"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_rb)"/>
      <path d="M 0 80 Q 125 70 250 80 L 250 140 L 0 140 Z" fill="#ffd54f"/>
      <path d="M 30 95 Q 55 90 80 96" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <path d="M 150 100 Q 175 95 200 101" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <ellipse cx="125" cy="105" rx="55" ry="15" fill="#66bb6a" stroke="#2e7d32" strokeWidth="2"/>
      <ellipse cx="125" cy="100" rx="45" ry="10" fill="#a5d6a7"/>
      <g transform="translate(125 92)"><ellipse cx="0" cy="0" rx="10" ry="7" fill="#6d4c41" stroke="#4e342e" strokeWidth="1.5"/><circle cx="-7" cy="-5" r="4" fill="#6d4c41"/><circle cx="-9" cy="-7" r="2" fill="#6d4c41"/><circle cx="-9" cy="-5" r="0.8" fill="#1a1a1a"/><line x1="-5" y1="-3" x2="-12" y2="-4" stroke="#1a1a1a" strokeWidth="0.4"/><line x1="-5" y1="-1" x2="-12" y2="-1" stroke="#1a1a1a" strokeWidth="0.4"/><path d="M 8 -3 Q 18 0 22 8" stroke="#5d4037" strokeWidth="2.5" fill="none" strokeLinecap="round"/><rect x="20" y="5" width="6" height="3" fill="#8d6e63" rx="1"/></g>
      <text x="105" y="80" fontSize="11">🎵</text>
      <ellipse cx="210" cy="50" rx="22" ry="10" fill="#ffa726" stroke="#ef6c00" strokeWidth="1.5"/>
      <text x="195" y="45" fontSize="9" fontWeight="bold" fill="#bf360c">HONEY IS.</text>
      <text x="30" y="35" fontSize="20">☀️</text>
    </svg>
  );
  // Rapids with Goldie
  if (sk === "rapids") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_rap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#80deea"/><stop offset="1" stopColor="#0277bd"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_rap)"/>
      <path d="M 0 50 Q 30 30 60 50 Q 90 70 125 50 Q 160 30 190 50 Q 220 70 250 50 L 250 140 L 0 140 Z" fill="#0288d1"/>
      <path d="M 0 70 Q 30 50 60 70 Q 90 90 125 70 Q 160 50 190 70 Q 220 90 250 70" stroke="#fff" strokeWidth="3" fill="none" opacity="0.6"/>
      <path d="M 0 90 Q 30 80 60 90 Q 90 100 125 90" stroke="#fff" strokeWidth="2" fill="none" opacity="0.5"/>
      <path d="M 130 100 Q 165 90 195 100 Q 220 110 250 100" stroke="#fff" strokeWidth="2" fill="none" opacity="0.5"/>
      <text x="40" y="35" fontSize="14">💦</text>
      <text x="100" y="30" fontSize="14">💦</text>
      <text x="170" y="35" fontSize="14">💦</text>
      <text x="220" y="30" fontSize="14">💦</text>
      <g transform="translate(195 95)"><ellipse cx="0" cy="0" rx="18" ry="11" fill="#ffa726" stroke="#e65100" strokeWidth="2"/><polygon points="-15,0 -22,-7 -22,7" fill="#ff9800"/><circle cx="5" cy="-3" r="4" fill="none" stroke="#5d4037" strokeWidth="1.5"/><circle cx="5" cy="-3" r="1.5" fill="#1a1a1a"/><path d="M 8 3 Q 12 5 14 3" stroke="#5d4037" strokeWidth="0.8" fill="none"/></g>
    </svg>
  );
  // Peacock pier
  if (sk === "peacock_pier") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_pp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ce93d8"/><stop offset="1" stopColor="#9575cd"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_pp)"/>
      <ellipse cx="125" cy="115" rx="120" ry="10" fill="#8d6e63"/>
      <rect x="40" y="105" width="170" height="6" fill="#a1887f"/>
      <g transform="translate(70 75)"><path d="M 0 30 Q -25 15 -28 -5 Q -20 0 -15 10 Q -20 -10 -10 -15 Q -5 -5 -3 5 Q -3 -15 0 -22 Q 3 -15 3 5 Q 5 -5 10 -15 Q 20 -10 15 10 Q 20 0 28 -5 Q 25 15 0 30 Z" fill="#00897b" stroke="#004d40" strokeWidth="0.5"/><circle cx="-15" cy="-5" r="2.5" fill="#0d47a1"/><circle cx="0" cy="-18" r="2.5" fill="#0d47a1"/><circle cx="15" cy="-5" r="2.5" fill="#0d47a1"/><circle cx="-15" cy="-5" r="1" fill="#ffd54f"/><circle cx="0" cy="-18" r="1" fill="#ffd54f"/><circle cx="15" cy="-5" r="1" fill="#ffd54f"/><ellipse cx="0" cy="32" rx="9" ry="8" fill="#0277bd"/><circle cx="0" cy="22" r="6" fill="#01579b"/><polygon points="0,25 -2,28 2,28" fill="#fb8c00"/></g>
      <g transform="translate(125 65)"><path d="M 0 35 Q -30 18 -34 -8 Q -24 0 -18 12 Q -25 -12 -12 -17 Q -6 -6 -4 6 Q -4 -18 0 -26 Q 4 -18 4 6 Q 6 -6 12 -17 Q 25 -12 18 12 Q 24 0 34 -8 Q 30 18 0 35 Z" fill="#00897b" stroke="#004d40" strokeWidth="0.5"/><circle cx="-18" cy="-8" r="3" fill="#0d47a1"/><circle cx="0" cy="-22" r="3" fill="#0d47a1"/><circle cx="18" cy="-8" r="3" fill="#0d47a1"/><circle cx="-18" cy="-8" r="1.3" fill="#ffd54f"/><circle cx="0" cy="-22" r="1.3" fill="#ffd54f"/><circle cx="18" cy="-8" r="1.3" fill="#ffd54f"/><ellipse cx="0" cy="37" rx="11" ry="9" fill="#0277bd"/><circle cx="0" cy="25" r="7" fill="#01579b"/><polygon points="0,28 -2,31 2,31" fill="#fb8c00"/></g>
      <g transform="translate(180 75)"><path d="M 0 30 Q -25 15 -28 -5 Q -20 0 -15 10 Q -20 -10 -10 -15 Q -5 -5 -3 5 Q -3 -15 0 -22 Q 3 -15 3 5 Q 5 -5 10 -15 Q 20 -10 15 10 Q 20 0 28 -5 Q 25 15 0 30 Z" fill="#00897b" stroke="#004d40" strokeWidth="0.5"/><circle cx="-15" cy="-5" r="2.5" fill="#0d47a1"/><circle cx="0" cy="-18" r="2.5" fill="#0d47a1"/><circle cx="15" cy="-5" r="2.5" fill="#0d47a1"/><circle cx="-15" cy="-5" r="1" fill="#ffd54f"/><circle cx="0" cy="-18" r="1" fill="#ffd54f"/><circle cx="15" cy="-5" r="1" fill="#ffd54f"/><ellipse cx="0" cy="32" rx="9" ry="8" fill="#0277bd"/><circle cx="0" cy="22" r="6" fill="#01579b"/><polygon points="0,25 -2,28 2,28" fill="#fb8c00"/></g>
      <text x="30" y="35" fontSize="14">✨</text>
      <text x="210" y="40" fontSize="14">✨</text>
      <text x="80" y="135" fontSize="9" fontWeight="bold" fill="#fff" fontStyle="italic">💃 Bollywood dance time! 💃</text>
    </svg>
  );
  // Dadi Tinku's hollow
  if (sk === "dadi_tortoise") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><radialGradient id="g_dt" cx="0.5" cy="0.6"><stop offset="0" stopColor="#fff8e1"/><stop offset="1" stopColor="#ffcc80"/></radialGradient></defs>
      <rect width="250" height="140" fill="url(#g_dt)"/>
      <path d="M 30 130 Q 30 50 125 30 Q 220 50 220 130 Z" fill="#5d4037" stroke="#3e2723" strokeWidth="2"/>
      <ellipse cx="125" cy="60" rx="80" ry="30" fill="#6d4c41"/>
      <path d="M 50 130 Q 50 65 125 50 Q 200 65 200 130 Z" fill="#fff8e1"/>
      <rect x="60" y="80" width="40" height="20" fill="#bf360c" stroke="#8b0000" strokeWidth="1" rx="1"/>
      <line x1="60" y1="88" x2="100" y2="88" stroke="#fff" strokeWidth="0.5"/>
      <text x="68" y="95" fontSize="6" fill="#fff" fontWeight="bold">BOOKS</text>
      <circle cx="160" cy="90" r="10" fill="#ef6c00" stroke="#bf360c" strokeWidth="1"/>
      <text x="155" y="93" fontSize="10">🍡</text>
      <g transform="translate(125 110)"><ellipse cx="0" cy="0" rx="30" ry="18" fill="#5d4037" stroke="#3e2723" strokeWidth="1.5"/><circle cx="-12" cy="-2" r="4" fill="#8d6e63"/><circle cx="0" cy="-6" r="4" fill="#8d6e63"/><circle cx="12" cy="-2" r="4" fill="#8d6e63"/><circle cx="-8" cy="6" r="3.5" fill="#8d6e63"/><circle cx="8" cy="6" r="3.5" fill="#8d6e63"/><circle cx="22" cy="0" r="9" fill="#7cb342" stroke="#558b2f" strokeWidth="1"/><circle cx="25" cy="-2" r="3" fill="none" stroke="#1a1a1a" strokeWidth="0.8"/><circle cx="25" cy="-2" r="1" fill="#1a1a1a"/><path d="M 22 2 Q 25 4 28 2" stroke="#1a1a1a" strokeWidth="0.7" fill="none"/></g>
      <text x="100" y="135" fontSize="9" fontWeight="bold" fill="#bf360c" fontStyle="italic">"Beta, have a laddoo!"</text>
    </svg>
  );
  // Cricket match
  if (sk === "cricket_match") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_ck" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#aed581"/><stop offset="1" stopColor="#558b2f"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_ck)"/>
      <ellipse cx="125" cy="100" rx="115" ry="20" fill="#7cb342" opacity="0.7"/>
      <rect x="120" y="65" width="3" height="35" fill="#8d6e63"/>
      <rect x="127" y="65" width="3" height="35" fill="#8d6e63"/>
      <rect x="134" y="65" width="3" height="35" fill="#8d6e63"/>
      <line x1="118" y1="65" x2="139" y2="65" stroke="#5d4037" strokeWidth="2"/>
      <g transform="translate(40 80) rotate(-30)"><rect x="-3" y="-30" width="6" height="35" fill="#5d4037"/><rect x="-8" y="-5" width="16" height="28" fill="#d7ccc8" stroke="#5d4037" strokeWidth="1.5"/></g>
      <circle cx="200" cy="75" r="6" fill="#bf360c" stroke="#8b0000" strokeWidth="1"/>
      <path d="M 197 72 Q 200 70 203 72" stroke="#fff" strokeWidth="0.5" fill="none"/>
      <g transform="translate(60 95)"><ellipse cx="0" cy="0" rx="10" ry="13" fill="#9e9e9e"/><circle cx="0" cy="-12" r="9" fill="#9e9e9e"/><circle cx="-5" cy="-18" r="3" fill="#9e9e9e"/><circle cx="5" cy="-18" r="3" fill="#9e9e9e"/><rect x="-8" y="-25" width="16" height="10" fill="#1a1a1a"/><circle cx="-3" cy="-12" r="1" fill="#1a1a1a"/><circle cx="3" cy="-12" r="1" fill="#1a1a1a"/></g>
      <text x="170" y="50" fontSize="20">🏆</text>
      <text x="100" y="40" fontSize="14" fontWeight="bold" fill="#bf360c">SIX!</text>
      <text x="220" y="55" fontSize="18">🦗</text>
    </svg>
  );
  // Spell garden entrance
  if (sk === "spell_garden_gate" || sk === "spell_garden_secret" || sk === "spell_garden_river" || sk === "spell_garden_grand") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs><linearGradient id="g_sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f8bbd0"/><stop offset="1" stopColor="#ce93d8"/></linearGradient></defs>
      <rect width="250" height="140" fill="url(#g_sg)"/>
      <path d="M 80 130 L 80 50 Q 80 30 125 25 Q 170 30 170 50 L 170 130" fill="#8d6e63" stroke="#5d4037" strokeWidth="2"/>
      <ellipse cx="125" cy="37" rx="48" ry="14" fill="#a1887f" stroke="#5d4037" strokeWidth="1.5"/>
      <rect x="105" y="60" width="40" height="70" fill="#3e2723"/>
      <text x="113" y="85" fontSize="20">🌸</text>
      <text x="113" y="105" fontSize="20">🌺</text>
      <text x="35" y="80" fontSize="22">🌷</text>
      <text x="195" y="80" fontSize="22">🌹</text>
      <text x="20" y="125" fontSize="20">🌿</text>
      <text x="215" y="125" fontSize="20">🌿</text>
      <text x="120" y="55" fontSize="16">✨</text>
      <text x="60" y="50" fontSize="14">⭐</text>
      <text x="180" y="55" fontSize="14">⭐</text>
      <text x="40" y="30" fontSize="12">💫</text>
      <text x="200" y="35" fontSize="12">💫</text>
      <text x="115" y="20" fontSize="9" fontWeight="bold" fill="#6a1b9a" fontStyle="italic">~ Spell Garden ~</text>
    </svg>
  );
  // Spell cast - climactic
  if (sk === "spell_cast") return (
    <svg viewBox="0 0 250 140" style={sceneFrame}>
      <defs>
        <radialGradient id="sc_glow" cx="0.5" cy="0.5"><stop offset="0" stopColor="#fff59d"/><stop offset="0.3" stopColor="#ffd54f"/><stop offset="0.7" stopColor="#fb8c00" stopOpacity="0.6"/><stop offset="1" stopColor="#4a148c" stopOpacity="0.3"/></radialGradient>
        <linearGradient id="sc_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#311b92"/><stop offset="0.5" stopColor="#7b1fa2"/><stop offset="1" stopColor="#ce93d8"/></linearGradient>
        <radialGradient id="sc_star" cx="0.5" cy="0.5"><stop offset="0" stopColor="#fff"/><stop offset="0.4" stopColor="#fff59d"/><stop offset="1" stopColor="#ff9800"/></radialGradient>
        <filter id="sc_glowf"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="250" height="140" fill="url(#sc_bg)"/>
      <circle cx="125" cy="70" r="70" fill="url(#sc_glow)"/>
      <circle cx="125" cy="70" r="45" fill="#fff" opacity="0.4"/>
      <circle cx="125" cy="70" r="25" fill="#fff" opacity="0.7"/>
      <g filter="url(#sc_glowf)" transform="translate(125 70)">
        <path d="M 0 -30 L 7 -10 L 28 -10 L 11 4 L 18 24 L 0 12 L -18 24 L -11 4 L -28 -10 L -7 -10 Z" fill="url(#sc_star)" stroke="#ff9800" strokeWidth="2"/>
        <circle r="6" fill="#fff"/>
        <circle r="3" fill="#fff59d"/>
      </g>
      <g>
        <circle cx="30" cy="35" r="2.5" fill="#fff59d"/>
        <circle cx="220" cy="40" r="3" fill="#fff59d"/>
        <circle cx="40" cy="100" r="2" fill="#fff59d"/>
        <circle cx="215" cy="105" r="2.5" fill="#fff59d"/>
        <circle cx="60" cy="20" r="1.5" fill="#fff"/>
        <circle cx="195" cy="20" r="1.5" fill="#fff"/>
        <circle cx="100" cy="15" r="1.5" fill="#fff"/>
        <circle cx="150" cy="15" r="1.5" fill="#fff"/>
        <path d="M 22 50 L 25 47 L 28 50 L 25 53 Z" fill="#fff59d"/>
        <path d="M 222 80 L 225 77 L 228 80 L 225 83 Z" fill="#ffd54f"/>
        <path d="M 50 75 L 53 72 L 56 75 L 53 78 Z" fill="#fff59d"/>
        <path d="M 200 60 L 203 57 L 206 60 L 203 63 Z" fill="#ffd54f"/>
      </g>
      <g transform="translate(75 90)" opacity="0.95">
        <ellipse cx="0" cy="0" rx="13" ry="10" fill="#43a047"/>
        <ellipse cx="-3" cy="2" rx="8" ry="5" fill="#ec407a"/>
        <polygon points="-11,-1 -20,0 -11,2" fill="#fb8c00"/>
        <circle cx="-8" cy="-3" r="2" fill="#fff"/>
        <circle cx="-8" cy="-3" r="1.2" fill="#1a1a1a"/>
        <path d="M 5 -3 Q 12 -8 18 -5" stroke="#1b5e20" strokeWidth="1.8" fill="none"/>
      </g>
      <g transform="translate(125 105)">
        <path d="M -16 25 Q -18 50 0 50 Q 18 50 16 25 L 10 15 L -10 15 Z" fill="#7e57c2" stroke="#311b92" strokeWidth="1.2"/>
        <rect x="-16" y="28" width="32" height="4" fill="#ffd54f"/>
        <circle cx="0" cy="3" r="13" fill="#ffe0b2"/>
        <circle cx="-8" cy="-9" r="6" fill="#5d4037"/>
        <circle cx="8" cy="-9" r="6" fill="#5d4037"/>
        <circle cx="0" cy="-14" r="6" fill="#5d4037"/>
        <path d="M -10 -7 L 0 -28 L 10 -7 Z" fill="#7b1fa2" stroke="#311b92" strokeWidth="1"/>
        <ellipse cx="0" cy="-7" rx="11" ry="2" fill="#311b92"/>
        <circle cx="-4" cy="4" r="2" fill="#fff"/>
        <circle cx="4" cy="4" r="2" fill="#fff"/>
        <circle cx="-4" cy="4" r="1.2" fill="#1a1a1a"/>
        <circle cx="4" cy="4" r="1.2" fill="#1a1a1a"/>
        <path d="M -5 10 Q 0 15 5 10" stroke="#5d4037" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <line x1="14" y1="0" x2="22" y2="-20" stroke="#6d4c41" strokeWidth="2.5" strokeLinecap="round"/>
        <g transform="translate(22 -22)"><circle r="4" fill="#fff59d"/><path d="M 0 -5 L 1.5 -1 L 5 -1 L 2 2 L 3 5 L 0 3 L -3 5 L -2 2 L -5 -1 L -1.5 -1 Z" fill="#fff" stroke="#ff9800" strokeWidth="0.6"/></g>
      </g>
      <g transform="translate(175 95)" opacity="0.95">
        <ellipse cx="0" cy="8" rx="13" ry="14" fill="#9e9e9e"/>
        <circle r="11" fill="#9e9e9e"/>
        <circle cx="-7" cy="-9" r="4" fill="#9e9e9e"/>
        <circle cx="7" cy="-9" r="4" fill="#9e9e9e"/>
        <circle cx="-7" cy="-9" r="2" fill="#f8bbd0"/>
        <circle cx="7" cy="-9" r="2" fill="#f8bbd0"/>
        <rect x="-9" y="-18" width="18" height="12" fill="#1a1a1a"/>
        <rect x="-9" y="-9" width="18" height="2" fill="#c62828"/>
        <ellipse cx="0" cy="-6" rx="10" ry="1.5" fill="#0a0a0a"/>
        <circle cx="-3" cy="1" r="1.8" fill="#fff"/>
        <circle cx="3" cy="1" r="1.8" fill="#fff"/>
        <circle cx="-3" cy="1" r="1" fill="#1a1a1a"/>
        <circle cx="3" cy="1" r="1" fill="#1a1a1a"/>
        <ellipse cx="0" cy="6" rx="1.8" ry="1.3" fill="#ec407a"/>
      </g>
      <text x="55" y="135" fontSize="11" fontWeight="bold" fill="#fff59d" fontStyle="italic" filter="url(#sc_glowf)">~ BUMBLE-WOBBLE-ZOOM-KA-ZAP! ~</text>
    </svg>
  );
  // Default fallback - large emoji for scenes without custom illustration
  return <div style={{ fontSize: 52, lineHeight: 1, textAlign: 'center' }}>{emoji}</div>;
}

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
  const [charactersOpen, setCharactersOpen] = useState(false);
  const [selectedCharId, setSelectedCharId] = useState(null);
  const [favorites, setFavorites] = useState(() => new Set());
  const audioCtxRef = useRef(null);

  function toggleFavorite(id) {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
    playStar(1);
  }

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
  function openCharacters() { playClick(); setCharactersOpen(true); setSelectedCharId(null); }
  function closeCharacters() { playClick(); setCharactersOpen(false); setSelectedCharId(null); }
  function selectChar(id) { playPageTurn(); setSelectedCharId(id); }
  function backToCharList() { playPageTurn(); setSelectedCharId(null); }

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
          <button onClick={openCharacters} title="Meet the Characters" style={{ background: "#ffe0b2", border: "2px solid #f57c00", borderRadius: 50, width: 38, height: 38, fontSize: 16, cursor: "pointer", fontWeight: 800 }}>🎭</button>
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
        <div style={{ textAlign: "center", margin: "0.5rem 0 1rem" }}>
          <SceneArt sceneKey={scene} emoji={node.art} />
        </div>
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
      {charactersOpen && <CharactersModal selectedCharId={selectedCharId} onSelect={selectChar} onBack={backToCharList} onClose={closeCharacters} />}
    </div>
  );
}

function CharactersModal({ selectedCharId, onSelect, onBack, onClose }) {
  const mainChars = INTRO_PAGES.filter(p => p.type === "character");
  const familyPage = INTRO_PAGES.find(p => p.type === "family");
  const supChars = familyPage.members;

  const isMain = selectedCharId && selectedCharId.startsWith("main-");
  const idx = selectedCharId ? parseInt(selectedCharId.split("-")[1]) : -1;
  const selected = selectedCharId ? (isMain ? mainChars[idx] : supChars[idx]) : null;

  const backdropStyle = { position: "fixed", inset: 0, background: "rgba(62,39,35,0.65)", zIndex: 1000, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "1rem", overflowY: "auto" };
  const modalStyle = { background: "linear-gradient(170deg, #fff9e6 0%, #fff3c4 100%)", borderRadius: 24, border: "3px solid #d7ccc8", maxWidth: 560, width: "100%", maxHeight: "92vh", overflowY: "auto", boxShadow: "0 12px 36px rgba(0,0,0,0.3)", position: "relative", padding: "1.5rem", fontFamily };

  if (selected) {
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 10, borderBottom: "2px dashed #d7ccc8" }}>
            <button onClick={onBack} style={{ background: "#fff", border: "2px solid #5d4037", borderRadius: 14, padding: "0.4rem 0.9rem", fontSize: 13, fontWeight: 800, color: "#5d4037", cursor: "pointer" }}>← All Characters</button>
            <button onClick={onClose} aria-label="Close" style={{ background: "#ffcdd2", border: "2px solid #c62828", borderRadius: 50, width: 36, height: 36, fontSize: 18, fontWeight: 800, color: "#c62828", cursor: "pointer", lineHeight: 1 }}>✕</button>
          </div>
          {isMain ? <CharacterProfileFull page={selected} /> : <CharacterProfileMini member={selected} />}
        </div>
      </div>
    );
  }

  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 10, borderBottom: "2px dashed #d7ccc8" }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#3e2723" }}>🎭 Meet the Characters</div>
          <button onClick={onClose} aria-label="Close" style={{ background: "#ffcdd2", border: "2px solid #c62828", borderRadius: 50, width: 36, height: 36, fontSize: 18, fontWeight: 800, color: "#c62828", cursor: "pointer", lineHeight: 1 }}>✕</button>
        </div>
        <div style={{ fontSize: 11, fontWeight: 800, color: "#2e7d32", marginBottom: 8, letterSpacing: 1.2, textTransform: "uppercase", textAlign: "center" }}>★ The Three Best Friends ★</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: 18 }}>
          {mainChars.map((c, i) => {
            const Svg = MAIN_SVGS[c.svgKey];
            return (
              <button key={i} onClick={() => onSelect(`main-${i}`)} style={{ background: "rgba(255,255,255,0.7)", border: "2.5px solid #7e57c2", borderRadius: 14, padding: "0.7rem 0.5rem", cursor: "pointer", textAlign: "center", transition: "transform 0.12s", fontFamily }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "rgba(243,229,245,0.85)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; }}>
                <div style={{ height: 110, display: "flex", alignItems: "center", justifyContent: "center" }}>{Svg && <Svg size={95} />}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#3e2723", marginTop: 4 }}>{c.title}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#6a1b9a", marginTop: 2, fontStyle: "italic", lineHeight: 1.3 }}>{c.subtitle}</div>
              </button>
            );
          })}
        </div>
        <div style={{ fontSize: 11, fontWeight: 800, color: "#e65100", marginBottom: 8, letterSpacing: 1.2, textTransform: "uppercase", textAlign: "center" }}>🌍 The Wider Bumblewood Family</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {supChars.map((c, i) => {
            const Svg = SUPPORTING_SVGS[c.svgKey];
            const parts = c.name.split(" the ");
            return (
              <button key={i} onClick={() => onSelect(`sup-${i}`)} style={{ background: "rgba(255,255,255,0.7)", border: "2px solid #e65100", borderRadius: 12, padding: "0.5rem 0.4rem", cursor: "pointer", textAlign: "center", transition: "transform 0.12s", fontFamily }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "rgba(255,243,224,0.9)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; }}>
                <div style={{ height: 70, display: "flex", alignItems: "center", justifyContent: "center" }}>{Svg && <Svg size={60} />}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#3e2723", marginTop: 2, lineHeight: 1.2 }}>{parts[0]}</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: "#e65100", marginTop: 1 }}>{parts[1] ? `the ${parts[1].split(" ")[0]}` : ""}</div>
              </button>
            );
          })}
        </div>
        <div style={{ marginTop: 16, padding: "0.6rem", background: "rgba(255,255,255,0.5)", borderRadius: 10, border: "1.5px dashed #d7ccc8", textAlign: "center", fontSize: 11, fontWeight: 700, color: "#5d4037", fontStyle: "italic" }}>
          💡 Tap any character to learn more about them!
        </div>
      </div>
    </div>
  );
}

function CharacterProfileFull({ page }) {
  const SvgComp = MAIN_SVGS[page.svgKey];
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 14, padding: "8px 0", background: "rgba(255,255,255,0.4)", borderRadius: 16, border: "2px dashed #d7ccc8" }}>
        {SvgComp && <SvgComp />}
        <div style={{ fontSize: 22, fontWeight: 800, color: "#3e2723", marginTop: 8 }}>{page.title}</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#5d4037", fontStyle: "italic", marginTop: 3 }}>{page.subtitle}</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: 12, padding: "0.75rem 1rem", marginBottom: 12, border: "1.5px dashed #d7ccc8" }}>
        {page.quickFacts.map((f, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < page.quickFacts.length - 1 ? 6 : 0, fontSize: 13 }}>
            <span style={{ fontWeight: 800, color: "#e65100", minWidth: 70 }}>{f[0]}:</span>
            <span style={{ fontWeight: 700, color: "#3e2723", flex: 1, lineHeight: 1.5 }}>{f[1]}</span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#3e2723", lineHeight: 1.65, marginBottom: 12 }}>{page.story}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#3e2723", lineHeight: 1.65, marginBottom: 14, padding: "0.7rem 0.9rem", background: "rgba(255,224,178,0.4)", borderRadius: 10, borderLeft: "3px solid #e65100" }}>
        <strong style={{ color: "#e65100" }}>How they came here:</strong> {page.origin}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
        {page.traits.map((t, i) => (
          <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, padding: "6px 10px", background: "rgba(255,255,255,0.5)", borderRadius: 8 }}>
            <span style={{ fontWeight: 800, color: "#6a1b9a", minWidth: 130 }}>{t[0]}:</span>
            <span style={{ fontWeight: 700, color: "#3e2723", flex: 1, lineHeight: 1.5 }}>{t[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CharacterProfileMini({ member }) {
  const SvgComp = SUPPORTING_SVGS[member.svgKey];
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 16, padding: "20px 0 14px", background: "rgba(255,255,255,0.4)", borderRadius: 16, border: "2px dashed #d7ccc8" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{SvgComp && <SvgComp size={130} />}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#3e2723", marginTop: 6 }}>{member.name}</div>
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: "#3e2723", lineHeight: 1.7, padding: "1rem 1.2rem", background: "rgba(255,255,255,0.6)", borderRadius: 14, border: "1.5px dashed #d7ccc8" }}>{member.desc}</div>
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
