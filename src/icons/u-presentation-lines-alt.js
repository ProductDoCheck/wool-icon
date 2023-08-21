import React from 'react';
import PropTypes from 'prop-types';

const UPresentationLinesAlt = props => {
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
      <path d="M10.17 10.55a1 1 0 00.73.45 1.001 1.001 0 00.81-.29l1.13-1.14 1.33 2A1 1 0 0015 12a.94.94 0 00.55-.17 1 1 0 00.28-1.38l-2-3A1 1 0 0013.1 7a1 1 0 00-.81.29l-1.13 1.14-1.33-2a1 1 0 10-1.66 1.1l2 3.02zM21 14h-1V4h1a1 1 0 100-2H3a1 1 0 000 2h1v10H3a1 1 0 000 2h8v1.15l-4.55 3A1 1 0 007 22a.94.94 0 00.55-.17L11 19.55V21a1 1 0 002 0v-1.45l3.45 2.28A.94.94 0 0017 22a1 1 0 00.55-1.83l-4.55-3V16h8a1 1 0 000-2zm-3 0H6V4h12v10z"></path>
    </svg>
  );
};

UPresentationLinesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPresentationLinesAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPresentationLinesAlt;
