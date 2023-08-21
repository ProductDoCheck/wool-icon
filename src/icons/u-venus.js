import React from 'react';
import PropTypes from 'prop-types';

const UVenus = props => {
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
      <path d="M19 9a7 7 0 10-8 6.92V18h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 100-2h-1v-2.08A7 7 0 0019 9zm-7 5a5 5 0 110-10 5 5 0 010 10z"></path>
    </svg>
  );
};

UVenus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVenus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVenus;
