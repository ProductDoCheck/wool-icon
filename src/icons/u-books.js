import React from 'react';
import PropTypes from 'prop-types';

const UBooks = props => {
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
      <path d="M22.47 18.82l-1-3.86-3.15-11.59a1 1 0 00-1.22-.71l-3.87 1a1 1 0 00-.73-.33h-10a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1v-8l2.2 8.22a1 1 0 001 .74c.086.01.174.01.26 0L21.79 20a1 1 0 00.61-.47 1.05 1.05 0 00.07-.71zm-16 .55h-3v-2h3v2zm0-4h-3v-6h3v6zm0-8h-3v-2h3v2zm5 12h-3v-2h3v2zm0-4h-3v-6h3v6zm0-8h-3v-2h3v2zm2.25-1.74l2.9-.78.52 1.93-2.9.78-.52-1.93zm2.59 9.66l-1.55-5.8 2.9-.78 1.55 5.8-2.9.78zm1 3.86l-.52-1.93 2.9-.78.52 1.93-2.9.78z"></path>
    </svg>
  );
};

UBooks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBooks.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBooks;
