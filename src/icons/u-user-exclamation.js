import React from 'react';
import PropTypes from 'prop-types';

const UUserExclamation = props => {
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
      <path d="M14.55 12.22a4.92 4.92 0 001.7-3.72 5 5 0 00-10 0A4.92 4.92 0 008 12.22a8 8 0 00-4.7 7.28 1 1 0 102 0 6 6 0 1112 0 1 1 0 102 0 8 8 0 00-4.75-7.28zm-3.3-.72a3 3 0 110-5.999 3 3 0 010 5.999zm8.5-5a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zM19 11.79a1.05 1.05 0 00-.29.71 1 1 0 00.29.71c.097.088.209.16.33.21a.94.94 0 00.76 0 .9.9 0 00.54-.54.84.84 0 00.08-.38 1 1 0 00-1.71-.71z"></path>
    </svg>
  );
};

UUserExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUserExclamation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUserExclamation;
