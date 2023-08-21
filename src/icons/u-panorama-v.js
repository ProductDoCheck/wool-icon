import React from 'react';
import PropTypes from 'prop-types';

const UPanoramaV = props => {
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
      <path d="M17.27 12a21.11 21.11 0 011.64-8.58 1 1 0 00-.07-1A1 1 0 0018 2H6a1 1 0 00-.84.46 1 1 0 00-.07 1A21.11 21.11 0 016.73 12a21.11 21.11 0 01-1.64 8.58 1 1 0 00.07 1A1.001 1.001 0 006 22h12a1 1 0 00.84-.46 1 1 0 00.07-1A21.111 21.111 0 0117.27 12zm-.75 8h-9a24.77 24.77 0 001.25-8 24.77 24.77 0 00-1.29-8h9a24.773 24.773 0 00-1.25 8 24.77 24.77 0 001.29 8z"></path>
    </svg>
  );
};

UPanoramaV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPanoramaV.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPanoramaV;
