import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeAlt = props => {
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
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM5 6h14a1 1 0 011 1l-8 4.88L4 7a1 1 0 011-1zm15 11a1 1 0 01-1 1H5a1 1 0 01-1-1V9.28l7.48 4.57a1 1 0 001 0L20 9.28V17z"></path>
    </svg>
  );
};

UEnvelopeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeAlt;
