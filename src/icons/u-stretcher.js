import React from 'react';
import PropTypes from 'prop-types';

const UStretcher = props => {
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
      <path d="M18 4.5h3a1 1 0 100-2h-3a1 1 0 100 2zm3 2H3a1 1 0 00-1 1v4a1 1 0 001 1h1.55l5.11 2.56-2.58 1.29A3 3 0 005 15.5a3 3 0 103 3c.01-.12.01-.24 0-.36l3.94-2 4.06 2.1a2.301 2.301 0 000 .26 3 3 0 103-3 2.999 2.999 0 00-2.15.92l-2.72-1.36 5.11-2.56H21a1 1 0 001-1v-4a1.001 1.001 0 00-1-1zm-16 13a1 1 0 110-2 1 1 0 010 2zm14-2a1 1 0 110 2 1 1 0 010-2zm-7.1-3.56L9 12.5h5.75l-2.85 1.44zM20 10.5H4v-2h16v2z"></path>
    </svg>
  );
};

UStretcher.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStretcher.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStretcher;
