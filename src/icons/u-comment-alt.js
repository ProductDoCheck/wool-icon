import React from 'react';
import PropTypes from 'prop-types';

const UCommentAlt = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h11.59l3.7 3.71A1 1 0 0021 22a.84.84 0 00.38-.08A1 1 0 0022 21V5a3 3 0 00-3-3zm1 16.59l-2.29-2.3A1 1 0 0017 16H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v13.59z"></path>
    </svg>
  );
};

UCommentAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAlt;
