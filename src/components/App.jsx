import { Counter } from './Counter/Counter';
import { Feedback } from './Feedback/Feedback';
import { Container } from './Global.styled';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

const { Component } = require('react');

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	onHandleClick = e => {
		this.setState(prevState => {
			return { [e]: prevState[e] + 1 };
		});
	};

	totalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	PositiveFeedbackPercentage = () => {
		return ((this.state.good / this.totalFeedback()) * 100).toFixed(2);
	};

	render() {
		return (
			<Container>
				<Section title="Please leave you feedback">
					<Counter
						option={this.state}
						onLeaveFeedback={this.onHandleClick}
					/>
				</Section>
				<Section title="Statistics">
					{this.totalFeedback() > 0 ? (
						<Feedback
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={this.totalFeedback()}
							positivePercentage={this.PositiveFeedbackPercentage()}
						/>
					) : (
						<Notification message="There is no feedback" />
					)}
				</Section>
			</Container>
		);
	}
}

export default App;
