import React from 'react';
import PropTypes from 'prop-types';

const URupeeSign = props => {
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
      <path d="M18 7h-2.21a5.49 5.49 0 00-1-2H18a1 1 0 100-2H7a1 1 0 000 2h3.5a3.5 3.5 0 013.15 2H7a1 1 0 000 2h7a3.5 3.5 0 01-3.45 3H7a.697.697 0 00-.14 0 .651.651 0 00-.2 0 .69.69 0 00-.19.1l-.12.07a.751.751 0 00-.14.17 1.095 1.095 0 00-.09.14.61.61 0 000 .18A.65.65 0 006 13a.7.7 0 000 .14.65.65 0 000 .2.689.689 0 00.1.19s0 .08.07.12l6 7a1 1 0 101.52-1.3L9.18 14h1.32A5.5 5.5 0 0016 9h2a1 1 0 100-2z"></path>
    </svg>
  );
};

URupeeSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URupeeSign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URupeeSign;
