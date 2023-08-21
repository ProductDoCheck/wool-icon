import React from 'react';
import PropTypes from 'prop-types';

const UGithub = props => {
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
      <path d="M12 2.247a10 10 0 00-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.637 3.637 0 00-1.025-1.413c-.35-.187-.85-.65-.012-.662a2.001 2.001 0 011.537 1.025 2.137 2.137 0 002.913.825c.043-.509.27-.984.637-1.338-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 011.025-2.688 3.594 3.594 0 01.1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 015 0c1.912-1.3 2.75-1.025 2.75-1.025.37.839.406 1.786.1 2.65a3.869 3.869 0 011.025 2.688c0 3.837-2.337 4.687-4.562 4.937a2.367 2.367 0 01.675 1.85c0 1.338-.013 2.413-.013 2.75 0 .263.188.575.688.475A10.005 10.005 0 0012 2.247z"></path>
    </svg>
  );
};

UGithub.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGithub.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGithub;
