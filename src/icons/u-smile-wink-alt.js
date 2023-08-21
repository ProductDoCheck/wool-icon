import React from 'react';
import PropTypes from 'prop-types';

const USmileWinkAlt = props => {
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
      <path d="M9 11a1 1 0 100-2 1 1 0 000 2zm5.36 3.23a3.76 3.76 0 01-4.72 0 1.001 1.001 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1.001 1.001 0 00-1.28-1.54zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm5.62-10.87a3.08 3.08 0 00-4.24 0 1 1 0 001.41 1.41 1.002 1.002 0 011.42 0 1 1 0 001.41 0 1 1 0 000-1.41z"></path>
    </svg>
  );
};

USmileWinkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USmileWinkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USmileWinkAlt;