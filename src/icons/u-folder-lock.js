import React from 'react';
import PropTypes from 'prop-types';

const UFolderLock = props => {
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
      <path d="M4 4h4.56a1 1 0 01.95.68l.54 1.64A1 1 0 0011 7h7a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3h-6.28l-.32-1a3 3 0 00-2.84-2H4a3 3 0 00-3 3v13a3 3 0 003 3h6a1 1 0 100-2H4a1 1 0 01-1-1V5a1 1 0 011-1zm17 11.18V14a3 3 0 00-6 0v1.18A3 3 0 0013 18v2a3 3 0 003 3h4a3 3 0 003-3v-2a3 3 0 00-2-2.82zM17 14a1 1 0 012 0v1h-2v-1zm4 6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1v2z"></path>
    </svg>
  );
};

UFolderLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderLock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderLock;
