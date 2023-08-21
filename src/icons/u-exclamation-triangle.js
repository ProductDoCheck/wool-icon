import React from 'react';
import PropTypes from 'prop-types';

const UExclamationTriangle = props => {
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
      <path d="M12 16a1 1 0 100 2 1 1 0 000-2zm10.67 1.47l-8.05-14a3 3 0 00-5.24 0l-8 14A3 3 0 003.94 22h16.12a2.999 2.999 0 002.61-4.53zm-1.73 2a1 1 0 01-.88.51H3.94a1 1 0 01-.88-.51 1 1 0 010-1l8-14a1 1 0 011.78 0l8.05 14a1 1 0 01.05 1.02v-.02zM12 8a1 1 0 00-1 1v4a1 1 0 002 0V9a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UExclamationTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExclamationTriangle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExclamationTriangle;
