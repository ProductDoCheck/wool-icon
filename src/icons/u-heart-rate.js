import React from 'react';
import PropTypes from 'prop-types';

const UHeartRate = props => {
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
      <path d="M21 11h-3.94a.777.777 0 00-.21 0h-.17c-.052.03-.102.063-.15.1-.056.037-.11.077-.16.12a.993.993 0 00-.09.13 1.32 1.32 0 00-.12.2l-1.6 4.41-4.17-11.3a1 1 0 00-1.88 0L6.2 11H3a1 1 0 100 2H7.3a.862.862 0 00.16-.1c.056-.037.11-.077.16-.12l.09-.13c.048-.062.088-.129.12-.2l1.62-4.53 4.16 11.42a1 1 0 001.88 0l2.3-6.34H21a1 1 0 000-2z"></path>
    </svg>
  );
};

UHeartRate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeartRate.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeartRate;
