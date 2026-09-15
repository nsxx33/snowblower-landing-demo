import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { headingClassName } from "../../lib/tokens";

export type HeadingTag = "h1" | "h2" | "h3";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingTag;
  children: ReactNode;
};

export function Heading({ as = "h2", className, children, ...props }: HeadingProps) {
  const Tag = as as ElementType;

  return (
    <Tag className={cn(headingClassName[as], className)} {...props}>
      {children}
    </Tag>
  );
}

export { headingClassName };
