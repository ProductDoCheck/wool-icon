import React from 'react';
import PropTypes from 'prop-types';

const URssAlt = props => {
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
      <path d="M2.88 16.88a3 3 0 104.24 4.24 3 3 0 000-4.24 3.08 3.08 0 00-4.24 0zm2.83 2.83a1 1 0 01-1.639-.325 1 1 0 01.219-1.095 1.001 1.001 0 011.639.325 1 1 0 01-.219 1.095zM5 12a1 1 0 000 2 5 5 0 015 5 1 1 0 002 0 7 7 0 00-7-7zm0-4a1 1 0 000 2 9 9 0 019 9 1 1 0 002 0A11 11 0 005 8z"></path>
    </svg>
  );
};

URssAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URssAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URssAlt;
