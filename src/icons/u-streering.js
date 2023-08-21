import React from 'react';
import PropTypes from 'prop-types';

const UStreering = props => {
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
      <path d="M11.444 12.168a1 1 0 111.111 1.663 1 1 0 01-1.11-1.662z"></path>
    </svg>
  );
};

UStreering.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStreering.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStreering;
