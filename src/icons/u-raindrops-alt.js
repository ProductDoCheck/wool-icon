import React from 'react';
import PropTypes from 'prop-types';

const URaindropsAlt = props => {
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
      <path d="M9 7.75C9 5 6.42 3.24 6.31 3.17a1 1 0 00-1.12 0C5.08 3.25 2.5 5 2.5 7.75a3.25 3.25 0 006.5 0zM5.75 9A1.25 1.25 0 014.5 7.75 3.66 3.66 0 015.75 5.3 3.61 3.61 0 017 7.75 1.25 1.25 0 015.75 9zm6.06 1.17a1 1 0 00-1.12 0c-.17.12-4.19 2.9-4.19 7.08a4.75 4.75 0 109.5 0c0-4.25-4-6.97-4.19-7.08zM11.25 20a2.749 2.749 0 01-2.75-2.75c0-2.31 1.81-4.17 2.76-5 .94.79 2.74 2.63 2.74 5A2.75 2.75 0 0111.25 20zm6.81-17.83a1 1 0 00-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 108 0c0-3.49-3.3-5.74-3.44-5.83zM17.5 10a2 2 0 01-2-2 5.44 5.44 0 012-3.72 5.39 5.39 0 012 3.72 2 2 0 01-2 2z"></path>
    </svg>
  );
};

URaindropsAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URaindropsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URaindropsAlt;