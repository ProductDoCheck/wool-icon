import React from 'react';
import PropTypes from 'prop-types';

const USick = props => {
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
      <path d="M9 11a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm.27 3.2a1 1 0 00-1.2 0l-.74.55-.73-.55a1 1 0 00-1.2 0l-.73.55-.74-.55a1 1 0 00-1.2 0l-1.33 1a1 1 0 001.2 1.6l.73-.55.74.55.12.06a.83.83 0 00.22.08h.12c.083.01.167.01.25 0h.1a1.06 1.06 0 00.34-.16l.73-.55.73.55a1 1 0 001 .11l.1-.05a.388.388 0 00.11-.06l.74-.55.73.55a1 1 0 001.2-1.6l-1.29-.98zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

USick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USick.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USick;
