import React from 'react';
import PropTypes from 'prop-types';

const UPlane = props => {
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
      <path d="M21.75 12a1 1 0 00-.55-.89l-6.12-3.06v-4a3.08 3.08 0 00-6.16 0v4L2.8 11.11a1 1 0 00-.55.89v3.33a1 1 0 00.43.83 1 1 0 00.92.11l5.32-2V18l-1.82.6a1 1 0 00-.68.95V22a1 1 0 00.3.71 1 1 0 00.7.29h9.17a1 1 0 001-1v-2.5a1 1 0 00-.68-.95L15.08 18v-3.72l5.32 2a1.001 1.001 0 00.92-.11 1 1 0 00.43-.83V12zm-7.31-.1a1 1 0 00-1.36.93v5.84a1 1 0 00.69.95l1.81.6V21H8.41v-.78l1.81-.6a1 1 0 00.69-.95v-5.84a1 1 0 00-1.36-.93l-5.31 2v-1.28l6.11-3.06a1 1 0 00.56-.89V4.08a1.08 1.08 0 012.16 0v4.59a1 1 0 00.56.89l6.11 3.06v1.27l-5.3-1.99z"></path>
    </svg>
  );
};

UPlane.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPlane.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPlane;
