import React from 'react';
import PropTypes from 'prop-types';

const UDesktop = props => {
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
      <path d="M19 3H5a3 3 0 00-3 3v8a3 3 0 003 3h6v2H7a1 1 0 000 2h10a1 1 0 000-2h-4v-2h6a3 3 0 003-3V6a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1v8z"></path>
    </svg>
  );
};

UDesktop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDesktop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDesktop;
