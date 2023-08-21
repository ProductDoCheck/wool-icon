import React from 'react';
import PropTypes from 'prop-types';

const UBusSchool = props => {
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
      <path d="M1 12.5v4a1 1 0 001 1h1a3 3 0 006 0h6a3 3 0 006 0h1a1 1 0 001-1v-10a3 3 0 00-3-3H8.44A3 3 0 005.6 5.55L4.16 9.86l-2.71 1.81a1 1 0 00-.45.83zm20-3h-2v-4h1a1 1 0 011 1v3zm-4 8a1 1 0 112 0 1 1 0 01-2 0zm-2-6h6v4h-.78a3 3 0 00-4.44 0H15v-4zm0-6h2v4h-2v-4zm-4 6h2v4h-2v-4zm0-6h2v4h-2v-4zm-2 4H6.39l1.1-3.32a1 1 0 01.95-.68H9v4zm-4 8a1 1 0 112 0 1 1 0 01-2 0zM3 13l2.3-1.5H9v4h-.78a3 3 0 00-4.44 0H3V13z"></path>
    </svg>
  );
};

UBusSchool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBusSchool.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBusSchool;
