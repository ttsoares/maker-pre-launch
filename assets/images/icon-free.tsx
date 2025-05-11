import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconFreeProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconFree = (props: IconFreeProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={46} height={46} {...props}>
    <g fill="#3EE9E5">
      <path d="M44.432 28.703h-26.2a1.194 1.194 0 0 1-1.191-1.196V1.196c0-.66.533-1.196 1.19-1.196h26.2c.659 0 1.192.535 1.192 1.196v26.31c0 .661-.533 1.197-1.191 1.197m-25.01-2.392h23.819V2.39H19.423z" />
      <path d="M15.649 45.452C7.016 45.46.01 38.44 0 29.77s6.976-15.708 15.609-15.723 15.645 6.998 15.664 15.667a15.74 15.74 0 0 1-4.563 11.122 15.6 15.6 0 0 1-11.061 4.616m0-29.001a13.25 13.25 0 0 0-12.26 8.22 13.35 13.35 0 0 0 2.888 14.516 13.21 13.21 0 0 0 14.462 2.86c4.953-2.075 8.172-6.944 8.153-12.333-.033-7.326-5.949-13.25-13.243-13.263" />
    </g>
  </svg>
);
export default IconFree;

