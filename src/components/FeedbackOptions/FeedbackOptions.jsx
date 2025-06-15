import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options , onLeaveFeedback }) => {
    return (
        <div className={css.container}>
            {options.map(option => (
                <button
                key={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}
                className={css.button}
                >
                {option}
                </button>
            ))}
        </div>
    )
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};