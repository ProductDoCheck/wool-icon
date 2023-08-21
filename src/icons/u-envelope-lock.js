import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeLock = props => {
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
      <path d="M20.5 7.44V6.26a3 3 0 00-6 0v1.18a3 3 0 00-2 2.82v2a3 3 0 003 3h4a3 3 0 003-3v-2a3 3 0 00-2-2.82zm-4-1.18a1 1 0 012 0v1h-2v-1zm4 6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1v2zm0 5a1 1 0 00-1 1v1a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.67l5.88 5.88a1.003 1.003 0 001.415.005 1.001 1.001 0 00.005-1.415L4.91 8.26h5.59a1 1 0 100-2h-6a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-1a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UEnvelopeLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeLock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeLock;
