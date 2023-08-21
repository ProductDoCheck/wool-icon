import React from 'react';
import PropTypes from 'prop-types';

const UChartGrowth = props => {
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
      <path d="M21 20h-1V5a1 1 0 00-2 0v15h-2V9a1 1 0 00-2 0v11h-2v-7a1 1 0 00-2 0v7H8v-3a1 1 0 10-2 0v3H4V3a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 000-2z"></path>
    </svg>
  );
};

UChartGrowth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UChartGrowth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UChartGrowth;
