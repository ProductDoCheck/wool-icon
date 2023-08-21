import React from 'react';
import PropTypes from 'prop-types';

const UPump = props => {
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
      <path d="M20.54 6.29L19 4.75l-1.41-1.41a1.003 1.003 0 10-1.42 1.42l1 1-.83 2.49a3 3 0 00.73 3.07l2.95 3V19a1 1 0 01-2 0v-2a3 3 0 00-3-3H14V5a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3h6a3 3 0 003-3v-3h1a1 1 0 011 1v2a3 3 0 006 0V9.83a5 5 0 00-1.46-3.54zM12 19a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h8v7zm0-9H4V5a1 1 0 011-1h6a1 1 0 011 1v5zm8 1.42l-1.54-1.54a1 1 0 01-.24-1l.51-1.54.39.4A3 3 0 0120 9.83v1.59z"></path>
    </svg>
  );
};

UPump.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPump.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPump;
