import React from 'react';
import PropTypes from 'prop-types';

const UFolderSlash = props => {
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
      <path d="M21.71 20.29l-1.6-1.6-16.4-16.4a1.004 1.004 0 10-1.42 1.42l1.4 1.39A3 3 0 003 7v11a3 3 0 003 3h12a2.999 2.999 0 001.29-.3l1 1a.999.999 0 001.42 0 1 1 0 000-1.41zM6 19a1 1 0 01-1-1V7a1 1 0 01.12-.46L17.59 19H6zm4.62-13a1 1 0 01.89.67l.54 1.64A1 1 0 0013 9h5a1 1 0 011 1v4.34a1 1 0 102 0V10a3 3 0 00-3-3h-4.28l-.32-1a3 3 0 00-2.68-2 1.002 1.002 0 00-.1 2z"></path>
    </svg>
  );
};

UFolderSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderSlash;
