import React from 'react';
import PropTypes from 'prop-types';

const UFastMail = props => {
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
      <path d="M4.79 10.5h-2a1 1 0 000 2h2a1 1 0 100-2zm16.78-2.84V7.6a3 3 0 00-2.37-1.1h-7.93a3 3 0 00-2 .74A2.93 2.93 0 008.31 9l-.88 5a3 3 0 002.95 3.52h7.94a3 3 0 003-2.48l.88-5a3 3 0 00-.63-2.38zm-2.74.84l-3.4 2.76a1 1 0 01-1.38-.12L11.72 8.5h7.11zm.48 6.17a1 1 0 01-1 .83h-7.93a1 1 0 01-.96-.74 1 1 0 01-.02-.43l.8-4.53 2.35 2.66a3 3 0 004.14.35L20.13 10l-.82 4.67zM5.79 6.5h-3a1 1 0 000 2h3a1 1 0 000-2z"></path>
    </svg>
  );
};

UFastMail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFastMail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFastMail;
