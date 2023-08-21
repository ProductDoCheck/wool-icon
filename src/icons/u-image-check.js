import React from 'react';
import PropTypes from 'prop-types';

const UImageCheck = props => {
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
      <path d="M21.71 2.3a1 1 0 00-1.41 0l-3.38 3.3-1.22-1.2a1 1 0 10-1.4 1.43l1.92 1.88a1 1 0 001.4 0l4.08-4a1 1 0 00.01-1.41zM19 9a1 1 0 00-1 1v4.39l-1.48-1.48a2.771 2.771 0 00-3.93 0l-.7.7-2.48-2.49a2.79 2.79 0 00-3.93 0L4 12.6V7a1 1 0 011-1h6a1 1 0 100-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-9a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.29 4.3H5zm13-1a.89.89 0 01-.18.53L13.31 15l.7-.7a.78.78 0 011.1 0L18 17.22V19z"></path>
    </svg>
  );
};

UImageCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageCheck;