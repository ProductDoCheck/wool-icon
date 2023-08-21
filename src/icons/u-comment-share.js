import React from 'react';
import PropTypes from 'prop-types';

const UCommentShare = props => {
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
      <path d="M19.06 13.51a1 1 0 00-1.11.87A7 7 0 0111 20.5H5.41l.64-.63a1 1 0 000-1.41 7 7 0 013.2-11.74 1.002 1.002 0 00-.5-1.94A9 9 0 004 19.12l-1.71 1.67a1 1 0 00-.21 1.09 1 1 0 00.92.62h8a9 9 0 008.93-7.88 1 1 0 00-.87-1.11zM19 7.5a2 2 0 00-1.18.39l-1.75-.8L18 6.21a2 2 0 001 .29 2 2 0 10-2-2l-1.9.87A2 2 0 0014 5a2 2 0 000 4 2 2 0 00.93-.24l2.09 1A2 2 0 1019 7.5z"></path>
    </svg>
  );
};

UCommentShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentShare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentShare;
