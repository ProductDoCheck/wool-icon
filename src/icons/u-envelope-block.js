import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeBlock = props => {
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
      <path d="M17.5 13.26a5 5 0 10.082-10 5 5 0 00-.082 10zm2.12-2.88a3 3 0 01-3.4.58l4-4a3 3 0 01-.6 3.42zm-4.24-4.24a3 3 0 012.12-.88 3 3 0 011.28.3l-4 4a3 3 0 01.6-3.42zm5.12 8.12a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.67l5.88 5.88a3 3 0 003.282.645 3 3 0 00.988-.675 1 1 0 000-1.39.999.999 0 00-1.43 0 1 1 0 01-1.4 0L4.91 8.26H9.5a1 1 0 100-2h-5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UEnvelopeBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeBlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeBlock;
