import React from 'react';
import PropTypes from 'prop-types';

const UPostcard = props => {
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
      <path d="M17 11h1a1 1 0 001-1V9a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1zM6 12h5a1 1 0 000-2H6a1 1 0 000 2zm16-8H2a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H3V6h18v12zM6 16h5a1 1 0 000-2H6a1 1 0 000 2z"></path>
    </svg>
  );
};

UPostcard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPostcard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPostcard;
