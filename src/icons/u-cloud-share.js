import React from 'react';
import PropTypes from 'prop-types';

const UCloudShare = props => {
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
      <path d="M14.5 15a2 2 0 10-2-2l-1.9.87a2 2 0 10-1.1 3.67c.322 0 .639-.082.92-.24l2.1 1a2 2 0 10.8-1.84l-1.75-.8 1.91-.88a2 2 0 001.02.22zm3.92-7.78A7 7 0 005.06 9.11a4 4 0 00-.38 7.66c.104.032.212.049.32.05a1.013 1.013 0 10.32-2A2 2 0 014 13a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1.004 1.004 0 001 1.74A5 5 0 0022 12a5 5 0 00-3.58-4.78z"></path>
    </svg>
  );
};

UCloudShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudShare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudShare;
