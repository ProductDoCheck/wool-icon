import React from 'react';
import PropTypes from 'prop-types';

const ULineAlt = props => {
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
      <path d="M21.71 3.29a1 1 0 00-1.42 0l-18 18a1 1 0 00.325 1.639 1 1 0 001.095-.219l18-18a1 1 0 000-1.42z"></path>
    </svg>
  );
};

ULineAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULineAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULineAlt;
