import React from 'react';
import PropTypes from 'prop-types';

const UImageV = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14c.165-.002.328-.019.49-.05l.3-.07H19.91l.37-.14.13-.07c.1-.06.21-.11.31-.18a3.78 3.78 0 00.38-.32l.07-.09c.098-.1.188-.206.27-.32l.09-.13c.07-.111.13-.228.18-.35.027-.048.05-.098.07-.15.05-.12.08-.25.12-.38v-.15c.057-.195.09-.397.1-.6V5a3 3 0 00-3-3zM5 20a1 1 0 01-1-1v-4.31l3.29-3.3a1 1 0 011.42 0l8.6 8.61H5zm15-1a1 1 0 01-.07.36c-.023.049-.05.096-.08.14a.948.948 0 01-.09.12l-5.35-5.35.88-.88a1.002 1.002 0 011.42 0l3.29 3.3V19zm0-5.14L18.12 12a3.08 3.08 0 00-4.24 0l-.88.88L10.12 10a3.08 3.08 0 00-4.24 0L4 11.86V5a1 1 0 011-1h14a1 1 0 011 1v8.86z"></path>
    </svg>
  );
};

UImageV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageV.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageV;