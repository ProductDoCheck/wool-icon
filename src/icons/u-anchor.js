import React from 'react';
import PropTypes from 'prop-types';

const UAnchor = props => {
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
      <path d="M19 13h-2a1 1 0 000 2h.91A6 6 0 0113 19.91V11h1a1 1 0 000-2h-1V7.82a3 3 0 10-2 0V9h-1a1 1 0 000 2h1v8.91A6 6 0 016.09 15H7a1 1 0 000-2H5a1 1 0 00-1 1 8 8 0 0016 0 1 1 0 00-1-1zm-7-7a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UAnchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAnchor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAnchor;
