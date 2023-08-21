import React from 'react';
import PropTypes from 'prop-types';

const UMusic = props => {
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
      <path d="M21.65 2.24a1 1 0 00-.8-.23l-13 2A1 1 0 007 5v10.35a3.45 3.45 0 00-3.444.24A3.5 3.5 0 109 18.5v-7.64l11-1.69v4.18a3.45 3.45 0 00-3.445.24A3.5 3.5 0 1022 16.5V3a1 1 0 00-.35-.76zM5.5 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm13-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM20 7.14L9 8.83v-3l11-1.66v2.97z"></path>
    </svg>
  );
};

UMusic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMusic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMusic;
