import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeRedo = props => {
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
      <path d="M20.5 14.26a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.67l5.88 5.88a3 3 0 003.282.645 3 3 0 00.988-.675 1 1 0 000-1.39 1.002 1.002 0 00-1.43 0 1 1 0 01-1.4 0L4.91 8.26H9.5a1 1 0 100-2h-5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm1-11a1 1 0 00-1 1 5 5 0 10-3 9A5 5 0 0020.8 12a1.003 1.003 0 00-1.32-1.51 3 3 0 11.25-4.24H18.5a1 1 0 100 2h3a1 1 0 001-1v-3a1 1 0 00-1-.99z"></path>
    </svg>
  );
};

UEnvelopeRedo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeRedo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeRedo;
