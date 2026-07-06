/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { LuMoon, LuSun, LuMenu, LuX } from "react-icons/lu";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar({ children }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isDark = resolvedTheme === "dark";
  const toggleColorMode = () => setTheme(isDark ? "light" : "dark");

  const handleNavClick = (e, href) => {
    setIsOpen(false);
    e.preventDefault();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] font-sans text-[#272343] transition-colors duration-300 dark:bg-[#211D3A] dark:text-[#F5F1E8]">
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#272343] px-6 py-[22px] dark:bg-[#14111F] md:px-16">
        <a href="#home" className="font-mono text-[22px] font-bold text-[#FFD803] no-underline">
          rzky()
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-sm text-white/85 no-underline transition-opacity hover:opacity-100 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <motion.button
            onClick={toggleColorMode}
            aria-label="Toggle theme"
            whileTap={{ scale: 0.9, rotate: 180 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[#FFD803]"
          >
            {isDark ? <LuMoon size={16} /> : <LuSun size={16} />}
          </motion.button>
        </div>

        <button aria-label="Open menu" className="text-white md:hidden" onClick={() => setIsOpen((v) => !v)}>
          {isOpen ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sticky top-[70px] z-40 overflow-hidden bg-[#272343] px-6 dark:bg-[#14111F] md:hidden"
          >
            <div className="flex flex-col items-end gap-4 pb-6 pt-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono text-sm text-white/85 no-underline transition-opacity hover:opacity-100 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleColorMode}
                aria-label="Toggle theme"
                className="flex items-center gap-2 font-mono text-sm text-[#FFD803]"
              >
                {isDark ? <LuMoon size={16} /> : <LuSun size={16} />} Toggle theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
}
