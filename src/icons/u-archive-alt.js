import React from 'react';
import PropTypes from 'prop-types';

const UArchiveAlt = props => {
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
      <path d="M10 13h4a1 1 0 000-2h-4a1 1 0 000 2zm9-10H5a3 3 0 00-1 5.82V18a3 3 0 003 3h10a3 3 0 003-3V8.82A3 3 0 0019 3zm-1 15a1 1 0 01-1 1H7a1 1 0 01-1-1V9h12v9zm1-11H5a1 1 0 010-2h14a1 1 0 110 2z"></path>
    </svg>
  );
};

UArchiveAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArchiveAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArchiveAlt;
