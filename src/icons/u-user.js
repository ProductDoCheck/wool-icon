import React from 'react';
import PropTypes from 'prop-types';

const UUser = props => {
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
      <path d="M15.71 12.71a6 6 0 10-7.42 0 10 10 0 00-6.22 8.18 1.006 1.006 0 102 .22 8 8 0 0115.9 0 1 1 0 001 .89h.11a1 1 0 00.88-1.1 10 10 0 00-6.25-8.19zM12 12a4 4 0 110-8 4 4 0 010 8z"></path>
    </svg>
  );
};

UUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUser.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUser;
