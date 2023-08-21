import React from 'react';
import PropTypes from 'prop-types';

const FiFilter = props => {
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
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>
    </svg>
  );
};

FiFilter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiFilter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiFilter;
