import React from 'react';
import PropTypes from 'prop-types';

const UCloudRain = props => {
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
      <path d="M12.56 12.67a1 1 0 00-1.12 0c-.11.08-2.69 1.86-2.69 4.58a3.25 3.25 0 106.5 0c0-2.75-2.58-4.51-2.69-4.58zM12 18.5a1.25 1.25 0 01-1.25-1.25A3.66 3.66 0 0112 14.8a3.61 3.61 0 011.25 2.45A1.25 1.25 0 0112 18.5zm6.42-10.78A7 7 0 005.06 9.61a4 4 0 00.61 7.87h.08a1 1 0 00.08-2A2 2 0 014 13.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 01.43 5.79 1 1 0 00.62 1.9 5 5 0 00-.14-9.53z"></path>
    </svg>
  );
};

UCloudRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudRain.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudRain;