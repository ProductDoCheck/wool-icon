import React from 'react';
import PropTypes from 'prop-types';

const UImageBlock = props => {
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
      <path d="M20.54 2.46a5 5 0 10-7.08 7.063 5 5 0 007.08-7.063zM14 6a3 3 0 013-3 3 3 0 011.29.3l-4 4A2.999 2.999 0 0114 6zm5.12 2.12a3.08 3.08 0 01-3.4.57l4-4A3 3 0 0120 6a3 3 0 01-.88 2.12zM19 13a1 1 0 00-1 1v.39l-1.48-1.49a2.87 2.87 0 00-3.93 0l-.7.71-2.48-2.49a2.87 2.87 0 00-3.93 0L4 12.61V7a1 1 0 011-1h4a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12c.324-.005.645-.062.95-.17h.09A3 3 0 0020 19.44a1.443 1.443 0 000-.22V14a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.89a.79.79 0 011.09 0l3.19 3.18L15.46 20H5zm13-1a1 1 0 01-.18.54L13.3 15l.71-.7a.79.79 0 011.09 0l2.9 2.91V19z"></path>
    </svg>
  );
};

UImageBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageBlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageBlock;
