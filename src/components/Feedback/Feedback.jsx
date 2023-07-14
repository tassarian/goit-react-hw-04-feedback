import { PropTypes } from 'prop-types';
import { FeedbackItem, FeedbackList, StyledValue } from './Feedback.styled';

export const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<FeedbackList>
			<FeedbackItem>
				Good:
				<StyledValue>{good}</StyledValue>
			</FeedbackItem>
			<FeedbackItem>
				Neutral:
				<StyledValue>{neutral}</StyledValue>
			</FeedbackItem>
			<FeedbackItem>
				Bad:
				<StyledValue>{bad}</StyledValue>
			</FeedbackItem>
			<FeedbackItem>
				Total:
				<StyledValue>{total}</StyledValue>
			</FeedbackItem>
			<FeedbackItem>
				Positive Feedback:
				<StyledValue>{positivePercentage}%</StyledValue>
			</FeedbackItem>
		</FeedbackList>
	);
};

Feedback.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.string.isRequired,
};
