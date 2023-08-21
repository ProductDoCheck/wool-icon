import React from 'react';
import PropTypes from 'prop-types';

const ULabelAlt = props => {
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
      <path d="M15 12a1 1 0 102 0 1 1 0 00-2 0zm6.71-.71l-5-5A1 1 0 0016 6H5a3 3 0 00-3 3v6a3 3 0 003 3h11a1 1 0 00.71-.29l5-5a1.002 1.002 0 000-1.42zM15.59 16H5a1 1 0 01-1-1V9a1 1 0 011-1h10.59l4 4-4 4z"></path>
    </svg>
  );
};

ULabelAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULabelAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULabelAlt;
