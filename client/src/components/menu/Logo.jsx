import React from 'react';

const Logo = () => (
  <svg
    viewBox="-10 -10 20 20"
    style={{ margin: '-0.4rem 0 0' }}
  >
    <defs>
      <radialGradient id="drumGradient">
        <stop offset="0%" stopColor="#8998aa" />
        <stop offset="98%" stopColor="#626280" />
        <stop offset="100%" stopColor="#222" />
      </radialGradient>
    </defs>
    <circle
      r="9.2"
      cx="0"
      cy="0"
      fill="url(#drumGradient)"
    />
    <circle
      cx="0"
      cy="0"
      transform="rotate(0) translate(0)"
      r="2.2"
      stroke="#A70227"
      strokeWidth="0.5"
      fill="#333"
    />
    <circle
      cx="0"
      cy="0"
      transform="rotate(90) translate(6.3)"
      r="1.6"
      stroke="#E57452"
      strokeWidth="0.2"
      fill="#333"
    />
    <circle
      cx="0"
      cy="0"
      transform="rotate(135) translate(6.4)"
      r="1.6"
      stroke="#BC1527"
      strokeWidth="0.2"
      fill="#333"
    />
    <circle
      cx="0"
      cy="0"
      transform="rotate(45) translate(6.4)"
      r="1.6"
      stroke="#FAC983"
      strokeWidth="0.2"
      fill="#333"
    />
    <circle
      cx="0"
      cy="0"
      transform="rotate(225) translate(6.5)"
      r="1.8"
      stroke="#DCF0F7"
      strokeWidth="0.2"
      fill="#333"
    />
    <circle
      cx="0"
      cy="0"
      transform="rotate(315) translate(6.5)"
      r="1.8"
      stroke="#E57452"
      strokeWidth="0.2"
      fill="#333"
    />
  </svg>
);

export default Logo;
