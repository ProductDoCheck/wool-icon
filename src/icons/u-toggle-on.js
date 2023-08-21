import React from 'react';
import PropTypes from 'prop-types';

const UToggleOn = props => {
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
      <path d="M16 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM16 5H8a7 7 0 000 14h8a7 7 0 100-14zm0 12H8A5 5 0 018 7h8a5 5 0 110 10z"></path>
    </svg>
  );
};

UToggleOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UToggleOn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UToggleOn;
