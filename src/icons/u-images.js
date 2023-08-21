import React from 'react';
import PropTypes from 'prop-types';

const UImages = props => {
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
      <path d="M18 15V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3zM4 5a1 1 0 011-1h10a1 1 0 011 1v4.36l-1.08-1.09a2.56 2.56 0 00-3.62 0l-.91.91-.81-.81a2.93 2.93 0 00-4.11 0L4 9.85V5zm.12 10.45A.94.94 0 014 15v-2.33l2.88-2.88a.91.91 0 011.29 0l.83.81-4.88 4.85zm8.6-5.76a.52.52 0 01.39-.17.52.52 0 01.39.17l2.5 2.49V15a1 1 0 01-1 1H6.4l6.32-6.31zM21 6a1 1 0 00-1 1v10a3 3 0 01-3 3H7a1 1 0 000 2h10a5 5 0 005-5V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UImages.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImages.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImages;
