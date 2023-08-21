import React from 'react';
import PropTypes from 'prop-types';

const USlack = props => {
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
      <path d="M2 14.67a2 2 0 004 0v-2H4a2 2 0 00-2 2zm12.64-3.34a2 2 0 002-2V4a2 2 0 10-4 0v5.33a2.001 2.001 0 002.02 2h-.02zm7.32-2a2 2 0 10-4 0v2h2a2.001 2.001 0 002.04-2h-.04zM9.34 12.67a2 2 0 00-2 2V20a2 2 0 004 0v-5.33a2 2 0 00-2-2zM14.66 18h-2v2a2 2 0 102-2zM20 12.67h-5.34a2 2 0 000 4H20a2 2 0 000-4zM9.34 7.33H4a2 2 0 100 4h5.34a2 2 0 100-4zm0-5.33a2 2 0 100 4h2V4a2 2 0 00-2-2z"></path>
    </svg>
  );
};

USlack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USlack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USlack;
