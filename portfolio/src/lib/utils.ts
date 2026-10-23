export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public/ asset path with the deploy base path (for plain <a> and <img> tags). */
export const asset = (path: string) => `${basePath}${path}`;

export const cn = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join(" ");

export const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);
