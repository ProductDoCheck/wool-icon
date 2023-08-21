import React from 'react';
import PropTypes from 'prop-types';

const UFolderInfo = props => {
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
      <path d="M12 13.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm7-8h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1v10zm-7.29-7.71a1 1 0 00-1.09-.21.93.93 0 00-.33.21 1.05 1.05 0 00-.29.71 1 1 0 002 0 1.001 1.001 0 00-.08-.38.93.93 0 00-.21-.33z"></path>
    </svg>
  );
};

UFolderInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderInfo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderInfo;
