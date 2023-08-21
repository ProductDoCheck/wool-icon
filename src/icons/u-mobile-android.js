import React from 'react';
import PropTypes from 'prop-types';

const UMobileAndroid = props => {
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
      <path d="M12.71 16.29l-.15-.12a.762.762 0 00-.18-.09L12.2 16a1 1 0 00-.91.27 1.15 1.15 0 00-.21.33 1 1 0 001.3 1.31c.12-.058.23-.132.33-.22a.999.999 0 00.21-1.09 1.001 1.001 0 00-.21-.31zM16 2H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H8a1 1 0 01-1-1V5a1 1 0 011-1h8a1 1 0 011 1v14z"></path>
    </svg>
  );
};

UMobileAndroid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMobileAndroid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMobileAndroid;
