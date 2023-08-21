import React from 'react';
import PropTypes from 'prop-types';

const UCloudDownload = props => {
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
      <path d="M14.29 17.29L13 18.59V13a1 1 0 10-2 0v5.59l-1.29-1.3a1.004 1.004 0 00-1.42 1.42l3 3a1 1 0 00.33.21.94.94 0 00.76 0 .999.999 0 00.33-.21l3-3a1.004 1.004 0 10-1.42-1.42zm4.13-11.07A7 7 0 005.06 8.11 4 4 0 006 16a1 1 0 100-2 2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 01.24 5.84 1.001 1.001 0 10.5 1.94 5 5 0 00.17-9.62z"></path>
    </svg>
  );
};

UCloudDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudDownload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudDownload;
