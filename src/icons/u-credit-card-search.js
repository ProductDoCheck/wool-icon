import React from 'react';
import PropTypes from 'prop-types';

const UCreditCardSearch = props => {
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
      <path d="M20 17.57a4.3 4.3 0 10-3.67 2.06 4.37 4.37 0 002.24-.63l1.72 1.73a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L20 17.57zM18 17a2.37 2.37 0 01-3.27 0 2.32 2.32 0 010-3.27 2.31 2.31 0 013.944 1.635c0 .613-.242 1.2-.674 1.635zm1-14H5a3 3 0 00-3 3v9a3 3 0 003 3h4a1 1 0 000-2H5a1 1 0 01-1-1V9h16v1a1 1 0 002 0V6a3 3 0 00-3-3zm1 4H4V6a1 1 0 011-1h14a1 1 0 011 1v1zm-10 4H7a1 1 0 000 2h3a1 1 0 000-2z"></path>
    </svg>
  );
};

UCreditCardSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCreditCardSearch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCreditCardSearch;
