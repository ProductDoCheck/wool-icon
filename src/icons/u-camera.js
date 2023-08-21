import React from 'react';
import PropTypes from 'prop-types';

const UCamera = props => {
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
      <path d="M19 6.5h-1.28l-.32-1a3 3 0 00-2.84-2H9.44A3 3 0 006.6 5.55l-.32 1H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-8a3.002 3.002 0 00-3-3.05zm1 11a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a1 1 0 011-1h2a1 1 0 001-.68l.54-1.64a1 1 0 01.95-.68h5.12a1 1 0 01.95.68l.54 1.64a1 1 0 00.9.68h2a1 1 0 011 1v8zm-8-9a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

UCamera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCamera.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCamera;
