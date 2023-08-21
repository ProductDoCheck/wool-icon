import React from 'react';
import PropTypes from 'prop-types';

const UHardHat = props => {
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
      <path d="M20 13.17V13a7.999 7.999 0 00-2.42-5.74 7.84 7.84 0 00-3.18-1.88h-.05A8.24 8.24 0 0011.76 5 8.21 8.21 0 004 13.17 3 3 0 005 19h14a3 3 0 001-5.83zM19 17H5a1 1 0 010-2h2a1 1 0 000-2H6a6.41 6.41 0 013-5.15V11a1 1 0 102 0V7.09c.271-.045.545-.075.82-.09H12c.336.003.67.037 1 .1V11a1 1 0 102 0V7.82c.424.246.82.537 1.18.87A6.002 6.002 0 0118 13h-1a1 1 0 000 2h2a1 1 0 010 2z"></path>
    </svg>
  );
};

UHardHat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHardHat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHardHat;
