import React from 'react';
import PropTypes from 'prop-types';

const UUtensilsAlt = props => {
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
      <path d="M15.53 14.13a.999.999 0 00-1.42 0 1 1 0 000 1.41l6.18 6.18a1 1 0 101.42-1.41l-6.18-6.18zm1.23-2.49a3 3 0 002.12-.88l2.83-2.83a1 1 0 10-1.42-1.41l-2.83 2.83a1 1 0 01-1.41 0l3.54-3.54a1 1 0 10-1.42-1.41l-3.53 3.53a1 1 0 010-1.41l2.82-2.83a1 1 0 10-1.41-1.41l-2.83 2.83a3 3 0 000 4.24L12 10.59l-1.56-1.54a4.16 4.16 0 00-.74-5C8.26 2.61 4.53 1 2.77 2.79 1.01 4.58 2.6 8.27 4 9.72A4.36 4.36 0 006.94 11h.14A3.881 3.881 0 009 10.46L10.57 12l-8.28 8.28a1 1 0 101.42 1.41l9-9 1.92-1.92a3 3 0 002.13.87zm-8.33-3.2A1.93 1.93 0 017 9a2.26 2.26 0 01-1.54-.7C4.38 7.22 3.62 4.77 4.19 4.2a1 1 0 01.66-.2 5.87 5.87 0 013.44 1.47 2.12 2.12 0 01.14 2.97z"></path>
    </svg>
  );
};

UUtensilsAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUtensilsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUtensilsAlt;
