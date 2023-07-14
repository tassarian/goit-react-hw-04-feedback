import { nanoid } from 'nanoid';
import { Button, CounterItem, CounterList } from './Counter.styled';
import { PropTypes } from 'prop-types';

export const Counter = ({ option, onLeaveFeedback }) => {
	return (
		<CounterList>
			{Object.keys(option).map(el => {
				return (
					<CounterItem key={nanoid()}>
						<Button
							onClick={() => {
								onLeaveFeedback(el);
							}}
						>
							{el.charAt(0).toUpperCase() + el.slice(1)}
						</Button>
					</CounterItem>
				);
			})}
		</CounterList>
	);
};

Counter.propTypes = {
	option: PropTypes.object.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};
