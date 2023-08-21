import React from 'react';
import PropTypes from 'prop-types';

const UCompressAlt = props => {
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
      <path d="M21.71 2.29a.999.999 0 00-1.42 0l-5.79 5.8V6.5a1 1 0 10-2 0v4c.002.13.029.26.08.38a1 1 0 00.54.54c.12.051.25.078.38.08h4a1 1 0 100-2h-1.59l5.8-5.79a.998.998 0 000-1.42zM10.88 12.58a1.001 1.001 0 00-.38-.08h-4a1 1 0 000 2h1.59l-5.8 5.79a1 1 0 000 1.42.998.998 0 001.42 0l5.79-5.8v1.59a1 1 0 102 0v-4a.998.998 0 00-.08-.38 1 1 0 00-.54-.54z"></path>
    </svg>
  );
};

UCompressAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCompressAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCompressAlt;
