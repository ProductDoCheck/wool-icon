import React from 'react';
import PropTypes from 'prop-types';

const UJackhammer = props => {
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
      <path d="M18.85 15.69a1 1 0 00-1.41 0l-2.06 2.06a1 1 0 00.45 1.67l.26.07-.8.8a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l2-2a1 1 0 00.26-1 1 1 0 00-.71-.71l-.26-.06.83-.84a1 1 0 00.02-1.41zm-10.94 3.8l.26-.07a1 1 0 00.45-1.67l-2.06-2.06a1 1 0 00-1.41 1.41l.83.84-.26.06a1 1 0 00-.71.71 1 1 0 00.26 1l2 2a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-.78-.8zM21 4a1 1 0 00-1 1h-3a3 3 0 00-3-3h-4a3 3 0 00-3 3H4a1 1 0 00-2 0v2a1 1 0 002 0h3v2a3 3 0 002 2.83V13a2 2 0 002 2v6a1 1 0 002 0v-6a2 2 0 002-2v-1.17A3 3 0 0017 9V7h3a1 1 0 002 0V5a1 1 0 00-1-1zm-6 5a1 1 0 01-1 1 1 1 0 00-1 1v2h-2v-2a1 1 0 00-1-1 1 1 0 01-1-1V5a1 1 0 011-1h4a1 1 0 011 1v4zm-3-3a1 1 0 00-1 1v1a1 1 0 002 0V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UJackhammer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UJackhammer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UJackhammer;
