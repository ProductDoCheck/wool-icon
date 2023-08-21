import React from 'react';
import PropTypes from 'prop-types';

const UBagAlt = props => {
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
      <path d="M19 6.5h-3v-1a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4v-1zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1V13a21.71 21.71 0 008 1.53A21.75 21.75 0 0020 13v5.5zm0-7.69a19.89 19.89 0 01-16 0V9.5a1 1 0 011-1h14a1 1 0 011 1v1.31z"></path>
    </svg>
  );
};

UBagAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBagAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBagAlt;
