import React from 'react';
import PropTypes from 'prop-types';

const UHorizontalDistributionRight = props => {
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
      <path d="M19 2a1 1 0 00-1 1v1h-5a1 1 0 00-1 1v14a1 1 0 001 1h5v1a1 1 0 002 0V3a1 1 0 00-1-1zm-1 16h-4V6h4v12zM9 2a1 1 0 00-1 1v2H5a1 1 0 00-1 1v12a1 1 0 001 1h3v2a1 1 0 102 0V3a1 1 0 00-1-1zM8 17H6V7h2v10z"></path>
    </svg>
  );
};

UHorizontalDistributionRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHorizontalDistributionRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHorizontalDistributionRight;
