import React from 'react';
import PropTypes from 'prop-types';

const UGold = props => {
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
      <path d="M8 11h8a1 1 0 00.77-.37.999.999 0 00.23-.83l-1-5a1 1 0 00-1-.8H9a1 1 0 00-1 .8l-1 5a1 1 0 00.21.83A1 1 0 008 11zm1.82-5h4.36l.6 3H9.22l.6-3zM22 13.8a1 1 0 00-1-.8h-6a1 1 0 00-1 .8l-1 5a1 1 0 00.21.83A1 1 0 0014 20h8a1 1 0 00.77-.37 1 1 0 00.23-.83l-1-5zM15.22 18l.6-3h4.36l.6 3h-5.56zM9 13H3a1 1 0 00-1 .8l-1 5a1 1 0 00.21.83A1 1 0 002 20h8a1 1 0 00.77-.37 1 1 0 00.23-.83l-1-5a1 1 0 00-1-.8zm-5.78 5l.6-3h4.36l.6 3H3.22z"></path>
    </svg>
  );
};

UGold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGold.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGold;
