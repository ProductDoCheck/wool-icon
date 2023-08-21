import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeBookmark = props => {
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
      <path d="M21 15.26a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V9.67l5.88 5.89a3 3 0 002.1.87 3 3 0 001.43-.36 1 1 0 00.15-1.66 1 1 0 00-1.11-.1 1 1 0 01-1.15-.17L5.41 8.26H12a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-3a1 1 0 00-1-1zm0-12h-5a1 1 0 00-1 1v8a1 1 0 001.57.82l1.93-1.29 1.91 1.28c.173.12.379.187.59.19a1.001 1.001 0 001-1v-8a1 1 0 00-1-1zm-1 7.12l-.94-.63a1 1 0 00-1.12 0l-.94.63V5.26h3v5.12z"></path>
    </svg>
  );
};

UEnvelopeBookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeBookmark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeBookmark;
