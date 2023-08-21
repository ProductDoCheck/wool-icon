import React from 'react';
import PropTypes from 'prop-types';

const UGlassMartiniAlt = props => {
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
      <path d="M21.78 3.62A1 1 0 0021 2H3a1 1 0 00-.78 1.62L11 14.6V20H5.25a1 1 0 000 2h13.5a1 1 0 000-2H13v-5.4l8.78-10.98zM5.08 4h13.84l-2.4 3h-9L5.08 4zM12 12.65L9.08 9h5.84L12 12.65z"></path>
    </svg>
  );
};

UGlassMartiniAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGlassMartiniAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGlassMartiniAlt;
