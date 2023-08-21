import React from 'react';
import PropTypes from 'prop-types';

const ULinkBroken = props => {
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
      <path d="M4.76 10.59a1.008 1.008 0 10.26-2l-1.76-.44a1 1 0 10-.52 1.93l1.76.47a.778.778 0 00.26.04zM8.62 5a1 1 0 001 .74.82.82 0 00.26 0 1 1 0 00.7-1.22l-.47-1.76a1 1 0 10-1.93.52L8.62 5zm4.83 10A1.002 1.002 0 0012 15l-3.5 3.56a2.21 2.21 0 01-3.06 0 2.15 2.15 0 010-3.06L9 12a1 1 0 10-1.41-1.41L4 14.08A4.186 4.186 0 009.92 20l3.53-3.53a1 1 0 000-1.47zM5.18 6.59a1 1 0 001.41 0 1 1 0 000-1.41L5.3 3.89A1 1 0 003.89 5.3l1.29 1.29zm16.08 7.33l-1.76-.47a1 1 0 10-.5 1.93l1.76.47h.26a1.008 1.008 0 10.26-2l-.02.07zM15.38 19a1 1 0 00-1.93.52l.47 1.76a1 1 0 001 .74c.086.01.174.01.26 0a.998.998 0 00.71-1.23L15.38 19zm3.44-1.57a1 1 0 00-1.41 1.41l1.29 1.29a1 1 0 001.41 0 1 1 0 000-1.41l-1.29-1.29zM21.2 7a4.16 4.16 0 00-7.12-3l-3.53 3.56A1.022 1.022 0 0012 9l3.5-3.56a2.21 2.21 0 013.06 0 2.15 2.15 0 010 3.06L15 12a1 1 0 000 1.41 1 1 0 001.41 0L20 9.92A4.19 4.19 0 0021.2 7z"></path>
    </svg>
  );
};

ULinkBroken.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULinkBroken.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULinkBroken;
