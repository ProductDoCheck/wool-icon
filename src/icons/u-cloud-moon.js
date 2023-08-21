import React from 'react';
import PropTypes from 'prop-types';

const UCloudMoon = props => {
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
      <path d="M21.7 9.07a1 1 0 00-.93-.26 3.13 3.13 0 01-.66.08 3 3 0 01-3-3c.003-.222.03-.443.08-.66a1 1 0 00-.26-.93A1 1 0 0016 4a4.93 4.93 0 00-3.83 4.21A6.24 6.24 0 0010.5 8a6 6 0 00-5.94 5.13A3.5 3.5 0 005.5 20h9.17A4.33 4.33 0 0019 15.67a4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 10a1 1 0 00-.3-.93zm-7 8.93H5.5a1.5 1.5 0 010-3 1 1 0 001-1 4 4 0 016.18-3.34 3.94 3.94 0 011.57 2 1 1 0 00.78.67 2.342 2.342 0 11-.36 4.67h.03zm2.44-6.11c-.14.011-.28.011-.42 0a4.59 4.59 0 00-.72-.31 6.06 6.06 0 00-1.82-2.28v-.37a3 3 0 011.05-2.28 5 5 0 004.23 4.23 3 3 0 01-2.35 1.01h.03z"></path>
    </svg>
  );
};

UCloudMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudMoon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudMoon;