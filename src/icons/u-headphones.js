import React from 'react';
import PropTypes from 'prop-types';

const UHeadphones = props => {
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
      <path d="M12 3A10 10 0 002 13v7a1 1 0 001 1h3a3 3 0 003-3v-2a3 3 0 00-3-3H4a8 8 0 0116 0h-2a3 3 0 00-3 3v2a3 3 0 003 3h3a1 1 0 001-1v-7A10 10 0 0012 3zM6 15a1 1 0 011 1v2a1 1 0 01-1 1H4v-4h2zm14 4h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2v4z"></path>
    </svg>
  );
};

UHeadphones.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeadphones.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeadphones;
