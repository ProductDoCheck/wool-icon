import React from 'react';
import PropTypes from 'prop-types';

const UPresentationPlay = props => {
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
      <path d="M21 14h-1V4h1a1 1 0 100-2H3a1 1 0 000 2h1v10H3a1 1 0 000 2h8v1.15l-4.55 3A1 1 0 007 22a.94.94 0 00.55-.17L11 19.55V21a1 1 0 002 0v-1.45l3.45 2.28A.94.94 0 0017 22a1 1 0 00.55-1.83l-4.55-3V16h8a1 1 0 000-2zm-3 0H6V4h12v10zm-8.39-1.74a1.73 1.73 0 001.76 0l3-1.74a1.76 1.76 0 000-3l-3-1.74a1.73 1.73 0 00-1.76 0 1.71 1.71 0 00-.87 1.52v3.48a1.71 1.71 0 00.87 1.48zm1.13-4.58L13 9l-2.28 1.32.02-2.64z"></path>
    </svg>
  );
};

UPresentationPlay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPresentationPlay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPresentationPlay;
