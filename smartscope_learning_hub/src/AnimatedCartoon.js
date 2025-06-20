import React from "react";
import "./AnimatedCartoon.css";

/**
 * PUBLIC_INTERFACE
 * AnimatedCartoon: A visually engaging, vibrant SVG/CSS animated cartoon demo component for Smart Scope.
 * Uses Smart Scope's color palette and lively animation to draw learner attention.
 */
function AnimatedCartoon() {
  return (
    <div className="cartoon-root">
      <svg
        className="cartoon-svg"
        width="220"
        height="170"
        viewBox="0 0 220 170"
        aria-label="Bouncing friendly cartoon character"
        role="img"
      >
        {/* Animated shadow */}
        <ellipse
          className="cartoon-shadow"
          cx="110"
          cy="146"
          rx="36"
          ry="13"
        />
        {/* Main body - bouncy */}
        <g className="cartoon-body-group">
          <ellipse
            className="cartoon-body"
            cx="110"
            cy="95"
            rx="58"
            ry="52"
          />
          {/* Cheeks */}
          <ellipse
            className="cartoon-cheek"
            cx="75"
            cy="105"
            rx="10"
            ry="5"
          />
          <ellipse
            className="cartoon-cheek"
            cx="145"
            cy="105"
            rx="10"
            ry="5"
          />
          {/* Eyes - blink animation */}
          <ellipse
            className="cartoon-eye cartoon-eye-left"
            cx="87"
            cy="90"
            rx="11"
            ry="14"
          />
          <ellipse
            className="cartoon-eye cartoon-eye-right"
            cx="133"
            cy="90"
            rx="11"
            ry="14"
          />
          {/* Pupils */}
          <ellipse
            className="cartoon-pupil"
            cx="87"
            cy="92"
            rx="4"
            ry="5"
          />
          <ellipse
            className="cartoon-pupil"
            cx="133"
            cy="92"
            rx="4"
            ry="5"
          />
          {/* Smile (animated mouth) */}
          <path
            className="cartoon-smile"
            d="M96 112 Q110 126 124 112"
            stroke="#232323"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        {/* Left animated hand */}
        <g className="cartoon-hand-group cartoon-hand-left">
          <path
            className="cartoon-hand"
            d="M55 98 Q38 80 62 75"
            stroke="var(--secondary)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        {/* Right animated hand */}
        <g className="cartoon-hand-group cartoon-hand-right">
          <path
            className="cartoon-hand"
            d="M165 98 Q192 70 155 72"
            stroke="var(--accent)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        {/* Accent sparkles */}
        <circle className="cartoon-sparkle" cx="55" cy="55" r="4" />
        <circle className="cartoon-sparkle" cx="180" cy="60" r="2.9" />
        <circle className="cartoon-sparkle" cx="100" cy="38" r="2.5" />
        <circle className="cartoon-sparkle" cx="120" cy="30" r="2" />
      </svg>
      <div className="cartoon-caption">
        Hi! I'm Smartee the Learning Buddy.<br />
        {/* Style accent text */}
        <span className="caption-accent">Let’s learn smarter, with fun!</span>
      </div>
    </div>
  );
}

export default AnimatedCartoon;
