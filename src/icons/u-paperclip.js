import React from 'react';
import PropTypes from 'prop-types';

const UPaperclip = props => {
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
      <path d="M18.08 12.42l-6.18 6.19a4.25 4.25 0 01-6-6l8-8a2.57 2.57 0 013.54 0 2.52 2.52 0 010 3.54l-6.9 6.89A.763.763 0 119.42 14l5.13-5.12a1.004 1.004 0 10-1.42-1.42L8 12.6a2.74 2.74 0 000 3.89 2.82 2.82 0 003.89 0l6.89-6.9a4.5 4.5 0 00-6.36-6.36l-8 8A6.25 6.25 0 0013.31 20l6.19-6.18a1.003 1.003 0 10-1.42-1.42v.02z"></path>
    </svg>
  );
};

UPaperclip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPaperclip.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPaperclip;
