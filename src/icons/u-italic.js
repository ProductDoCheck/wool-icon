import React from 'react';
import PropTypes from 'prop-types';

const UItalic = props => {
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
      <path d="M17 6h-6a1 1 0 100 2h1.52l-3.2 8H7a1 1 0 000 2h6a1 1 0 000-2h-1.52l3.2-8H17a1 1 0 100-2z"></path>
    </svg>
  );
};

UItalic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UItalic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UItalic;
