import React from 'react';
import PropTypes from 'prop-types';

const USyringe = props => {
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
      <path d="M21.71 2.29a1 1 0 00-1.42 0l-2.12 2.12-.71-.7a1 1 0 00-1.41 0l-1.41 1.41-.71-.71a1 1 0 00-1.42 0l-7.77 7.78-.74-.7a1 1 0 00-1.38 1.41l3.53 3.54-1.73 1.74-.71-.72a1.004 1.004 0 10-1.42 1.42l2.83 2.83a1 1 0 00.71.29.999.999 0 00.71-1.71l-.71-.7 1.74-1.74 3.53 3.53a1 1 0 00.71.3.999.999 0 00.7-1.71l-.7-.71 7.78-7.77a1 1 0 000-1.42l-.71-.71L20.29 8a1 1 0 000-1.41l-.7-.71 2.12-2.12a1 1 0 000-1.47zM7.57 15l-1.42-1.39 1.41-1.42L9 13.61 7.57 15zm2.82 2.83L9 16.44 10.39 15l1.42 1.42-1.42 1.41zM13.22 15L9 10.78l4.24-4.24.71.7 3.53 3.54L13.22 15zm4.24-7l-1.41-1.46.71-.71.7.7.7.7-.7.77z"></path>
    </svg>
  );
};

USyringe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USyringe.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USyringe;
