import React from 'react';
import PropTypes from 'prop-types';

const UAngleDoubleUp = props => {
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
      <path d="M12.71 12.54a1 1 0 00-1.42 0l-3 3A1.018 1.018 0 009.71 17L12 14.66 14.29 17a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-3-3.04zm-3-1.08L12 9.16l2.29 2.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-3-3a.999.999 0 00-1.42 0l-3 3a1.004 1.004 0 001.42 1.42z"></path>
    </svg>
  );
};

UAngleDoubleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleDoubleUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleDoubleUp;
