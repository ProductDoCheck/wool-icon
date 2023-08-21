import React from 'react';
import PropTypes from 'prop-types';

const ULinkedin = props => {
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
      <path d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 010-3.12 1.57 1.57 0 110 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0012.85 13a1.998 1.998 0 00-.1.73v5h-3v-9h3V11a3 3 0 012.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18z"></path>
    </svg>
  );
};

ULinkedin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULinkedin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULinkedin;
