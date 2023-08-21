import React from 'react';
import PropTypes from 'prop-types';

const UFlipH = props => {
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
      <path d="M21 11H3a1 1 0 000 2h18a1 1 0 100-2zM10.93 9h1.5a1 1 0 100-2h-1.5a1 1 0 100 2zm4.5-1a1 1 0 001 1H17a1 1 0 00.92-.62 1 1 0 00-.21-1.09l-.66-.65a1 1 0 00-1.6 1.15c-.012.07-.018.14-.02.21zm-3.78-3.23l.35-.36.81.81a1 1 0 001.41 0 1 1 0 000-1.41l-1.06-1.06a.91.91 0 00-.26-.19 1 1 0 00-1.61-.27l-1.06 1.06a1.004 1.004 0 001.42 1.42zM17 15H7a1 1 0 00-.92.62 1 1 0 00.21 1.09l5 5a1.002 1.002 0 001.42 0l5-5a.999.999 0 00.21-1.09A1 1 0 0017 15zm-5 4.59L9.41 17h5.18L12 19.59zM7.05 9a1 1 0 00.71-.29L8.82 7.6A1.004 1.004 0 007.4 6.18L6.34 7.24a1 1 0 000 1.42 1 1 0 00.71.34z"></path>
    </svg>
  );
};

UFlipH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFlipH.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFlipH;
