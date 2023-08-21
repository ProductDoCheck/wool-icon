import React from 'react';
import PropTypes from 'prop-types';

const USignOutAlt = props => {
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
      <path d="M12.59 13l-2.3 2.29a1 1 0 000 1.42 1.002 1.002 0 001.42 0l4-4c.091-.095.162-.207.21-.33a1 1 0 000-.76 1 1 0 00-.21-.33l-4-4a1.003 1.003 0 10-1.42 1.42l2.3 2.29H3a1 1 0 100 2h9.59zM12 2a10 10 0 00-9 5.55 1.006 1.006 0 101.8.9A8 8 0 1112 20a7.93 7.93 0 01-7.16-4.45 1.006 1.006 0 00-1.8.9A10 10 0 1012 2z"></path>
    </svg>
  );
};

USignOutAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USignOutAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USignOutAlt;
