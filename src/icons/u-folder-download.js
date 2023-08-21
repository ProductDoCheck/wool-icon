import React from 'react';
import PropTypes from 'prop-types';

const UFolderDownload = props => {
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
      <path d="M13.29 13.79l-.29.3V11.5a1 1 0 00-2 0v2.59l-.29-.3a1.004 1.004 0 10-1.42 1.42l2 2a.999.999 0 00.33.21.94.94 0 00.76 0 .999.999 0 00.33-.21l2-2a1.004 1.004 0 10-1.42-1.42zM19 5.5h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1v10z"></path>
    </svg>
  );
};

UFolderDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderDownload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderDownload;
