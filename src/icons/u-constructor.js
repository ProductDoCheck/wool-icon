import React from 'react';
import PropTypes from 'prop-types';

const UConstructor = props => {
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
      <path d="M20 9.67V9.5a7.95 7.95 0 00-5.59-7.62h-.06a8.32 8.32 0 00-2.59-.36A8.21 8.21 0 004 9.67a3 3 0 000 5.66 8 8 0 008 7.17h.23a8.13 8.13 0 007.68-7.16A3 3 0 0020 9.67zM12.18 20.5a6 6 0 01-6.09-5h11.77a6.09 6.09 0 01-5.68 5zm6.82-7H5a1 1 0 110-2h2a1 1 0 100-2H6a6.4 6.4 0 013-5.15V7.5a1 1 0 002 0V3.59c.271-.045.545-.075.82-.09H12c.335.005.67.035 1 .09V7.5a1 1 0 002 0V4.32c.424.246.82.537 1.18.87A5.999 5.999 0 0118 9.5h-1a1 1 0 000 2h2a1 1 0 010 2z"></path>
    </svg>
  );
};

UConstructor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UConstructor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UConstructor;
