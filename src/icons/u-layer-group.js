import React from 'react';
import PropTypes from 'prop-types';

const ULayerGroup = props => {
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
      <path d="M2.5 8.86l9 5.2a1 1 0 001 0l9-5.2a1 1 0 000-1.73l-9-5.19a1 1 0 00-1 0l-9 5.19a1 1 0 000 1.73zM12 4l7 4-7 4-7-4 7-4zm8.5 7.17L12 16l-8.5-4.87a1 1 0 00-1.465 1.126 1 1 0 00.465.604l9 5.2a1 1 0 001 0l9-5.2a1 1 0 10-1-1.73v.04zm0 4L12 20l-8.5-4.87a1 1 0 00-1.465 1.126 1 1 0 00.465.604l9 5.2a1 1 0 001 0l9-5.2a1 1 0 10-1-1.73v.04z"></path>
    </svg>
  );
};

ULayerGroup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULayerGroup.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULayerGroup;
