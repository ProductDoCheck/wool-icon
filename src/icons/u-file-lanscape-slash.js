import React from 'react';
import PropTypes from 'prop-types';

const UFileLanscapeSlash = props => {
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
      <path d="M22 10.94a1.309 1.309 0 00-.06-.27v-.09a1.071 1.071 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.09a.88.88 0 00-.33-.11h-4.39a1 1 0 100 2H14v3a3 3 0 003 3h3v3.34a1 1 0 102 0V11v-.06zM17 10a1 1 0 01-1-1V7.41L18.59 10H17zM3.71 2.29a1.004 1.004 0 10-1.42 1.42l.91.9A3 3 0 002 7v10a3 3 0 003 3h13.59l1.7 1.71a.999.999 0 001.42 0 1 1 0 000-1.42l-18-18zM5 18a1 1 0 01-1-1V7a1 1 0 01.66-.93L16.59 18H5z"></path>
    </svg>
  );
};

UFileLanscapeSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileLanscapeSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileLanscapeSlash;
