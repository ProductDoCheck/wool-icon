import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeStar = props => {
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
      <path d="M13.64 9.74l-.29 1.73A1.55 1.55 0 0014 13a1.46 1.46 0 001.58.09l1.42-.81 1.44.79A1.46 1.46 0 0020 13a1.55 1.55 0 00.63-1.51l-.29-1.73 1.2-1.22a1.54 1.54 0 00-.85-2.6l-1.62-.24-.73-1.55a1.5 1.5 0 00-2.72 0l-.73 1.55-1.62.24a1.54 1.54 0 00-.85 2.6l1.22 1.2zm1.83-2.13a1.51 1.51 0 001.14-.85l.39-.83.39.83a1.55 1.55 0 001.14.86l1 .14-.73.74a1.57 1.57 0 00-.42 1.34l.16 1-.79-.43a1.48 1.48 0 00-1.44 0l-.79.43.16-1a1.54 1.54 0 00-.42-1.33l-.73-.75.94-.15zM21 15.26a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V9.67l5.88 5.88a2.939 2.939 0 002.1.88h.27a1 1 0 10-.18-1.99.94.94 0 01-.77-.28l-5.89-5.9H9a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-3a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UEnvelopeStar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeStar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeStar;
