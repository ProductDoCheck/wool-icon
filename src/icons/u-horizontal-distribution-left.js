import React from 'react';
import PropTypes from 'prop-types';

const UHorizontalDistributionLeft = props => {
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
      <path d="M11 4H6V3a1 1 0 00-2 0v18a1 1 0 102 0v-1h5a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H6V6h4v12zm9-13h-3V3a1 1 0 00-2 0v18a1 1 0 002 0v-2h3a1 1 0 001-1V6a1 1 0 00-1-1zm-1 12h-2V7h2v10z"></path>
    </svg>
  );
};

UHorizontalDistributionLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHorizontalDistributionLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHorizontalDistributionLeft;
