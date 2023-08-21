import React from 'react';
import PropTypes from 'prop-types';

const UClock = props => {
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
      <path d="M11 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm3.1-7.37L12 11.42V7a1 1 0 00-2 0v5.12a.65.65 0 00.05.2c.02.06.047.116.08.17.027.057.06.11.1.16l.16.13.09.09 2.6 1.5a1 1 0 00.5.13 1 1 0 00.5-1.87h.02z"></path>
    </svg>
  );
};

UClock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClock;
