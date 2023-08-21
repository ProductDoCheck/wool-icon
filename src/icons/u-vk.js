import React from 'react';
import PropTypes from 'prop-types';

const UVk = props => {
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
      <path d="M15.073 2H8.937C3.333 2 2 3.333 2 8.927v6.136C2 20.666 3.323 22 8.927 22h6.136C20.666 22 22 20.677 22 15.073V8.937C22 3.333 20.677 2 15.073 2zm3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437-.864-.833-1.229-.937-1.448-.937-.302 0-.385.083-.385.5v1.312c0 .354-.115.563-1.042.563a5.692 5.692 0 01-4.448-2.667 11.626 11.626 0 01-2.302-4.833c0-.219.083-.417.5-.417h1.458c.375 0 .51.167.657.552.708 2.084 1.916 3.896 2.406 3.896.188 0 .27-.083.27-.552v-2.146c-.062-.979-.582-1.062-.582-1.416a.36.36 0 01.374-.334h2.292c.313 0 .417.156.417.531v2.896c0 .313.135.417.229.417.188 0 .333-.104.677-.448.739-.9 1.342-1.904 1.792-2.98a.628.628 0 01.635-.416h1.459c.437 0 .53.219.437.531a18.205 18.205 0 01-1.958 3.365c-.157.24-.22.365 0 .646.145.219.656.646 1 1.052.5.499.915 1.076 1.229 1.708.125.406-.084.615-.5.615z"></path>
    </svg>
  );
};

UVk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVk.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVk;
