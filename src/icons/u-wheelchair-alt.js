import React from 'react';
import PropTypes from 'prop-types';

const UWheelchairAlt = props => {
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
      <path d="M20 16.18V16a3 3 0 00-2-2.82V7h1a1 1 0 100-2H7a3 3 0 00-3-3H3a1 1 0 000 2h1a1 1 0 011 1v7.42A5 5 0 1011.58 15H17a1 1 0 011 1v.18a3 3 0 102 0zM7 20a3 3 0 110-6 3 3 0 010 6zm9-7h-6a4.93 4.93 0 00-3-1v-1h9v2zm0-4H7V7h9v2zm3 11a1 1 0 110-2 1 1 0 010 2zM7 16a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UWheelchairAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWheelchairAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWheelchairAlt;
