import React from 'react';
import PropTypes from 'prop-types';

const ULightbulb = props => {
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
      <path d="M17.45 12.46a7 7 0 00-1-9.83 7.09 7.09 0 00-5.92-1.4 7 7 0 00-4 11.15 4.76 4.76 0 011.08 2.86v.29a2 2 0 00-.61 1.4v2a2 2 0 002 2v1a1 1 0 102 0v-1h2v1a1 1 0 002 0v-1a2 2 0 002-2v-2a2 2 0 00-.57-1.4v-.43a4.26 4.26 0 011.02-2.64zM9 18.93v-2h6v2H9zm6.89-7.72a6.18 6.18 0 00-1.46 3.72H9.56a6.67 6.67 0 00-1.5-3.78 5 5 0 012.84-8A5 5 0 0117 8.07a4.92 4.92 0 01-1.11 3.14z"></path>
    </svg>
  );
};

ULightbulb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULightbulb.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULightbulb;
