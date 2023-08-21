import React from 'react';
import PropTypes from 'prop-types';

const FiCalendar = props => {
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
      <path d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
      <path d="M3 10h18"></path>
      <path d="M16 2v4"></path>
      <path d="M8 2v4"></path>
    </svg>
  );
};

FiCalendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCalendar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCalendar;
