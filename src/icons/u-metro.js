import React from 'react';
import PropTypes from 'prop-types';

const UMetro = props => {
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
      <path d="M8.71 14.29a1.002 1.002 0 00-1.09-.21.901.901 0 00-.54.54 1 1 0 101.84 0 1.148 1.148 0 00-.21-.33zm8 0a1.046 1.046 0 00-1.42 0c-.088.097-.16.209-.21.33a.99.99 0 00.21 1.09c.097.088.209.16.33.21a.941.941 0 00.76 0c.121-.05.233-.122.33-.21a.989.989 0 00.21-1.09 1.145 1.145 0 00-.21-.33zm2.6 4.605a4.97 4.97 0 001.784-4.817l-1.5-8A5 5 0 0014.68 2H9.319a5 5 0 00-4.913 4.078l-1.5 8a4.97 4.97 0 001.785 4.817l-1.398 1.398a1 1 0 101.414 1.414l1.87-1.87c.405.107.823.161 1.242.163h8.362c.42-.002.837-.056 1.243-.162l1.869 1.869a1 1 0 001.414-1.414l-1.398-1.398zM6.37 6.447A3.002 3.002 0 019.32 4h5.362a3.002 3.002 0 012.948 2.447l.347 1.85a7.955 7.955 0 01-11.952 0l.347-1.85zm12.117 10.469A2.99 2.99 0 0116.181 18H7.819a3.001 3.001 0 01-2.948-3.553l.711-3.792a9.955 9.955 0 0012.836 0l.71 3.792a2.989 2.989 0 01-.64 2.469z"></path>
    </svg>
  );
};

UMetro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMetro.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMetro;
