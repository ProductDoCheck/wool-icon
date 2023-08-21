import React from 'react';
import PropTypes from 'prop-types';

const UMapPinAlt = props => {
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
      <path d="M11 11.9V17a1 1 0 002 0v-5.1a5 5 0 10-2 0zM12 4a3 3 0 110 6 3 3 0 010-6zm4.21 10.42a1.021 1.021 0 10-.42 2C18.06 16.87 19 17.68 19 18c0 .58-2.45 2-7 2s-7-1.42-7-2c0-.32.94-1.13 3.21-1.62a1.021 1.021 0 10-.42-2C4.75 15.08 3 16.39 3 18c0 2.63 4.53 4 9 4s9-1.37 9-4c0-1.61-1.75-2.92-4.79-3.58z"></path>
    </svg>
  );
};

UMapPinAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMapPinAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMapPinAlt;
