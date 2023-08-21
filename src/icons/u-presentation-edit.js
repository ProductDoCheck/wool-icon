import React from 'react';
import PropTypes from 'prop-types';

const UPresentationEdit = props => {
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
      <path d="M9.41 13h2.42a1 1 0 00.71-.29l3.58-3.58a1 1 0 000-1.41l-2.42-2.4a1 1 0 00-1.41 0L8.71 8.9a1 1 0 00-.3.7V12a1 1 0 001 1zm1-3L13 7.44l1 1L11.42 11h-1l-.01-1zM21 14h-1V4h1a1 1 0 100-2H3a1 1 0 000 2h1v10H3a1 1 0 000 2h8v1.15l-4.55 3A1 1 0 007 22a.94.94 0 00.55-.17L11 19.55V21a1 1 0 002 0v-1.45l3.45 2.28A.94.94 0 0017 22a1 1 0 00.55-1.83l-4.55-3V16h8a1 1 0 000-2zm-3 0H6V4h12v10z"></path>
    </svg>
  );
};

UPresentationEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPresentationEdit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPresentationEdit;
