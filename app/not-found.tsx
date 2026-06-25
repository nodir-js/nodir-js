import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-5">
      <div className="text-center">
        <p className="kicker">404</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,12vw,8rem)] font-light leading-none text-cream">
          Lost the thread<span className="text-lime">.</span>
        </h1>
        <p className="mt-6 text-sand">
          That page doesn&apos;t exist — but the work does.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          Back home
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  );
}
