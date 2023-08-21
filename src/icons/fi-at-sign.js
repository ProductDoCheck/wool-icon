import React from 'react';
import PropTypes from 'prop-types';

const FiAtSign = props => {
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
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
      <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"></path>
    </svg>
  );
};

FiAtSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiAtSign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiAtSign;
