import React from 'react';
import PropTypes from 'prop-types';

const UBedDouble = props => {
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
      <path d="M20 3.5H4a3 3 0 00-3 3v13a1 1 0 001 1h4a1 1 0 00.83-.45l1.71-2.55h6.92l1.71 2.55a1 1 0 00.83.45h4a1 1 0 001-1v-13a3 3 0 00-3-3zm1 15h-2.46L16.83 16a.999.999 0 00-.83-.5H8a1 1 0 00-.83.45L5.46 18.5H3v-5h18v5zm-14-7v-1a1 1 0 011-1h2a1 1 0 011 1v1H7zm6 0v-1a1 1 0 011-1h2a1 1 0 011 1v1h-4zm8 0h-2v-1a3 3 0 00-3-3h-2a3 3 0 00-2 .78 3 3 0 00-2-.78H8a3 3 0 00-3 3v1H3v-5a1 1 0 011-1h16a1 1 0 011 1v5z"></path>
    </svg>
  );
};

UBedDouble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBedDouble.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBedDouble;
