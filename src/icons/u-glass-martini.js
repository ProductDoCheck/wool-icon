import React from 'react';
import PropTypes from 'prop-types';

const UGlassMartini = props => {
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
      <path d="M18 20h-5v-5.06A9 9 0 0021 6a8.721 8.721 0 00-.67-3.39 1 1 0 00-.22-.32L20 2.21a.92.92 0 00-.21-.13.94.94 0 00-.28-.08H4.5a.94.94 0 00-.29.06A2.12 2.12 0 004 2.2l-.12.09a1 1 0 00-.22.32A8.72 8.72 0 003 6a9 9 0 008 8.94V20H6a1 1 0 000 2h12a1 1 0 000-2zM5 6a6.91 6.91 0 01.29-2h13.42A7 7 0 115 6z"></path>
    </svg>
  );
};

UGlassMartini.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGlassMartini.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGlassMartini;
