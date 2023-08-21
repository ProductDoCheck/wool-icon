import React from 'react';
import PropTypes from 'prop-types';

const UPolygon = props => {
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
      <path d="M21.87 11.5l-4.5-7.79a1 1 0 00-.87-.5h-9a1 1 0 00-.87.5l-4.5 7.79a1 1 0 000 1l4.5 7.79a1 1 0 00.87.5h9a1 1 0 00.87-.5l4.5-7.79a1 1 0 000-1zm-6 7.29H8.08L4.15 12l3.93-6.79h7.84L19.85 12l-3.98 6.79z"></path>
    </svg>
  );
};

UPolygon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPolygon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPolygon;
