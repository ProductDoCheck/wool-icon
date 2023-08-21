import React from 'react';
import PropTypes from 'prop-types';

const UPhoneVolume = props => {
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
      <path d="M19.41 13c-.22 0-.45-.07-.67-.12-.445-.1-.883-.23-1.31-.39a2 2 0 00-2.48 1l-.22.46a13.17 13.17 0 01-2.67-2 13.167 13.167 0 01-2-2.67l.46-.21a2 2 0 001-2.48 10.47 10.47 0 01-.39-1.32c-.05-.22-.09-.45-.12-.67a3 3 0 00-3-2.49H5a3 3 0 00-2.24 1 3 3 0 00-.73 2.4 19.07 19.07 0 005.41 11 19.07 19.07 0 0011 5.41c.13.01.26.01.39 0a3 3 0 002.74-1.773c.172-.386.26-.804.26-1.227v-3A3 3 0 0019.41 13zm.49 6a1 1 0 01-.712.957 1 1 0 01-.438.033 17.16 17.16 0 01-9.87-4.84A17.16 17.16 0 014 5.25a1 1 0 01.59-1.065A1 1 0 015 4.1h3a1 1 0 011 .78c0 .27.09.55.15.82a11 11 0 00.46 1.54l-1.4.66a1 1 0 00-.52.56 1 1 0 000 .76 14.49 14.49 0 007 7 1 1 0 00.76 0 1 1 0 00.56-.52l.63-1.4a12.41 12.41 0 002.39.61 1 1 0 01.78 1L19.9 19zM14 2h-.7a1.004 1.004 0 00.17 2H14a6 6 0 016 6v.53a1 1 0 00.91 1.08h.08a1 1 0 001-.91V10A8 8 0 0014 2zm2 8a1 1 0 102 0 4 4 0 00-4-4 1 1 0 100 2 2 2 0 012 2z"></path>
    </svg>
  );
};

UPhoneVolume.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPhoneVolume.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPhoneVolume;
