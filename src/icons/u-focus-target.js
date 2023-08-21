import React from 'react';
import PropTypes from 'prop-types';

const UFocusTarget = props => {
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
      <path d="M3 9a1 1 0 001-1V5a1 1 0 011-1h3a1 1 0 000-2H5a3 3 0 00-3 3v3a1 1 0 001 1zm5 11H5a1 1 0 01-1-1v-3a1 1 0 10-2 0v3a3 3 0 003 3h3a1 1 0 000-2zm9-7a1 1 0 000-2h-1.14A4 4 0 0013 8.14V7a1 1 0 00-2 0v1.14A4 4 0 008.14 11H7a1 1 0 000 2h1.14A4 4 0 0011 15.86V17a1 1 0 002 0v-1.14A4 4 0 0015.86 13H17zm-5 1a2 2 0 110-4 2 2 0 010 4zm9 1a1 1 0 00-1 1v3a1 1 0 01-1 1h-3a1 1 0 000 2h3a3 3 0 003-3v-3a1 1 0 00-1-1zM19 2h-3a1 1 0 100 2h3a1 1 0 011 1v3a1 1 0 002 0V5a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UFocusTarget.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFocusTarget.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFocusTarget;
