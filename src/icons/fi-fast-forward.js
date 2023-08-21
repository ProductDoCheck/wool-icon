import React from 'react';
import PropTypes from 'prop-types';

const FiFastForward = props => {
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
      <path d="M13 19l9-7-9-7v14z"></path>
      <path d="M2 19l9-7-9-7v14z"></path>
    </svg>
  );
};

FiFastForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiFastForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiFastForward;
