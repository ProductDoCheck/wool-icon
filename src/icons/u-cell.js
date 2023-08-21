import React from 'react';
import PropTypes from 'prop-types';

const UCell = props => {
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
      <path d="M21.49 4.73L17 2.17a1 1 0 00-1 0l-4 2.28-4-2.28a1 1 0 00-1 0L2.51 4.73A1 1 0 002 5.6v5.12a1 1 0 00.51.87l4 2.27v4.54a1 1 0 00.51.87l4.5 2.56a1 1 0 001 0L17 19.27a1 1 0 00.51-.87v-4.54l4-2.27a1 1 0 00.51-.87V5.6a1 1 0 00-.53-.87zM4 10.14v-4l3.5-2 3.5 2v4l-3.5 2-3.5-2zm11.5 7.68l-3.5 2-3.5-2v-4l3.5-2 3.5 2v4zm4.5-7.68l-3.5 2-3.5-2v-4l3.5-2 3.5 2v4z"></path>
    </svg>
  );
};

UCell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCell;
