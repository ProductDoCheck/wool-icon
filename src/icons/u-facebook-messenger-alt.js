import React from 'react';
import PropTypes from 'prop-types';

const UFacebookMessengerAlt = props => {
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
      <path d="M11.991 1a10.614 10.614 0 00-11 10.7 10.462 10.462 0 003.414 7.866l.052 1.69a1.8 1.8 0 002.525 1.591L8.903 22c1.008.269 2.046.403 3.088.4a10.615 10.615 0 0011.001-10.7 10.614 10.614 0 00-11-10.7zm0 19.4a9.858 9.858 0 01-2.635-.35 1.799 1.799 0 00-1.196.092l-1.714.756-.045-1.493A1.81 1.81 0 005.8 18.13 8.488 8.488 0 012.99 11.7a8.66 8.66 0 019-8.7 8.705 8.705 0 110 17.4zm3.735-11.815l-2.313 2.755-3.347-2.056a.998.998 0 00-1.289.21L5.726 13.13a1 1 0 101.53 1.285l2.499-2.975 3.346 2.056a.998.998 0 001.29-.21l2.866-3.415a1 1 0 10-1.531-1.286z"></path>
    </svg>
  );
};

UFacebookMessengerAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFacebookMessengerAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFacebookMessengerAlt;
