import React from 'react';
import PropTypes from 'prop-types';

const USignRight = props => {
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
      <path d="M7 6v5a1 1 0 001 1h3v8H9a1 1 0 000 2h6a1 1 0 000-2h-2v-8h5a1 1 0 00.78-.37l2-2.5a1 1 0 000-1.25l-2-2.5A1 1 0 0018 5h-5V3a1 1 0 00-2 0v2H8a1 1 0 00-1 1zm2 1h8.52l1.2 1.5-1.2 1.5H9V7z"></path>
    </svg>
  );
};

USignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USignRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USignRight;
