import React from 'react';
import PropTypes from 'prop-types';

const UCommentBlock = props => {
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
      <path d="M19 14a1.002 1.002 0 00-1.22.72A7 7 0 0111 20H5.41l.64-.63a1 1 0 000-1.41 7 7 0 013.2-11.74 1.002 1.002 0 00-.5-1.94A9 9 0 004 18.62l-1.71 1.67a1 1 0 00-.21 1.09A1 1 0 003 22h8a9 9 0 008.72-6.75A1 1 0 0019 14zm1.54-10.54a5 5 0 10-7.08 7.062 5 5 0 007.08-7.062zM14 7a3 3 0 013-3 3 3 0 011.29.3l-4 4A3.002 3.002 0 0114 7zm5.12 2.12a3.08 3.08 0 01-3.4.57l4-4A3 3 0 0120 7a3 3 0 01-.88 2.12z"></path>
    </svg>
  );
};

UCommentBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentBlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentBlock;
