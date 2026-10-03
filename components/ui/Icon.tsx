import {
  Award,
  BookMarked,
  BookOpen,
  Briefcase,
  Compass,
  Feather,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  Landmark,
  Languages,
  Layers,
  Library,
  Lightbulb,
  Microscope,
  Notebook,
  PenLine,
  Presentation,
  Quote,
  Scale,
  Scroll,
  Users,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/types";

const icons: Record<IconName, React.ComponentType<LucideProps>> = {
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  feather: Feather,
  users: Users,
  landmark: Landmark,
  scroll: Scroll,
  languages: Languages,
  library: Library,
  "pen-line": PenLine,
  quote: Quote,
  lightbulb: Lightbulb,
  compass: Compass,
  briefcase: Briefcase,
  presentation: Presentation,
  notebook: Notebook,
  scale: Scale,
  layers: Layers,
  award: Award,
  microscope: Microscope,
  "book-marked": BookMarked,
  "file-text": FileText,
  globe: Globe,
  handshake: Handshake,
};

/** Renders a content-defined icon key as a decorative Lucide icon. */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" strokeWidth={1.6} {...props} />;
}
