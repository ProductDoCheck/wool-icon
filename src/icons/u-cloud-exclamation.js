import React from 'react';
import PropTypes from 'prop-types';

const UCloudExclamation = props => {
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
      <path d="M12.71 18.79a1.147 1.147 0 00-.33-.21 1 1 0 00-1.09.21 1.05 1.05 0 00-.29.71 1.003 1.003 0 00.29.71c.097.088.209.16.33.21a1 1 0 001.3-1.3.999.999 0 00-.21-.33zM12 12.5a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm6.42-4.79a7 7 0 00-13.36 1.9A4 4 0 006 17.5h2a1 1 0 000-2H6a2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66A3 3 0 0117 15.5h-1a1 1 0 100 2h1a5 5 0 001.42-9.79z"></path>
    </svg>
  );
};

UCloudExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudExclamation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudExclamation;
