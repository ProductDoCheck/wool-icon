import React from 'react';
import PropTypes from 'prop-types';

const UCloudSun = props => {
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
      <path d="M21 9h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 5.8V5a1 1 0 00-2 0v.8a4.1 4.1 0 00-1.26.52l-.57-.56a1 1 0 00-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.85 5.85 0 0010.5 8a6 6 0 00-5.94 5.13A3.5 3.5 0 005.5 20h9.17A4.33 4.33 0 0019 15.67a4.19 4.19 0 00-.3-1.55l.13.12a1 1 0 001.41 0 1 1 0 000-1.41l-.56-.56A4.25 4.25 0 0020.2 11h.8a1 1 0 000-2zm-6.33 9H5.5a1.5 1.5 0 110-3 1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.33 2.33 0 01-.39 4.62zm3-6.35c-.176.166-.38.301-.6.4a4.494 4.494 0 00-1.07-.51 6.12 6.12 0 00-2.09-2.49c.11-.257.265-.49.46-.69a2.42 2.42 0 013.29 0 2.37 2.37 0 010 3.3l.01-.01z"></path>
    </svg>
  );
};

UCloudSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudSun.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudSun;
