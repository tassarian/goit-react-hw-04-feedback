import { useState } from 'react';
import { Counter } from './Counter/Counter';
import { Feedback } from './Feedback/Feedback';
import { Container } from './Global.styled';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const onHandleClick = id => {
		switch (id) {
			case 'good':
				setGood(prevState => prevState + 1);
				break;
			case 'neutral':
				setNeutral(prevState => prevState + 1);
				break;
			case 'bad':
				setBad(prevState => prevState + 1);
				break;

			default:
				break;
		}
	};

	const totalFeedback = () => {
		return good + neutral + bad;
	};

	const PositiveFeedbackPercentage = () => {
		return ((good / totalFeedback()) * 100).toFixed(2);
	};

	return (
		<Container>
			<Section title="Please leave you feedback">
				<Counter
					option={['good', 'neutral', 'bad']}
					onLeaveFeedback={onHandleClick}
				/>
			</Section>
			<Section title="Statistics">
				{totalFeedback() > 0 ? (
					<Feedback
						good={good}
						neutral={neutral}
						bad={bad}
						total={totalFeedback()}
						positivePercentage={PositiveFeedbackPercentage()}
					/>
				) : (
					<Notification message="There is no feedback" />
				)}
			</Section>
		</Container>
	);
};

export default App;
