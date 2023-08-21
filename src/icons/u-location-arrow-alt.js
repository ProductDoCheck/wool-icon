import React from 'react';
import PropTypes from 'prop-types';

const ULocationArrowAlt = props => {
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
      <path d="M21.68 17.65l-7-14a3 3 0 00-5.36 0l-7 14a3 3 0 003.9 4.08l5.37-2.4a1.059 1.059 0 01.82 0l5.37 2.4a3 3 0 003.9-4.08zm-2 2a1 1 0 01-1.13.22l-5.37-2.39a3 3 0 00-2.44 0L5.41 19.9a1 1 0 01-1.3-1.35l7-14a1 1 0 011.78 0l7 14a1 1 0 01-.17 1.13l-.04-.03z"></path>
    </svg>
  );
};

ULocationArrowAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULocationArrowAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULocationArrowAlt;
