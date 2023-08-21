import React from 'react';
import PropTypes from 'prop-types';

const UArrowsMaximize = props => {
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
      <path d="M21 14a1 1 0 00-1 1v3.59L5.41 4H9a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v6a1 1 0 002 0V5.41L18.59 20H15a1 1 0 000 2h6c.13-.002.26-.029.38-.08a1 1 0 00.54-.54c.051-.12.078-.25.08-.38v-6a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UArrowsMaximize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowsMaximize.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowsMaximize;
