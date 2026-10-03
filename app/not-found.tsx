import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-site max-w-2xl text-center">
        <p className="font-serif text-7xl font-bold text-gold">404</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-navy">પૃષ્ઠ મળ્યું નથી</h1>
        <span className="gold-rule mx-auto mt-4" aria-hidden="true" />
        <p className="mt-5 text-muted">
          તમે શોધી રહ્યા છો તે પૃષ્ઠ ખસેડાયું છે અથવા અસ્તિત્વમાં નથી. (The page you are looking for could not be found.)
        </p>
        <ButtonLink href="/" className="mt-8">
          મુખ્યપૃષ્ઠ પર જાઓ
        </ButtonLink>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          {mainNav.slice(1).map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-navy underline decoration-gold/50 underline-offset-4 hover:text-gold-dark">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
