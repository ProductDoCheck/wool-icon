import React from 'react';
import PropTypes from 'prop-types';

const UCloud = props => {
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
      <path d="M18.42 9.21a7 7 0 00-13.36 1.9A4 4 0 006 19h11a5 5 0 001.42-9.79zM17 17H6a2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66A3 3 0 0117 17z"></path>
    </svg>
  );
};

UCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloud;
