import React from 'react';
import PropTypes from 'prop-types';

const UTemperaturePlus = props => {
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
      <path d="M10.5 15.28V5.5a1 1 0 10-2 0v9.78a2 2 0 00-1 1.72 2 2 0 004 0 2 2 0 00-1-1.72zm9-12.78H19V2a1 1 0 10-2 0v.5h-.5a1 1 0 000 2h.5V5a1 1 0 002 0v-.5h.5a1 1 0 100-2zm-5.5 3a4.5 4.5 0 10-9 0V13a6 6 0 003.21 9.83c.42.096.849.153 1.28.17A6 6 0 0014 13V5.5zm-2 14.61a4 4 0 01-6.362-4.224A4 4 0 016.68 14.15a1 1 0 00.3-.71V5.5a2.5 2.5 0 115 0v7.94a1.001 1.001 0 00.3.71 4 4 0 01-.28 6v-.04z"></path>
    </svg>
  );
};

UTemperaturePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTemperaturePlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTemperaturePlus;
