import { roles } from "@/data/career";
import { site } from "@/data/site";

export const dynamic = "force-static";

// Generated from src/data so the contact card never drifts from the site.
export function GET() {
  const parts = site.name.split(" ");
  const last = parts.length > 1 ? parts[parts.length - 1] : "";
  const first = parts.slice(0, parts.length > 1 ? -1 : 1).join(" ");
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};;;`,
    `FN:${site.name}`,
    `ORG:${roles[0].company}`,
    `TITLE:${site.title.replace(/·/g, "/")}`,
    `EMAIL;TYPE=INTERNET,WORK:${site.email}`,
    `TEL;TYPE=WORK,VOICE:${site.phone}`,
    `URL:${site.url}`,
    `URL;TYPE=LinkedIn:${site.linkedin}`,
    `URL;TYPE=GitHub:${site.github}`,
    `ADR;TYPE=WORK:;;;${site.location};;;`,
    "END:VCARD",
  ];
  return new Response(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${site.name.toLowerCase().replace(/\s+/g, "-")}.vcf"`,
    },
  });
}
