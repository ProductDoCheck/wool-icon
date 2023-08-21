import React from 'react';
import PropTypes from 'prop-types';

const UCloudBookmark = props => {
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
      <path d="M15 11h-5a1 1 0 00-1 1v8a1 1 0 001.56.83l1.94-1.3 1.89 1.26a1 1 0 001.46-.26A1 1 0 0016 20v-8a1 1 0 00-1-1zm-1 7.12l-.94-.63a1 1 0 00-1.12 0l-.94.64V13h3v5.12zm4.42-10.9A7 7 0 005.06 9.11 4 4 0 006 17a1 1 0 100-2 2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1.004 1.004 0 001 1.74A5 5 0 0022 12a5 5 0 00-3.58-4.78z"></path>
    </svg>
  );
};

UCloudBookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudBookmark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudBookmark;