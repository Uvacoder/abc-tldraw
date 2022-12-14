import * as React from 'react'

export interface SvgContainerProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode
  className?: string
}

export const SVGContainer = React.memo(
  React.forwardRef<SVGSVGElement, SvgContainerProps>(function SVGContainer(
    { id, className = '', children, ...rest },
    ref
  ) {
    return (
      <svg ref={ref} className={`tl-positioned-svg ${className}`} {...rest}>
        <g id={id} className="tl-centered-g">
          {children}
        </g>
      </svg>
    )
  })
)
