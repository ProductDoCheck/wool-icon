import React from 'react';
import PropTypes from 'prop-types';

const UKayak = props => {
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
      <path d="M21.12 16.88a3 3 0 00-3.4-.58l-1.15-1.14a23.999 23.999 0 005.21-8.86 3.19 3.19 0 00-4.08-4.08 24 24 0 00-8.86 5.21L7.7 6.28a3 3 0 10-4.82.84A3 3 0 005 8a3 3 0 001.28-.3l1.15 1.14a24 24 0 00-5.21 8.86A3.24 3.24 0 003 21a3.17 3.17 0 002.22 1 3.74 3.74 0 001.08-.17 24 24 0 008.86-5.21l1.14 1.15a3 3 0 104.82-.84v-.05zM5.71 5.7a1 1 0 11-1.42-1.41A1 1 0 015.71 5.7zm12.6-1.57a1.6 1.6 0 01.47-.08 1.16 1.16 0 01.83.34 1.23 1.23 0 01.26 1.3 22.089 22.089 0 01-2.13 4.64l-4.07-4.07a22.091 22.091 0 014.64-2.13zM5.69 19.87a1.2 1.2 0 01-1.56-1.56 22.089 22.089 0 012.13-4.64l4.07 4.07a22.093 22.093 0 01-4.64 2.13zM12 16.59L7.41 12a21.3 21.3 0 011.43-1.74l4.91 4.91c-.558.504-1.142.978-1.75 1.42zm3.15-2.84l-4.9-4.91A21.297 21.297 0 0112 7.41l4.6 4.6c-.449.605-.93 1.186-1.44 1.74h-.01zm4.55 6a1.001 1.001 0 01-1.42-1.41 1 1 0 011.41 0 1 1 0 01.02 1.37l-.01.04z"></path>
    </svg>
  );
};

UKayak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UKayak.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UKayak;
