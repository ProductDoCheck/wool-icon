import React from 'react';
import PropTypes from 'prop-types';

const ULocationArrow = props => {
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
      <path d="M21.15 2.86a2.89 2.89 0 00-3-.71L4 6.88a2.9 2.9 0 00-.12 5.47l5.24 2a.929.929 0 01.53.52l2 5.25A2.87 2.87 0 0014.36 22h.07a2.88 2.88 0 002.69-2l4.73-14.17a2.89 2.89 0 00-.7-2.97zM20 5.2l-4.78 14.18a.88.88 0 01-.84.62.92.92 0 01-.87-.58l-2-5.25a2.91 2.91 0 00-1.67-1.68l-5.25-2A.9.9 0 014 9.62a.88.88 0 01.62-.84L18.8 4.05A.91.91 0 0120 5.2z"></path>
    </svg>
  );
};

ULocationArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULocationArrow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULocationArrow;
