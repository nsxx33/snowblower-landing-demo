/**
 * Twin City Small Engine design tokens.
 * Audited from the finalized Hero + Header on the snowblower landing page.
 *
 * Container (header inner + hero inner):
 *   max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16
 *
 * H1 (Hero):
 *   text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight
 *
 * H2 (Reviews / FAQ):
 *   text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight
 *   plus standardized desktop spacing: mb-4 md:mb-12
 *
 * H3 (pricing cards):
 *   text-2xl font-bold text-gray-900 tracking-tight
 *
 * Body baseline:
 *   bg-gray-50 font-sans text-gray-900 antialiased
 */

export const containerClassName =
  "max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16";

export const headingClassName = {
  h1: "text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight",
  h2: "text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 md:mb-12",
  h3: "text-2xl font-bold text-gray-900 tracking-tight",
} as const;

export const bodyClassName = "min-h-screen bg-gray-50 font-sans text-gray-900 antialiased";
