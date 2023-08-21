import React from 'react';
import PropTypes from 'prop-types';

const ULink = props => {
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
      <path d="M10 17.55l-1.77 1.72a2.475 2.475 0 01-3.5-3.5l4.54-4.55a2.46 2.46 0 013.39-.09l.12.1a1 1 0 101.4-1.43 2.737 2.737 0 00-.18-.21 4.46 4.46 0 00-6.09.22l-4.6 4.55a4.48 4.48 0 006.33 6.33L11.37 19A1 1 0 0010 17.55zM20.69 3.31a4.49 4.49 0 00-6.33 0L12.63 5A1 1 0 0014 6.45l1.73-1.72a2.475 2.475 0 113.5 3.5l-4.54 4.55a2.46 2.46 0 01-3.39.09l-.12-.1a1 1 0 10-1.4 1.43c.073.074.15.144.23.21a4.47 4.47 0 006.09-.22l4.55-4.55a4.49 4.49 0 00.04-6.33z"></path>
    </svg>
  );
};

ULink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULink.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULink;
