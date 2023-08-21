import React from 'react';
import PropTypes from 'prop-types';

const UExposureAlt = props => {
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
      <path d="M11 6H7a1 1 0 000 2h4a1 1 0 100-2zm8-4H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zM4 18.59V5a1 1 0 011-1h13.59L4 18.59zM20 19a1 1 0 01-1 1H5.41L20 5.41V19zm-7-2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2z"></path>
    </svg>
  );
};

UExposureAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExposureAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExposureAlt;
