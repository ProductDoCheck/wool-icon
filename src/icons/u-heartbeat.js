import React from 'react';
import PropTypes from 'prop-types';

const UHeartbeat = props => {
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
      <path d="M21 10.41h-2.5a1.001 1.001 0 00-.71.3L16.55 12l-2.8-3.19a1 1 0 00-1.46 0l-1.7 1.7H9a1 1 0 000 2h2a.998.998 0 00.71-.29L13 10.88l2.8 3.19a1 1 0 00.72.34.998.998 0 00.71-.29l1.7-1.71H21a1 1 0 100-2zm-7.39 5.3l-1.9 1.9a1.002 1.002 0 01-1.42 0L5.08 12.4a3.69 3.69 0 010-5.22 3.69 3.69 0 015.21 0 1 1 0 001.42 0 3.78 3.78 0 015.21 0c.223.226.418.478.58.75a1 1 0 001.72-1 6.001 6.001 0 00-.88-1.13A5.68 5.68 0 0011 5.17a5.68 5.68 0 00-8.566 6.787A5.62 5.62 0 003.67 13.79L8.88 19a3 3 0 004.24 0L15 17.12a1 1 0 000-1.41 1 1 0 00-1.39 0z"></path>
    </svg>
  );
};

UHeartbeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeartbeat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeartbeat;
