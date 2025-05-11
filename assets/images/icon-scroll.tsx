import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconScrollProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconScroll = (props: IconScrollProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={42} {...props}>
    <g fill="none" fillRule="evenodd" stroke="#3EE9E5" strokeWidth={2}>
      <rect width={24} height={40} x={1} y={1} rx={12} />
      <rect width={4} height={4} x={11} y={12} rx={2} />
    </g>
  </svg>
);
export default IconScroll;

