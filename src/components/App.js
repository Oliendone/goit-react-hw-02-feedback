import React, { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const feedbackButton = e.target.value;

    this.setState(state => {
      return {
        [feedbackButton]: state[feedbackButton] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value);
  };

  countPositiveFeedbackPercentage = total => {
    return Math.trunc((this.state.good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Plese leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(total)}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
