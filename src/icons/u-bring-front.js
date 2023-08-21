import React from 'react';
import PropTypes from 'prop-types';

const UBringFront = props => {
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
      <path d="M11.29 17.3L10 18.59V7a1 1 0 00-2 0v11.6l-1.29-1.3a1 1 0 10-1.42 1.41l3 3a1 1 0 001.42 0l3-3a1 1 0 10-1.42-1.41zM22 3a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 000-2H4V4h16v4h-7a1 1 0 100 2h1v5a1 1 0 001 1h6a1 1 0 001-1V3zm-2 11h-4v-4h4v4z"></path>
    </svg>
  );
};

UBringFront.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBringFront.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBringFront;
