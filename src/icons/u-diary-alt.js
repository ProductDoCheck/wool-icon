import React from 'react';
import PropTypes from 'prop-types';

const UDiaryAlt = props => {
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
      <path d="M17 2H5a1 1 0 00-1 1v18a1 1 0 001 1h12a3 3 0 003-3V5a3 3 0 00-3-3zM8 20H6V4h2v16zm10-1a1 1 0 01-1 1h-7V4h7a1 1 0 011 1v14z"></path>
    </svg>
  );
};

UDiaryAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDiaryAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDiaryAlt;
