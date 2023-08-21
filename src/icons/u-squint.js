import React from 'react';
import PropTypes from 'prop-types';

const USquint = props => {
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
      <path d="M15 14H9a1 1 0 000 2h6a1 1 0 000-2zm-5.92-1.79l1.5-1.5a1.002 1.002 0 000-1.42l-1.5-1.5a1.004 1.004 0 10-1.42 1.42l.8.79-.8.79a1.001 1.001 0 001.094 1.636 1 1 0 00.326-.216zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm4.58-12.21a1 1 0 00-1.42 0l-1.5 1.5a1 1 0 000 1.42l1.5 1.5a1 1 0 00.71.29 1 1 0 00.71-1.71l-.79-.79.79-.79a1 1 0 000-1.42z"></path>
    </svg>
  );
};

USquint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USquint.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USquint;
