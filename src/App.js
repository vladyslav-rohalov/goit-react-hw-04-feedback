import React, { Component } from 'react';
import {
  Section,
  Statistics,
  FeedbackOptions,
  Notification,
} from './components/Feedback';
import { AppStyle } from './App.styled';

export default class App extends Component {
  state = {
    visible: false,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  options = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let positive = Math.round((good / (good + neutral + bad)) * 100);
    return positive;
  };

  onLeaveFeedback = event => {
    if (event.target.id === 'good') {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    }
    if (event.target.id === 'neutral') {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }
    if (event.target.id === 'bad') {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
    this.visible = true;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <AppStyle>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.visible ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification messege={'There is no feedback'} />
          )}
        </Section>
      </AppStyle>
    );
  }
}
