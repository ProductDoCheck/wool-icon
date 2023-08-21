import React from 'react';
import PropTypes from 'prop-types';

const UImageRedo = props => {
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
      <path d="M21.5 1.5a1 1 0 00-1 1 5 5 0 10.3 7.75 1.003 1.003 0 00-1.32-1.51 3 3 0 11.25-4.25H18.5a1 1 0 100 2h3a1 1 0 001-1v-3a1 1 0 00-1-.99zm-3 12a1 1 0 00-1 1v.39L16 13.41a2.77 2.77 0 00-3.93 0l-.7.7-2.46-2.49a2.79 2.79 0 00-3.93 0L3.5 13.1V7.5a1 1 0 011-1h5a1 1 0 100-2h-5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zm-14 7a1 1 0 01-1-1v-3.57L6.4 13a.79.79 0 011.09 0l3.17 3.17L15 20.5H4.5zm13-1a1 1 0 01-.18.53l-4.51-4.51.7-.7a.78.78 0 011.1 0l2.89 2.9v1.78z"></path>
    </svg>
  );
};

UImageRedo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageRedo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageRedo;
