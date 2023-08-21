import React from 'react';
import PropTypes from 'prop-types';

const UImageTimes = props => {
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
      <path d="M19 10a1 1 0 00-1 1v3.39l-1.48-1.48a2.771 2.771 0 00-3.93 0l-.7.7-2.48-2.49a2.79 2.79 0 00-3.93 0L4 12.6V7a1 1 0 011-1h8a1 1 0 100-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-8a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.29 4.3H5zm13-1a.89.89 0 01-.18.53L13.31 15l.7-.7a.78.78 0 011.1 0L18 17.22V19zm2.41-14l1.3-1.29a1 1 0 10-1.42-1.41L19 3.59 17.71 2.3a1 1 0 10-1.42 1.41L17.59 5l-1.3 1.3a1 1 0 101.42 1.41L19 6.42l1.29 1.29a1 1 0 101.42-1.41L20.41 5z"></path>
    </svg>
  );
};

UImageTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageTimes;