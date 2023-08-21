import React from 'react';
import PropTypes from 'prop-types';

const UStopwatch = props => {
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
      <path d="M18.3 8.59l.91-.9a1.004 1.004 0 10-1.42-1.42l-.9.91a8 8 0 00-9.79 0l-.91-.92a1.008 1.008 0 00-1.42 1.43l.92.91A7.92 7.92 0 004 13.5a8 8 0 1014.3-4.91zM12 19.5a6 6 0 110-12 6 6 0 010 12zm-2-15h4a1 1 0 100-2h-4a1 1 0 000 2zm3 6a1 1 0 00-2 0v1.89a1.5 1.5 0 102 0V10.5z"></path>
    </svg>
  );
};

UStopwatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStopwatch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStopwatch;
