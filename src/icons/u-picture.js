import React from 'react';
import PropTypes from 'prop-types';

const UPicture = props => {
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
      <path d="M20 4a1 1 0 00.385-1.919 1 1 0 00-1.095.219 1 1 0 00-.21.32A.84.84 0 0019 3a1 1 0 001 1zm0 9a1 1 0 00-1 1v.39l-1.48-1.48a2.771 2.771 0 00-3.93 0l-.7.7-2.48-2.49a2.86 2.86 0 00-3.93 0L5 12.6V7a1 1 0 011-1h10a1 1 0 100-2H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM6 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.29 4.3H6zm13-1a1 1 0 01-.18.53L14.31 15l.7-.7a.78.78 0 011.1 0L19 17.22V19zm1-14a1 1 0 00-1 1v4a1 1 0 002 0V6a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UPicture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPicture.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPicture;