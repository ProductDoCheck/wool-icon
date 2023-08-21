import React from 'react';
import PropTypes from 'prop-types';

const UBellSchool = props => {
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
      <path d="M21 8a2 2 0 10-2.27 2 4.49 4.49 0 01-3 5.85 3 3 0 00-1.3-1.43 7.001 7.001 0 10-10.9 0A3 3 0 002 17v1a3 3 0 003 3h8a3 3 0 003-3v-.19a6.47 6.47 0 004.58-8.59A2 2 0 0021 8zm-7 10a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1h.41a6.94 6.94 0 007.18 0H13a1 1 0 011 1v1zm-5-3a5 5 0 110-9.999A5 5 0 019 15zm0-6a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UBellSchool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBellSchool.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBellSchool;
