import React from 'react';
import PropTypes from 'prop-types';

const UCompressAltLeft = props => {
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
      <path d="M10.5 5.5a1 1 0 00-1 1v1.59l-5.79-5.8a1.004 1.004 0 10-1.42 1.42l5.8 5.79H6.5a1 1 0 000 2h4a.997.997 0 00.38-.08 1 1 0 00.54-.54.997.997 0 00.08-.38v-4a1 1 0 00-1-1zm11.21 14.79l-5.8-5.79h1.59a1 1 0 100-2h-4c-.13.002-.26.029-.38.08a1 1 0 00-.54.54c-.051.12-.079.25-.08.38v4a1 1 0 102 0v-1.59l5.79 5.8a.998.998 0 001.42 0 .997.997 0 00.219-1.095.998.998 0 00-.22-.325z"></path>
    </svg>
  );
};

UCompressAltLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCompressAltLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCompressAltLeft;
