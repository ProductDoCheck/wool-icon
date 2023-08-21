import React from 'react';
import PropTypes from 'prop-types';

const UFolderTimes = props => {
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
      <path d="M14.71 10.79a1.002 1.002 0 00-1.42 0L12 12.09l-1.29-1.3a1.004 1.004 0 10-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l1.29-1.3 1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-1.3-1.29 1.3-1.29a1 1 0 000-1.42zM19 5.5h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1v10z"></path>
    </svg>
  );
};

UFolderTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderTimes;
