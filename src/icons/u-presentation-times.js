import React from 'react';
import PropTypes from 'prop-types';

const UPresentationTimes = props => {
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
      <path d="M9.29 11.71a1 1 0 001.42 0l1.29-1.3 1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L13.41 9l1.3-1.29a1.004 1.004 0 10-1.42-1.42L12 7.59l-1.29-1.3a1.004 1.004 0 00-1.42 1.42L10.59 9l-1.3 1.29a1 1 0 000 1.42zM21 14h-1V4h1a1 1 0 100-2H3a1 1 0 000 2h1v10H3a1 1 0 000 2h8v1.15l-4.55 3A1 1 0 007 22a.94.94 0 00.55-.17L11 19.55V21a1 1 0 002 0v-1.45l3.45 2.28A.94.94 0 0017 22a1 1 0 00.55-1.83l-4.55-3V16h8a1 1 0 000-2zm-3 0H6V4h12v10z"></path>
    </svg>
  );
};

UPresentationTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPresentationTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPresentationTimes;
