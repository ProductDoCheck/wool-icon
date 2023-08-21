import React from 'react';
import PropTypes from 'prop-types';

const UArrowRandom = props => {
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
      <path d="M8.7 10a1 1 0 001.41 0 1 1 0 000-1.41l-6.27-6.3a1.004 1.004 0 00-1.42 1.42L8.7 10zM21 14a1 1 0 00-1 1v3.59L15.44 14A1.018 1.018 0 1014 15.44L18.59 20H15a1 1 0 000 2h6c.13-.002.26-.029.38-.08a1 1 0 00.54-.54A.997.997 0 0022 21v-6a1 1 0 00-1-1zm.92-11.38a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 000 2h3.59L2.29 20.29a1 1 0 00.325 1.639 1 1 0 001.095-.219L20 5.41V9a1 1 0 002 0V3a.997.997 0 00-.08-.38z"></path>
    </svg>
  );
};

UArrowRandom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowRandom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowRandom;
