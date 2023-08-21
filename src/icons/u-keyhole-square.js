import React from 'react';
import PropTypes from 'prop-types';

const UKeyholeSquare = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v14zM12 8a2 2 0 00-2 2 2 2 0 001 1.72V15a1 1 0 002 0v-3.28A2 2 0 0014 10a2 2 0 00-2-2z"></path>
    </svg>
  );
};

UKeyholeSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UKeyholeSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UKeyholeSquare;