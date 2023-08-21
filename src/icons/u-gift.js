import React from 'react';
import PropTypes from 'prop-types';

const UGift = props => {
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
      <path d="M18 7h-.35A3.45 3.45 0 0018 5.5a3.49 3.49 0 00-6-2.44A3.49 3.49 0 006 5.5 3.45 3.45 0 006.35 7H6a3 3 0 00-3 3v2a1 1 0 001 1h1v6a3 3 0 003 3h8a3 3 0 003-3v-6h1a1 1 0 001-1v-2a3 3 0 00-3-3zm-7 13H8a1 1 0 01-1-1v-6h4v7zm0-9H5v-1a1 1 0 011-1h5v2zm0-4H9.5A1.5 1.5 0 1111 5.5V7zm2-1.5A1.5 1.5 0 1114.5 7H13V5.5zM17 19a1 1 0 01-1 1h-3v-7h4v6zm2-8h-6V9h5a1 1 0 011 1v1z"></path>
    </svg>
  );
};

UGift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGift.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGift;
