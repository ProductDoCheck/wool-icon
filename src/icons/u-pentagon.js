import React from 'react';
import PropTypes from 'prop-types';

const UPentagon = props => {
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
      <path d="M21.59 9.17l-9-6.54a1 1 0 00-1.18 0l-9 6.54a1 1 0 00-.36 1.12l3.44 10.58a1 1 0 001 .69h11.07a1 1 0 001-.69L22 10.29a1 1 0 00-.41-1.12zm-4.75 10.39H7.16l-3-9.2L12 4.68l7.82 5.68-2.98 9.2z"></path>
    </svg>
  );
};

UPentagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPentagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPentagon;
