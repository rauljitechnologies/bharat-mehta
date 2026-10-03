export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — must stay empty */
  website?: string;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const contactSubjects = [
  "Ph.D. / સંશોધન માર્ગદર્શન",
  "અધ્યાપન / અભ્યાસક્રમ",
  "વ્યાખ્યાન કે પરિસંવાદ આમંત્રણ",
  "પ્રકાશન સંબંધી",
  "અન્ય",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the browser (instant feedback) and the API route (authoritative). */
export function validateContact(input: Partial<ContactInput>): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (name.length < 2) errors.name = "કૃપા કરી તમારું પૂરું નામ લખો.";
  else if (name.length > 100) errors.name = "નામ 100 અક્ષરથી ઓછું રાખો.";

  if (!email) errors.email = "ઇમેઇલ સરનામું જરૂરી છે.";
  else if (!EMAIL_RE.test(email)) errors.email = "માન્ય ઇમેઇલ સરનામું લખો (ઉદા. name@example.com).";

  if (!input.subject || !contactSubjects.includes(input.subject)) errors.subject = "કૃપા કરી વિષય પસંદ કરો.";

  if (message.length < 20) errors.message = "સંદેશ ઓછામાં ઓછા 20 અક્ષરનો હોવો જોઈએ.";
  else if (message.length > 3000) errors.message = "સંદેશ 3000 અક્ષરથી ઓછો રાખો.";

  return errors;
}
