import React from 'react';
import PropTypes from 'prop-types';

const UThSlash = props => {
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
      <g clipPath="url(#clip0_19_17416)">
        <path d="M22.71 21.29l-1-1-6-6-6-6-6-6-1-1a1.004 1.004 0 00-1.42 1.42l.71.7V21a1 1 0 001 1h17.59l.7.71a.999.999 0 001.42 0 1 1 0 000-1.42zM4 5.41L6.59 8H4V5.41zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm2-2.59L12.59 14H10v-2.59zM14 20h-4v-4h4v4zm2 0v-2.59L18.59 20H16zM8.67 4H14v5a1 1 0 001 1h5v5.33a1 1 0 102 0V3a1 1 0 00-1-1H8.67a1 1 0 000 2zM16 4h4v4h-4V4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_17416">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UThSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UThSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UThSlash;
