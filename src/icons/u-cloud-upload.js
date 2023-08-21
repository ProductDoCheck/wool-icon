import React from 'react';
import PropTypes from 'prop-types';

const UCloudUpload = props => {
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
      <path d="M18.42 8.22a7 7 0 00-13.36 1.89A4 4 0 006 18a1 1 0 100-2 2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 01.24 5.84 1.002 1.002 0 00.5 1.94 5 5 0 00.17-9.62zm-5.71 2.07a1 1 0 00-.33-.21 1 1 0 00-.76 0 1.001 1.001 0 00-.33.21l-3 3a1.004 1.004 0 001.42 1.42l1.29-1.3V19a1 1 0 002 0v-5.59l1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-3-3z"></path>
    </svg>
  );
};

UCloudUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudUpload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudUpload;
