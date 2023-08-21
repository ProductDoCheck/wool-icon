import React from 'react';
import PropTypes from 'prop-types';

const UKeyholeSquareFull = props => {
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
      <path d="M11 11.72V15a1 1 0 002 0v-3.28A2 2 0 0014 10a2 2 0 10-4 0 2 2 0 001 1.72zM21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 18H4V4h16v16z"></path>
    </svg>
  );
};

UKeyholeSquareFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UKeyholeSquareFull.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UKeyholeSquareFull;
