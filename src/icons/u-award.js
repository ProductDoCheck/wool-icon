import React from 'react';
import PropTypes from 'prop-types';

const UAward = props => {
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
      <path d="M20.87 17.25l-2.71-4.68a7 7 0 10-12.32 0l-2.71 4.68a1 1 0 00.87 1.5h2.87l1.46 2.46c.05.081.11.156.18.22a1 1 0 00.69.28h.14a1 1 0 00.73-.49L12 17.9l1.93 3.35a.999.999 0 00.73.48h.14a1 1 0 00.7-.28.872.872 0 00.17-.21l1.46-2.46H20a1 1 0 00.87-.5 1 1 0 000-1.03zM9.19 18.78l-.89-1.49a1 1 0 00-.85-.49H5.72l1.43-2.48a7 7 0 003.57 1.84l-1.53 2.62zM12 14.25a5 5 0 110-9.998 5 5 0 010 9.998zm4.55 2.55a1.001 1.001 0 00-.85.49l-.89 1.49-1.52-2.65a7.06 7.06 0 003.56-1.84l1.43 2.48-1.73.03z"></path>
    </svg>
  );
};

UAward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAward;
