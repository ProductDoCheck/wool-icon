import React from 'react';
import PropTypes from 'prop-types';

const UCloudHail = props => {
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
      <path d="M12 17a1 1 0 100 2.002A1 1 0 0012 17zm-4-6a1 1 0 100 2.001A1 1 0 008 11zm4 2a1 1 0 100 2.002A1 1 0 0012 13zm-4 6a1 1 0 100 2.001A1 1 0 008 19zm0-4a1 1 0 100 2.001A1 1 0 008 15zm8 0a1 1 0 100 2.002A1 1 0 0016 15zm-4-6a1 1 0 100 2 1 1 0 000-2zm4 2a1 1 0 100 2.002A1 1 0 0016 11zm2.42-4.78A7 7 0 005.06 8.11 4 4 0 002 12a4 4 0 001.34 3 1 1 0 101.32-1.5A1.999 1.999 0 014 12a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 11a2.91 2.91 0 01-.74 2 1 1 0 001.48 1.34 5 5 0 00-2.32-8.08v-.04zM16 19a1 1 0 100 2.002A1 1 0 0016 19z"></path>
    </svg>
  );
};

UCloudHail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudHail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudHail;
