import React from 'react';
import PropTypes from 'prop-types';

const UFire = props => {
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
      <path d="M8.468 8.394l-.002.002-.003.002.005-.004zm9.954-.186a1.24 1.24 0 00-.23-.175 1 1 0 00-1.4.411 5.783 5.783 0 01-1.398 1.778 8.714 8.714 0 00-4.267-9.092 1 1 0 00-1.49.805 7.017 7.017 0 01-2.472 4.943l-.23.187a8.513 8.513 0 00-1.988 1.863 8.984 8.984 0 003.656 13.908 1 1 0 001.327-1.238 6.977 6.977 0 01-.19-2.581 9.004 9.004 0 004.313 4.016c.225.101.48.115.715.038a8.996 8.996 0 003.654-14.863zm-3.905 12.831a6.965 6.965 0 01-3.576-4.402 8.88 8.88 0 01-.18-.964 1 1 0 00-1.858-.363 8.959 8.959 0 00-1.205 4.718 6.986 6.986 0 01-1.176-9.868 6.555 6.555 0 011.562-1.458.744.744 0 00.075-.055s.296-.245.307-.25a8.968 8.968 0 002.898-4.633 6.736 6.736 0 011.386 8.088 1.001 1.001 0 001.184 1.418 7.856 7.856 0 003.862-2.688 7.002 7.002 0 01-3.279 10.457z"></path>
    </svg>
  );
};

UFire.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFire.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFire;