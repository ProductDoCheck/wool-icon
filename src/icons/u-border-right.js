import React from 'react';
import PropTypes from 'prop-types';

const UBorderRight = props => {
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
      <path d="M4.5 7a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2 1 1 0 000-2zm4 16a1 1 0 100 2 1 1 0 000-2zm-4 0a1 1 0 100 2 1 1 0 000-2zm4-8a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2 1 1 0 000-2zm-4 8a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm12-12a1 1 0 100 2 1 1 0 000-2zm0 8a1 1 0 100 2 1 1 0 000-2zm-4 8a1 1 0 100 2 1 1 0 000-2zm0-16a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 00-1 1v16a1 1 0 002 0V4a1 1 0 00-1-1zm-4 16a1 1 0 100 2 1 1 0 000-2zm-4-12a1 1 0 100 2 1 1 0 000-2zm0 8a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UBorderRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderRight;
