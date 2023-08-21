import React from 'react';
import PropTypes from 'prop-types';

const UBracketsCurly = props => {
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
      <path d="M6 6a2 2 0 012-2 1 1 0 000-2 4 4 0 00-4 4v3a2 2 0 01-2 2 1 1 0 000 2 2 2 0 012 2v3a4 4 0 004 4 1 1 0 000-2 2 2 0 01-2-2v-3a4 4 0 00-1.38-3A4 4 0 006 9V6zm16 5a2 2 0 01-2-2V6a4 4 0 00-4-4 1 1 0 100 2 2 2 0 012 2v3a4 4 0 001.38 3A4 4 0 0018 15v3a2 2 0 01-2 2 1 1 0 000 2 4 4 0 004-4v-3a2 2 0 012-2 1 1 0 000-2z"></path>
    </svg>
  );
};

UBracketsCurly.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBracketsCurly.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBracketsCurly;
