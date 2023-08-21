import React from 'react';
import PropTypes from 'prop-types';

const UNoEntry = props => {
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
      <path d="M21 20h-1.24L15.37 4.2A3 3 0 0012.48 2h-1a3 3 0 00-2.85 2.2L4.24 20H3a1 1 0 000 2h18a1 1 0 000-2zM10.56 4.73a1 1 0 011-.73h1a1 1 0 011 .73L14.35 8h-4.7l.91-3.27zM9.09 10h5.82L16 14H8l1.09-4zM6.32 20l1.11-4h9.14l1.11 4H6.32z"></path>
    </svg>
  );
};

UNoEntry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UNoEntry.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UNoEntry;
