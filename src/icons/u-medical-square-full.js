import React from 'react';
import PropTypes from 'prop-types';

const UMedicalSquareFull = props => {
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
      <path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 18H4V4h16v16zM7 14.79h2v2a1 1 0 001 1h4a1 1 0 001-1v-2h2a1 1 0 001-1v-4a1 1 0 00-1-1h-2v-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v2H7a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2a1 1 0 001-1v-2h2v2a1 1 0 001 1h2v2h-2a1 1 0 00-1 1v2h-2v-2a1 1 0 00-1-1H8v-2z"></path>
    </svg>
  );
};

UMedicalSquareFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMedicalSquareFull.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMedicalSquareFull;
