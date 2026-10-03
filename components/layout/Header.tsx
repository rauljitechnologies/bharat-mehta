"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X, Mail, Phone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { SearchItem } from "@/lib/search";
import type { NavItem } from "@/lib/types";
import { Emblem } from "../ui/Emblem";
import { SearchDialog } from "./SearchDialog";

interface HeaderProps {
  nav: NavItem[];
  name: string;
  role: string;
  university: string;
  email: string;
  phone: string;
  phoneHref: string;
  searchIndex: SearchItem[];
}

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({ nav, name, role, university, email, phone, phoneHref, searchIndex }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Close the drawer whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard shortcut: "/" or Ctrl/⌘+K opens search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.closest("input, textarea, select, [contenteditable]");
      if ((e.key === "/" && !typing) || (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Drawer: lock scroll, trap focus, close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const drawer = drawerRef.current;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-gold px-4 py-2 font-semibold text-navy-dark focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        મુખ્ય સામગ્રી પર જાઓ
      </a>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-navy-dark text-white transition-shadow duration-300",
          scrolled ? "border-white/10 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.5)]" : "border-transparent",
        )}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-4 lg:h-[88px]">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${name} — મુખ્યપૃષ્ઠ`}>
            <Emblem className="size-11 shrink-0 lg:size-[52px]" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-serif text-[1.0625rem] font-bold sm:text-lg lg:text-xl">{name}</span>
              <span className="block truncate text-[0.75rem] text-white/75 sm:text-[0.8125rem]">{role}</span>
              <span className="hidden truncate text-[0.8125rem] text-gold-light sm:block">{university}</span>
            </span>
          </Link>

          <nav aria-label="મુખ્ય નેવિગેશન (Main navigation)" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors",
                        "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-gold after:transition-transform after:duration-300",
                        active
                          ? "text-gold-light after:scale-x-100"
                          : "text-white/85 after:scale-x-0 hover:text-white hover:after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="grid size-11 place-items-center rounded-lg text-white/85 transition-colors hover:bg-white/10 hover:text-gold-light"
              aria-label="શોધો (Search)"
              aria-haspopup="dialog"
            >
              <Search className="size-5" aria-hidden="true" />
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-11 place-items-center rounded-lg text-white hover:bg-white/10 xl:hidden"
              aria-label="મેનુ ખોલો (Open menu)"
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[70] xl:hidden",
          menuOpen ? "visible" : "invisible delay-300",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={closeMenu}
          className={cn(
            "absolute inset-0 bg-navy-dark/60 backdrop-blur-[2px] transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          id="mobile-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="મોબાઇલ મેનુ (Mobile menu)"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-navy-dark text-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-5">
            <span className="flex items-center gap-2.5">
              <Emblem className="size-9" />
              <span className="font-serif font-bold">{name}</span>
            </span>
            <button
              type="button"
              onClick={closeMenu}
              className="grid size-11 place-items-center rounded-lg hover:bg-white/10"
              aria-label="મેનુ બંધ કરો (Close menu)"
              tabIndex={menuOpen ? 0 : -1}
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="મોબાઇલ નેવિગેશન" className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-1">
              {[...nav, { label: "લેખો અને અપડેટ્સ", labelEn: "Blog", href: "/blog" }].map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <li
                    key={item.href}
                    className={cn("transition-all duration-500", menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0")}
                    style={{ transitionDelay: menuOpen ? `${80 + i * 35}ms` : "0ms" }}
                  >
                    <Link
                      href={item.href}
                      tabIndex={menuOpen ? 0 : -1}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-lg border-l-2 px-4 py-3 text-[1.0625rem]",
                        active
                          ? "border-gold bg-white/[0.06] font-semibold text-gold-light"
                          : "border-transparent text-white/85 hover:bg-white/[0.04] hover:text-white",
                      )}
                    >
                      {item.label}
                      <span className="text-xs text-white/40">{item.labelEn}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="space-y-2 border-t border-white/10 p-5 text-sm">
            <a href={`mailto:${email}`} tabIndex={menuOpen ? 0 : -1} className="flex items-center gap-3 text-white/80 hover:text-gold-light">
              <Mail className="size-4 text-gold" aria-hidden="true" /> {email}
            </a>
            <a href={phoneHref} tabIndex={menuOpen ? 0 : -1} className="flex items-center gap-3 text-white/80 hover:text-gold-light">
              <Phone className="size-4 text-gold" aria-hidden="true" /> {phone}
            </a>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} index={searchIndex} />
    </>
  );
}
