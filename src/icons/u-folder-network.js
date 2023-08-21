import React from 'react';
import PropTypes from 'prop-types';

const UFolderNetwork = props => {
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
      <path d="M21 18h-6.18A3 3 0 0013 16.18V14h3.67A2.34 2.34 0 0019 11.67V6.33A2.34 2.34 0 0016.67 4h-4l-.13-.41A2.34 2.34 0 0010.37 2h-3A2.34 2.34 0 005 4.33v7.34A2.34 2.34 0 007.33 14H11v2.18A3.002 3.002 0 009.18 18H3a1 1 0 000 2h6.18a3 3 0 005.64 0H21a1 1 0 100-2zM7.33 12a.33.33 0 01-.33-.33V4.33A.33.33 0 017.33 4h3a.33.33 0 01.32.23l.36 1.09A1 1 0 0012 6h4.67a.33.33 0 01.33.33v5.34a.33.33 0 01-.33.33H7.33zM12 20a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UFolderNetwork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderNetwork.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderNetwork;
