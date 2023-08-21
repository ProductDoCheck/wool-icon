import React from 'react';
import PropTypes from 'prop-types';

const UChartGrowthAlt = props => {
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
      <path d="M21 20H4v-2h3a1 1 0 000-2H4v-2h7a1 1 0 000-2H4v-2h11a1 1 0 100-2H4V6h15a1 1 0 100-2H4V3a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 000-2z"></path>
    </svg>
  );
};

UChartGrowthAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UChartGrowthAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UChartGrowthAlt;
