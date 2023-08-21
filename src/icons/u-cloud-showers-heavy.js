import React from 'react';
import PropTypes from 'prop-types';

const UCloudShowersHeavy = props => {
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
      <path d="M12.89 18.06a1 1 0 00-1.28.6l-.73 2a1 1 0 001.88.68l.73-2a1 1 0 00-.6-1.28zm-4 0a1 1 0 00-1.28.6l-.73 2a1 1 0 001.88.68l.73-2a1 1 0 00-.6-1.28zm0-7a1 1 0 00-1.28.6l-1.1 3a1 1 0 001.88.68l1.1-3a1 1 0 00-.6-1.28zm4 0a1 1 0 00-1.28.6l-1.1 3a1 1 0 001.88.68l1.1-3a1 1 0 00-.6-1.28zm5.53-4.84A7 7 0 005.06 8.11 4 4 0 002 12a4 4 0 001.34 3 1 1 0 101.32-1.5A1.999 1.999 0 014 12a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 11a2.91 2.91 0 01-.74 2 1 1 0 001.48 1.34 5 5 0 00-2.32-8.08v-.04zm-1.53 11.84a1 1 0 00-1.28.6l-.73 2a1 1 0 001.88.68l.73-2a1 1 0 00-.6-1.28zm0-7a1 1 0 00-1.28.6l-1.1 3a1 1 0 001.88.68l1.1-3a1 1 0 00-.6-1.28z"></path>
    </svg>
  );
};

UCloudShowersHeavy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudShowersHeavy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudShowersHeavy;
