import React from 'react';
import PropTypes from 'prop-types';

const UBloggerAlt = props => {
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
      <path d="M13.991 13h-4a1 1 0 000 2h4a1 1 0 100-2zm-4-2h1a1 1 0 100-2h-1a1 1 0 000 2zm6-1V9a4.004 4.004 0 00-4-4h-2a5.006 5.006 0 00-5 5v4a5.006 5.006 0 005 5h4a5.006 5.006 0 005-5v-1a3.004 3.004 0 00-3-3zm0 0v.001h-1 1zm1 4a3.003 3.003 0 01-3 3h-4a3.003 3.003 0 01-3-3v-4a3.003 3.003 0 013-3h2a2.003 2.003 0 012 2v1a2.002 2.002 0 002 2 1 1 0 011 1v1zm3-13h-16a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm1 19a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16z"></path>
    </svg>
  );
};

UBloggerAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBloggerAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBloggerAlt;
