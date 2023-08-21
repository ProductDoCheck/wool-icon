import React from 'react';
import PropTypes from 'prop-types';

const UStore = props => {
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
      <path d="M22 7.82a1.255 1.255 0 000-.19l-2-5A1 1 0 0019 2H5a1 1 0 00-.93.63l-2 5a1.25 1.25 0 000 .19A.58.58 0 002 8a4 4 0 002 3.4V21a1 1 0 001 1h14a1 1 0 001-1v-9.56A4 4 0 0022 8c.01-.06.01-.12 0-.18zM13 20h-2v-4h2v4zm5 0h-3v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6v-8a4 4 0 003-1.38 4 4 0 006 0A4 4 0 0018 12v8zm0-10a2 2 0 01-2-2 1 1 0 00-2 0 2 2 0 11-4 0 1 1 0 00-2 0 2.001 2.001 0 11-4 .15L5.68 4h12.64L20 8.15A2 2 0 0118 10z"></path>
    </svg>
  );
};

UStore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStore.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStore;
