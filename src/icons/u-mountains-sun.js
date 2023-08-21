import React from 'react';
import PropTypes from 'prop-types';

const UMountainsSun = props => {
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
      <path d="M18 10a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4zm-1.15 8.47a1 1 0 00-1.7 0l-1 1.63-3.29-5.6a1 1 0 00-1.72 0l-7 12A1 1 0 003 22h18a1 1 0 00.85-1.53l-5-8zM10.45 20H4.74L10 11l2.94 5-1.25 2-1.24 2zm2.35 0l1.49-2.37.71-1.06 1-1.68L19.2 20h-6.4z"></path>
    </svg>
  );
};

UMountainsSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMountainsSun.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMountainsSun;
