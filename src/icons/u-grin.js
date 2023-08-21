import React from 'react';
import PropTypes from 'prop-types';

const UGrin = props => {
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
      <path d="M9 11a1 1 0 100-2 1 1 0 000 2zm3-9a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm3-7H9a1 1 0 00-1 1 4 4 0 108 0 1 1 0 00-1-1zm-3 3a2 2 0 01-1.73-1h3.46A2 2 0 0112 16zm3-7a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UGrin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGrin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGrin;
