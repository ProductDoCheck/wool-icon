import React from 'react';
import PropTypes from 'prop-types';

const UGlass = props => {
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
      <path d="M19.75 2.33A1 1 0 0019 2H5a1 1 0 00-1 1.11l1.8 16.22a3 3 0 003 2.67h6.42a3 3 0 003-2.67L20 3.11a1 1 0 00-.25-.78zM16.2 19.11a1 1 0 01-1 .89H8.79a1 1 0 01-1-.89L6.78 10h10.44l-1.02 9.11zM17.44 8H6.56l-.44-4h11.76l-.44 4z"></path>
    </svg>
  );
};

UGlass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGlass.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGlass;
