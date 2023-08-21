import React from 'react';
import PropTypes from 'prop-types';

const UKeySkeletonAlt = props => {
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
      <path d="M21.71 6.53l-1.42-1.41 1.42-1.41a1.004 1.004 0 10-1.42-1.42L9.75 12.83a5 5 0 101.42 1.42l4.88-4.89 1.41 1.42a1 1 0 00.71.29 1 1 0 00.71-1.71L17.46 8l1.42-1.42L20.29 8a.999.999 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.47zM7 20a3 3 0 110-6 3 3 0 010 6z"></path>
    </svg>
  );
};

UKeySkeletonAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UKeySkeletonAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UKeySkeletonAlt;
