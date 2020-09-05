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

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      console.log();
      return {
        positivePercentage: Math.trunc(
          (prevState.good / prevState.total) * 100,
        ),
      };
    });
  };

  handleFeedback = e => {
    const feedbackButton = e.target.value;

    this.setState(state => {
      return {
        [feedbackButton]: state[feedbackButton] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <>
        <Section title="Plese leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {this.state.total > 0 ? (
            <Statistics {...this.state} />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
