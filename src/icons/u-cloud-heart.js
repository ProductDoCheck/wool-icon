import React from 'react';
import PropTypes from 'prop-types';

const UCloudHeart = props => {
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
      <path d="M18.42 7.72A7 7 0 005.06 9.61a4 4 0 00-.38 7.66c.104.032.212.049.32.05a1.013 1.013 0 10.32-2A2 2 0 014 13.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1.004 1.004 0 001 1.74A5 5 0 0022 12.5a5 5 0 00-3.58-4.78zM12 12.83a2.94 2.94 0 00-3.43.53 2.93 2.93 0 000 4.13l2.72 2.72a1.002 1.002 0 001.42 0l2.72-2.72a2.93 2.93 0 000-4.13 2.94 2.94 0 00-3.43-.53zm2 3.24l-2 2-2-2a.88.88 0 01-.27-.65.89.89 0 01.27-.65.92.92 0 011.3 0 1.002 1.002 0 001.42 0 .94.94 0 011.3 0 .89.89 0 01.27.65.88.88 0 01-.29.65z"></path>
    </svg>
  );
};

UCloudHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudHeart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudHeart;
