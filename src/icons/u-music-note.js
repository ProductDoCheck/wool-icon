import React from 'react';
import PropTypes from 'prop-types';

const UMusicNote = props => {
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
      <path d="M19.12 2.21a1 1 0 00-.86-.21l-8 2a1 1 0 00-.76 1v10.35a3.45 3.45 0 00-3.444.24A3.5 3.5 0 1011.5 18.5v-7.72L18.74 9h.07l.19-.15.15-.1a.93.93 0 00.13-.15.78.78 0 00.1-.15.582.582 0 00.06-.37.239.239 0 000-.08V3a1 1 0 00-.32-.79zM8 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9.5-12.78l-6 1.5V5.78l6-1.5v2.94z"></path>
    </svg>
  );
};

UMusicNote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMusicNote.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMusicNote;
