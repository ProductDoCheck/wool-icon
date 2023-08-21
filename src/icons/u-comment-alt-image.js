import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltImage = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v10a3 3 0 003 3h11.59l3.7 3.71A1 1 0 0021 22a.84.84 0 00.38-.08A1 1 0 0022 21V5a3 3 0 00-3-3zM5.77 16H5a1 1 0 01-1-1v-.42l3.3-3.29a1 1 0 011.41 0l.87.87L5.77 16zM20 18.59l-2.29-2.3A1 1 0 0017 16H8.59l6.71-6.71a1 1 0 011.4 0l3.3 3.29v6.01zm0-8.83l-1.88-1.87a3 3 0 00-4.24 0L11 10.76l-.88-.87a3.06 3.06 0 00-4.24 0L4 11.76V5a1 1 0 011-1h14a1 1 0 011 1v4.76z"></path>
    </svg>
  );
};

UCommentAltImage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltImage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltImage;