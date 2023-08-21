import React from 'react';
import PropTypes from 'prop-types';

const UDialpadAlt = props => {
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
      <path d="M5 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 4a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm7-4a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 4a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm7-5.5a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zm0-4a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0 5.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 4a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-14-11a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 4a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm7 10a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 4a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0-18a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 4a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"></path>
    </svg>
  );
};

UDialpadAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDialpadAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDialpadAlt;
