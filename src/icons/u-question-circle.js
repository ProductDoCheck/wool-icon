import React from 'react';
import PropTypes from 'prop-types';

const UQuestionCircle = props => {
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
      <path d="M11.29 15.29a1.573 1.573 0 00-.12.15.762.762 0 00-.09.18.643.643 0 00-.06.18 1.362 1.362 0 000 .2.84.84 0 00.08.38.9.9 0 00.54.54.94.94 0 00.76 0 .9.9 0 00.54-.54A1 1 0 0013 16a1 1 0 00-1.71-.71zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm0-13a3 3 0 00-2.6 1.5 1 1 0 101.73 1A1 1 0 0112 9a1 1 0 110 2 1 1 0 00-1 1v1a1 1 0 002 0v-.18A3 3 0 0012 7z"></path>
    </svg>
  );
};

UQuestionCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UQuestionCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UQuestionCircle;
