import React from 'react';
import PropTypes from 'prop-types';

const UFileShieldAlt = props => {
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
      <path d="M10.5 20h-5a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3a1 1 0 002 0V9v-.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.32.32 0 00-.09 0L11.56 2H5.5a3 3 0 00-3 3v14a3 3 0 003 3h5a1 1 0 000-2zm2-14.59L15.09 8H13.5a1 1 0 01-1-1V5.41zM7.5 8a1 1 0 000 2h1a1 1 0 000-2h-1zm13.63 5.86a1 1 0 00-.84-.2 2.77 2.77 0 01-2.2-.47 1 1 0 00-1.18 0 2.781 2.781 0 01-2.2.47 1 1 0 00-1.21 1V17a4.6 4.6 0 001.84 3.69l1.56 1.11a1 1 0 001.2 0l1.56-1.16A4.6 4.6 0 0021.5 17v-2.37a1.001 1.001 0 00-.37-.77zM19.5 17a2.62 2.62 0 01-1 2.09l-1 .72-1-.72a2.62 2.62 0 01-1-2.09v-1.28a4.68 4.68 0 002-.55c.617.33 1.3.519 2 .55V17zm-9-.95h-3a1 1 0 000 2h3a1 1 0 000-2zm1-4h-4a1 1 0 000 2h4a1 1 0 000-2z"></path>
    </svg>
  );
};

UFileShieldAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileShieldAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileShieldAlt;
