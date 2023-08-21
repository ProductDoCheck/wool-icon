import React from 'react';
import PropTypes from 'prop-types';

const USilentSquint = props => {
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
      <path d="M7.66 12.21a1 1 0 00.71.29 1 1 0 00.71-.29l1.5-1.5a1.002 1.002 0 000-1.42l-1.5-1.5a1.004 1.004 0 10-1.42 1.42l.8.79-.8.79a1.001 1.001 0 000 1.42zm7.5 0a1 1 0 00.71.29 1 1 0 00.71-1.71l-.79-.79.79-.79a1.005 1.005 0 00-.71-1.714 1.004 1.004 0 00-.71.294l-1.5 1.5a1 1 0 000 1.42l1.5 1.5zm.11 2a1 1 0 00-1.2 0l-.74.55-.73-.55a1 1 0 00-1.2 0l-.73.55-.74-.55a1 1 0 00-1.2 0l-1.33 1a1 1 0 001.2 1.6l.73-.55.74.55a.666.666 0 00.12.06.83.83 0 00.22.08h.48a1.12 1.12 0 00.33-.16l.73-.55.73.55a1 1 0 001 .11l.1-.05a.388.388 0 00.11-.06l.74-.55.73.55a1 1 0 001.2-1.6l-1.29-.98zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

USilentSquint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USilentSquint.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USilentSquint;
