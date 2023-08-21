import React from 'react';
import PropTypes from 'prop-types';

const UChartPieAlt = props => {
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
      <path d="M19 12h-7V5c0-.6-.4-1-1-1-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-.6-.4-1-1-1zm-7 7.9c-3.8.6-7.4-2.1-7.9-5.9-.6-3.8 2.1-7.4 5.9-7.9V13c0 .6.4 1 1 1h6.9c-.4 3.1-2.8 5.5-5.9 5.9zM15 2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1 0-3.9-3.1-7-7-7zm1 6V4.1c2 .4 3.5 1.9 3.9 3.9H16z"></path>
    </svg>
  );
};

UChartPieAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UChartPieAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UChartPieAlt;