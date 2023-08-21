import React from 'react';
import PropTypes from 'prop-types';

const UWifiRouter = props => {
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
      <path d="M8.9 17a1 1 0 100 2 1 1 0 000-2zm-3 0a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 1.999 1 1 0 000-2zM15 8.5a1 1 0 011.73 0 1 1 0 001.36.37 1 1 0 00.41-1.37 3 3 0 00-5.2 0 1 1 0 001.7 1zm7-3a7 7 0 00-12.12 0A1 1 0 0010.7 7a1 1 0 00.87-.5 5 5 0 018.66 0 1 1 0 001.37.37.999.999 0 00.4-1.37zM17.9 14h-1v-3a1 1 0 10-2 0v3h-10a3 3 0 00-3 3v2a3 3 0 003 3h13a3 3 0 003-3v-2a3 3 0 00-3-3zm1 5a1 1 0 01-1 1h-13a1 1 0 01-1-1v-2a1 1 0 011-1h13a1 1 0 011 1v2z"></path>
    </svg>
  );
};

UWifiRouter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWifiRouter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWifiRouter;
