import React from 'react';
import PropTypes from 'prop-types';

const UAdjustCircle = props => {
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
      <path d="M17 7A7.74 7.74 0 107 17 7.74 7.74 0 1017 7zm-1.6 1.6c.072.376.11.757.11 1.14-.002.451-.056.9-.16 1.34l-2.44-2.42a5.92 5.92 0 011.34-.16 6.12 6.12 0 011.14.11l.01-.01zm-.94 4.4A5.998 5.998 0 0113 14.46L9.54 11A5.999 5.999 0 0111 9.54L14.46 13zm-8 1.46a5.749 5.749 0 118-8h-.25a7.76 7.76 0 00-7.71 7.79c0 .08.01.17.01.25l-.05-.04zm2.1.89a6.119 6.119 0 01-.11-1.14c.002-.451.056-.9.16-1.34l2.43 2.43c-.44.104-.889.158-1.34.16-.365.01-.73-.014-1.09-.07l-.05-.04zM14.25 20a5.769 5.769 0 01-4.75-2.51h.25a7.76 7.76 0 007.75-7.74V9.5A5.75 5.75 0 0114.25 20z"></path>
    </svg>
  );
};

UAdjustCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAdjustCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAdjustCircle;
