import React from 'react';
import PropTypes from 'prop-types';

const UCalculator = props => {
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
      <path d="M12.71 17.29a1.007 1.007 0 00-.16-.12.561.561 0 00-.17-.09.602.602 0 00-.19-.06.93.93 0 00-.57.06.9.9 0 00-.54.54.84.84 0 00-.08.38 1 1 0 00.07.38c.058.12.132.23.22.33A1 1 0 0012 19a.84.84 0 00.38-.08 1.15 1.15 0 00.33-.21A1 1 0 0013 18a1.001 1.001 0 00-.08-.38 1 1 0 00-.21-.33zm-4.16-4.12a.56.56 0 00-.17-.09.6.6 0 00-.19-.08.859.859 0 00-.39 0l-.18.06-.18.09-.15.12a1.05 1.05 0 00-.216 1.114 1 1 0 00.216.326c.097.088.209.16.33.21A1 1 0 009 14a1.05 1.05 0 00-.29-.71l-.16-.12zm.16 4.12a1 1 0 00-.33-.21A1 1 0 007.8 17l-.18.06a.762.762 0 00-.18.09 1.577 1.577 0 00-.15.12 1 1 0 00-.21.33.94.94 0 000 .76A1 1 0 008 19a.84.84 0 00.38-.08 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1 1 0 00-.21-.33zm2.91-4.21a1 1 0 00-.33.21A1.05 1.05 0 0011 14a1 1 0 001.38.92 1.15 1.15 0 00.33-.21A1 1 0 0013 14a1.05 1.05 0 00-.29-.71.999.999 0 00-1.09-.21zm5.09 4.21a1.15 1.15 0 00-.33-.21 1 1 0 00-1.09.21 1 1 0 00-.21.33.94.94 0 000 .76c.05.121.122.233.21.33A1 1 0 0016 19a.84.84 0 00.38-.08 1.15 1.15 0 00.33-.21.999.999 0 00.21-1.09 1 1 0 00-.21-.33zM16 5H8a1 1 0 00-1 1v4a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1zm-1 4H9V7h6v2zm3-8H6a3 3 0 00-3 3v16a3 3 0 003 3h12a3 3 0 003-3V4a3 3 0 00-3-3zm1 19a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h12a1 1 0 011 1v16zm-2.45-6.83a.561.561 0 00-.17-.09.602.602 0 00-.19-.06.859.859 0 00-.39 0l-.18.06-.18.09-.15.12A1.05 1.05 0 0015 14a1 1 0 001.38.92 1.15 1.15 0 00.33-.21A1 1 0 0017 14a1.05 1.05 0 00-.29-.71l-.16-.12z"></path>
    </svg>
  );
};

UCalculator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCalculator.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCalculator;