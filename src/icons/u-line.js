import React from 'react';
import PropTypes from 'prop-types';

const ULine = props => {
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
      <path d="M13.78 9.46a.38.38 0 00-.38.38v1.67L12 9.65a.4.4 0 00-.33-.19.38.38 0 00-.38.38v2.84a.38.38 0 10.76 0V11l1.39 1.91a.27.27 0 00.15.11c.046.01.094.01.14 0A.332.332 0 0014 13l.1-.07a.39.39 0 00.11-.27V9.84a.379.379 0 00-.43-.38zM9.2 12.27H8.14V9.84a.38.38 0 00-.76 0v2.84a.38.38 0 00.38.38H9.2a.39.39 0 00.39-.38.39.39 0 00-.39-.41zm1.11-2.81a.39.39 0 00-.39.38v2.84a.39.39 0 00.39.38.38.38 0 00.38-.38V9.84a.38.38 0 00-.38-.38zM17.91 2H6.09A4.1 4.1 0 002 6.09v11.82A4.1 4.1 0 006.09 22h11.82A4.1 4.1 0 0022 17.91V6.09A4.1 4.1 0 0017.91 2zm.31 12.28a5.5 5.5 0 01-.93.97c-2 1.87-5.36 4.11-5.81 3.76-.45-.35.64-1.76-.53-2a.996.996 0 01-.25 0c-3.44-.48-6-2.89-6-5.78 0-3.25 3.29-5.88 7.34-5.88s7.34 2.63 7.34 5.88a5 5 0 01-1.16 3.05zm-1.71-4.81H15a.38.38 0 00-.38.38v2.84a.38.38 0 00.38.38h1.48a.38.38 0 100-.76h-1.03v-.6h1.06a.39.39 0 00.38-.39.38.38 0 00-.38-.38h-1.06v-.61h1.06a.38.38 0 00.38-.38.38.38 0 00-.38-.48z"></path>
    </svg>
  );
};

ULine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULine.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULine;
