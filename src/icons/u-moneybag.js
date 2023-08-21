import React from 'react';
import PropTypes from 'prop-types';

const UMoneybag = props => {
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
      <path d="M12 11a3 3 0 100 5.999A3 3 0 0012 11zm0 4a1 1 0 110-2 1 1 0 010 2zm7-9h-3V5a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4V5zM4 9a1 1 0 011-1h1a2 2 0 01-2 2V9zm1 11a1 1 0 01-1-1v-1a2 2 0 012 2H5zm15-1a1 1 0 01-1 1h-1a2 2 0 012-2v1zm0-3a4 4 0 00-4 4H8a4 4 0 00-4-4v-4a4 4 0 004-4h8a4 4 0 004 4v4zm0-6a2 2 0 01-2-2h1a1 1 0 011 1v1z"></path>
    </svg>
  );
};

UMoneybag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoneybag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoneybag;
