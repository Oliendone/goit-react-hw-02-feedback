import React from 'react';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button onClick={onLeaveFeedback} value="good">
        Good
      </button>
      <button onClick={onLeaveFeedback} value="neutral">
        Neutral
      </button>
      <button onClick={onLeaveFeedback} value="bad">
        Bad
      </button>
    </div>
  );
}
