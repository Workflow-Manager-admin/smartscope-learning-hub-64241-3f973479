import React, { useState } from "react";
import "./UserInteraction.css";

/**
 * PUBLIC_INTERFACE
 * UserInteraction: A lively, modern interactive quiz game for Smart Scope, with instant feedback, bright visuals and score tracking.
 */
const quizData = [
  {
    question: "What does the Smart Scope app help you do?",
    answers: [
      "Visualize and understand academic concepts",
      "Order pizza online",
      "Schedule soccer matches",
      "Edit funny animal memes"
    ],
    correct: 0,
    explanation: "Smart Scope is all about helping you understand academics in a fun way!"
  },
  {
    question: "Which color is NOT part of the Smart Scope color palette?",
    answers: ["#ffd700", "#ff7f50", "#21c2c5", "#ff69b4"],
    correct: 2,
    explanation: "#21c2c5 (teal/blue) is just an accent for UI, not a main brand color!"
  },
  {
    question: "Pick a feature of Smart Scope:",
    answers: [
      "Interactive Visualizations",
      "Animated Cartoons",
      "Real-time Data Views",
      "All of the above!"
    ],
    correct: 3,
    explanation: "All of the above! Smart Scope is feature-rich and engaging."
  }
];

function getRandomEmoji(isCorrect) {
  const goodEmojis = ["🎉", "🌟", "👏", "✅", "🤩"];
  const badEmojis = ["💡", "🙈", "❌", "😳", "🧐"];
  const arr = isCorrect ? goodEmojis : badEmojis;
  return arr[Math.floor(Math.random() * arr.length)];
}

// PUBLIC_INTERFACE
function UserInteraction() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const current = quizData[step];

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === current.correct;
    setIsCorrect(correct);
    setScore((prev) => (correct ? prev + 1 : prev));
    setFeedback(
      correct
        ? `${getRandomEmoji(true)} Correct! ${current.explanation}`
        : `${getRandomEmoji(false)} Not quite! ${current.explanation}`
    );
  };

  const handleNext = () => {
    if (step < quizData.length - 1) {
      setStep(step + 1);
      setSelected(null);
      setFeedback("");
      setIsCorrect(null);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setScore(0);
    setSelected(null);
    setFeedback("");
    setIsCorrect(null);
  };

  if (step >= quizData.length) {
    return (
      <div className="userint-root">
        <div className="userint-finalicon" title="You're done!">🏆</div>
        <div className="userint-finale">You finished the quiz!</div>
        <div className="userint-score">
          Score:{" "}
          <span style={{ color: "var(--accent)" }}>
            {score} / {quizData.length}
          </span>
        </div>
        <button className="btn userint-btn" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="userint-root">
      <div className="userint-title">Mini Quiz: Smart Scope Demo 🎲</div>
      <div className="userint-progress">
        <span className="userint-dotbar">
          {quizData.map((q, i) => (
            <span
              key={i}
              className={
                "userint-dot" +
                (i < step ? " userint-dot-done" : i === step ? " userint-dot-active" : "")
              }
            />
          ))}
        </span>
        <span className="userint-scoretiny">
          Score: {score}
        </span>
      </div>
      <div className="userint-question">{current.question}</div>
      <div className="userint-answers">
        {current.answers.map((ans, idx) => (
          <button
            key={idx}
            className={
              "userint-answer" +
              (selected === idx
                ? idx === current.correct
                  ? " userint-answer-correct"
                  : " userint-answer-incorrect"
                : "")
            }
            onClick={() => handleAnswer(idx)}
            disabled={selected !== null}
            tabIndex={0}
            aria-label={`Answer option: ${ans}`}
          >
            {ans}
          </button>
        ))}
      </div>
      {feedback && (
        <div
          className={
            "userint-feedback" +
            (isCorrect ? " userint-feedback-correct" : " userint-feedback-incorrect")
          }
        >
          {feedback}
        </div>
      )}
      {selected !== null && step < quizData.length - 1 && (
        <button className="btn userint-btn" onClick={handleNext}>
          Next &rarr;
        </button>
      )}
      {selected !== null && step === quizData.length - 1 && (
        <button className="btn userint-btn" onClick={() => setStep(step + 1)}>
          Finish Quiz!
        </button>
      )}
    </div>
  );
}

export default UserInteraction;
