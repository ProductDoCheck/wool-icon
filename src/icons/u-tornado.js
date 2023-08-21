import React from 'react';
import PropTypes from 'prop-types';

const UTornado = props => {
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
      <path d="M10 21H8a1 1 0 000 2h2a1 1 0 000-2zm1-4H6a1 1 0 000 2h5a1 1 0 000-2zm7-15a1 1 0 00-1-1H3a1 1 0 000 2h14a1 1 0 001-1zm3 3H6a1 1 0 000 2h15a1 1 0 100-2zm-2 4h-9a1 1 0 000 2h9a1 1 0 000-2zm-5 4H8a1 1 0 000 2h6a1 1 0 000-2z"></path>
    </svg>
  );
};

UTornado.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTornado.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTornado;
