import React from 'react';
import PropTypes from 'prop-types';

const UBookmark = props => {
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
      <path d="M16 2H8a3 3 0 00-3 3v16a1 1 0 001.5.87l5.5-3.18 5.5 3.18a1 1 0 00.5.13 1 1 0 00.5-.13A1 1 0 0019 21V5a3 3 0 00-3-3zm1 17.27l-4.5-2.6a1 1 0 00-1 0L7 19.27V5a1 1 0 011-1h8a1 1 0 011 1v14.27z"></path>
    </svg>
  );
};

UBookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBookmark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBookmark;
