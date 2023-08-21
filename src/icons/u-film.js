import React from 'react';
import PropTypes from 'prop-types';

const UFilm = props => {
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
      <path d="M21 2a1 1 0 00-1 1v2h-2V3a1 1 0 00-2 0v1H8V3a1 1 0 00-2 0v2H4V3a1 1 0 00-2 0v18a1 1 0 102 0v-2h2v2a1 1 0 102 0v-1h8v1a1 1 0 002 0v-2h2v2a1 1 0 002 0V3a1 1 0 00-1-1zM6 17H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V7h2v2zm10 9H8v-5h8v5zm0-7H8V6h8v5zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
    </svg>
  );
};

UFilm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFilm.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFilm;
