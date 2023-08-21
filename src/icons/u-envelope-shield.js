import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeShield = props => {
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
      <path d="M21.63 5.12a1 1 0 00-.84-.2 2.74 2.74 0 01-2.2-.46 1 1 0 00-1.18 0 2.74 2.74 0 01-2.2.46A1 1 0 0014 5.9v3.31a4.619 4.619 0 001.84 3.7l1.57 1.16a1 1 0 001.18 0l1.57-1.16A4.62 4.62 0 0022 9.21V5.9a1 1 0 00-.37-.78zM20 9.21a2.609 2.609 0 01-1 2.09l-1 .7-1-.72a2.61 2.61 0 01-1-2.09V7a4.67 4.67 0 002-.54A4.67 4.67 0 0020 7v2.21zm1 6a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V9.67l5.88 5.88a3 3 0 003.276.647c.37-.154.704-.381.984-.667l-.7-.71-.74-.68a1 1 0 01-1.4 0L5.41 8.26H11a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-3a1 1 0 00-1-1v-.05z"></path>
    </svg>
  );
};

UEnvelopeShield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeShield.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeShield;
