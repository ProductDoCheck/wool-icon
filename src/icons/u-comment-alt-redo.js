import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltRedo = props => {
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
      <path d="M10.3 10.75A1 1 0 109 9.25 3 3 0 117 4a3 3 0 012.23 1H8a1 1 0 100 2h3a1 1 0 001-1V3a1 1 0 00-2 0 5 5 0 10.3 7.75zM19 6h-4a1 1 0 100 2h4a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-1a1 1 0 10-2 0v1a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 22a1.1 1.1 0 00.4-.08A1 1 0 0022 21V9a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UCommentAltRedo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltRedo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltRedo;