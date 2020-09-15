import React, { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const feedbackButton = target.value;

    this.setState(prevState => {
      return {
        [feedbackButton]: prevState[feedbackButton] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
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
          <Statistics
            {...this.state}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage(total)}
          />
        </Section>
      </>
    );
  }
}
