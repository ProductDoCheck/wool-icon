import React from 'react';
import PropTypes from 'prop-types';

const UCarSlash = props => {
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
      <path d="M7 13a1 1 0 100 2.001A1 1 0 007 13zm12.76-3.89l-1.35-4.06a3 3 0 00-2.85-2h-5.9a1 1 0 000 2h5.9a1 1 0 011 .69L17.61 9h-1.95a1 1 0 100 2H19a1 1 0 011 1v3.34a1 1 0 002 0V12a3 3 0 00-2.24-2.89zm-16-6.82a1.022 1.022 0 00-1.47 1.42l2.82 2.81-.87 2.59A3 3 0 002 12v4a3 3 0 002 2.82V20a1 1 0 102 0v-1h11.59l.41.41V20a1 1 0 001 1 .91.91 0 00.46-.13l.83.84a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-17.95-18zm3 5.81l.9.9H6.39l.37-.9zM5 17a1 1 0 01-1-1v-4a1 1 0 011-1h4.59l2 2H11a1 1 0 000 2h2a.91.91 0 00.46-.13L15.59 17H5z"></path>
    </svg>
  );
};

UCarSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCarSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCarSlash;
