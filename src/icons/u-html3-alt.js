import React from 'react';
import PropTypes from 'prop-types';

const UHtml3Alt = props => {
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
      <path d="M7.952 8h6.986l-.177 2h-4.77a1 1 0 000 2h4.593l-.264 2.977-2.329.528-2.328-.529-.096-1.065a1 1 0 00-1.992.178l.16 1.79a1.002 1.002 0 00.775.887l3.26.74c.146.033.297.033.443 0l3.26-.74a1.001 1.001 0 00.775-.888l.432-4.868.002-.01-.001-.004.346-3.908A1 1 0 0016.031 6H7.952a1 1 0 100 2zm12.702-5.674A1.002 1.002 0 0019.916 2H4.066a1 1 0 00-.996 1.09l1.444 16.194a.999.999 0 00.727.874l6.473 1.805a.99.99 0 00.537 0l6.49-1.812a.999.999 0 00.728-.874l1.443-16.188a1 1 0 00-.258-.763zM17.538 18.41l-5.556 1.551-5.538-1.545L5.16 4h13.664l-1.285 14.41z"></path>
    </svg>
  );
};

UHtml3Alt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHtml3Alt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHtml3Alt;
