/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { LIST_PROJECTS } from "../constants/data";

export default function Projects({ id }) {
  return (
    <section id={id} className="mx-auto max-w-[1280px] px-6 pb-24 pt-10 md:px-16">
      <p className="mb-9 font-mono text-[13px] uppercase tracking-[0.08em] text-[#573B78] dark:text-[#C9B6EE]">
        Projects
      </p>
      <div className="flex flex-col">
        {LIST_PROJECTS.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="group flex flex-col items-start gap-6 border-b border-black/10 py-6 no-underline dark:border-white/10 sm:flex-row sm:items-center sm:gap-7"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-[160px] w-full flex-none rounded-lg object-cover sm:h-[100px] sm:w-[160px]"
            />
            <div className="flex-1">
              <h3 className="mb-1.5 text-lg font-bold">{project.title}</h3>
              <p className="max-w-[520px] text-sm leading-relaxed text-[rgba(39,35,67,0.62)] dark:text-[rgba(245,241,232,0.62)]">
                {project.desc}
              </p>
            </div>
            <span className="hidden text-xl text-[#FFD803] transition-transform group-hover:translate-x-2 sm:block">
              →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
