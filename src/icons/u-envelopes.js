import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopes = props => {
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
      <g clipPath="url(#clip0_19_17620)">
        <path d="M17 21.63H5a3 3 0 01-3-3v-8a1 1 0 10-2 0v8a5 5 0 005 5h12a1 1 0 000-2zm4-18H7a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm-.41 2l-5.88 5.88a1.002 1.002 0 01-1.42 0L7.41 5.63h13.18zm1.41 11a1 1 0 01-1 1H7a1 1 0 01-1-1V7l5.88 5.88a3 3 0 004.24 0L22 7v9.63z"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_17620">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UEnvelopes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopes;
