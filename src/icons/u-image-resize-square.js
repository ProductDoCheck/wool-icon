import React from 'react';
import PropTypes from 'prop-types';

const UImageResizeSquare = props => {
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
      <path d="M3 8.1a1 1 0 001-1v-.19a1 1 0 00-2 0v.19a1 1 0 001 1zm0-4a1 1 0 00.42-.1 1.013 1.013 0 00-.32-2H3a1.09 1.09 0 00-1 1.1 1 1 0 001 .95v.05zm17.39-.19A1 1 0 0022 3a1 1 0 00-1-1h-.1a1 1 0 00-.51 1.86v.05zm-8.5.09h.22a1 1 0 100-2h-.22a1 1 0 000 2zm-4.5 0h.21a1 1 0 000-2h-.21a1 1 0 100 2zM21 20a1.001 1.001 0 00-.42.1 1 1 0 00.32 1.9h.1a1.09 1.09 0 001-1.1 1 1 0 00-1-.9zm-7-9a1 1 0 00-1-1H3.27A1.08 1.08 0 003 10a1 1 0 00-1 1v10a1 1 0 001 1h10.1a1.001 1.001 0 00.9-1.42V11zm-2 9H5.52l3.91-3.9a.331.331 0 01.47 0l2.1 2.09V20zm0-4.63l-.68-.69a2.35 2.35 0 00-3.31 0l-4 4V12h8L12 15.37zm9 0a1 1 0 00-1 1v.21a1 1 0 002 0v-.18a1 1 0 00-1-1v-.03zm0-9a1 1 0 00-1 1v.23a1 1 0 002 0v-.21a1 1 0 00-1-1v-.02zm0 4.5a1 1 0 00-1 1v.22a1 1 0 002 0v-.22a1 1 0 00-1-.98v-.02zM17.1 20h-.2a1 1 0 000 2h.2a1 1 0 000-2zm-.49-16a1 1 0 100-2h-.21a1 1 0 000 2h.21z"></path>
    </svg>
  );
};

UImageResizeSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageResizeSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageResizeSquare;