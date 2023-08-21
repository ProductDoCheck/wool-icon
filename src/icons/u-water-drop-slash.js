import React from 'react';
import PropTypes from 'prop-types';

const UWaterDropSlash = props => {
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
      <path d="M21.71 20.29l-18-18a1.004 1.004 0 00-1.42 1.42l4 4a12.46 12.46 0 00-2 6.57A7.76 7.76 0 0012 22a7.64 7.64 0 005.87-2.71l2.42 2.42a.999.999 0 001.42 0 1 1 0 000-1.42zM12 20a5.76 5.76 0 01-5.75-5.75 10.3 10.3 0 011.47-5.11l8.74 8.73A5.67 5.67 0 0112 20zM10.85 5.24c.45-.42.85-.75 1.15-1 1.43 1.12 5.13 4.43 5.68 8.88a1 1 0 001 .88h.12a1 1 0 00.87-1.11c-.78-6.43-6.85-10.55-7.1-10.72a1 1 0 00-1.12 0 18.726 18.726 0 00-1.96 1.61 1 1 0 001.36 1.46z"></path>
    </svg>
  );
};

UWaterDropSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWaterDropSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWaterDropSlash;