import React from 'react';
import PropTypes from 'prop-types';

const UMinus = props => {
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
      <path d="M19 11H5a1 1 0 000 2h14a1 1 0 000-2z"></path>
    </svg>
  );
};

UMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMinus;
