import React from 'react';
import PropTypes from 'prop-types';

const UWhatsapp = props => {
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
      <g clipPath="url(#clip0_19_17737)">
        <path d="M14.515 11.984c-.247-.124-1.465-.724-1.692-.806-.227-.083-.392-.124-.557.124-.165.247-.64.806-.786.971-.144.165-.289.185-.536.061a6.766 6.766 0 01-1.991-1.228A7.46 7.46 0 017.575 9.39c-.144-.248-.015-.382.109-.506.11-.11.248-.289.37-.434.103-.125.186-.264.249-.413a.455.455 0 00-.021-.434c-.062-.124-.557-1.343-.763-1.84-.201-.481-.405-.416-.558-.424-.145-.007-.31-.01-.475-.01a.91.91 0 00-.66.312 2.777 2.777 0 00-.867 2.065c.08.935.432 1.825 1.011 2.563a11.037 11.037 0 004.231 3.74c.462.198.933.372 1.413.522.505.153 1.04.186 1.56.097a2.543 2.543 0 001.671-1.177c.163-.37.213-.78.144-1.178-.06-.104-.226-.165-.474-.289zm2.493-9.08a9.915 9.915 0 00-15.602 11.96L0 20l5.255-1.377a9.907 9.907 0 004.737 1.206h.004a9.917 9.917 0 007.012-16.926zm-2.634 13.991a8.247 8.247 0 01-4.378 1.26h-.004a8.225 8.225 0 01-4.193-1.15l-.3-.178-3.12.818.833-3.04-.195-.312a8.239 8.239 0 1111.357 2.602z"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_17737">
          <rect width="19.904" height="19.996"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UWhatsapp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWhatsapp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWhatsapp;
