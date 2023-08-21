import React from 'react';
import PropTypes from 'prop-types';

const UCoffee = props => {
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
      <path d="M9 17h4a5 5 0 005-5v-1h1a3 3 0 000-6h-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1v8a5 5 0 005 5zm9-10h1a1 1 0 110 2h-1V7zM6 5h10v7a3 3 0 01-3 3H9a3 3 0 01-3-3V5zm15 14H3a1 1 0 000 2h18a1 1 0 000-2z"></path>
    </svg>
  );
};

UCoffee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCoffee.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCoffee;
