import React from 'react';
import PropTypes from 'prop-types';

const UVideoSlash = props => {
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
      <path d="M7.71 6.29l-4-4a1.004 1.004 0 10-1.42 1.42L4.62 6A3 3 0 002 9v6a3 3 0 003 3h9a3 3 0 001.9-.69l4.39 4.4a.999.999 0 001.42 0 1 1 0 000-1.42l-14-14zM14 16H5a1 1 0 01-1-1V9a1 1 0 011-1h1.59l7.87 7.88A1 1 0 0114 16zm7.53-8.85a1 1 0 00-1 0L17 8.89A3 3 0 0014 6h-1.34a1 1 0 100 2H14a1 1 0 011 1v1.5a1.628 1.628 0 000 .19.649.649 0 00.05.2s.05.06.07.1c.04.076.091.147.15.21 0 0 .1.06.15.1l.17.11c.076.01.154.01.23 0a.697.697 0 00.14 0c.063.004.127.004.19 0a.65.65 0 00.2-.05L20 9.62v5.72a1 1 0 102 0V8a1 1 0 00-.47-.85z"></path>
    </svg>
  );
};

UVideoSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVideoSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVideoSlash;
