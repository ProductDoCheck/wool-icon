import React from 'react';
import PropTypes from 'prop-types';

const UCropAlt = props => {
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
      <path d="M19 16h-1V7a1 1 0 00-1-1H8V5a1 1 0 00-2 0v1H5a1 1 0 000 2h1v9a1 1 0 001 1h9v1a1 1 0 002 0v-1h1a1 1 0 000-2zm-3 0H8V8h8v8z"></path>
    </svg>
  );
};

UCropAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCropAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCropAlt;
