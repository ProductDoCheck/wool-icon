import React from 'react';
import PropTypes from 'prop-types';

const UClapperBoard = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm-2.91 2l-4 4H7.91l4-4h4.18zM4 5a1 1 0 011-1h4.09l-4 4H4V5zm16 14a1 1 0 01-1 1H5a1 1 0 01-1-1v-9h16v9zm0-11h-5.09l4-4H19a1 1 0 011 1v3z"></path>
    </svg>
  );
};

UClapperBoard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClapperBoard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClapperBoard;
