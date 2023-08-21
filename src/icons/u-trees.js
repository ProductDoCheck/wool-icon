import React from 'react';
import PropTypes from 'prop-types';

const UTrees = props => {
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
      <path d="M16.5 5a4.86 4.86 0 00-2.5.69A6 6 0 002.5 8v4a6 6 0 005 5.91V21a1 1 0 102 0v-3.09a6.079 6.079 0 002.78-1.26 5 5 0 003.22 2.25V21a1 1 0 002 0v-2.1a5 5 0 004-4.9v-4a5 5 0 00-5-5zm-5 5v4c.01.19.03.381.06.57a4 4 0 01-2.06 1.3V13a1 1 0 00-2 0v2.86a4 4 0 01-3-3.86V8a4 4 0 016.83-2.84 3.94 3.94 0 011.06 2A5 5 0 0011.5 10zm8 4a3 3 0 01-2 2.82V13a1 1 0 00-2 0v3.82a3 3 0 01-2-2.82v-4a3 3 0 016 0v4z"></path>
    </svg>
  );
};

UTrees.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTrees.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTrees;