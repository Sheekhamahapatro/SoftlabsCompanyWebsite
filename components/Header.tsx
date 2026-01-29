import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-3xl border border-black/10 bg-white px-8 py-4 text-black shadow-md">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          SoftLabs Infotech
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link className="text-black/80 transition hover:text-black" href="/services">
            Home
          </Link>
          <Link className="text-black/80 transition hover:text-black" href="/services">
            Services
          </Link>
          <Link className="text-black/80 transition hover:text-black" href="/about">
            About
          </Link>
          <Link className="text-black/80 transition hover:text-black" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
