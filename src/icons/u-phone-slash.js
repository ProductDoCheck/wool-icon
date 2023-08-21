import React from 'react';
import PropTypes from 'prop-types';

const UPhoneSlash = props => {
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
      <path d="M4.91 13.1a1 1 0 00.85.47A1 1 0 006.61 12a17 17 0 01-2.47-6.85 1 1 0 01.578-1.06A1 1 0 015.13 4h3a1 1 0 011 .8c0 .23.08.44.13.67v.13c.116.525.274 1.04.47 1.54l-1.39.66a1 1 0 00-.52.57 1 1 0 000 .77c.1.21.2.42.32.64a1 1 0 001.755-.028 1 1 0 00.115-.542l.57-.21a2 2 0 001.05-2.48 9.303 9.303 0 01-.39-1.3v-.1c0-.2-.08-.4-.11-.58A3 3 0 008.16 2h-3a3 3 0 00-2.28 1 3 3 0 00-.72 2.39 19.05 19.05 0 002.75 7.71zm14.61-.21l-.6-.11h-.08a9.321 9.321 0 01-1.33-.39 2 2 0 00-2.47 1l-.21.46a12.392 12.392 0 01-1.92-1.37l8.8-8.79A1.005 1.005 0 0021 1.976a1.004 1.004 0 00-.71.294l-18 18a.999.999 0 000 1.42 1 1 0 001.42 0l4.59-4.6a19.09 19.09 0 0010.29 4.73c.133.01.267.01.4 0a3 3 0 002-.75 3 3 0 001-2.25v-3a3 3 0 00-2.47-2.93zm.48 6a1 1 0 01-1.15.99 17.07 17.07 0 01-9.14-4.18l1.77-1.77a14.695 14.695 0 003.38 2.21 1 1 0 00.77 0 1.002 1.002 0 00.57-.52l.62-1.41a12 12 0 001.6.47h.11l.69.13a1 1 0 01.78 1v3.08z"></path>
    </svg>
  );
};

UPhoneSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPhoneSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPhoneSlash;
