import { socials, profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import {
  ArrowUpRight,
  GitHub,
  LinkedIn,
  Mail,
  Phone,
  Telegram,
  XTwitter,
  DevTo,
} from "@/components/icons";

const channels = [
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedIn },
  { label: "GitHub", href: socials.github, Icon: GitHub },
  { label: "Telegram", href: socials.telegram, Icon: Telegram },
  { label: "X / Twitter", href: socials.twitter, Icon: XTwitter },
  { label: "dev.to", href: socials.devto, Icon: DevTo },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-lime">06</span>
          <span className="h-px flex-1 bg-line" />
          <span className="kicker">Contact</span>
        </div>

        <Reveal>
          <h2 className="mt-10 font-display text-[clamp(2.6rem,8vw,6rem)] font-light leading-[0.95] tracking-tight text-cream">
            Let&apos;s build
            <br />
            something <span className="text-lime">good.</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-sand">
            {profile.available} — based in {profile.location}, working with teams
            worldwide. The fastest way to reach me is email or Telegram.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${socials.email}`}
              className="group flex items-center justify-between rounded-2xl border border-line bg-coal/40 p-6 transition-colors hover:border-lime/40 hover:bg-stone/40"
            >
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-lime" />
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ash">
                    Email
                  </p>
                  <p className="text-cream">{socials.email}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-sand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={`tel:${socials.phone}`}
              className="group flex items-center justify-between rounded-2xl border border-line bg-coal/40 p-6 transition-colors hover:border-lime/40 hover:bg-stone/40"
            >
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-lime" />
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ash">
                    Phone
                  </p>
                  <p className="text-cream">{socials.phoneLabel}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-sand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-4 flex flex-wrap gap-2">
            {channels.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 text-sm text-sand transition-colors hover:border-cream/30 hover:text-cream"
              >
                <Icon className="h-4 w-4 text-sand transition-colors group-hover:text-lime" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
