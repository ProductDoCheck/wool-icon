import React from 'react';
import PropTypes from 'prop-types';

const USlidersVAlt = props => {
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
      <path d="M20 8.18V3a1 1 0 00-2 0v5.18a3 3 0 000 5.64V21a1 1 0 102 0v-7.18a3 3 0 000-5.64zM19 12a1 1 0 110-2 1 1 0 010 2zm-6 2.18V3a1 1 0 00-2 0v11.18a3 3 0 000 5.64V21a1 1 0 102 0v-1.18a3 3 0 000-5.64zM12 18a1 1 0 110-2 1 1 0 010 2zM6 6.18V3a1 1 0 00-2 0v3.18a3 3 0 000 5.64V21a1 1 0 102 0v-9.18a3 3 0 000-5.64zM5 10a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

USlidersVAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USlidersVAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USlidersVAlt;
