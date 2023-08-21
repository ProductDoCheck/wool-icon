import React from 'react';
import PropTypes from 'prop-types';

const UBorderLeft = props => {
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
      <path d="M11.5 19a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2.002 1 1 0 000-2.002zm0-4a1 1 0 100 2.002 1 1 0 000-2.002zm-8-8a1 1 0 00-1 1v16a1 1 0 102 0V4a1 1 0 00-1-1zm16 2a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 100 2 1 1 0 000-2zm-4 4a1 1 0 100 2.001A1 1 0 007.5 11zm0 8a1 1 0 100 2 1 1 0 000-2zm0-16a1 1 0 100 2 1 1 0 000-2zm12 8a1 1 0 100 2.002 1 1 0 000-2.002zm0 4a1 1 0 100 2.002 1 1 0 000-2.002zm-8-12a1 1 0 100 2 1 1 0 000-2zm8 16a1 1 0 100 2 1 1 0 000-2zm0-12a1 1 0 100 2 1 1 0 000-2zm-4-4a1 1 0 100 2 1 1 0 000-2zm0 16a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2.002 1 1 0 000-2.002z"></path>
    </svg>
  );
};

UBorderLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderLeft;
