import React from 'react';
import PropTypes from 'prop-types';

const UPuzzlePiece = props => {
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
      <path d="M17 22H5a3 3 0 01-3-3V9a3 3 0 013-3h1a4 4 0 017.3-2.18c.448.64.692 1.4.7 2.18h3a1 1 0 011 1v3a4 4 0 012.18 7.3A3.86 3.86 0 0118 18v3a1 1 0 01-1 1zM5 8a1 1 0 00-1 1v10a1 1 0 001 1h11v-3.18a1 1 0 011.33-.95 1.77 1.77 0 001.74-.23 2 2 0 00.93-1.37 2 2 0 00-.48-1.59 1.89 1.89 0 00-2.17-.55 1 1 0 01-1.33-.95V8h-3.2a1 1 0 01-1-1.33 1.77 1.77 0 00-.23-1.74 1.939 1.939 0 00-3-.43A2 2 0 008 6c.002.23.046.456.13.67A1 1 0 017.18 8H5z"></path>
    </svg>
  );
};

UPuzzlePiece.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPuzzlePiece.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPuzzlePiece;
