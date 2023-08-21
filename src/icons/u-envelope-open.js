import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeOpen = props => {
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
      <path d="M20.21 8.82L14 2.78a2.83 2.83 0 00-3.9 0l-6.21 6A2.6 2.6 0 003 10.71v8.58A2.75 2.75 0 005.78 22h12.44A2.75 2.75 0 0021 19.29v-8.58a2.672 2.672 0 00-.79-1.89zm-8.77-4.6a.83.83 0 011.12 0L18 9.5l-5.47 5.28a.83.83 0 01-1.12 0L6 9.5l5.44-5.28zM19 19.29a.76.76 0 01-.78.71H5.78a.76.76 0 01-.78-.71v-7.94l4.05 3.9-1.66 1.6a1 1 0 000 1.41 1 1 0 00.72.31 1 1 0 00.69-.28l1.77-1.7a2.8 2.8 0 002.92 0l1.77 1.7a1 1 0 00.69.28.999.999 0 00.72-.31 1 1 0 000-1.41L15 15.25l4-3.9v7.94z"></path>
    </svg>
  );
};

UEnvelopeOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeOpen;
