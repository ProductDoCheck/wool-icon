import React from 'react';
import PropTypes from 'prop-types';

const UCompressPoint = props => {
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
      <path d="M21.71 20.29L15.41 14H17a1 1 0 100-2h-3.59l5.66-5.66a1 1 0 10-1.41-1.41L12 10.59V7a1 1 0 00-2 0v1.59l-6.29-6.3a1.004 1.004 0 10-1.42 1.42L8.59 10H7a1 1 0 000 2h3.59l-5.66 5.66a1 1 0 000 1.41 1 1 0 001.41 0L12 13.41V17a1 1 0 102 0v-1.59l6.29 6.3a.999.999 0 001.42 0 1 1 0 000-1.42z"></path>
    </svg>
  );
};

UCompressPoint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCompressPoint.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCompressPoint;
