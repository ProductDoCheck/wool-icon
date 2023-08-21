import React from 'react';
import PropTypes from 'prop-types';

const UArrowsShrinkH = props => {
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
      <path d="M17.71 11.29l-2.5-2.5a1.004 1.004 0 00-1.42 1.42l.8.79H9.41l.8-.79a1.004 1.004 0 10-1.42-1.42l-2.5 2.5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l2.5 2.5a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-.8-.79h5.18l-.8.79a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l2.5-2.5a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33zM3 6a1 1 0 00-1 1v10a1 1 0 102 0V7a1 1 0 00-1-1zm18 0a1 1 0 00-1 1v10a1 1 0 002 0V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UArrowsShrinkH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowsShrinkH.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowsShrinkH;
