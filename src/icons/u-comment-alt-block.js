import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltBlock = props => {
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
      <path d="M19 6h-4a1 1 0 100 2h4a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-1a1 1 0 10-2 0v1a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 22a1.1 1.1 0 00.4-.08A1 1 0 0022 21V9a3 3 0 00-3-3zm-8.46 4.54a5 5 0 10-7.062-7.08 5 5 0 007.062 7.08zM4 7a3 3 0 013-3 3 3 0 011.28.3l-4 4A3 3 0 014 7zm5.7-1.29A3 3 0 0110 7a3 3 0 01-4.28 2.7L9.7 5.71z"></path>
    </svg>
  );
};

UCommentAltBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltBlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltBlock;
