import React from 'react';
import PropTypes from 'prop-types';

const UBowlingBall = props => {
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
      <path d="M7.992 8.002a1 1 0 100 2 1 1 0 000-2zm4-6a10 10 0 1010 10 10.012 10.012 0 00-10-10zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8zm-1-10a1 1 0 100 2.001 1 1 0 000-2.001zm0-4a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UBowlingBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBowlingBall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBowlingBall;
