import React from 'react';
import PropTypes from 'prop-types';

const UBusAlt = props => {
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
      <path d="M18.5 2h-12a3 3 0 00-3 3v12a3 3 0 002 2.82V21a1 1 0 102 0v-1h10v1a1 1 0 002 0v-1.18a3 3 0 002-2.82V5a3 3 0 00-3-3zm-13 6h6v4h-6V8zm14 9a1 1 0 01-1 1h-12a1 1 0 01-1-1v-3h14v3zm0-5h-6V8h6v4zm0-6h-14V5a1 1 0 011-1h12a1 1 0 011 1v1zm-3.38 10.92c.12.051.25.078.38.08a1 1 0 001-1 1.362 1.362 0 000-.2.64.64 0 00-.06-.18.762.762 0 00-.09-.18 1.573 1.573 0 00-.12-.15l-.15-.12a.762.762 0 00-.18-.09.64.64 0 00-.2-.08 1 1 0 00-.91.27 1.573 1.573 0 00-.12.15.762.762 0 00-.09.18.64.64 0 00-.06.18 1.362 1.362 0 000 .2 1 1 0 00.29.7 1 1 0 00.31.24zm-8 0c.12.051.25.078.38.08a1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18 1.575 1.575 0 00-.12-.15l-.15-.12-.18-.09-.2-.08a1 1 0 00-.91.27 1.575 1.575 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 00.29.7 1 1 0 00.31.24z"></path>
    </svg>
  );
};

UBusAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBusAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBusAlt;
