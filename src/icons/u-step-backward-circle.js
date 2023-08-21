import React from 'react';
import PropTypes from 'prop-types';

const UStepBackwardCircle = props => {
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
      <path d="M15.5 7.38a2 2 0 00-2 0l-4 2.31V8a1 1 0 10-2 0v8a1 1 0 102 0v-1.69l4 2.31a2 2 0 003-1.73V9.11a2 2 0 00-1-1.73zm-1 7.51L9.5 12l5-2.89v5.78zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UStepBackwardCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStepBackwardCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStepBackwardCircle;
