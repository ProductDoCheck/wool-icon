import React from 'react';
import PropTypes from 'prop-types';

const UMapMarkerEdit = props => {
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
      <path d="M20.46 9.63A8.5 8.5 0 106 16.46l5.3 5.31a1.002 1.002 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83zm-3.86 5.42l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24zm-2.81-8.8a1 1 0 00-1.42 0L8.79 9.83a1 1 0 00-.29.7V13a1 1 0 001 1h2.42a1 1 0 00.71-.29l3.58-3.58a1 1 0 000-1.41l-2.42-2.47zM11.51 12h-1v-1l2.58-2.58 1 1L11.51 12z"></path>
    </svg>
  );
};

UMapMarkerEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMapMarkerEdit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMapMarkerEdit;