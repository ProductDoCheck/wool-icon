import React from 'react';
import PropTypes from 'prop-types';

const FiKey = props => {
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
      <path d="M15.5 7.5L19 4m2-2l-2 2 2-2zm-9.61 9.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777l.001-.001zm0 0L15.5 7.5l-4.11 4.11zM15.5 7.5l3 3L22 7l-3-3-3.5 3.5z"></path>
    </svg>
  );
};

FiKey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiKey.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiKey;