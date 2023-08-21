import React from 'react';
import PropTypes from 'prop-types';

const FiMusic = props => {
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
      <path d="M6 21a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M9 18V5l12-2v13"></path>
      <path d="M18 19a3 3 0 100-6 3 3 0 000 6z"></path>
    </svg>
  );
};

FiMusic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMusic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMusic;
