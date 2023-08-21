import React from 'react';
import PropTypes from 'prop-types';

const FiChevronRight = props => {
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
      <path d="M9 18l6-6-6-6"></path>
    </svg>
  );
};

FiChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiChevronRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiChevronRight;
