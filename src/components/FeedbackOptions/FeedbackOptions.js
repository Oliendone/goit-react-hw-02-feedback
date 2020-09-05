import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
