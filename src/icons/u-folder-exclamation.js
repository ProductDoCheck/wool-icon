import React from 'react';
import PropTypes from 'prop-types';

const UFolderExclamation = props => {
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
      <path d="M12.92 16.12a.764.764 0 00-.09-.18 1.573 1.573 0 00-.12-.15l-.15-.12-.18-.09a1.002 1.002 0 00-1.09.21l-.12.15a.764.764 0 00-.09.18.64.64 0 00-.06.18 1.362 1.362 0 000 .2c.002.13.029.26.08.38.05.121.122.233.21.33a1 1 0 001.09.22c.12-.058.23-.132.33-.22.088-.1.162-.21.22-.33a1 1 0 00.05-.38 1.362 1.362 0 000-.2.64.64 0 00-.08-.18zM12 10.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm7-5h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1v10z"></path>
    </svg>
  );
};

UFolderExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderExclamation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderExclamation;
