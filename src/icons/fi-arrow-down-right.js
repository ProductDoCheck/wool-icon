import React from 'react';
import PropTypes from 'prop-types';

const FiArrowDownRight = props => {
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
      <path d="M7 7l10 10"></path>
      <path d="M17 7v10H7"></path>
    </svg>
  );
};

FiArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiArrowDownRight;
