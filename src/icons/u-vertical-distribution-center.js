import React from 'react';
import PropTypes from 'prop-types';

const UVerticalDistributionCenter = props => {
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
      <path d="M21 15h-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2H3a1 1 0 000 2h1v2a1 1 0 001 1h14a1 1 0 001-1v-2h1a1 1 0 000-2zm-3 3H6v-4h12v4zM3 8h2v1a1 1 0 001 1h12a1 1 0 001-1V8h2a1 1 0 100-2h-2V5a1 1 0 00-1-1H6a1 1 0 00-1 1v1H3a1 1 0 000 2zm4-2h10v2H7V6z"></path>
    </svg>
  );
};

UVerticalDistributionCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVerticalDistributionCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVerticalDistributionCenter;
