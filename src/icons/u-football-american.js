import React from 'react';
import PropTypes from 'prop-types';

const UFootballAmerican = props => {
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
      <path d="M21.84 5.56a4.08 4.08 0 00-1.14-2.25 4.08 4.08 0 00-2.25-1.14 13.65 13.65 0 00-5.29.24 1.17 1.17 0 00-.2.06 14.44 14.44 0 00-6.69 3.8A14.59 14.59 0 002.45 13c0 .06 0 .12-.05.19a13.7 13.7 0 00-.24 5.3 4.08 4.08 0 003.39 3.34c.688.112 1.383.169 2.08.17 1.1-.006 2.194-.144 3.26-.41h.14a14.54 14.54 0 0010.52-10.5c0-.06 0-.12.05-.19a13.7 13.7 0 00.24-5.34zM16.37 4c.59-.003 1.178.044 1.76.14.082.017.162.04.24.07L17 5.59l-1.54-1.54c.3-.05.61-.05.91-.05zm-8.7 3.67a12.72 12.72 0 015.4-3.19L15.59 7l-2.15 2.15-.73-.73a1.001 1.001 0 10-1.42 1.41l.73.73L10.56 12l-.73-.73a1 1 0 10-1.41 1.42l.73.73L7 15.59l-2.51-2.51a12.67 12.67 0 013.18-5.41zm-3.46 10.7a1.68 1.68 0 01-.07-.24A11.38 11.38 0 014 15.46L5.59 17l-1.38 1.37zm1.66 1.49a1.67 1.67 0 01-.24-.07L7 18.41 8.54 20c-.892.058-1.789.012-2.67-.14zm10.46-3.53a12.67 12.67 0 01-5.41 3.18L8.41 17l2.15-2.15.73.73a1.001 1.001 0 001.42-1.41l-.71-.73L13.44 12l.73.73a1 1 0 001.631-.331 1 1 0 00-.221-1.089l-.73-.73L17 8.41l2.51 2.51a12.67 12.67 0 01-3.18 5.41zM20 8.54L18.41 7l1.38-1.37c.03.078.053.158.07.24.151.882.198 1.778.14 2.67z"></path>
    </svg>
  );
};

UFootballAmerican.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFootballAmerican.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFootballAmerican;
