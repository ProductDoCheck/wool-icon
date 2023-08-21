import React from 'react';
import PropTypes from 'prop-types';

const UClockTwo = props => {
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
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm2.1-10.37l-1.1.64V7a1 1 0 00-2 0v5.06a1.42 1.42 0 000 .2c.015.061.036.122.06.18v.06c.048.07.101.138.16.2a.92.92 0 00.28.19h.08A1 1 0 0012 13a.998.998 0 00.34-.07h.16l2.6-1.5a1.003 1.003 0 10-1-1.74v-.06z"></path>
    </svg>
  );
};

UClockTwo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClockTwo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClockTwo;
