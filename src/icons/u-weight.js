import React from 'react';
import PropTypes from 'prop-types';

const UWeight = props => {
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
      <path d="M19 4h-1.45A3.08 3.08 0 0017 3a3 3 0 00-2.25-1H9.27A3 3 0 007 3a3.08 3.08 0 00-.57 1H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-10.48.34A1 1 0 019.27 4h5.46a1 1 0 01.75.34 1 1 0 01.25.78l-.5 4a1 1 0 01-1 .88h-1.64l1.14-2.4a1 1 0 00-1.8-.86L10.37 10h-.6a1 1 0 01-1-.88l-.5-4a1 1 0 01.25-.78zM20 19a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h1.37l.42 3.37a3 3 0 003 2.63h4.46a3 3 0 003-2.63L17.63 6H19a1 1 0 011 1v12zm-6-3h-4a1 1 0 000 2h4a1 1 0 100-2z"></path>
    </svg>
  );
};

UWeight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWeight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWeight;