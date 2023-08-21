import React from 'react';
import PropTypes from 'prop-types';

const UMonitorHeartRate = props => {
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
      <path d="M9 19c.13-.002.26-.029.38-.08a1.15 1.15 0 00.33-.21 1 1 0 00.12-.16.561.561 0 00.09-.17.64.64 0 00.08-.18 1.362 1.362 0 000-.2 1 1 0 00-.08-.38.9.9 0 00-.54-.54A1 1 0 008.8 17l-.18.06a.56.56 0 00-.17.09c-.057.035-.11.075-.16.12a1 1 0 00-.21.33A1 1 0 008 18a1 1 0 001 1zm-3.71-.29c.097.088.209.16.33.21.12.051.25.078.38.08h.19c.066-.01.13-.03.19-.06a.762.762 0 00.18-.09l.15-.12a1.15 1.15 0 00.21-.33A.84.84 0 007 18a1.36 1.36 0 000-.2.64.64 0 00-.06-.18.561.561 0 00-.09-.17 1 1 0 00-.12-.16 1 1 0 00-1.09-.21 1 1 0 00-.33.21 1 1 0 00-.12.16.561.561 0 00-.09.17.64.64 0 00-.1.18 1.36 1.36 0 000 .2 1 1 0 00.08.38c.05.121.122.233.21.33zM19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-3h16v3zm0-5H4v-4h4a1 1 0 00.71-.29L10 8.46l2.8 3.2a.999.999 0 00.72.34 1 1 0 00.71-.29L15.91 10H20v4zm0-6h-4.5a1 1 0 00-.71.29l-1.24 1.25-2.8-3.2a1 1 0 00-1.46 0L7.59 8H4V5a1 1 0 011-1h14a1 1 0 011 1v3z"></path>
    </svg>
  );
};

UMonitorHeartRate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMonitorHeartRate.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMonitorHeartRate;
