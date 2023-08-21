import React from 'react';
import PropTypes from 'prop-types';

const UWindsock = props => {
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
      <path d="M18.08 5L10 4.33l-3-.25V3a1 1 0 00-2 0v18a1 1 0 102 0v-7.08l3-.25 8.08-.67a1 1 0 00.92-1V6a1 1 0 00-.92-1zM9 11.75l-2 .16V6.09l2 .16v5.5zm4-.34l-2 .17V6.42l2 .17v4.82zm4-.33l-2 .17v-4.5l2 .17v4.16z"></path>
    </svg>
  );
};

UWindsock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWindsock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWindsock;
