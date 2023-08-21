import React from 'react';
import PropTypes from 'prop-types';

const UMailbox = props => {
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
      <path d="M8 12h2a1 1 0 000-2H8a1 1 0 000 2zm9-6h-5V4h1a1 1 0 100-2h-2a1 1 0 00-1 1v3H7a4 4 0 00-4 4v6a1 1 0 001 1h6v4a1 1 0 002 0v-4h8a1 1 0 001-1v-6a4 4 0 00-4-4zm-4 4v5H5v-5a2 2 0 012-2h6.56a3.91 3.91 0 00-.56 2zm6 5h-4v-5a2 2 0 114 0v5z"></path>
    </svg>
  );
};

UMailbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMailbox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMailbox;
