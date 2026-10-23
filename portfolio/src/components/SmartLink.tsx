import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { asset, isExternal } from "@/lib/utils";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string; children: ReactNode; download?: boolean };

/** Internal routes use next/link. External URLs open safely in a new tab. Files in /public get the base path. */
export function SmartLink({ href, children, download, ...rest }: Props) {
  if (isExternal(href)) {
    const mail = href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <a href={href} {...(mail ? {} : { target: "_blank", rel: "noopener noreferrer" })} {...rest}>
        {children}
      </a>
    );
  }
  if (download || /\.[a-z0-9]{2,4}$/i.test(href)) {
    return (
      <a href={asset(href)} {...(download ? { download: true } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
