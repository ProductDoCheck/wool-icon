import React from 'react';
import PropTypes from 'prop-types';

const UCircleLayer = props => {
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
      <path d="M15 2a7 7 0 00-6.88 5.74A6 6 0 005 12.41 5 5 0 1011.59 19a6 6 0 004.67-3.09A7 7 0 0015 2zm-5 15.43c0 .1 0 .2-.07.31a3 3 0 11-3.64-3.64l.28-.1A2.938 2.938 0 0110 17.43zm5-3.67c-.013.064-.03.128-.05.19a4 4 0 01-2.87 2.94c0-.18 0-.35-.06-.53-.06-.18 0-.27 0-.4s-.12-.38-.18-.57c-.06-.19-.07-.24-.12-.36a4.212 4.212 0 00-.3-.55c0-.09-.09-.19-.15-.28a5.307 5.307 0 00-.6-.73l-.2-.17a5.544 5.544 0 00-.53-.43 2.892 2.892 0 00-.34-.19 3.987 3.987 0 00-.5-.27 2.332 2.332 0 00-.4-.13 3.129 3.129 0 00-.52-.16c-.14 0-.29 0-.44-.06L7.13 12a4 4 0 012.92-2.87l.2-.05c.247-.052.498-.079.75-.08a4 4 0 014 4 3.85 3.85 0 01-.08.76H15zm2-.16V13a6 6 0 00-6-6h-.6a5 5 0 116.6 6.6z"></path>
    </svg>
  );
};

UCircleLayer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCircleLayer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCircleLayer;
