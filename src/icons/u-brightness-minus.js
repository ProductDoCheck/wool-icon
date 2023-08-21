import React from 'react';
import PropTypes from 'prop-types';

const UBrightnessMinus = props => {
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
      <path d="M14 11h-4a1 1 0 000 2h4a1 1 0 100-2zm7.71.29L19.36 9V5.64a1 1 0 00-1-1h-3.31l-2.34-2.35a.999.999 0 00-1.42 0L9 4.64H5.64a1 1 0 00-1 1V9l-2.35 2.29a1 1 0 000 1.42l2.35 2.34v3.31a1 1 0 001 1H9l2.34 2.35a1.001 1.001 0 001.42 0l2.34-2.35h3.31a1 1 0 001-1v-3.31l2.35-2.34a1 1 0 00-.05-1.42zm-4.05 2.64a1.002 1.002 0 00-.3.71v2.72h-2.72a.998.998 0 00-.71.3L12 19.59l-1.93-1.93a1 1 0 00-.71-.3H6.64v-2.72a1 1 0 00-.3-.71L4.41 12l1.93-1.93a1 1 0 00.3-.71V6.64h2.72a1 1 0 00.71-.3L12 4.41l1.93 1.93a1 1 0 00.71.3h2.72v2.72a1.001 1.001 0 00.3.71L19.59 12l-1.93 1.93z"></path>
    </svg>
  );
};

UBrightnessMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBrightnessMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBrightnessMinus;
