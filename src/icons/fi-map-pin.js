import React from 'react';
import PropTypes from 'prop-types';

const FiMapPin = props => {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"></path>
      <path d="M12 13a3 3 0 100-6 3 3 0 000 6z"></path>
    </svg>
  );
};

FiMapPin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMapPin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMapPin;
