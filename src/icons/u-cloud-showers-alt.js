import React from 'react';
import PropTypes from 'prop-types';

const UCloudShowersAlt = props => {
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
      <path d="M8 13a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm4-2a1 1 0 00-1 1v9a1 1 0 002 0v-9a1 1 0 00-1-1zm6.42-4.78A7 7 0 005.06 8.11 4 4 0 002 12a4 4 0 001.34 3 1 1 0 101.32-1.5A1.999 1.999 0 014 12a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 11a2.91 2.91 0 01-.74 2 1 1 0 001.48 1.34 5 5 0 00-2.32-8.08v-.04zM16 13a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UCloudShowersAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudShowersAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudShowersAlt;
