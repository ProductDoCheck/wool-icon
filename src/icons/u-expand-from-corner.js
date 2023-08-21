import React from 'react';
import PropTypes from 'prop-types';

const UExpandFromCorner = props => {
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
      <path d="M11 12H3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1zm-1 8H4v-6h6v6zM21.92 2.62a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 100 2h3.59l-5.3 5.29a1 1 0 00.325 1.639 1 1 0 001.095-.219L20 5.41V9a1 1 0 002 0V3a1.001 1.001 0 00-.08-.38z"></path>
    </svg>
  );
};

UExpandFromCorner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExpandFromCorner.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExpandFromCorner;
