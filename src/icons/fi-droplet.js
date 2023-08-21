import React from 'react';
import PropTypes from 'prop-types';

const FiDroplet = props => {
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
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"></path>
    </svg>
  );
};

FiDroplet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiDroplet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiDroplet;
