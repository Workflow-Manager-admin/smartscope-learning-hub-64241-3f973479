import React from "react";
import "./MainContainer.css";
import Visualization from "./Visualization";
import AnimatedCartoon from "./AnimatedCartoon";
import RealTimeData from "./RealTimeData";
import UserInteraction from "./UserInteraction";

/**
 * PUBLIC_INTERFACE
 * MainContainer holds four visually distinct sections (placeholders) for the key Smart Scope features:
 * Interactive Visualizations, Animated Cartoons, Real-time Data Views, User Interactive Tools.
 */
function MainContainer() {
  return (
    <section className="main-container">
      <div className="feature-section visualizations">
        <h2 className="feature-title">Interactive Visualizations</h2>
        {/* Integrate the dynamic visualization demo here */}
        <Visualization />
      </div>
      <div className="feature-section cartoons">
        <h2 className="feature-title">Animated Cartoons</h2>
        <AnimatedCartoon />
      </div>
      <div className="feature-section realtime">
        <h2 className="feature-title">Real-time Data Views</h2>
        <RealTimeData />
      </div>
      <div className="feature-section user-interactive">
        <h2 className="feature-title">User Interactive Tools</h2>
        <UserInteraction />
      </div>
    </section>
  );
}

export default MainContainer;
