import type { ReactNode } from "react";
import { bodyClassName } from "../lib/tokens";
import "./globals.css";

export const metadata = {
  title: "Twin City Small Engine",
  description:
    "Professional snowblower repair with pickup and delivery across the Minneapolis metro.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
