import React from 'react';
import PropTypes from 'prop-types';

const UEmoji = props => {
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
      <path d="M15 11a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2zm3-9a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm4.28-7.12a1 1 0 00-1.4-.16A2.78 2.78 0 0014 14h-3.65a2.81 2.81 0 00-.88-1.31 1 1 0 00-1.36.2 1 1 0 00.14 1.39 1 1 0 01.25.72 1.09 1.09 0 01-.25.72 1.001 1.001 0 101.25 1.56c.39-.343.68-.786.84-1.28H14c.16.515.47.971.89 1.31a1 1 0 00.57.18 1 1 0 00.78-.38 1 1 0 00-.14-1.39 1 1 0 01-.25-.72 1.09 1.09 0 01.25-.72 1 1 0 00.18-1.4z"></path>
    </svg>
  );
};

UEmoji.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEmoji.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEmoji;
