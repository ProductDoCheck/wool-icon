import React from 'react';
import PropTypes from 'prop-types';

const UCommentsAlt = props => {
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
      <path d="M19 8h-1V5a3 3 0 00-3-3H5a3 3 0 00-3 3v12a1 1 0 00.62.92 1 1 0 001.09-.21l2.81-2.82H8v1.44a3 3 0 003 3h6.92l2.37 2.38A1 1 0 0021 22a.84.84 0 00.38-.08A1 1 0 0022 21V11a3 3 0 00-3-3zM8 11v1.89H6.11a1 1 0 00-.71.29L4 14.59V5a1 1 0 011-1h10a1 1 0 011 1v3h-5a3 3 0 00-3 3zm12 7.59l-1-1a1 1 0 00-.71-.3H11a1 1 0 01-1-1V11a1 1 0 011-1h8a1 1 0 011 1v7.59z"></path>
    </svg>
  );
};

UCommentsAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentsAlt;