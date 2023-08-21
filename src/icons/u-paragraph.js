import React from 'react';
import PropTypes from 'prop-types';

const UParagraph = props => {
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
      <path d="M13 13.5H3a1 1 0 000 2h10a1 1 0 000-2zm8-5H3a1 1 0 000 2h18a1 1 0 000-2z"></path>
    </svg>
  );
};

UParagraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UParagraph.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UParagraph;
