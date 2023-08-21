import React from 'react';
import PropTypes from 'prop-types';

const UTrademarkCircle = props => {
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
      <path d="M10 9H7a1 1 0 000 2h.5v3a1 1 0 102 0v-3h.5a1 1 0 000-2zm7.38.08a1 1 0 00-1.09.21L15 10.59l-1.29-1.3a1 1 0 00-1.09-.21A1 1 0 0012 10v4a1 1 0 002 0v-1.59l.29.3a1.002 1.002 0 001.42 0l.29-.3V14a1 1 0 002 0v-4a1 1 0 00-.62-.92zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UTrademarkCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTrademarkCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTrademarkCircle;
