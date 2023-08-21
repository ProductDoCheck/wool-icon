import React from 'react';
import PropTypes from 'prop-types';

const ULayers = props => {
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
      <path d="M2.5 10.56l9 5.2a1 1 0 001 0l9-5.2a1 1 0 000-1.73l-9-5.2a1 1 0 00-1 0l-9 5.2a1 1 0 000 1.73zM12 5.65l7 4-7 4.05-7-4.01 7-4.04zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 10-1 1.73l9 5.2a1 1 0 001 0l9-5.2a1 1 0 10-1-1.73z"></path>
    </svg>
  );
};

ULayers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULayers.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULayers;
