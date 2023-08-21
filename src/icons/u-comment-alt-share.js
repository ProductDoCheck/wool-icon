import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltShare = props => {
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
      <path d="M19.5 6.5h-5a1 1 0 100 2h5a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9.5a1 1 0 01-1-1v-2a1 1 0 10-2 0v2a3 3 0 003 3h8.36l3 2.73a1 1 0 001.518-.18 1 1 0 00.162-.55v-12a3.002 3.002 0 00-3.04-3zm-10 5a1.999 1.999 0 10-1.18-3.61l-1.75-.8 1.91-.88a2 2 0 001 .29 2 2 0 10-2-2l-1.9.87A2 2 0 004.5 5a2 2 0 100 4 2 2 0 00.93-.24l2.09 1A2 2 0 009.5 11.5z"></path>
    </svg>
  );
};

UCommentAltShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltShare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltShare;
