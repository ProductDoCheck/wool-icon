import React from 'react';
import PropTypes from 'prop-types';

const UExpandArrows = props => {
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
      <path d="M21 8a1 1 0 001-1V3a1.001 1.001 0 00-.08-.38 1 1 0 00-.54-.54A1 1 0 0021 2h-4a1 1 0 100 2h1.59L12 10.59 5.41 4H7a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v4a1 1 0 002 0V5.41L10.59 12 4 18.59V17a1 1 0 10-2 0v4a1 1 0 00.08.38 1 1 0 00.54.54c.12.051.25.078.38.08h4a1 1 0 000-2H5.41L12 13.41 18.59 20H17a1 1 0 000 2h4c.13-.002.26-.029.38-.08a1 1 0 00.54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 00-2 0v1.59L13.41 12 20 5.41V7a1 1 0 001 1z"></path>
    </svg>
  );
};

UExpandArrows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExpandArrows.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExpandArrows;
