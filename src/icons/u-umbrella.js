import React from 'react';
import PropTypes from 'prop-types';

const UUmbrella = props => {
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
      <path d="M21 11.24a.22.22 0 010-.08v-.19c0-.23-.06-.46-.1-.69a.75.75 0 010-.16c-.05-.25-.12-.49-.19-.73a8.91 8.91 0 00-5.86-5.87h-.08c-.22-.07-.45-.13-.68-.18h-.18a5.212 5.212 0 00-.55-.08h-.24V3a1 1 0 00-2 0v.06c-.337.04-.67.1-1 .18-.21.04-.417.093-.62.16h-.13c-.25.08-.48.17-.72.26a8.93 8.93 0 00-5.23 5.62.31.31 0 000 .08 6.38 6.38 0 00-.19.72v.16c-.053.24-.093.49-.12.75V12a1 1 0 001 1h7v6a1 1 0 01-2 0 1 1 0 10-2 0 3 3 0 006 0v-6h7a1 1 0 001-1c-.11-.26-.11-.51-.11-.76zM8 11H5.08v-.11c0-.04 0-.28.08-.41.08-.13 0-.13 0-.19s.08-.32.13-.48v-.08A7 7 0 019.1 5.64 16.09 16.09 0 008 11zm2 0c.19-3.91 1.44-6 2-6s1.79 2.09 2 6h-4zm6 0a16.091 16.091 0 00-1.1-5.36 7 7 0 013.73 4.12c.06.174.11.35.15.53a.835.835 0 000 .15c0 .14.06.29.08.43.02.14 0 .07 0 .11L16 11z"></path>
    </svg>
  );
};

UUmbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUmbrella.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUmbrella;
