import React from 'react';
import PropTypes from 'prop-types';

const UArchway = props => {
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
      <path d="M22 20h-1V8h1a1 1 0 100-2h-1V3a1 1 0 00-1-1H4a1 1 0 00-1 1v3H2a1 1 0 000 2h1v12H2a1 1 0 000 2h20a1 1 0 000-2zm-7 0H9v-3.53a6.21 6.21 0 013-5.33 6.21 6.21 0 013 5.33V20zm4 0h-2v-3.53a8.17 8.17 0 00-4.55-7.36 1 1 0 00-.9 0A8.17 8.17 0 007 16.47V20H5V8h14v12zm0-14H5V4h14v2z"></path>
    </svg>
  );
};

UArchway.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArchway.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArchway;
