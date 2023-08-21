import React from 'react';
import PropTypes from 'prop-types';

const UChartPie = props => {
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
      <path d="M12 2a10 10 0 104.93 18.69H17.05A10 10 0 0012 2zm1 2.07A8 8 0 0119.93 11H13V4.07zM12 20a8 8 0 01-1-15.93V12c.004.12.028.238.07.35V12.5l4 6.87c-.97.415-2.015.63-3.07.63zm4.83-1.64L13.73 13h6.2a7.999 7.999 0 01-3.1 5.36z"></path>
    </svg>
  );
};

UChartPie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UChartPie.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UChartPie;
