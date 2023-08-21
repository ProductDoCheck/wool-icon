import React from 'react';
import PropTypes from 'prop-types';

const UWebSectionAlt = props => {
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
      <path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zM8 20H4V4h4v16zm12 0H10V4h10v16z"></path>
    </svg>
  );
};

UWebSectionAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWebSectionAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWebSectionAlt;
