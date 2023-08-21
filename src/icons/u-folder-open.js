import React from 'react';
import PropTypes from 'prop-types';

const UFolderOpen = props => {
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
      <path d="M22.78 10.37A1 1 0 0022 10h-2V9a3 3 0 00-3-3h-6.28l-.32-1a3 3 0 00-2.84-2H4a3 3 0 00-3 3v12a3 3 0 003 3h14.4a3 3 0 002.92-2.35L23 11.22a1 1 0 00-.22-.85zM5.37 18.22a1 1 0 01-1 .78H4a1 1 0 01-1-1V6a1 1 0 011-1h3.56a1 1 0 011 .68l.54 1.64A1 1 0 0010 8h7a1 1 0 011 1v1H8a1 1 0 00-1 .78l-1.63 7.44zm14 0a1 1 0 01-1 .78H7.21c.052-.111.089-.229.11-.35L8.8 12h12l-1.43 6.22z"></path>
    </svg>
  );
};

UFolderOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderOpen;