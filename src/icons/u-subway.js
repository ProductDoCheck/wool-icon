import React from 'react';
import PropTypes from 'prop-types';

const USubway = props => {
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
      <path d="M16 17a1 1 0 001-1 1.362 1.362 0 000-.2.64.64 0 00-.06-.18.762.762 0 00-.09-.18l-.12-.15a1.15 1.15 0 00-.33-.21 1 1 0 00-.76 0 1.15 1.15 0 00-.33.21l-.12.15a.762.762 0 00-.09.18.64.64 0 00-.06.18 1.362 1.362 0 000 .2 1 1 0 001 1H16zm2-15H6a3 3 0 00-3 3v12a3 3 0 001.2 2.39l-.91.9a1 1 0 00.325 1.639 1 1 0 001.095-.219L6.41 20h11.18l1.7 1.71a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-.91-.9A3.001 3.001 0 0021 17V5a3 3 0 00-3-3zM5 8h6v4H5V8zm14 9a1 1 0 01-1 1H6a1 1 0 01-1-1v-3h14v3zm0-5h-6V8h6v4zm0-6H5V5a1 1 0 011-1h12a1 1 0 011 1v1zM8 17a1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18l-.12-.15a1.15 1.15 0 00-.33-.21 1 1 0 00-.76 0 1.15 1.15 0 00-.33.21l-.12.15a.76.76 0 00-.09.18.64.64 0 00-.1.18 1.36 1.36 0 000 .2 1 1 0 00.615.921A.999.999 0 008 17z"></path>
    </svg>
  );
};

USubway.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USubway.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USubway;
