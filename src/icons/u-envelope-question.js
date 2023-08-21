import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeQuestion = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M16.77 5.37A1 1 0 0018.13 5a1 1 0 011.577-.207A1 1 0 0119 6.5a1 1 0 100 2A3 3 0 1016.4 4a1 1 0 00.37 1.37zM21 13.5a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V8.91l5.88 5.89a3 3 0 004.24 0l1.64-1.64a1.004 1.004 0 00-1.42-1.42l-1.64 1.64a1 1 0 01-1.4 0L5.41 7.5H13a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm-2.71-3.71a1.001 1.001 0 000 1.42l.15.12a.762.762 0 00.18.09.64.64 0 00.18.06h.2a1 1 0 00.381-1.924 1 1 0 00-1.091.234z"></path>
    </svg>
  );
};

UEnvelopeQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeQuestion;
