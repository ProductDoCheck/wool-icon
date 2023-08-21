import React from 'react';
import PropTypes from 'prop-types';

const UCloudMoonMeatball = props => {
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
      <path d="M21.7 8a1 1 0 00-.94-.26 3 3 0 01-.65.08 3 3 0 01-3-3c.003-.222.03-.444.08-.66a1 1 0 00-.26-.94 1 1 0 00-.93-.28 5 5 0 00-3.83 4.22A6 6 0 004.56 12 3.52 3.52 0 002 15.42a3.47 3.47 0 001.41 2.79 1 1 0 101.18-1.61A1.46 1.46 0 014 15.42a1.5 1.5 0 011.5-1.5 1 1 0 001-1 4 4 0 016.17-3.35 3.9 3.9 0 011.57 2 1 1 0 00.78.66 2.33 2.33 0 01.54 4.44 1 1 0 00.4 1.92 1 1 0 00.4-.09 4.33 4.33 0 002.6-4 4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 8.92a.999.999 0 00-.3-.92zm-4.59 2.82c-.14.01-.28.01-.42 0a4.605 4.605 0 00-.72-.31 5.91 5.91 0 00-1.82-2.28v-.37a3.001 3.001 0 011.05-2.28 5 5 0 004.23 4.22 3 3 0 01-2.32 1.01v.01zm-4.61 6.1h-.77l.39-.67a1.003 1.003 0 10-1.74-1l-.38.67-.38-.67a1.003 1.003 0 10-1.74 1l.39.67H7.5a1 1 0 000 2h.77l-.39.66a1.003 1.003 0 101.74 1l.38-.66.38.66a1.006 1.006 0 001.37.37 1.003 1.003 0 00.37-1.37l-.39-.66h.77a1 1 0 100-2z"></path>
    </svg>
  );
};

UCloudMoonMeatball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudMoonMeatball.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudMoonMeatball;
