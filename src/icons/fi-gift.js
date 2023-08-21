import React from 'react';
import PropTypes from 'prop-types';

const FiGift = props => {
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
      <path d="M20 12v10H4V12"></path>
      <path d="M22 7H2v5h20V7z"></path>
      <path d="M12 22V7"></path>
      <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"></path>
      <path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"></path>
    </svg>
  );
};

FiGift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiGift.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiGift;
