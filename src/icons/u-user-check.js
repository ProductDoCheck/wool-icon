import React from 'react';
import PropTypes from 'prop-types';

const UUserCheck = props => {
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
      <path d="M13.3 12.22A4.92 4.92 0 0015 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 002 19.5a1 1 0 102 0 6 6 0 1112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM10 11.5a3 3 0 110-6 3 3 0 010 6zm11.71-2.37a1 1 0 00-1.42 0l-2 2-.62-.63a1.002 1.002 0 00-1.71.705 1 1 0 00.29.705l1.34 1.34a1 1 0 001.41 0l2.67-2.67a1 1 0 00.04-1.45z"></path>
    </svg>
  );
};

UUserCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUserCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUserCheck;