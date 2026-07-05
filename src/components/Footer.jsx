const SOCIALS = [
  { href: "https://www.linkedin.com/in/fauzarizky/", label: "LinkedIn" },
  { href: "https://github.com/fauzarizky", label: "GitHub" },
  { href: "https://behance.net/fauzarizky", label: "Behance" },
];

export default function Footer() {
  return (
    <footer className="bg-[#272343] px-6 py-16 text-center dark:bg-[#14111F] md:px-16 md:py-20">
      <h2 className="mb-7 text-2xl font-extrabold text-white md:text-[32px]">Let&apos;s build something.</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {SOCIALS.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-[#FFD803] pb-0.5 font-mono text-sm text-[#FFD803] no-underline transition-opacity hover:opacity-70"
          >
            {label}
          </a>
        ))}
      </div>
      <p className="mt-10 font-mono text-xs text-white/40">© 2026 Fauza Rizky</p>
    </footer>
  );
}
