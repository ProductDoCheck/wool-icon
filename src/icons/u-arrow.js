import React from 'react';
import PropTypes from 'prop-types';

const UArrow = props => {
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
      <path d="M9.71 6.29a1 1 0 00-1.42 0l-5 5a1 1 0 000 1.42l5 5a1 1 0 001.639-.325 1 1 0 00-.22-1.095L5.41 12l4.3-4.29a1 1 0 000-1.42zm11 5l-5-5a1.004 1.004 0 10-1.42 1.42l4.3 4.29-4.3 4.29a1.002 1.002 0 00.325 1.639.999.999 0 001.095-.219l5-5a.999.999 0 000-1.42z"></path>
    </svg>
  );
};

UArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrow;
