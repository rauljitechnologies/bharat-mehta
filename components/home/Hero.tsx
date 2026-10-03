import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import type { ImageAsset } from "@/lib/types";

interface HeroProps {
  eyebrow: string;
  title: [string, string];
  text: string;
  image: ImageAsset;
}

export function Hero({ eyebrow, title, text, image }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy-dark text-white">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        preload
        quality={75}
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] motion-safe:animate-[hero-zoom_18s_ease-out_both]"
      />
      {/* Overlay keeps Gujarati text readable while letting the dome breathe on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(4_29_51/0.55)_0%,rgb(4_29_51/0.78)_60%,rgb(4_29_51/0.95)_100%)] md:bg-[linear-gradient(90deg,rgb(4_29_51/0.96)_0%,rgb(4_29_51/0.86)_38%,rgb(4_29_51/0.35)_70%,rgb(4_29_51/0.15)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy-dark/70 to-transparent" />

      <div className="container-site flex min-h-[560px] items-center pt-16 pb-28 md:min-h-[640px] md:pb-32 lg:min-h-[680px]">
        <div className="hero-in max-w-[46rem]">
          <p className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-gold-light sm:text-[0.9375rem]">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            {eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-[2rem] leading-[1.45] font-bold sm:text-[2.6rem] lg:text-[3.1rem] lg:leading-[1.4]"
          >
            {title[0]}
            <br className="hidden sm:block" /> <span className="text-gold-light">{title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/about" variant="primary" className="px-6">
              મારા વિશે વધુ જાણો
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/research" variant="light-outline" className="px-6">
              મારા સંશોધન જુઓ
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
