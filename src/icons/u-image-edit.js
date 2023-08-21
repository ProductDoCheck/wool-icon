import React from 'react';
import PropTypes from 'prop-types';

const UImageEdit = props => {
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
      <path d="M19 11.48a1 1 0 00-1 1v2.39l-1.5-1.48a2.83 2.83 0 00-3.92 0l-.7.7-2.49-2.49a2.78 2.78 0 00-3.92 0L4 13.09V7.48a1 1 0 011-1h6a1 1 0 100-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-7a1 1 0 00-1-1zm-14 9a1 1 0 01-1-1v-3.56L6.88 13A.781.781 0 018 13l3.17 3.17 4.26 4.26L5 20.48zm13-1a1 1 0 01-.17.54l-4.54-4.52.7-.69a.78.78 0 011.1 0L18 17.7v1.78zm3.72-15.25L19.3 1.81a1 1 0 00-1.41 0l-4.58 4.58a1 1 0 00-.31.71v2.42a1 1 0 001 1h2.42a1 1 0 00.7-.29l4.58-4.58a1.001 1.001 0 00.02-1.42zM16 8.52h-1v-1l3.6-3.59 1 1L16 8.52z"></path>
    </svg>
  );
};

UImageEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageEdit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageEdit;