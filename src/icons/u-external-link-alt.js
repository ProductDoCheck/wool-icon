import React from 'react';
import PropTypes from 'prop-types';

const UExternalLinkAlt = props => {
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
      <path d="M18 10.82a1 1 0 00-1 1V19a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h7.18a1 1 0 100-2H5a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3v-7.18a1 1 0 00-1-1zm3.92-8.2a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 100 2h3.59L8.29 14.29a1 1 0 00.325 1.639 1 1 0 001.095-.219L20 5.41V9a1 1 0 002 0V3a1.001 1.001 0 00-.08-.38z"></path>
    </svg>
  );
};

UExternalLinkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExternalLinkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExternalLinkAlt;
