import React from 'react';
import PropTypes from 'prop-types';

const UExchangeAlt = props => {
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
      <path d="M21.71 9.29l-4-4a1.004 1.004 0 10-1.42 1.42L18.59 9H7a1 1 0 000 2h14a.999.999 0 00.92-.62 1 1 0 00-.21-1.09zM17 13H3a1 1 0 00-.92.62 1 1 0 00.21 1.09l4 4a.998.998 0 001.42 0 .999.999 0 000-1.42L5.41 15H17a1 1 0 100-2z"></path>
    </svg>
  );
};

UExchangeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExchangeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExchangeAlt;
