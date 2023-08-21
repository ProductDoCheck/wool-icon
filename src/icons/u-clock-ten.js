import React from 'react';
import PropTypes from 'prop-types';

const UClockTen = props => {
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
      <path d="M11 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a1 1 0 00-1 1v3.27l-1.1-.64a1.003 1.003 0 10-1 1.74l2.6 1.5h.16A1 1 0 0011 13a.998.998 0 00.34-.07h.08a.92.92 0 00.28-.19 1.57 1.57 0 00.15-.19v-.06c.024-.058.045-.119.06-.18a1.42 1.42 0 000-.2V7A1 1 0 0011 6z"></path>
    </svg>
  );
};

UClockTen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClockTen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClockTen;
