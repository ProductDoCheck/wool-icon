import React from 'react';
import PropTypes from 'prop-types';

const UParkingSquare = props => {
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
      <path d="M12 6H9a1 1 0 00-1 1v10a1 1 0 102 0v-3h2a4 4 0 100-8zm0 6h-2V8h2a2 2 0 010 4zm7-10H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v14z"></path>
    </svg>
  );
};

UParkingSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UParkingSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UParkingSquare;
