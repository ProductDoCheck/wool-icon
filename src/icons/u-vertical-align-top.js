import React from 'react';
import PropTypes from 'prop-types';

const UVerticalAlignTop = props => {
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
      <path d="M21 2H3a1 1 0 000 2h3v17a1 1 0 001 1h6a1 1 0 001-1v-5h3a1 1 0 001-1V4h3a1 1 0 100-2zm-9 18H8V4h4v16zm4-6h-2V4h2v10z"></path>
    </svg>
  );
};

UVerticalAlignTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVerticalAlignTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVerticalAlignTop;
