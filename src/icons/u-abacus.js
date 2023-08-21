import React from 'react';
import PropTypes from 'prop-types';

const UAbacus = props => {
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
      <path d="M21 2a1 1 0 00-1 1v3h-4V5a1 1 0 00-2 0v1h-2V5a1 1 0 00-2 0v1H8V5a1 1 0 00-2 0v1H4V3a1 1 0 00-2 0v16a3 3 0 003 3h14a3 3 0 003-3V3a1 1 0 00-1-1zm-1 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-3h2v1a1 1 0 102 0v-1h2v1a1 1 0 002 0v-1h4v1a1 1 0 002 0v-1h2v3zm0-5h-2v-1a1 1 0 00-2 0v1h-4v-1a1 1 0 00-2 0v1H8v-1a1 1 0 10-2 0v1H4V8h2v1a1 1 0 002 0V8h2v1a1 1 0 002 0V8h2v1a1 1 0 002 0V8h4v6z"></path>
    </svg>
  );
};

UAbacus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAbacus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAbacus;
