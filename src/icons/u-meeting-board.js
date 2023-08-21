import React from 'react';
import PropTypes from 'prop-types';

const UMeetingBoard = props => {
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
      <path d="M7 10h2a1 1 0 000-2H7a1 1 0 000 2zm14-6h-8V3a1 1 0 00-2 0v1H3a1 1 0 00-1 1v10a3 3 0 003 3h4.59l-2.3 2.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l2.29-2.3V21a1 1 0 002 0v-1.59l2.29 2.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L14.41 18H19a3 3 0 003-3V5a1 1 0 00-1-1zm-1 11a1 1 0 01-1 1H5a1 1 0 01-1-1V6h16v9zM7 14h6a1 1 0 000-2H7a1 1 0 000 2z"></path>
    </svg>
  );
};

UMeetingBoard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMeetingBoard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMeetingBoard;
