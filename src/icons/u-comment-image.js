import React from 'react';
import PropTypes from 'prop-types';

const UCommentImage = props => {
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
      <path d="M12 2a10 10 0 00-9.56 12.91.29.29 0 000 .1 9.83 9.83 0 001.79 3.32l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 009.46-6.78v-.08c.348-1.01.53-2.071.54-3.14A10 10 0 0012 2zm0 18H5.41l.3-.29 8.41-8.42a1 1 0 011.4 0l3.62 3.6.23.22A8 8 0 0112 20zm-7.46-5.13l1.58-1.58a1 1 0 011.41 0l.87.87-2.72 2.74a7.67 7.67 0 01-1.14-2.03zm15.41-2l-3-3a3 3 0 00-4.24 0l-2.89 2.89-.88-.87a3 3 0 00-4.23 0l-.71.67A5.251 5.251 0 014 12a8 8 0 1116 0c.015.287.015.573 0 .86l-.05.01z"></path>
    </svg>
  );
};

UCommentImage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentImage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentImage;
