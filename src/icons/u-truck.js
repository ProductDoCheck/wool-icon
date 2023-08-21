import React from 'react';
import PropTypes from 'prop-types';

const UTruck = props => {
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
      <path d="M1 12.5v5a1 1 0 001 1h1a3 3 0 006 0h6a3 3 0 006 0h1a1 1 0 001-1v-12a3 3 0 00-3-3h-9a3 3 0 00-3 3v2H6a3 3 0 00-2.4 1.2l-2.4 3.2a.61.61 0 00-.07.14l-.06.11a1 1 0 00-.07.35zm16 6a1 1 0 112 0 1 1 0 01-2 0zm-7-13a1 1 0 011-1h9a1 1 0 011 1v11h-.78a3 3 0 00-4.44 0H10v-11zm-2 6H4l1.2-1.6a1 1 0 01.8-.4h2v2zm-3 7a1 1 0 112 0 1 1 0 01-2 0zm-2-5h5v2.78a3 3 0 00-4.22.22H3v-3z"></path>
    </svg>
  );
};

UTruck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTruck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTruck;
