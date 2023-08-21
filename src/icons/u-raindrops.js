import React from 'react';
import PropTypes from 'prop-types';

const URaindrops = props => {
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
      <path d="M10.5 8c0-3.49-3.3-5.74-3.44-5.83a1 1 0 00-1.12 0C5.8 2.27 2.5 4.55 2.5 8a4 4 0 108 0zm-4 2a2 2 0 01-2-2 5.44 5.44 0 012-3.72A5.39 5.39 0 018.5 8a2 2 0 01-2 2zm11.56-7.83a1 1 0 00-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 108 0c0-3.49-3.3-5.74-3.44-5.83zM17.5 10a2 2 0 01-2-2 5.44 5.44 0 012-3.72 5.39 5.39 0 012 3.72 2 2 0 01-2 2zm-4.44 2.17a1 1 0 00-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 008 0c0-3.49-3.3-5.74-3.44-5.83zM12.5 20a2 2 0 01-2-2 5.44 5.44 0 012-3.72 5.39 5.39 0 012 3.72 2 2 0 01-2 2z"></path>
    </svg>
  );
};

URaindrops.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URaindrops.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URaindrops;