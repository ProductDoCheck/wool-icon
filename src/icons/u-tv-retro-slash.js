import React from 'react';
import PropTypes from 'prop-types';

const UTvRetroSlash = props => {
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
      <path d="M11.62 7.92A1 1 0 0012 8h6a1 1 0 011 1v5.34a1 1 0 102 0V9a3 3 0 00-3-3h-3.59l2.3-2.29A1.005 1.005 0 0016 1.996c-.266 0-.522.106-.71.294l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.54.54zm10.09 12.37l-18-18a1.004 1.004 0 00-1.42 1.42l2.54 2.53A3 3 0 003 9v8a3 3 0 003 3v1a1 1 0 102 0v-1h8v1a1 1 0 102 0v-1c.178-.005.355-.025.53-.06l1.76 1.77a.999.999 0 001.42 0 1 1 0 000-1.42zM6 18a1 1 0 01-1-1V9a1 1 0 011-1h.59l10 10H6z"></path>
    </svg>
  );
};

UTvRetroSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTvRetroSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTvRetroSlash;
