import React from 'react';
import PropTypes from 'prop-types';

const UBook = props => {
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
      <path d="M15 6H9a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1zm-1 4h-4V8h4v2zm3-8H5a1 1 0 00-1 1v18a1 1 0 001 1h12a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H6V4h11a1 1 0 011 1v14z"></path>
    </svg>
  );
};

UBook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBook.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBook;
