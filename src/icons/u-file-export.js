import React from 'react';
import PropTypes from 'prop-types';

const UFileExport = props => {
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
      <path d="M20.92 15.62a1.15 1.15 0 00-.21-.33l-3-3a1.004 1.004 0 10-1.42 1.42l1.3 1.29H12a1 1 0 000 2h5.59l-1.3 1.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l3-3a.93.93 0 00.21-.33 1 1 0 000-.76zM14 20H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h4a1 1 0 00.92-.62 1 1 0 00-.21-1.09l-6-6a1.071 1.071 0 00-.28-.19h-.09l-.28-.1H6a3 3 0 00-3 3v14a3 3 0 003 3h8a1 1 0 000-2zM13 5.41L15.59 8H14a1 1 0 01-1-1V5.41z"></path>
    </svg>
  );
};

UFileExport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileExport.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileExport;
