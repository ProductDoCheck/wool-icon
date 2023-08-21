import React from 'react';
import PropTypes from 'prop-types';

const UUniversity = props => {
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
      <path d="M21 10a1 1 0 001-1V6a.999.999 0 00-.684-.948l-9-3a1.002 1.002 0 00-.632 0l-9 3A.999.999 0 002 6v3a1 1 0 001 1h1v7.184A2.995 2.995 0 002 20v2a1 1 0 001 1h18a1 1 0 001-1v-2a2.995 2.995 0 00-2-2.816V10h1zm-1 11H4v-1a1.001 1.001 0 011-1h14a1.001 1.001 0 011 1v1zM6 17v-7h2v7H6zm4 0v-7h4v7h-4zm6 0v-7h2v7h-2zM4 8V6.72l8-2.666 8 2.667V8H4z"></path>
    </svg>
  );
};

UUniversity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUniversity.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUniversity;
