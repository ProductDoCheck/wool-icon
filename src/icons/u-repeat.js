import React from 'react';
import PropTypes from 'prop-types';

const URepeat = props => {
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
      <path d="M5.5 17.5H4v-11h7.8l-.8.79a1 1 0 001.41 1.42l2.5-2.5a1 1 0 000-1.42l-2.5-2.5A1 1 0 1011 3.71l.79.79H3a1 1 0 00-1 1v13a1 1 0 001 1h2.5a1 1 0 000-2zM21 4.5h-2.5a1 1 0 100 2H20v11h-8.37l.79-.79a1.002 1.002 0 00-.705-1.71 1 1 0 00-.705.29l-2.5 2.5a1 1 0 000 1.42l2.5 2.5a1 1 0 101.41-1.42l-.79-.79H21a1 1 0 001-1v-13a1 1 0 00-1-1z"></path>
    </svg>
  );
};

URepeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URepeat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URepeat;
