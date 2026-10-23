"use client";

import { PrintIcon } from "./icons";

export function PrintButton() {
  return (
    <button type="button" className="btn-ghost" onClick={() => window.print()}>
      <PrintIcon width={18} height={18} /> Print
    </button>
  );
}
