import React from 'react';
import PropTypes from 'prop-types';

const URulerCombined = props => {
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
      <path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h6a1 1 0 001-1V10h11a1 1 0 001-1V3a1 1 0 00-1-1zm-1 6h-2V7a1 1 0 00-2 0v1h-2V7a1 1 0 00-2 0v1h-2V7a1 1 0 00-2 0v1H7a1 1 0 000 2h1v2H7a1 1 0 000 2h1v2H7a1 1 0 000 2h1v2H4V4h16v4z"></path>
    </svg>
  );
};

URulerCombined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URulerCombined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URulerCombined;
