import React from 'react';
import PropTypes from 'prop-types';

const UPanoramaH = props => {
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
      <path d="M21.54 5.16a1 1 0 00-1-.07A21.27 21.27 0 0112 6.73a21.27 21.27 0 01-8.58-1.64 1 1 0 00-1 .07A1 1 0 002 6v12a1 1 0 00.46.84 1 1 0 001 .07A21.27 21.27 0 0112 17.27a21.27 21.27 0 018.58 1.64 1 1 0 001.297-.431A1 1 0 0022 18V6a1 1 0 00-.46-.84zM20 16.52a24.773 24.773 0 00-8-1.25 24.773 24.773 0 00-8 1.25v-9a24.77 24.77 0 008 1.25 24.77 24.77 0 008-1.25v9z"></path>
    </svg>
  );
};

UPanoramaH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPanoramaH.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPanoramaH;
