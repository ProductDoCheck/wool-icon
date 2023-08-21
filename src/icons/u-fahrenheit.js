import React from 'react';
import PropTypes from 'prop-types';

const UFahrenheit = props => {
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
      <path d="M20.5 3h-7a3 3 0 00-3 3v14a1 1 0 002 0v-7h6a1 1 0 000-2h-6V6a1 1 0 011-1h7a1 1 0 100-2zm-15 0a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UFahrenheit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFahrenheit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFahrenheit;
