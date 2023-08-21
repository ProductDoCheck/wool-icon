import React from 'react';
import PropTypes from 'prop-types';

const UAnnoyedAlt = props => {
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
      <path d="M14.66 13.56l-4.19 1.5A1 1 0 0010.8 17c.116 0 .231-.02.34-.06l4.2-1.5a.999.999 0 10-.68-1.88zm-4-5a1 1 0 00-1.41 0 1 1 0 01-1.42 0 1 1 0 10-1.41 1.42 3 3 0 004.24 0 1 1 0 00-.04-1.44l.04.02zm7 0a1 1 0 00-1.41 0 1 1 0 01-1.42 0 1 1 0 10-1.41 1.42 3 3 0 004.24 0 1 1 0 00-.04-1.44l.04.02zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UAnnoyedAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAnnoyedAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAnnoyedAlt;
