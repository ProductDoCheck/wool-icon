import React from 'react';
import PropTypes from 'prop-types';

const UImageUpload = props => {
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
      <path d="M19 13a1 1 0 00-1 1v.38l-1.48-1.48a2.79 2.79 0 00-3.93 0l-.7.7-2.48-2.48a2.85 2.85 0 00-3.93 0L4 12.6V7a1 1 0 011-1h7a1 1 0 100-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.3 4.3H5zm13-1a.89.89 0 01-.18.53L13.31 15l.7-.7a.77.77 0 011.1 0L18 17.21V19zm4.71-14.71l-3-3a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-3 3A1.005 1.005 0 0016 6.004c.266 0 .522-.106.71-.294L18 4.41V10a1 1 0 002 0V4.41l1.29 1.3a1 1 0 001.639-.325 1 1 0 00-.219-1.095z"></path>
    </svg>
  );
};

UImageUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageUpload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageUpload;