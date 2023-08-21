import React from 'react';
import PropTypes from 'prop-types';

const UCarWash = props => {
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
      <path d="M7.5 4a1 1 0 00.71-.29l1-1a1.004 1.004 0 00-1.42-1.42l-1 1A1 1 0 007.5 4zm4 0a1 1 0 00.71-.29l1-1a1.004 1.004 0 10-1.42-1.42l-1 1A1.001 1.001 0 0011.5 4zm4 0a1 1 0 00.71-.29l1-1A1.005 1.005 0 0016.5.996a1.004 1.004 0 00-.71.294l-1 1A1.001 1.001 0 0015.5 4zm2.42 11.62a.762.762 0 00-.09-.18l-.12-.15-.15-.12a.762.762 0 00-.18-.09.602.602 0 00-.19-.06 1 1 0 00-.9.27 1.573 1.573 0 00-.12.15.762.762 0 00-.09.18.64.64 0 00-.06.18 1.362 1.362 0 000 .2 1 1 0 00.62.92.999.999 0 00.36.08 1 1 0 001-1 1.362 1.362 0 000-.2.639.639 0 00-.08-.18zm1.84-4.51L18.4 7.05a3 3 0 00-2.84-2H8.44a3 3 0 00-2.84 2l-1.36 4.06A3 3 0 002 14v4a3 3 0 002 2.82V22a1 1 0 102 0v-1h12v1a1 1 0 002 0v-1.18A3 3 0 0022 18v-4a3 3 0 00-2.24-2.89zM7.49 7.68A1 1 0 018.44 7h7.12a1 1 0 011 .68L17.61 11H6.39l1.1-3.32zM20 18a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h14a1 1 0 011 1v4zm-7-3h-2a1 1 0 000 2h2a1 1 0 000-2zm-5.08.62a.76.76 0 00-.09-.18l-.12-.15a1 1 0 00-1.09-.21 1 1 0 00-.33.21 1.575 1.575 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.08.18 1.36 1.36 0 000 .2 1 1 0 002 0 1.36 1.36 0 000-.2.64.64 0 00-.08-.18z"></path>
    </svg>
  );
};

UCarWash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCarWash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCarWash;
