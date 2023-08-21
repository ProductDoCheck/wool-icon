import React from 'react';
import PropTypes from 'prop-types';

const UAlign = props => {
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
      <path d="M3 15h10a1 1 0 000-2H3a1 1 0 000 2zm0-4h10a1 1 0 000-2H3a1 1 0 000 2zm0-4h18a1 1 0 100-2H3a1 1 0 000 2zm18 10H3a1 1 0 000 2h18a1 1 0 000-2zm-1.36-7.43a1 1 0 10-1.28 1.53l1.08.9-1.08.9a.997.997 0 00-.13 1.41 1 1 0 00.77.36 1 1 0 00.64-.24l2-1.66a1 1 0 000-1.54l-2-1.66z"></path>
    </svg>
  );
};

UAlign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAlign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAlign;