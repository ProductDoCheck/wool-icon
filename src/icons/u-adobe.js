import React from 'react';
import PropTypes from 'prop-types';

const UAdobe = props => {
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
      <path d="M9.07 17.28h2.78l1.75 3.44h2.54L12 9.87l-2.93 7.41zM2 3v18L9.42 3H2zm12.48 0L22 20.81V3h-7.52z"></path>
    </svg>
  );
};

UAdobe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAdobe.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAdobe;
