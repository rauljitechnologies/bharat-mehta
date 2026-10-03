import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "મુખ્યપૃષ્ઠ", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="બ્રેડક્રમ્બ (Breadcrumb)">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-white/70">
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-gold-light">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.path} className="hover:text-white">
                      {crumb.name}
                    </Link>
                    <ChevronRight className="size-3.5 text-white/40" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(trail)} />
    </>
  );
}
