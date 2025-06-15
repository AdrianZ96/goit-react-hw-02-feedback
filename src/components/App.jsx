import { useState } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export const App = () => {

  const [ good , setGood ] = useState(0);
  const [ neutral , setNeutral ] = useState(0);
  const [ bad , setBad ] = useState(0);

const handleLeaveFeedback = (type) => {
  switch (type) {
    case 'good':
      setGood(prev => prev + 1);
      break;

    case 'neutral':
      setNeutral(prev => prev + 1);
      break;

    case 'bad':
      setBad(prev => prev + 1);
      break;

    default:
      break;
  }
};

const countTotalFeedback = () => {
  return good + bad + neutral;
};

const countPositiceFeedbacks = () => {
  const total = countTotalFeedback();
  return total === 0 ? 0 : Math.round((good / total) * 100);
}

  return (
    <div>
       <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

       <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiceFeedbacks()}
            />
          )}
        </Section>


    </div>
  );
};
