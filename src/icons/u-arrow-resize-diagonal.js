import React from 'react';
import PropTypes from 'prop-types';

const UArrowResizeDiagonal = props => {
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
      <path d="M21.92 2.62a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 100 2h3.59L4 18.59V15a1 1 0 10-2 0v6a1 1 0 00.08.38 1 1 0 00.54.54c.12.051.25.078.38.08h6a1 1 0 000-2H5.41L20 5.41V9a1 1 0 002 0V3a1.001 1.001 0 00-.08-.38z"></path>
    </svg>
  );
};

UArrowResizeDiagonal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowResizeDiagonal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowResizeDiagonal;
