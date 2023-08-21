import React from 'react';
import PropTypes from 'prop-types';

const UWatch = props => {
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
      <path d="M17 6.78V3a1 1 0 00-1-1H8a1 1 0 00-1 1v3.78A3 3 0 006 9v6a3 3 0 001 2.22V21a1 1 0 001 1h8a1 1 0 001-1v-3.78A3 3 0 0018 15V9a3 3 0 00-1-2.22zM9 4h6v2H9V4zm6 16H9v-2h6v2zm1-5a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1h6a1 1 0 011 1v6z"></path>
    </svg>
  );
};

UWatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWatch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWatch;
