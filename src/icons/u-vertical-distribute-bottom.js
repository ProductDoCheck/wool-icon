import React from 'react';
import PropTypes from 'prop-types';

const UVerticalDistributeBottom = props => {
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
      <path d="M21 18h-1v-5a1 1 0 00-1-1H5a1 1 0 00-1 1v5H3a1 1 0 000 2h18a1 1 0 000-2zm-3 0H6v-4h12v4zM3 10h18a1 1 0 100-2h-2V5a1 1 0 00-1-1H6a1 1 0 00-1 1v3H3a1 1 0 000 2zm4-4h10v2H7V6z"></path>
    </svg>
  );
};

UVerticalDistributeBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVerticalDistributeBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVerticalDistributeBottom;
