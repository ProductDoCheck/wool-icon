import React from 'react';
import PropTypes from 'prop-types';

const UHorizontalDistributionCenter = props => {
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
      <path d="M19 5h-1V3a1 1 0 00-2 0v2h-1a1 1 0 00-1 1v12a1 1 0 001 1h1v2a1 1 0 002 0v-2h1a1 1 0 001-1V6a1 1 0 00-1-1zm-1 12h-2V7h2v10zM11 4H9V3a1 1 0 00-2 0v1H5a1 1 0 00-1 1v14a1 1 0 001 1h2v1a1 1 0 102 0v-1h2a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H6V6h4v12z"></path>
    </svg>
  );
};

UHorizontalDistributionCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHorizontalDistributionCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHorizontalDistributionCenter;
