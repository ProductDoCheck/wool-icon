import React from 'react';
import PropTypes from 'prop-types';

const UMissedCall = props => {
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
      <path d="M6 7.49a1 1 0 001-1V5.9l2.88 2.88a3 3 0 004.24 0l4.59-4.59a1 1 0 10-1.42-1.41l-4.58 4.58a1.001 1.001 0 01-1.42 0L8.41 4.49H9a1 1 0 100-2H6a1 1 0 00-1 1v3a1 1 0 001 1zm15.94 7.36a16.27 16.27 0 00-19.88 0 2.69 2.69 0 00-1 2 2.66 2.66 0 00.78 2.07l1.76 1.8a2.68 2.68 0 003.46.28l.47-.32c.32-.206.654-.39 1-.55a1.85 1.85 0 001-2.3l-.09-.24c1.712-.44 3.508-.44 5.22 0l-.09.24a1.85 1.85 0 001 2.3c.346.16.68.344 1 .55l.47.32a2.58 2.58 0 001.54.5c.72 0 1.41-.283 1.92-.79l1.81-1.82a2.66 2.66 0 00.69-2.06 2.69 2.69 0 00-1.06-1.98zm-1.14 2.64L19 19.3a.68.68 0 01-.86.1 11.648 11.648 0 00-1.68-1.01l.4-1.09a1 1 0 00-.6-1.28c-2.745-1-5.755-1-8.5 0a1 1 0 00-.6 1.28l.4 1.1a9.79 9.79 0 00-1.1.6l-.58.4a.66.66 0 01-.88-.1l-1.8-1.81A.67.67 0 013 17a.76.76 0 01.28-.53 14.29 14.29 0 0117.44 0A.761.761 0 0121 17a.67.67 0 01-.2.49z"></path>
    </svg>
  );
};

UMissedCall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMissedCall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMissedCall;
