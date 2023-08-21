import React from 'react';
import PropTypes from 'prop-types';

const UDatabase = props => {
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
      <path d="M8 16.5a1 1 0 100 2 1 1 0 000-2zM12 2C8 2 4 3.37 4 6v12c0 2.63 4 4 8 4s8-1.37 8-4V6c0-2.63-4-4-8-4zm6 16c0 .71-2.28 2-6 2s-6-1.29-6-2v-3.27A13.16 13.16 0 0012 16a13.16 13.16 0 006-1.27V18zm0-6c0 .71-2.28 2-6 2s-6-1.29-6-2V8.73A13.16 13.16 0 0012 10a13.16 13.16 0 006-1.27V12zm-6-4C8.28 8 6 6.71 6 6s2.28-2 6-2 6 1.29 6 2-2.28 2-6 2zm-4 2.5a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UDatabase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDatabase.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDatabase;