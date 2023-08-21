import React from 'react';
import PropTypes from 'prop-types';

const UFileContractDollar = props => {
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
      <path d="M21.71 20.29L20 18.56v-.31a2.75 2.75 0 00-2.75-2.75h-.34l-1.44-1.44a.67.67 0 01.28-.06H19a1 1 0 000-2h-1.5v-1a1 1 0 00-2 0v1a2.74 2.74 0 00-1.47.59l-1.32-1.33a1.004 1.004 0 10-1.42 1.42L13 14.44v.31a2.75 2.75 0 002.75 2.75h.34l1.44 1.44a.67.67 0 01-.28.06H14a1 1 0 000 2h1.5v1a1 1 0 002 0v-1a2.74 2.74 0 001.5-.62l1.32 1.33a1.002 1.002 0 001.42 0 1 1 0 00-.03-1.42zM10 19H5a1 1 0 01-1-1V4a1 1 0 011-1h6v4a1 1 0 001 1h5a1 1 0 00.92-.62 1 1 0 00-.21-1.09l-5-5a1.071 1.071 0 00-.28-.19h-.09a1.31 1.31 0 00-.28-.1H5a3 3 0 00-3 3v14a3 3 0 003 3h5a1 1 0 000-2zm3-14.59L14.59 6H13V4.41z"></path>
    </svg>
  );
};

UFileContractDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileContractDollar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileContractDollar;