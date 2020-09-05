import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

export default class CafeFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  // countPositiveFeedbackPercentage = () => {
  //   this.
  // }

  handleFeedback = e => {
    const feedbackButton = e.target.value;

    this.setState(state => {
      return {
        [feedbackButton]: state[feedbackButton] + 1,
      };
    });
    this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <>
        <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        <Statistics {...this.state} />
      </>
    );
  }
}
