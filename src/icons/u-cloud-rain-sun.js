import React from 'react';
import PropTypes from 'prop-types';

const UCloudRainSun = props => {
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
      <path d="M21 7h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 3.8V3a1 1 0 00-2 0v.8a4.1 4.1 0 00-1.26.52l-.57-.56a1 1 0 00-1.41 1.41l.56.57c-.09.15-.16.32-.24.48A5.85 5.85 0 0010.5 6a6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58c.127.05.263.078.4.08a1 1 0 00.4-1.92A1.48 1.48 0 014 14.5 1.5 1.5 0 015.5 13a1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.32 2.32 0 01.94 4.23 1.005 1.005 0 001.1 1.68 4.34 4.34 0 001.6-5.17l.13.12a1 1 0 001.41 0 1 1 0 000-1.41l-.56-.56A4.25 4.25 0 0020.2 9h.8a1 1 0 100-2zm-3.34 2.65a2.09 2.09 0 01-.6.42A4.17 4.17 0 0016 9.54a6.12 6.12 0 00-2.09-2.49 2.42 2.42 0 01.46-.7 2.43 2.43 0 013.3 0 2.37 2.37 0 010 3.3h-.01zM8.5 14a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm4-1a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UCloudRainSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudRainSun.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudRainSun;
