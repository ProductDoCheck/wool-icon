import React from 'react';
import PropTypes from 'prop-types';

const UDownloadAlt = props => {
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
      <path d="M8.29 13.29a1 1 0 000 1.42l3 3a1.002 1.002 0 001.42 0l3-3a1.004 1.004 0 10-1.42-1.42L13 14.59V3a1 1 0 00-2 0v11.59l-1.29-1.3a1 1 0 00-1.42 0zM18 9h-2a1 1 0 100 2h2a1 1 0 011 1v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7a1 1 0 011-1h2a1 1 0 000-2H6a3 3 0 00-3 3v7a3 3 0 003 3h12a3 3 0 003-3v-7a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UDownloadAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDownloadAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDownloadAlt;
