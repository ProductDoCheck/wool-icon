import React from 'react';
import PropTypes from 'prop-types';

const UPodium = props => {
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
      <path d="M19.79 7.13a1 1 0 00-.79-.38H8v-.5a2 2 0 011.46-1.92c.27.26.626.41 1 .42h1a1.5 1.5 0 000-3h-1a1.49 1.49 0 00-1.17.57A4 4 0 006 6.25v.5H5a1 1 0 00-.79.38A1 1 0 004 8l.62 2.49a3 3 0 002.48 2.22l.78 7H7a1 1 0 000 2h10a1 1 0 000-2h-.88l.78-7a3 3 0 002.45-2.23L20 8a.999.999 0 00-.21-.87zM14.1 19.75H9.9l-.78-7h5.76l-.78 7zM17.41 10a1 1 0 01-1 .76H7.56a1 1 0 01-1-.76l-.28-1.25h11.44L17.41 10z"></path>
    </svg>
  );
};

UPodium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPodium.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPodium;
