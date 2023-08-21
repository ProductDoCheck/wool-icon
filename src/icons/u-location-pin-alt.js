import React from 'react';
import PropTypes from 'prop-types';

const ULocationPinAlt = props => {
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
      <path d="M12 10.8a2 2 0 100-4 2 2 0 000 4zm-.71 6.91a1.002 1.002 0 001.42 0l4.09-4.1a6.79 6.79 0 10-9.6 0l4.09 4.1zM7.23 8.34a4.81 4.81 0 012.13-3.55 4.81 4.81 0 015.28 0 4.82 4.82 0 01.75 7.41L12 15.59 8.61 12.2a4.77 4.77 0 01-1.38-3.86zM19 20H5a1 1 0 000 2h14a1 1 0 000-2z"></path>
    </svg>
  );
};

ULocationPinAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULocationPinAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULocationPinAlt;
