import React from 'react';
import PropTypes from 'prop-types';

const UYen = props => {
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
      <path d="M18.55 2.17a1 1 0 00-1.38.28L12 10.2 6.83 2.45a1 1 0 00-1.66 1.1l5 7.45H7a1 1 0 000 2h4v2H7a1 1 0 000 2h4v4a1 1 0 002 0v-4h4a1 1 0 000-2h-4v-2h4a1 1 0 000-2h-3.13l5-7.45a.999.999 0 00-.32-1.38z"></path>
    </svg>
  );
};

UYen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UYen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UYen;
