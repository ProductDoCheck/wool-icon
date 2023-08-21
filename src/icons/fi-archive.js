import React from 'react';
import PropTypes from 'prop-types';

const FiArchive = props => {
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
      <path d="M21 8v13H3V8"></path>
      <path d="M10 12h4"></path>
      <path d="M23 3H1v5h22V3z"></path>
    </svg>
  );
};

FiArchive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiArchive.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiArchive;
