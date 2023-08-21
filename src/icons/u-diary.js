import React from 'react';
import PropTypes from 'prop-types';

const UDiary = props => {
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
      <path d="M17 2H5a1 1 0 00-1 1v16a1 1 0 001 1h1v1a1 1 0 102 0v-1h9a3 3 0 003-3V5a3 3 0 00-3-3zm-3 16H6V4h8v14zm4-1a1 1 0 01-1 1h-1V4h1a1 1 0 011 1v12z"></path>
    </svg>
  );
};

UDiary.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDiary.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDiary;
