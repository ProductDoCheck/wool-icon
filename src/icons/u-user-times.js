import React from 'react';
import PropTypes from 'prop-types';

const UUserTimes = props => {
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
      <path d="M13.3 12.22A4.92 4.92 0 0015 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 002 19.5a1 1 0 102 0 6 6 0 1112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM10 11.5a3 3 0 110-6 3 3 0 010 6zm10.91.5l.8-.79a1.004 1.004 0 00-1.42-1.42l-.79.8-.79-.8a1.003 1.003 0 10-1.42 1.42l.8.79-.8.79a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l.79-.8.79.8a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-.8-.79z"></path>
    </svg>
  );
};

UUserTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUserTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUserTimes;
