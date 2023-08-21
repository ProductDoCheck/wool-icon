import React from 'react';
import PropTypes from 'prop-types';

const UBath = props => {
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
      <path d="M22 12H5V6.41a1.975 1.975 0 011.04-1.759c.35-.19.75-.27 1.148-.23a3.491 3.491 0 00.837 3.554l1.06 1.06a1 1 0 001.415 0L14.035 5.5a1.001 1.001 0 000-1.414l-1.06-1.06a3.494 3.494 0 00-4.53-.343A3.992 3.992 0 003 6.41V12H2a1 1 0 000 2h1v3a2.995 2.995 0 002 2.816V21a1 1 0 102 0v-1h10v1a1 1 0 002 0v-1.184A2.995 2.995 0 0021 17v-3h1a1 1 0 000-2zM9.44 4.44a1.502 1.502 0 012.12 0l.354.353-2.121 2.121-.354-.353a1.501 1.501 0 010-2.122zM19 17a1 1 0 01-1 1H6a1 1 0 01-1-1v-3h14v3z"></path>
    </svg>
  );
};

UBath.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBath.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBath;