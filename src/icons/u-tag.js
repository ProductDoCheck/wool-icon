import React from 'react';
import PropTypes from 'prop-types';

const UTag = props => {
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
      <path d="M21.12 10.71l-8.41-8.42A.999.999 0 0012 2H3a1 1 0 00-1 1v9a1 1 0 00.29.71l8.42 8.41a3 3 0 004.24 0L21.12 15a3 3 0 000-4.24v-.05zm-1.41 2.82l-6.18 6.17a1 1 0 01-1.41 0L4 11.59V4h7.59l8.12 8.12a1.001 1.001 0 010 1.41z"></path>
    </svg>
  );
};

UTag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTag;
