import React from 'react';

const Logo = () => (
  <svg
    width="150"
    height="150"
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle */}
    <circle cx="75" cy="75" r="70" fill="#1E90FF" />
    
    {/* Shopping Cart Icon */}
    <g fill="white">
      <circle cx="50" cy="50" r="10" />
      <circle cx="95" cy="50" r="10" />
      <rect x="40" y="45" width="55" height="10" rx="5" ry="5" />
      <path
        d="M35,65 L115,65 L110,95 L35,95 Z"
        fill="none"
        stroke="white"
        strokeWidth="3"
      />
      <circle cx="40" cy="105" r="8" />
      <circle cx="110" cy="105" r="8" />
    </g>

    {/* Logo Text */}
    <text x="50%" y="130" fontFamily="Arial, sans-serif" fontSize="16" fill="white" textAnchor="middle">
      ShopEasy
    </text>
  </svg>
);

export default Logo;
