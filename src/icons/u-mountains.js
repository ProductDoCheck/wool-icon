import React from 'react';
import PropTypes from 'prop-types';

const UMountains = props => {
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
      <path d="M21.85 17.47l-5-8a1 1 0 00-1.7 0l-1 1.63-3.29-5.6a1 1 0 00-1.72 0l-7 12A1 1 0 003 19h18a1.001 1.001 0 00.85-1.53zM10.45 17H4.74L10 8l2.93 5-2.48 4zm2.35 0l2.2-3.43 1-1.68L19.2 17h-6.4z"></path>
    </svg>
  );
};

UMountains.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMountains.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMountains;
