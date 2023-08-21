import React from 'react';
import PropTypes from 'prop-types';

const UPercentage = props => {
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
      <path d="M7.758 10.758a3 3 0 100-6 3 3 0 000 6zm0-4a1 1 0 110 2 1 1 0 010-2zm8.484 6.484a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2zm3.465-12.949a.999.999 0 00-1.414 0l-14 14a1 1 0 101.414 1.414l14-14a1 1 0 000-1.414z"></path>
    </svg>
  );
};

UPercentage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPercentage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPercentage;
