import React from 'react';
import PropTypes from 'prop-types';

const UCornerRightDown = props => {
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
      <path d="M21.71 13.35a1.002 1.002 0 00-1.42 0l-2.92 2.92v-8a4 4 0 00-4-4H3a1 1 0 000 2h10.37a2 2 0 012 2v8l-2.92-2.92A1.011 1.011 0 1011 14.76l4.62 4.63c.097.091.209.166.33.22a.94.94 0 00.76 0 1 1 0 00.33-.22l4.63-4.63a1 1 0 00.04-1.41z"></path>
    </svg>
  );
};

UCornerRightDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCornerRightDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCornerRightDown;
