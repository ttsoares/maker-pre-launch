import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconCheckProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
  fill?: string;
}

const IconCheck = ({ fill = "#093F68", ...props }: IconCheckProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={9} {...props}>
    <path
      fill={fill} // Use the fill prop here
      d="m10.319.768 1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
    />
  </svg>
);

export default IconCheck;
