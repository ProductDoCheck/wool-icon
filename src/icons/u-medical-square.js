import React from 'react';
import PropTypes from 'prop-types';

const UMedicalSquare = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v14zM17 9h-2V7a1 1 0 00-1-1h-4a1 1 0 00-1 1v2H7a1 1 0 00-1 1v4a1 1 0 001 1h2v2a1 1 0 001 1h4a1 1 0 001-1v-2h2a1 1 0 001-1v-4a1 1 0 00-1-1zm-1 4h-2a1 1 0 00-1 1v2h-2v-2a1 1 0 00-1-1H8v-2h2a1 1 0 001-1V8h2v2a1 1 0 001 1h2v2z"></path>
    </svg>
  );
};

UMedicalSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMedicalSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMedicalSquare;
