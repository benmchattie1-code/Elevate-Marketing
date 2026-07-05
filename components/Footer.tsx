import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./SocialIcons";
import { site } from "@/lib/content";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/#about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Social Media Management" },
      { href: "/services", label: "Content Creation" },
      { href: "/services", label: "Branding" },
      { href: "/services", label: "Paid Advertising" },
    ],
  },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-950/[0.06] bg-navy-950 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Strategic marketing, creative content and consistent execution, helping
              businesses build a stronger online presence.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-brand-400/40 hover:text-brand-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-brand-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <span>{site.location}. {site.serviceArea}.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-300">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-white/40">{site.url.replace("https://", "")}</p>
        </div>
      </Container>
    </footer>
  );
}
