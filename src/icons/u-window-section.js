import React from 'react';
import PropTypes from 'prop-types';

const UWindowSection = props => {
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
      <path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zM8 20H4V10h4v10zm6 0h-4V10h4v10zm6 0h-4V10h4v10zm0-12H4V4h16v4z"></path>
    </svg>
  );
};

UWindowSection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWindowSection.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWindowSection;
