import React from 'react';
import PropTypes from 'prop-types';

const UAngleDoubleLeft = props => {
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
      <path d="M11.46 8.29a.999.999 0 00-1.42 0l-3 3a1 1 0 000 1.42l3 3a1.001 1.001 0 001.639-.325 1 1 0 00-.22-1.095L9.16 12l2.3-2.29a.998.998 0 000-1.42zm3.2 3.71L17 9.71a1.004 1.004 0 10-1.42-1.42l-3 3a1.002 1.002 0 000 1.42l3 3a1.001 1.001 0 001.639-.325 1 1 0 00-.22-1.095L14.66 12z"></path>
    </svg>
  );
};

UAngleDoubleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleDoubleLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleDoubleLeft;
