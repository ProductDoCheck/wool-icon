import React from 'react';
import PropTypes from 'prop-types';

const UListUl = props => {
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
      <path d="M3.71 16.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21 1 1 0 00-.21.33 1 1 0 00.21 1.09c.097.088.209.16.33.21a.94.94 0 00.76 0 1.15 1.15 0 00.33-.21 1 1 0 00.21-1.09 1 1 0 00-.21-.33zM7 8h14a1 1 0 100-2H7a1 1 0 000 2zm-3.29 3.29a1 1 0 00-1.09-.21 1.15 1.15 0 00-.33.21 1 1 0 00-.21.33.94.94 0 000 .76c.05.121.122.233.21.33.097.088.209.16.33.21a.94.94 0 00.76 0 1.15 1.15 0 00.33-.21 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1 1 0 00-.21-.33zM21 11H7a1 1 0 000 2h14a1 1 0 000-2zM3.71 6.29a1 1 0 00-.33-.21 1 1 0 00-1.09.21 1.15 1.15 0 00-.21.33.94.94 0 000 .76c.05.121.122.233.21.33.097.088.209.16.33.21a1 1 0 001.09-.21 1.15 1.15 0 00.21-.33.94.94 0 000-.76 1.15 1.15 0 00-.21-.33zM21 16H7a1 1 0 000 2h14a1 1 0 000-2z"></path>
    </svg>
  );
};

UListUl.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UListUl.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UListUl;
