import React from 'react';
import PropTypes from 'prop-types';

const USpaceKey = props => {
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
      <path d="M21 9a1 1 0 00-1 1v3H4v-3a1 1 0 00-2 0v4a1 1 0 001 1h18a1 1 0 001-1v-4a1 1 0 00-1-1z"></path>
    </svg>
  );
};

USpaceKey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USpaceKey.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USpaceKey;
