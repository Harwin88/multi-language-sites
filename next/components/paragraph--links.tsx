import Link from "next/link";

import { Links } from "@/lib/zod/paragraph";
import ArrowIcon from "@/styles/icons/arrow.svg";

export function ParagraphLinks({ paragraph }: { paragraph: Links }) {
  if (!paragraph.field_links?.length) return null;

  return (
    <ul className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {paragraph.field_links.map((link, index) => (
        <Link
          key={index}
          role="listitem"
          href={link.full_url}
          className="relative min-h-[6em] cursor-pointer rounded bg-wunderpurple-100 p-8 text-lg text-wunderpurple-600 shadow hover:bg-wunderpurple-200"
        >
          {link.title}
          <ArrowIcon aria-hidden className="absolute top-1/4 right-2 h-6 w-6" />
        </Link>
      ))}
    </ul>
  );
}
