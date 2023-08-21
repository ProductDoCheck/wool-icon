import React from 'react';
import PropTypes from 'prop-types';

const UCalendarSlash = props => {
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
      <path d="M11.66 7H15v1a1 1 0 002 0V7h1a1 1 0 011 1v3h-1.34a1 1 0 000 2H19v1.34a1 1 0 002 0V8a3 3 0 00-3-3h-1V4a1 1 0 00-2 0v1h-3.34a1 1 0 100 2zm10.05 13.29l-1.6-1.6-16.4-16.4a1.004 1.004 0 10-1.42 1.42l1.91 1.9A3 3 0 003 8v10a3 3 0 003 3h12a2.999 2.999 0 001.29-.3l1 1a1.002 1.002 0 001.71-.705 1 1 0 00-.29-.705zM5 8a1 1 0 01.66-.93L9.59 11H5V8zm1 11a1 1 0 01-1-1v-5h6.59l6 6H6z"></path>
    </svg>
  );
};

UCalendarSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCalendarSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCalendarSlash;
