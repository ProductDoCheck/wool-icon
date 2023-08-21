import React from 'react';
import PropTypes from 'prop-types';

const UFootballBall = props => {
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
      <path d="M21.84 5.56a4.08 4.08 0 00-1.14-2.25 4.08 4.08 0 00-2.25-1.14A14.45 14.45 0 002.16 18.44a4.08 4.08 0 001.14 2.25 4.08 4.08 0 002.25 1.14c.688.112 1.383.169 2.08.17a14.37 14.37 0 0010.11-4.26 14.23 14.23 0 004.1-12.18zM4.21 18.37a1.682 1.682 0 01-.07-.24A12.21 12.21 0 017.67 7.67 12.39 12.39 0 0116.37 4a10.44 10.44 0 011.76.14c.082.017.162.04.24.07l-4.93 4.94-.73-.73a1 1 0 10-1.42 1.41l.73.73L10.56 12l-.73-.73a1 1 0 10-1.41 1.42l.73.73-4.94 4.95zm12.12-2a12.239 12.239 0 01-10.46 3.49 1.683 1.683 0 01-.24-.07l4.93-4.94.73.73a1.001 1.001 0 001.42-1.41l-.71-.73L13.44 12l.73.73a1 1 0 001.41-1.42l-.73-.73 4.94-4.93c.03.078.053.158.07.24a12.21 12.21 0 01-3.53 10.44v.04z"></path>
    </svg>
  );
};

UFootballBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFootballBall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFootballBall;
