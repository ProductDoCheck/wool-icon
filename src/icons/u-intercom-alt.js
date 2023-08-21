import React from 'react';
import PropTypes from 'prop-types';

const UIntercomAlt = props => {
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
      <path d="M9.991 15a1 1 0 001-1V6a1 1 0 10-2 0v8a1 1 0 001 1zm4 0a1 1 0 001-1V6a1 1 0 10-2 0v8a1 1 0 001 1zm-8-2a1 1 0 001-1V8a1 1 0 00-2 0v4a1 1 0 001 1zm14-12h-16a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm1 19a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16zm-3.643-4.591A8.82 8.82 0 0111.99 17a8.987 8.987 0 01-5.356-1.591 1 1 0 00-1.287 1.53A10.8 10.8 0 0011.99 19a10.8 10.8 0 006.644-2.06 1 1 0 00-1.287-1.531zM17.99 7a1 1 0 00-1 1v4a1 1 0 002 0V8a.998.998 0 00-1-1z"></path>
    </svg>
  );
};

UIntercomAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UIntercomAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UIntercomAlt;
