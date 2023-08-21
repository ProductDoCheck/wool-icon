import React from 'react';
import PropTypes from 'prop-types';

const FiAward = props => {
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
      <path d="M12 15a7 7 0 100-14 7 7 0 000 14z"></path>
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
    </svg>
  );
};

FiAward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiAward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiAward;
