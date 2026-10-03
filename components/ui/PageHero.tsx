import Image from "next/image";
import type { ImageAsset } from "@/lib/types";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: ImageAsset;
  crumbs: Crumb[];
  children?: React.ReactNode;
}

/** Compact navy banner used at the top of every inner page. */
export function PageHero({ eyebrow, title, description, image, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark text-white">
      <Image
        src={image.src}
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--color-navy-dark)_25%,rgb(4_29_51/0.82)_60%,rgb(4_29_51/0.55))]"
      />
      <div className="container-site py-14 sm:py-20">
        <div className="hero-in max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mt-8 text-gold-light">{eyebrow}</p>
          <h1 className="mt-2 font-serif text-[2rem] leading-snug font-bold sm:text-[2.75rem]">{title}</h1>
          <span className="gold-rule mt-5" aria-hidden="true" />
          {description && <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
