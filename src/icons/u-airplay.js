import React from 'react';
import PropTypes from 'prop-types';

const UAirplay = props => {
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
      <path d="M12.83 13.45a1 1 0 00-1.66 0l-4 6a1 1 0 000 1A1 1 0 008 21h8a1 1 0 00.88-.53 1 1 0 00-.05-1l-4-6.02zM9.87 19L12 15.8l2.13 3.2H9.87zM19 3H5a3 3 0 00-3 3v9a3 3 0 003 3h.85a1 1 0 000-2H5a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1v9a1 1 0 01-1 1h-.85a1 1 0 000 2H19a3 3 0 003-3V6a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UAirplay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAirplay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAirplay;
