import { Icon } from "../ui/Icon";
import { Portrait } from "../ui/Portrait";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink, Arrow } from "../ui/Button";
import type { ProfessorProfile } from "@/lib/types";

export function AboutProfessor({ profile }: { profile: ProfessorProfile }) {
  return (
    <section aria-labelledby="about-title" className="section">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Portrait portrait={profile.portrait} className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none" />

        <div className="lg:col-span-7">
          <SectionHeading id="about-title" eyebrow="પરિચય · About" title="મારા વિશે" />
          <div className="mt-6 space-y-4 text-[1.0625rem] text-ink/90" data-reveal>
            {profile.bio.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <div className="mt-8" data-reveal>
            <ButtonLink href="/about" variant="secondary">
              વિગતવાર પ્રોફાઇલ <Arrow />
            </ButtonLink>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/10 min-[420px]:grid-cols-2 bg-navy text-white shadow-[var(--shadow-lift)]" data-reveal>
            {profile.stats.map((stat) => (
              <div key={stat.value} className="flex items-start gap-3.5 bg-navy p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-gold/40 text-gold-light">
                  <Icon name={stat.icon} className="size-5" />
                </span>
                <div className="flex flex-col-reverse">
                  <dt className="text-sm text-white/70">{stat.label}</dt>
                  <dd className="font-semibold text-white">{stat.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
