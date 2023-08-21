import React from 'react';
import PropTypes from 'prop-types';

const UFileQuestionAlt = props => {
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
      <path d="M13.07 12h-5a1 1 0 000 2h5a1 1 0 000-2zm1 8h-8a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v1a1 1 0 002 0V9a.141.141 0 000-.06.86.86 0 00-.07-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1 1 0 00-.29-.19h-.08a.88.88 0 00-.32-.11h-6a3 3 0 00-3 3v14a3 3 0 003 3h8a1 1 0 000-2h-.05zm-1-14.59L15.65 8h-1.58a1 1 0 01-1-1V5.41zm5.57 14.88a1.08 1.08 0 00-.51-.27 1 1 0 10.51.27zM13.07 16h-5a1 1 0 000 2h5a1 1 0 000-2zm4.86-3a3 3 0 00-2.6 1.5 1.002 1.002 0 001.482 1.295c.105-.08.192-.18.258-.295a1 1 0 11.86 1.5 1 1 0 000 2 3 3 0 000-6zm-9.86-3h1a1 1 0 100-2h-1a1 1 0 000 2z"></path>
    </svg>
  );
};

UFileQuestionAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileQuestionAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileQuestionAlt;