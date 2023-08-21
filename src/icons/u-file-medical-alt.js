import React from 'react';
import PropTypes from 'prop-types';

const UFileMedicalAlt = props => {
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
      <path d="M18 18a1 1 0 00-1 1 1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v1a1 1 0 002 0V9v-.06a1.307 1.307 0 00-.06-.27.323.323 0 000-.09 1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.1a1.139 1.139 0 00-.3-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3 1 1 0 00-1-1zM13 5.41L15.59 8H14a1 1 0 01-1-1V5.41zM20 14h-2.5a1 1 0 00-.71.29l-1.24 1.25-2.8-3.2a1 1 0 00-1.46-.05L9.59 14H8a1 1 0 000 2h2a1 1 0 00.71-.29L12 14.46l2.8 3.2a.999.999 0 00.72.34 1 1 0 00.71-.29L17.91 16H20a1 1 0 000-2z"></path>
    </svg>
  );
};

UFileMedicalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileMedicalAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileMedicalAlt;