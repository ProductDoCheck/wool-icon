import React from 'react';
import PropTypes from 'prop-types';

const UCodeBranch = props => {
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
      <path d="M17 6.06a3 3 0 00-1.15 5.77A2 2 0 0114 13.06h-4a3.91 3.91 0 00-2 .56V7.88a3 3 0 10-2 0v8.36a3 3 0 102.16.05A2 2 0 0110 15.06h4a4 4 0 003.91-3.16A3 3 0 0017 6.06zm-10-2a1 1 0 110 2 1 1 0 010-2zm0 16a1 1 0 110-2 1 1 0 010 2zm10-10a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UCodeBranch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCodeBranch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCodeBranch;
