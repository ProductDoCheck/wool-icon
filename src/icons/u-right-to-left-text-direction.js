import React from 'react';
import PropTypes from 'prop-types';

const URightToLeftTextDirection = props => {
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
      <path d="M20.5 17H5.91l1.3-1.29a1.004 1.004 0 00-1.42-1.42l-3 3a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l3 3a1 1 0 001.639-.325 1 1 0 00-.219-1.095L5.91 19H20.5a1 1 0 000-2zm-9-7v4a1 1 0 102 0V4h2v10a1 1 0 102 0V4h1a1 1 0 100-2h-7a4 4 0 100 8zm0-6v4a2 2 0 110-4z"></path>
    </svg>
  );
};

URightToLeftTextDirection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URightToLeftTextDirection.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URightToLeftTextDirection;
