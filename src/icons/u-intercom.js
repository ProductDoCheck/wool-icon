import React from 'react';
import PropTypes from 'prop-types';

const UIntercom = props => {
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
      <path d="M19.5 2h-15A2.5 2.5 0 002 4.5v15A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0019.5 2zm-4.83 3.67a.66.66 0 01.67-.67.68.68 0 01.66.66v8.9a.67.67 0 01-1.33 0V5.67zm-3.34-.34a.67.67 0 011.34 0V15a.67.67 0 01-1.34 0V5.33zM8 5.67a.67.67 0 011.33 0v8.9a.66.66 0 01-1.131.461A.68.68 0 018 14.57v-8.9zM4.67 7A.67.67 0 016 7v6a.67.67 0 01-.67.66.67.67 0 01-.66-.66V7zM19.1 17.17a11.3 11.3 0 01-7.1 2.16 11.3 11.3 0 01-7.1-2.16.67.67 0 01.87-1A10.2 10.2 0 0012 18a10.15 10.15 0 006.23-1.84.67.67 0 01.87 1v.01zm.23-4.17A.67.67 0 0118 13V7a.67.67 0 01.67-.66.66.66 0 01.66.66v6z"></path>
    </svg>
  );
};

UIntercom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UIntercom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UIntercom;
