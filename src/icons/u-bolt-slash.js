import React from 'react';
import PropTypes from 'prop-types';

const UBoltSlash = props => {
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
      <path d="M8.67 4.23A1 1 0 009.6 4h5.1l-1.27 4.74a1 1 0 00.52 1.157 1 1 0 00.44.103H18l-1.13 1.24a1 1 0 00.74 1.67 1 1 0 00.74-.33L21 9.67A1 1 0 0020.23 8h-4.54L17 3.26a.998.998 0 00-.18-.87A1 1 0 0016 2H9a1 1 0 00-1 .74V3a1 1 0 00.67 1.23zm13 16.06l-18-18a1 1 0 00-1.38 1.42L6.61 8l-1.26 4.74a1 1 0 00.18.87 1 1 0 00.79.39h3.84l-1.81 6.74a1 1 0 001.71.93l4.85-5.34 5.38 5.38a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095h-.04zM7.62 12l.63-2.34L10.59 12H7.62zm3.73 5.28l1-3.56 1.2 1.19-2.2 2.37z"></path>
    </svg>
  );
};

UBoltSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBoltSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBoltSlash;
