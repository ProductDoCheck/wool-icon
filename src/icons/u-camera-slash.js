import React from 'react';
import PropTypes from 'prop-types';

const UCameraSlash = props => {
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
      <path d="M3.71 2.29a1.004 1.004 0 10-1.42 1.42l2.8 2.79H5a3 3 0 00-3 3v8a3 3 0 003 3h14.08l1.21 1.22a1.001 1.001 0 001.639-.325 1 1 0 00-.22-1.095l-18-18.01zm6.49 9.33l2.68 2.68a2 2 0 01-.88.2 2 2 0 01-2-2 2 2 0 01.2-.88zM5 18.5a1 1 0 01-1-1v-8a1 1 0 011-1h2.07l1.7 1.69A3.92 3.92 0 008 12.5a4 4 0 004 4 3.92 3.92 0 002.32-.77l2.77 2.77H5zm14-12h-1.28l-.31-1a3 3 0 00-2.85-2h-4.4a1 1 0 000 2h4.4a1 1 0 01.95.68l.54 1.63a1 1 0 00.95.69h2a1 1 0 011 1v5.84a1 1 0 002 0V9.5a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UCameraSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCameraSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCameraSlash;
