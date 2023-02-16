import { useState } from 'react';
import {
  Section,
  Statistics,
  FeedbackOptions,
  Notification,
} from './components/Feedback';
import { AppStyle } from './App.styled';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);

  const options = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  };

  const onLeaveFeedback = event => {
    console.log(event.target.id);
    if (event.target.id === 'good') {
      setGood(good + 1);
    }
    if (event.target.id === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (event.target.id === 'bad') {
      setBad(bad + 1);
    }
    setVisible(true);
  };

  return (
    <AppStyle>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {visible ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification messege={'There is no feedback'} />
        )}
      </Section>
    </AppStyle>
  );
}
