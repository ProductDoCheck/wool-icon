import React from 'react';
import PropTypes from 'prop-types';

const UTrophy = props => {
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
      <path d="M21 4h-3V3a1 1 0 00-1-1H7a1 1 0 00-1 1v1H3a1 1 0 00-1 1v3a4 4 0 004 4h1.54A6 6 0 0011 13.91V16h-1a3 3 0 00-3 3v2a1 1 0 001 1h8a1 1 0 001-1v-2a3 3 0 00-3-3h-1v-2.09A6 6 0 0016.46 12H18a4 4 0 004-4V5a1 1 0 00-1-1zM6 10a2 2 0 01-2-2V6h2v2a6 6 0 00.35 2H6zm8 8a1 1 0 011 1v1H9v-1a1 1 0 011-1h4zm2-10a4 4 0 11-8 0V4h8v4zm4 0a2 2 0 01-2 2h-.35A6 6 0 0018 8V6h2v2z"></path>
    </svg>
  );
};

UTrophy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTrophy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTrophy;
