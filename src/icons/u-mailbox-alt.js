import React from 'react';
import PropTypes from 'prop-types';

const UMailboxAlt = props => {
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
      <path d="M11 13h2a1 1 0 000-2h-2a1 1 0 000 2zm8 7h-1V9h1a1 1 0 100-2h-1.09A6 6 0 006.09 7H5a1 1 0 000 2h1v11H5a1 1 0 000 2h14a1 1 0 000-2zM12 4a4 4 0 013.86 3H8.14A4 4 0 0112 4zm4 16H8v-2h8v2zm0-4H8V9h8v7z"></path>
    </svg>
  );
};

UMailboxAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMailboxAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMailboxAlt;
