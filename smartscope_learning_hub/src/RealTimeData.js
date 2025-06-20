import React, { useEffect, useState } from "react";
import "./RealTimeData.css";

/**
 * PUBLIC_INTERFACE
 * RealTimeData: Fetches and displays fun, real-time educational data as a lively card.
 * Uses the Numbers API to provide a random interesting fact, styled vibrantly with Smart Scope's color palette.
 */
function RealTimeData() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch a new fact from the Numbers API (education-friendly)
  const fetchFact = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://numbersapi.com/random/trivia");
      if (!res.ok) throw new Error("Failed to fetch fact");
      const text = await res.text();
      setFact(text);
    } catch (err) {
      setError("Could not load fact. Try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="realtime-root" title="Random Trivia Fact">
      <div className="realtime-header">
        <span className="realtime-icon" role="img" aria-label="Live Bolt">
          ⚡
        </span>
        <span className="realtime-title">Live Trivia Fact</span>
        <button className="realtime-refresh" aria-label="Fetch New Fact" onClick={fetchFact} disabled={loading}>
          ⟳
        </button>
      </div>
      <div className="realtime-content">
        {loading ? (
          <div className="realtime-loading">Fetching a cool fact...</div>
        ) : error ? (
          <div className="realtime-error">{error}</div>
        ) : (
          <div className="realtime-fact">
            <span className="fact-accent">Did you know?</span> <br />
            {fact}
          </div>
        )}
      </div>
      <div className="realtime-instruction">
        Each time you click <span role="img" aria-label="refresh">⟳</span>, you’ll see a new fun fact!
      </div>
    </div>
  );
}

export default RealTimeData;
