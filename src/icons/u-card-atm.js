import React from 'react';
import PropTypes from 'prop-types';

const UCardAtm = props => {
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
      <path d="M19 4.5H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm1 12a1 1 0 01-1 1H5a1 1 0 01-1-1v-9a1 1 0 011-1h14a1 1 0 011 1v9zm-4-6a3 3 0 00-1.51.42 3 3 0 100 5.16A3 3 0 1016 10.5zm-2.83 4a1.005 1.005 0 01-.17 0 1 1 0 010-2c.057-.005.113-.005.17 0a2.8 2.8 0 000 1.92v.08zm2.83 0a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UCardAtm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCardAtm.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCardAtm;
