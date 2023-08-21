import React from 'react';
import PropTypes from 'prop-types';

const UStepBackward = props => {
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
      <path d="M20.28 3.43a3.23 3.23 0 00-3.29 0L8 8.84V6a3 3 0 10-6 0v12a3 3 0 106 0v-2.84l9 5.37a3.24 3.24 0 003.29.04 3.379 3.379 0 001.72-3V6.42a3.38 3.38 0 00-1.73-2.99zM6 18a1 1 0 11-2 0V6a1 1 0 012 0v12zm14-.42a1.4 1.4 0 01-.71 1.25 1.23 1.23 0 01-1.28 0l-9.33-5.6a1.45 1.45 0 010-2.46L18 5.19c.2-.127.433-.193.67-.19.218.003.431.062.62.17A1.4 1.4 0 0120 6.42v11.16z"></path>
    </svg>
  );
};

UStepBackward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStepBackward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStepBackward;
