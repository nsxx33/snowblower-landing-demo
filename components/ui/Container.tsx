import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { containerClassName } from "../../lib/tokens";

type ContainerTag = "div" | "section" | "header" | "footer" | "main" | "article" | "nav";

export type ContainerProps<T extends ContainerTag = "div"> = HTMLAttributes<HTMLElement> & {
  as?: T;
  children: ReactNode;
};

export function Container<T extends ContainerTag = "div">({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag className={cn(containerClassName, className)} {...props}>
      {children}
    </Tag>
  );
}

export { containerClassName };
