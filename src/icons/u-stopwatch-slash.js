import React from 'react';
import PropTypes from 'prop-types';

const UStopwatchSlash = props => {
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
      <path d="M10.6 5.63a1.016 1.016 0 00.36 2 6.18 6.18 0 011-.09 6 6 0 016 6c-.003.335-.033.67-.09 1a1 1 0 00.8 1.16h.18a1 1 0 001-.82A7.45 7.45 0 0020 13.5a8 8 0 00-1.7-4.91l.91-.9a1.004 1.004 0 10-1.42-1.42l-.9.91A8 8 0 0012 5.5c-.47 0-.938.043-1.4.13zM10 4.5h4a1 1 0 100-2h-4a1 1 0 000 2zm3.49 9.08v-.08-.08l1.34-1.33a1.004 1.004 0 00-1.42-1.42L12.08 12h-.16L5.71 5.79a1.004 1.004 0 00-1.42 1.42l.48.48.91.91A8 8 0 0016.9 19.82l1.39 1.39a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-6.22-6.21zM12 19.5A6 6 0 017.11 10l3.4 3.39v.08A1.5 1.5 0 0012 15h.08l3.39 3.4A6 6 0 0112 19.5z"></path>
    </svg>
  );
};

UStopwatchSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStopwatchSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStopwatchSlash;
