import React from 'react';
import PropTypes from 'prop-types';

const UHeartSign = props => {
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
      <path d="M20.16 5A6.29 6.29 0 0012 4.41a6.27 6.27 0 00-8.16 9.48l6 6.05a3 3 0 004.24 0l6-6.05A6.27 6.27 0 0020.16 5zm-1.41 7.46l-6 6a1.001 1.001 0 01-1.42 0l-6-6a4.29 4.29 0 010-6 4.27 4.27 0 016 0 .999.999 0 001.42 0 4.27 4.27 0 016 6z"></path>
    </svg>
  );
};

UHeartSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeartSign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeartSign;
