import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltSearch = props => {
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
      <path d="M19 6h-5a1 1 0 100 2h5a1 1 0 011 1v9.72l-1.57-1.45a1 1 0 00-.68-.27H9a1 1 0 01-1-1v-2a1 1 0 10-2 0v2a3 3 0 003 3h8.36l3 2.73A1 1 0 0021 22a1.1 1.1 0 00.4-.08A1 1 0 0022 21V9a3 3 0 00-3-3zM8.57 10l1.72 1.73a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L10 8.57a4.37 4.37 0 00.65-2.26 4.325 4.325 0 10-7.388 3.051A4.32 4.32 0 008.57 10zM4 6.31a2.29 2.29 0 01.68-1.63 2.32 2.32 0 013.32 0A2.31 2.31 0 018 8a2.32 2.32 0 01-4-1.69z"></path>
    </svg>
  );
};

UCommentAltSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltSearch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltSearch;
