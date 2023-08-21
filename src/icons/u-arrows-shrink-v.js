import React from 'react';
import PropTypes from 'prop-types';

const UArrowsShrinkV = props => {
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
      <path d="M13.79 10.21a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1.004 1.004 0 001.42 1.42l.79-.8v5.18l-.79-.8a1.004 1.004 0 10-1.42 1.42l2.5 2.5a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1.004 1.004 0 10-1.42-1.42l-.79.8V9.41l.79.8zM7 4h10a1 1 0 100-2H7a1 1 0 000 2zm10 16H7a1 1 0 000 2h10a1 1 0 000-2z"></path>
    </svg>
  );
};

UArrowsShrinkV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowsShrinkV.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowsShrinkV;
