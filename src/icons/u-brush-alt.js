import React from 'react';
import PropTypes from 'prop-types';

const UBrushAlt = props => {
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
      <path d="M12 18a1 1 0 100 2 1 1 0 000-2zm6-17H6a1 1 0 00-1 1v9a3 3 0 003 3h1v2.37a4 4 0 106 0V14h1a3 3 0 003-3V2a1 1 0 00-1-1zm-6 20a2 2 0 01-1.33-3.48.999.999 0 00.33-.74V14h2v2.78a1 1 0 00.33.74A2 2 0 0112 21zm5-10a1 1 0 01-1 1H8a1 1 0 01-1-1v-1h10v1zm0-3H7V3h10v5z"></path>
    </svg>
  );
};

UBrushAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBrushAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBrushAlt;
