import React from 'react';
import PropTypes from 'prop-types';

const UPoundCircle = props => {
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
      <path d="M16 15h-5.18a3 3 0 00.18-1v-1h2.5a1 1 0 000-2H11v-1a1.95 1.95 0 013.63-1 1.004 1.004 0 001.74-1A4 4 0 009 10v1H8a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 000 2h8a1 1 0 000-2zM12 1a11 11 0 100 22 11 11 0 000-22zm0 20a9 9 0 110-18 9 9 0 010 18z"></path>
    </svg>
  );
};

UPoundCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPoundCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPoundCircle;
