import React from 'react';
import PropTypes from 'prop-types';

const UModem = props => {
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
      <path d="M21.48 13.13a.65.65 0 00-.05-.2.891.891 0 00-.08-.17.863.863 0 00-.1-.16l-.16-.13-.09-.09-14.72-8.5a1.003 1.003 0 10-1 1.74l11.49 6.63H3.5a1 1 0 00-1 1v4a3 3 0 003 3h13a3 3 0 003-3v-4s-.02-.08-.02-.12zm-2 4.12a1 1 0 01-1 1H5.5a1 1 0 01-1-1v-3h15l-.02 3zm-3 0a1 1 0 10-.369-.07c.124.049.256.073.389.07h-.02z"></path>
    </svg>
  );
};

UModem.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UModem.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UModem;
