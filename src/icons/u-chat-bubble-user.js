import React from 'react';
import PropTypes from 'prop-types';

const UChatBubbleUser = props => {
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
      <path d="M14.58 11.3a3.24 3.24 0 00.71-2 3.29 3.29 0 10-6.58 0 3.24 3.24 0 00.71 2 5 5 0 00-2 2.31 1 1 0 101.84.78A3 3 0 0112 12.57a3 3 0 012.75 1.82 1 1 0 101.84-.78 5 5 0 00-2.01-2.31zM12 10.57a1.29 1.29 0 110-2.58 1.29 1.29 0 010 2.58zM18 2H6a3 3 0 00-3 3v11a3 3 0 003 3h2.59l2.7 2.71A1 1 0 0012 22a1 1 0 00.65-.24L15.87 19H18a3 3 0 003-3V5a3 3 0 00-3-3zm1 14a1 1 0 01-1 1h-2.5a1 1 0 00-.65.24l-2.8 2.4-2.34-2.35A1 1 0 009 17H6a1 1 0 01-1-1V5a1 1 0 011-1h12a1 1 0 011 1v11z"></path>
    </svg>
  );
};

UChatBubbleUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UChatBubbleUser.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UChatBubbleUser;