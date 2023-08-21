import React from 'react';
import PropTypes from 'prop-types';

const UTrowel = props => {
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
      <path d="M21.12 2.88a3.08 3.08 0 00-4.24 0l-2.42 2.41a3 3 0 00-.57 3.41l-2.15 2.15-2-2a3 3 0 00-5 1.17l-2.66 8a3 3 0 00.72 3.07A3 3 0 005 22c.34.006.679-.048 1-.16l8-2.66a3 3 0 001.17-5l-2-2 2.15-2.15a3 3 0 003.41-.57l2.41-2.42a3 3 0 00-.02-4.16zM13.7 15.63a1 1 0 01-.4 1.65L5.32 20a1 1 0 01-1.25-1.25l2.67-8a1 1 0 01.7-.75c.076-.008.154-.008.23 0a1 1 0 01.7.29l2 2-.87.86a1 1 0 00.325 1.639 1 1 0 001.095-.219l.86-.87 1.92 1.93zm6-9.92l-2.41 2.41a1 1 0 01-1.7-.71 1 1 0 01.29-.7l2.41-2.42a1 1 0 011.639.325 1 1 0 01-.219 1.095h-.01z"></path>
    </svg>
  );
};

UTrowel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTrowel.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTrowel;
