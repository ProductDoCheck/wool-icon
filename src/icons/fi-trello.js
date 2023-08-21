import React from 'react';
import PropTypes from 'prop-types';

const FiTrello = props => {
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
      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
      <path d="M17 7h-3v5h3V7z"></path>
      <path d="M10 7H7v9h3V7z"></path>
    </svg>
  );
};

FiTrello.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiTrello.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiTrello;
