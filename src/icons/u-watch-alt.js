import React from 'react';
import PropTypes from 'prop-types';

const UWatchAlt = props => {
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
      <path d="M17 8.61l-1-5.77A1 1 0 0015 2H9a1 1 0 00-1 .84L7 8.61a6 6 0 000 6.78l1 5.77A1 1 0 009 22h6a1 1 0 001-.84l1-5.77a6 6 0 000-6.78zM9.85 4h4.3l.44 2.59a6 6 0 00-5.18 0L9.85 4zm4.3 16h-4.3l-.44-2.59a6 6 0 005.18 0L14.15 20zM12 16a4 4 0 110-8 4 4 0 010 8z"></path>
    </svg>
  );
};

UWatchAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWatchAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWatchAlt;
