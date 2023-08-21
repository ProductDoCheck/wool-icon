import React from 'react';
import PropTypes from 'prop-types';

const UMusicTuneSlash = props => {
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
      <path d="M12 7.33a1 1 0 001-1v-.55l6-1.5v2.94L14.7 8.3a1.007 1.007 0 00.24 2h.24L20.24 9h.07l.19-.09.15-.1a.93.93 0 00.13-.15.78.78 0 00.1-.15.549.549 0 00.06-.18.65.65 0 000-.19A.24.24 0 0021 8V3a1 1 0 00-1.24-1l-8 2A1 1 0 0011 5v1.33a1 1 0 001 1zm9.71 13l-9-9-9-9a1 1 0 00-1.42 1.38l8.71 8.7v2.94a3.45 3.45 0 00-3.444.24A3.5 3.5 0 1013 18.5v-4.09l7.29 7.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095v.04zM9.5 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
    </svg>
  );
};

UMusicTuneSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMusicTuneSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMusicTuneSlash;
