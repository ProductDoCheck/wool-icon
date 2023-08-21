import React from 'react';
import PropTypes from 'prop-types';

const UTableTennis = props => {
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
      <path d="M20.71 16.1l-1.64-1.64a.94.94 0 01-.22-1.07 5.78 5.78 0 00.54-2.39.356.356 0 000-.1 5.74 5.74 0 00-1.06-3.34 14.17 14.17 0 00-5.17-4.42 7 7 0 00-8 1.31l-.67.67a7 7 0 00-1.31 8.05l.1.17a3 3 0 00-.84 2.06A3 3 0 007 17.94c.18.14.34.29.52.42.379.263.788.478 1.22.64h.09c.18.07.37.13.57.19h.15c.311.08.63.13.95.15h.62c.21 0 .41 0 .62-.06h.17c.492-.084.97-.236 1.42-.45a1 1 0 011.07.21l1.46 1.46a3.4 3.4 0 002.39 1 2.85 2.85 0 002-.85l.38-.38a3 3 0 00.08-4.17zm-15.3.32a1 1 0 110-2 1 1 0 010 2zm3.1.14l-.26-.2a2.94 2.94 0 00.16-.94 3 3 0 00-3-3h-.38l-.09-.16a5 5 0 01.93-5.75l.67-.67A5 5 0 0112.28 5a12 12 0 014.26 3.57l-8.03 7.99zm10.78 2.37l-.37.38c-.42.42-1.07.34-1.61-.2l-1.46-1.45a3 3 0 00-3.34-.61c-.315.154-.653.26-1 .31a2.836 2.836 0 01-.58.05H10.49l6.87-6.87a3.8 3.8 0 01-.34 2 3 3 0 00.61 3.34l1.64 1.65a1 1 0 01.02 1.4z"></path>
    </svg>
  );
};

UTableTennis.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTableTennis.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTableTennis;
