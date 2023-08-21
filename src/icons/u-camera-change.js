import React from 'react';
import PropTypes from 'prop-types';

const UCameraChange = props => {
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
      <path d="M12.29 5.21l1.5 1.5a1 1 0 001.42 0 1 1 0 00.13-1.21H19a1 1 0 100-2h-3.66a1 1 0 00-.13-1.21 1 1 0 00-1.42 0l-1.5 1.5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33zm10.63 3.91a1 1 0 00-.21-.33l-1.5-1.5a1 1 0 00-1.42 0 1 1 0 00-.13 1.21H16a1 1 0 100 2h3.66a1 1 0 00.13 1.21 1.002 1.002 0 001.42 0l1.5-1.5a1 1 0 00.21-.33 1 1 0 000-.76zM11 10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm9-3a1 1 0 00-1 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h2a1 1 0 001-.69l.54-1.62a1 1 0 01.9-.69H10a1 1 0 100-2H8.44a3 3 0 00-2.85 2.06L5.28 8H4a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-5a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UCameraChange.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCameraChange.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCameraChange;
