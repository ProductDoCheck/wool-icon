import React from 'react';
import PropTypes from 'prop-types';

const UFootball = props => {
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
      <path d="M20.07 6.11a9.85 9.85 0 00-4.3-3.36A10 10 0 002 12v.56A9.94 9.94 0 003.33 17a10 10 0 005.89 4.65c.906.245 1.842.363 2.78.35a10 10 0 009.88-8.59c.075-.466.115-.938.12-1.41a9.83 9.83 0 00-1.93-5.89zm-2 .77L17 9.74l-1.62.44L13 8.49V6.64l2.49-1.81a7.81 7.81 0 012.62 2.05h-.04zM14 11.67L13.22 14h-2.45L10 11.67l2-1.43 2 1.43zM12 4a8 8 0 011.11.09l-1.11.8-1.11-.8A8 8 0 0112 4zM4.88 8.37l.4 1.32-1.13.79a7.88 7.88 0 01.73-2.11zm1.37 9.17l1.38.05.37 1.33a8.322 8.322 0 01-1.75-1.38zM8 15.6l-3.15-.11A7.83 7.83 0 014.07 13l2.49-1.74 1.44.62.89 2.76-.89.96zm.86-5.53l-1.56-.7-.91-3A7.93 7.93 0 018.5 4.83L11 6.64v1.85l-2.14 1.58zM13 19.93a8.082 8.082 0 01-2.63-.12l-.83-2.92.83-.89h3.07l.67 1L13 19.93zm2.41-.7l.46-1.23 1.36.07a7.832 7.832 0 01-1.85 1.16h.03zm3.46-3.12L15.76 16l-.71-1.1.89-2.76 1.51-.41 2.36 2a7.839 7.839 0 01-.97 2.38h.03zm.05-5.83L19.4 9a7.4 7.4 0 01.53 2.13l-1.01-.85z"></path>
    </svg>
  );
};

UFootball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFootball.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFootball;
