import React from 'react';
import PropTypes from 'prop-types';

const UAdobeAlt = props => {
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
      <path d="M10.247 2.403a1 1 0 00-.83-.444H1.991a1 1 0 00-1 1v18.082a1 1 0 001.925.38L10.342 3.34a1 1 0 00-.095-.936zm-7.255 13.57V3.96h4.933L2.992 15.973zm19-14.014h-7.518a1 1 0 00-.921 1.388l7.517 17.85a1 1 0 001.922-.388V2.959a1 1 0 00-1-1zm-1 13.899L15.98 3.959h5.012v11.899zM12.949 9.52a1 1 0 00-.926-.646h-.01a1 1 0 00-.928.627l-3.059 7.631a1 1 0 00.929 1.372h2.254l1.523 2.99a.999.999 0 00.89.547h2.613a1 1 0 00.936-1.353L12.949 9.52zm1.287 10.521l-1.523-2.99a1 1 0 00-.89-.547h-1.39l1.553-3.875 2.802 7.412h-.552z"></path>
    </svg>
  );
};

UAdobeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAdobeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAdobeAlt;
