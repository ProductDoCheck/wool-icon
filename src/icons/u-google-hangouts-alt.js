import React from 'react';
import PropTypes from 'prop-types';

const UGoogleHangoutsAlt = props => {
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
      <path d="M8.992 7.69a2 2 0 100 4l.015-.001v.502a.5.5 0 01-.5.5 1 1 0 100 2 2.503 2.503 0 002.5-2.5v-2.5a.94.94 0 00-.03-.151 1.994 1.994 0 00-1.985-1.85zm3-6.688a9.787 9.787 0 00-1 19.523v1.477a1 1 0 001.238.97 12.534 12.534 0 009.467-10.974 9.736 9.736 0 00-9.706-10.996zm7.717 10.78a10.548 10.548 0 01-6.718 8.86v-1.066a1 1 0 00-1-1 7.787 7.787 0 117.788-7.787 7.932 7.932 0 01-.07.993zm-4.717-4.091a2 2 0 100 4l.015-.002v.502a.5.5 0 01-.5.5 1 1 0 100 2 2.503 2.503 0 002.5-2.5v-2.5a.94.94 0 00-.03-.151 1.994 1.994 0 00-1.985-1.85z"></path>
    </svg>
  );
};

UGoogleHangoutsAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGoogleHangoutsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGoogleHangoutsAlt;
