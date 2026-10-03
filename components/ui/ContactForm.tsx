"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { contactSubjects, validateContact, type ContactErrors, type ContactInput } from "@/lib/validation";
import { buttonClasses } from "./Button";

const empty: ContactInput = { name: "", email: "", subject: "", message: "", website: "" };

const fieldClass = (invalid: boolean) =>
  cn(
    "mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-base text-ink shadow-sm transition-colors placeholder:text-muted/70",
    "focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none",
    invalid ? "border-red-600" : "border-line hover:border-navy/30",
  );

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactInput, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof ContactInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) setErrors(validateContact(next));
  };

  const blur = (field: keyof ContactInput) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validateContact(values));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setStatus("error");
        return;
      }
      setStatus("sent");
      setValues(empty);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="card flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="size-12 text-gold" aria-hidden="true" />
        <p className="mt-4 text-xl font-bold text-navy">આભાર! તમારો સંદેશ મળી ગયો છે.</p>
        <p className="mt-2 text-muted">કાર્યાલયના સમય દરમિયાન શક્ય તેટલો વહેલો પ્રતિભાવ આપવામાં આવશે.</p>
        <button type="button" onClick={() => setStatus("idle")} className={buttonClasses("outline", "mt-6")}>
          બીજો સંદેશ મોકલો
        </button>
      </div>
    );
  }

  const show = (f: keyof ContactInput) => (touched[f] ? errors[f] : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card relative p-6 sm:p-8" aria-describedby="form-note">
      <h3 className="text-xl font-bold text-navy">સંદેશ મોકલો</h3>
      <p id="form-note" className="mt-1 text-sm text-muted">
        <span aria-hidden="true" className="text-red-700">*</span> ચિહ્નિત ક્ષેત્રો જરૂરી છે.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="નામ" error={show("name")}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={update("name")}
            onBlur={blur("name")}
            aria-invalid={!!show("name")}
            aria-describedby={show("name") ? "name-error" : undefined}
            className={fieldClass(!!show("name"))}
          />
        </Field>
        <Field id="email" label="ઇમેઇલ" error={show("email")}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update("email")}
            onBlur={blur("email")}
            aria-invalid={!!show("email")}
            aria-describedby={show("email") ? "email-error" : undefined}
            className={fieldClass(!!show("email"))}
          />
        </Field>
        <Field id="subject" label="વિષય" error={show("subject")} className="sm:col-span-2">
          <select
            id="subject"
            name="subject"
            required
            value={values.subject}
            onChange={update("subject")}
            onBlur={blur("subject")}
            aria-invalid={!!show("subject")}
            aria-describedby={show("subject") ? "subject-error" : undefined}
            className={fieldClass(!!show("subject"))}
          >
            <option value="">— વિષય પસંદ કરો —</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field id="message" label="સંદેશ" error={show("message")} className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={update("message")}
            onBlur={blur("message")}
            aria-invalid={!!show("message")}
            aria-describedby={show("message") ? "message-error" : "message-hint"}
            className={cn(fieldClass(!!show("message")), "resize-y")}
          />
          {!show("message") && (
            <p id="message-hint" className="mt-1 text-xs text-muted">
              ઓછામાં ઓછા 20 અક્ષર · {values.message.trim().length}/3000
            </p>
          )}
        </Field>
        {/* Honeypot: hidden from people and assistive tech */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          સંદેશ મોકલી શકાયો નથી. કૃપા કરી ફરી પ્રયાસ કરો અથવા સીધો ઇમેઇલ કરો.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className={buttonClasses("secondary", "mt-6 w-full sm:w-auto")}>
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> મોકલી રહ્યા છીએ…
          </>
        ) : (
          <>
            સંદેશ મોકલો <Send className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label} <span aria-hidden="true" className="text-red-700">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
