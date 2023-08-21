import React from 'react';
import PropTypes from 'prop-types';

const UStepForward = props => {
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
      <path d="M8.71 7.29a1.004 1.004 0 10-1.42 1.42l3.3 3.29-3.3 3.29a1 1 0 000 1.42.998.998 0 001.42 0l4-4a1 1 0 000-1.42l-4-4zM16 7a1 1 0 00-1 1v8a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UStepForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStepForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStepForward;
