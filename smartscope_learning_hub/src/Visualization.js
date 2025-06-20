import React, { useState } from "react";
import "./Visualization.css";

/**
 * PUBLIC_INTERFACE
 * Visualization: An interactive, animated SVG bar chart using demo data.
 * - Responsive, lively, and clickable
 * - App color palette: primary (#ff7f50), secondary (#ffd700), accent (#ff69b4)
 * - Placeholder for future, advanced visualizations
 */
function generateDemoData() {
  // Generate random heights for fun demo
  return Array.from({ length: 8 }, (_, i) => ({
    label: `Item ${i + 1}`,
    value: Math.floor(30 + Math.random() * 120),
  }));
}

// PUBLIC_INTERFACE
function Visualization() {
  const initialData = generateDemoData();
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(null);

  // Highlight and animate a bar on hover/click, shuffle on refresh
  const handleBarClick = (idx) => {
    setActiveIndex(idx === activeIndex ? null : idx);
  };

  const handleRefresh = () => {
    setData(generateDemoData());
    setActiveIndex(null);
  };

  const width = 370;
  const height = 180;
  const barGap = 13;
  const barWidth = 30;
  const chartBottom = height - 30;
  const maxValue = Math.max(...data.map(d => d.value), 120);

  return (
    <div className="viz-root">
      <div className="viz-header">
        <span className="icon-viz" role="img" aria-label="Sparkle Chart">✨</span>
        <span className="viz-title">Live Bar Chart Demo</span>
        <button className="viz-refresh" onClick={handleRefresh} aria-label="Refresh Data">⟳</button>
      </div>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="viz-svg"
      >
        {/* Axis lines */}
        <line
          x1="40"
          y1={chartBottom}
          x2={width - 14}
          y2={chartBottom}
          className="viz-axis"
        />
        <line
          x1="40"
          y1="27"
          x2="40"
          y2={chartBottom}
          className="viz-axis"
        />

        {/* Bars */}
        {data.map((item, i) => {
          const barHeight = (item.value / maxValue) * (chartBottom - 30);
          const x = 40 + barGap + i * (barWidth + barGap);
          const y = chartBottom - barHeight;
          const isActive = i === activeIndex;
          return (
            <g
              key={item.label}
              className={`viz-bar-group${isActive ? " active" : ""}`}
              onClick={() => handleBarClick(i)}
              tabIndex={0}
              aria-label={`Bar for ${item.label}, value ${item.value}`}
              onKeyPress={(e) => e.key === "Enter" && handleBarClick(i)}
            >
              <rect
                className="viz-bar"
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={
                  isActive
                    ? "var(--accent)"
                    : i % 2 === 0
                    ? "var(--primary)"
                    : "var(--secondary)"
                }
                style={{
                  transition: "all 0.53s cubic-bezier(.4,2.1,.5,1)",
                  cursor: "pointer",
                  filter: isActive
                    ? "drop-shadow(0 0 7px var(--accent))"
                    : undefined,
                }}
              />
              <text
                x={x + barWidth / 2}
                y={chartBottom + 15}
                textAnchor="middle"
                fontSize="0.97em"
                className="viz-label"
              >
                {item.label}
              </text>
              <text
                x={x + barWidth / 2}
                y={y - 9}
                textAnchor="middle"
                fontSize="1.02em"
                className="viz-value"
                style={{ opacity: isActive ? 1 : 0.18, transition: "opacity 0.32s" }}
              >
                {item.value}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="viz-instruction">
        Click a bar to highlight & see its value, or refresh for new data!
      </div>
    </div>
  );
}

export default Visualization;
