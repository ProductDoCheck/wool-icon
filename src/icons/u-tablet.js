import React from 'react';
import PropTypes from 'prop-types';

const UTablet = props => {
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
      <path d="M17 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v14zm-5.29-2.71a1.001 1.001 0 00-.91-.29l-.18.06a.762.762 0 00-.18.09l-.15.12a1 1 0 00-.21.33 1 1 0 00.21 1.09c.1.088.21.162.33.22A1 1 0 0013 17a.84.84 0 00-.08-.38 1.15 1.15 0 00-.21-.33z"></path>
    </svg>
  );
};

UTablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTablet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTablet;
