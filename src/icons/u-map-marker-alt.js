import React from 'react';
import PropTypes from 'prop-types';

const UMapMarkerAlt = props => {
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
      <path d="M20.46 9.63A8.5 8.5 0 007.3 3.36a8.56 8.56 0 00-3.76 6.27A8.46 8.46 0 006 16.46l5.3 5.31a1.002 1.002 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.42l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24zM12 6a4.5 4.5 0 104.5 4.5A4.51 4.51 0 0012 6zm0 7a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"></path>
    </svg>
  );
};

UMapMarkerAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMapMarkerAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMapMarkerAlt;
