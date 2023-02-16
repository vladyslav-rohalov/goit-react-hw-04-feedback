import { Buttons } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const { good, neutral, bad } = options;
  return (
    <div>
      <Buttons id={good} onClick={onLeaveFeedback}>
        Good
      </Buttons>
      <Buttons id={neutral} onClick={onLeaveFeedback}>
        Neutral
      </Buttons>
      <Buttons id={bad} onClick={onLeaveFeedback}>
        Bad
      </Buttons>
    </div>
  );
}
