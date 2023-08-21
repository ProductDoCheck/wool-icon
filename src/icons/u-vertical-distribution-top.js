import React from 'react';
import PropTypes from 'prop-types';

const UVerticalDistributionTop = props => {
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
      <path d="M3 6h1v5a1 1 0 001 1h14a1 1 0 001-1V6h1a1 1 0 100-2H3a1 1 0 000 2zm3 0h12v4H6V6zm15 8H3a1 1 0 000 2h2v3a1 1 0 001 1h12a1 1 0 001-1v-3h2a1 1 0 000-2zm-4 4H7v-2h10v2z"></path>
    </svg>
  );
};

UVerticalDistributionTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVerticalDistributionTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVerticalDistributionTop;
