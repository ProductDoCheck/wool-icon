import React from 'react';
import PropTypes from 'prop-types';

const UPricetagAlt = props => {
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
      <path d="M7 6a1 1 0 100 2 1 1 0 000-2zm14.71 5.78l-9.48-9.46A1 1 0 0011.5 2h-6a1 1 0 00-.71.29l-2.5 2.49a1 1 0 00-.29.71v6c.004.265.107.518.29.71l9.49 9.5c.192.183.445.286.71.29a.998.998 0 00.71-.29l8.51-8.51a1 1 0 00.29-.71 1.05 1.05 0 00-.29-.7zm-9.22 7.81L4 11.09V5.9L5.9 4h5.18l8.5 8.49-7.09 7.1z"></path>
    </svg>
  );
};

UPricetagAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPricetagAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPricetagAlt;
