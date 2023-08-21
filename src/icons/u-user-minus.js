import React from 'react';
import PropTypes from 'prop-types';

const UUserMinus = props => {
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
      <path d="M21 10.5h-4a1 1 0 000 2h4a1 1 0 000-2zm-7.7 1.72A4.92 4.92 0 0015 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 002 19.5a1 1 0 102 0 6 6 0 1112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM10 11.5a3 3 0 110-6 3 3 0 010 6z"></path>
    </svg>
  );
};

UUserMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUserMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUserMinus;
