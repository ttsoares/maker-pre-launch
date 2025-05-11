import type { SVGProps as ReactSVGProps } from "react";
import React from 'react';

interface IconPaidProps extends ReactSVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
}



const IconPaid = (props: IconPaidProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={51} height={65} {...props}>
    <g fill="#093F68">
      <path d="M48.796 64.918H1.38c-.762 0-1.38-.62-1.38-1.384V1.384C0 .62.618 0 1.38 0h47.416c.763 0 1.38.62 1.38 1.385v62.149a1.38 1.38 0 0 1-1.38 1.385zm-46.035-2.77h44.655V2.77H2.76v59.379z" />
      <path d="M37.382 58.053H8.463a1.38 1.38 0 0 1-1.145-.623 1.39 1.39 0 0 1-.125-1.288l14.453-35.464a1.38 1.38 0 0 1 2.553 0l14.467 35.464c.169.426.117.908-.138 1.288a1.38 1.38 0 0 1-1.146.623m-26.862-2.77h24.847L22.943 24.818z" />
      <path d="M40.558 30.659H15.463c-.762 0-1.38-.62-1.38-1.385V8.614c0-.765.618-1.385 1.38-1.385h25.095c.763 0 1.38.62 1.38 1.384v20.661c0 .765-.617 1.385-1.38 1.385m-23.66-2.77h22.28V10H16.844l.055 17.89z" />
    </g>
  </svg>
);
export default IconPaid;

