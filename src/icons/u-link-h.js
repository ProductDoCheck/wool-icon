import React from 'react';
import PropTypes from 'prop-types';

const ULinkH = props => {
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
      <path d="M8 12a1 1 0 001 1h6a1 1 0 000-2H9a1 1 0 00-1 1zm2 3H7a3 3 0 010-6h3a1 1 0 100-2H7a5 5 0 100 10h3a1 1 0 000-2zm7-8h-3a1 1 0 100 2h3a3 3 0 010 6h-3a1 1 0 000 2h3a5 5 0 100-10z"></path>
    </svg>
  );
};

ULinkH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULinkH.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULinkH;
