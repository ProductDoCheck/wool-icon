import React from 'react';
import PropTypes from 'prop-types';

const UCompressArrows = props => {
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
      <path d="M10.38 13.08A1.001 1.001 0 0010 13H6a1 1 0 000 2h1.59l-5.3 5.29a1 1 0 000 1.42.998.998 0 001.42 0L9 16.41V18a1 1 0 102 0v-4a1.002 1.002 0 00-.08-.38 1 1 0 00-.54-.54zM10 5a1 1 0 00-1 1v1.59l-5.29-5.3a1.004 1.004 0 10-1.42 1.42L7.59 9H6a1 1 0 000 2h4a.997.997 0 00.38-.08 1 1 0 00.54-.54A1 1 0 0011 10V6a1 1 0 00-1-1zm3.62 5.92c.12.051.25.078.38.08h4a1 1 0 100-2h-1.59l5.3-5.29a1.004 1.004 0 10-1.42-1.42L15 7.59V6a1 1 0 00-2 0v4a1 1 0 00.08.38 1 1 0 00.54.54zM16.41 15H18a1 1 0 100-2h-4c-.13.002-.26.029-.38.08a1 1 0 00-.54.54c-.051.12-.078.25-.08.38v4a1 1 0 102 0v-1.59l5.29 5.3a.999.999 0 001.42 0 1 1 0 000-1.42L16.41 15z"></path>
    </svg>
  );
};

UCompressArrows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCompressArrows.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCompressArrows;
