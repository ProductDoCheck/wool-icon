import React from 'react';
import PropTypes from 'prop-types';

const UMobileAndroidAlt = props => {
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
      <path d="M16 2H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10v1zm0-3H7V5a1 1 0 011-1h8a1 1 0 011 1v11z"></path>
    </svg>
  );
};

UMobileAndroidAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMobileAndroidAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMobileAndroidAlt;
