import React from 'react';
import PropTypes from 'prop-types';

const UGlassTea = props => {
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
      <path d="M19 3a3 3 0 00-2.23-1H7.23a3 3 0 00-3 3.33l1.56 14a3 3 0 003 2.67h6.42a3 3 0 003-2.67l1.56-14A3 3 0 0019 3zm-2.8 16.11a1 1 0 01-1 .89H8.79a1 1 0 01-1-.89L6.78 10h10.44l-1.02 9.11zM17.44 8H6.56l-.32-2.89A1 1 0 017.23 4h9.54a1 1 0 01.99 1.11L17.44 8zM14 18a1 1 0 001-1v-4a1 1 0 00-2 0v4a1 1 0 001 1zm-4 0a1 1 0 001-1v-4a1 1 0 00-2 0v4a1 1 0 001 1z"></path>
    </svg>
  );
};

UGlassTea.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGlassTea.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGlassTea;
