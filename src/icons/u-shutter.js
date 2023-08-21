import React from 'react';
import PropTypes from 'prop-types';

const UShutter = props => {
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
      <path d="M19.07 4.93A10 10 0 104.93 19.07 10 10 0 1019.07 4.93zM18.23 7h-5.47l2.35-2.35A8.14 8.14 0 0118.23 7zM9 4.6a8.15 8.15 0 013.87-.54L9 7.93V4.6zM7 5.77v5.47L5.19 9.43l-.54-.54A8.14 8.14 0 017 5.77zM4.6 15a8.12 8.12 0 01-.54-3.87L7.93 15H4.6zm1.17 2h5.47l-2.35 2.35A8.14 8.14 0 015.77 17zM15 19.4a8.132 8.132 0 01-3.87.54L15 16.07v3.33zm0-6.16L13.24 15h-2.49L9 13.24v-2.48L10.76 9h2.48L15 10.76v2.48zm2 5v-5.48l2.35 2.35A8.14 8.14 0 0117 18.23v.01zM16.07 9h3.33a8.13 8.13 0 01.54 3.87L16.07 9z"></path>
    </svg>
  );
};

UShutter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShutter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShutter;