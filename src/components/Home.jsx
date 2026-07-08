/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import profilePic from "../images/profile-pic.png";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/fauzarizky/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://github.com/fauzarizky", label: "GitHub", Icon: FaGithub },
  { href: "https://behance.net/fauzarizky", label: "Behance", Icon: FaBehance },
];

export default function Home({ id }) {
  return (
    <section
      id={id}
      className="mx-auto flex max-w-[1280px] flex-col-reverse items-center justify-between gap-12 px-6 py-20 md:flex-row md:px-16 md:py-28"
    >
      <div className="max-w-[640px]">
        <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.08em] text-[#573B78] dark:text-[#C9B6EE]">
          Portfolio — 2026
        </p>
        <h1 className="mb-6 text-[32px] font-extrabold leading-[1.15] sm:text-[40px] md:text-[48px]">
          I&apos;m Fauza, a{" "}
          <span className="font-mono font-bold text-[#FFD803]">
            <Typewriter
              options={{
                strings: ["Frontend Web", "Backend Web", "Fullstack Web"],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </span>{" "}
          Developer.
        </h1>
        <p className="mb-8 max-w-[520px] text-[17px] leading-[1.6] text-[rgba(39,35,67,0.62)] dark:text-[rgba(245,241,232,0.62)]">
          I build fast, quality products using AI-accelerated development — with a focus on clean code and real user needs.
        </p>
        <div className="flex flex-wrap gap-5">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              data-test={`home-social-${label.toLowerCase()}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-b border-[#573B78] pb-0.5 font-mono text-sm no-underline transition-opacity hover:opacity-70"
            >
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex h-[220px] w-[220px] flex-none items-center justify-center overflow-hidden rounded-full bg-[#FFD803] sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px]"
      >
        <img data-test="profile-pic" src={profilePic} alt="Fauza" className="h-full w-full object-cover" />
      </motion.div>
    </section>
  );
}
