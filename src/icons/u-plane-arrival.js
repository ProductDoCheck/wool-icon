import React from 'react';
import PropTypes from 'prop-types';

const UPlaneArrival = props => {
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
      <path d="M21.12 16.23a5 5 0 00-2.3-3L16.71 12l-.48-5.47a1 1 0 00-.49-.78l-3-1.72a1 1 0 00-1 0 1 1 0 00-.52.84l-.15 3.9-1.75-1-2.86-3.85a1 1 0 00-1.78.41l-.87 4.61a3 3 0 001.39 3.29l14.06 8.11a1 1 0 001.36-.34 4.91 4.91 0 00.5-3.77zM19.24 18L6.2 10.5a1 1 0 01-.44-1.13l.46-2.44 1.66 2.2a1 1 0 00.3.27l3.35 1.94a1 1 0 001.5-.83l.16-3.9 1.09.63.48 5.47a.999.999 0 00.5.78L17.82 15a2.911 2.911 0 011.36 1.78c.111.397.132.814.06 1.22z"></path>
    </svg>
  );
};

UPlaneArrival.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPlaneArrival.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPlaneArrival;
