import React from 'react';
import PropTypes from 'prop-types';

const UNavigator = props => {
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
      <path d="M20.17 9.23l-14-5.78a3 3 0 00-4 3.7L3.71 12l-1.58 4.85A3 3 0 002.94 20a3 3 0 002 .8 3 3 0 001.15-.23l14.05-5.78a3 3 0 000-5.54l.03-.02zM5.36 18.7a1 1 0 01-1.06-.19 1 1 0 01-.27-1L5.49 13h13.73L5.36 18.7zm.13-7.7L4 6.53a1 1 0 01.27-1 1 1 0 011.12-.23L19.22 11H5.49z"></path>
    </svg>
  );
};

UNavigator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UNavigator.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UNavigator;
