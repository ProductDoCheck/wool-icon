import React from 'react';
import PropTypes from 'prop-types';

const UBuilding = props => {
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
      <path d="M14 8h1a1 1 0 100-2h-1a1 1 0 100 2zm0 4h1a1 1 0 000-2h-1a1 1 0 000 2zM9 8h1a1 1 0 100-2H9a1 1 0 000 2zm0 4h1a1 1 0 000-2H9a1 1 0 000 2zm12 8h-1V3a1 1 0 00-1-1H5a1 1 0 00-1 1v17H3a1 1 0 000 2h18a1 1 0 000-2zm-8 0h-2v-4h2v4zm5 0h-3v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6V4h12v16z"></path>
    </svg>
  );
};

UBuilding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBuilding.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBuilding;
