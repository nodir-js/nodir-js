import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5 font-mono text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-lime" />
          <span className="text-cream">{profile.name}</span>
        </div>
        <p className="font-mono text-xs text-ash">
          {profile.role} · {profile.location}
        </p>
        <p className="font-mono text-xs text-ash">© 2026</p>
      </div>
    </footer>
  );
}
