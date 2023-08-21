import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltLock = props => {
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
      <path d="M12 10V8a3 3 0 00-2-2.82V4a3 3 0 10-6 0v1.18A3 3 0 002 8v2a3 3 0 003 3h4a3 3 0 003-3zM6 4a1 1 0 012 0v1H6V4zm-2 6V8a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1zm15-3h-4a1 1 0 100 2h4a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-1a1 1 0 10-2 0v1a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 23a1.1 1.1 0 00.4-.08A1 1 0 0022 22V10a3 3 0 00-3-3z"></path>
    </svg>
  );
};

UCommentAltLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltLock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltLock;
