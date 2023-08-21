import React from 'react';
import PropTypes from 'prop-types';

const URopeWay = props => {
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
      <path d="M19 6.5h-6V4h4.62a1 1 0 100-2H6.38a1 1 0 000 2H11v2.5H5a3 3 0 00-3 3V19a3 3 0 003 3h14a3 3 0 003-3V9.5a3 3 0 00-3-3zM11 20H5a1 1 0 01-1-1v-3.75h7a.496.496 0 000 .13v4.5a.535.535 0 000 .12zm9-1a1 1 0 01-1 1h-6a.535.535 0 000-.12v-4.5a.496.496 0 000-.13h7V19zm0-5.75H4V9.5a1 1 0 011-1h14a1 1 0 011 1v3.75z"></path>
    </svg>
  );
};

URopeWay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URopeWay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URopeWay;
