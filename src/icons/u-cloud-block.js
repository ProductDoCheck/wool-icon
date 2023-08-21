import React from 'react';
import PropTypes from 'prop-types';

const UCloudBlock = props => {
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
      <path d="M18.42 7.72A7 7 0 005.06 9.61a4 4 0 00-.38 7.66c.104.032.212.049.32.05a1.013 1.013 0 10.32-2A2 2 0 014 13.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1.004 1.004 0 001 1.74A5 5 0 0022 12.5a5 5 0 00-3.58-4.78zm-9.25 6a4 4 0 105.66 0 4.1 4.1 0 00-5.66-.05v.05zM10 16.5a2 2 0 012-2c.172.002.344.026.51.07L10.07 17a2.095 2.095 0 01-.07-.5zm3.41 1.41a2 2 0 01-1.91.5L13.93 16c.044.166.068.338.07.51a2 2 0 01-.59 1.4z"></path>
    </svg>
  );
};

UCloudBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudBlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudBlock;
