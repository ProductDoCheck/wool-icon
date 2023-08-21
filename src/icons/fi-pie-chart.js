import React from 'react';
import PropTypes from 'prop-types';

const FiPieChart = props => {
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
      <path d="M21.21 15.89A10 10 0 118 2.83"></path>
      <path d="M22 12A10 10 0 0012 2v10h10z"></path>
    </svg>
  );
};

FiPieChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiPieChart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiPieChart;
