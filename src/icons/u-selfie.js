import React from 'react';
import PropTypes from 'prop-types';

const USelfie = props => {
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
      <path d="M16 2H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10v1zm-5-5a3 3 0 012.82 2H9.18A3 3 0 0112 14zm-1-3a1 1 0 112 0 1 1 0 01-2 0zm6 5h-.1a5 5 0 00-2.42-3.32A3 3 0 0015 11a3 3 0 00-6 0 3 3 0 00.52 1.68A5 5 0 007.1 16H7V5a1 1 0 011-1h8a1 1 0 011 1v11zM12 5a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

USelfie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USelfie.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USelfie;
