import React from 'react';
import PropTypes from 'prop-types';

const UPlusSquare = props => {
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
      <path d="M9 13h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2V9a1 1 0 00-2 0v2H9a1 1 0 000 2zM21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 18H4V4h16v16z"></path>
    </svg>
  );
};

UPlusSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPlusSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPlusSquare;
