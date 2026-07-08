/* eslint-disable react/prop-types */
import { EDUCATION } from "../constants/data";

export default function About({ id }) {
  return (
    <section id={id} className="mx-auto max-w-[1280px] px-6 py-20 md:px-16">
      <p className="mb-9 font-mono text-[13px] uppercase tracking-[0.08em] text-[#573B78] dark:text-[#C9B6EE]">
        About
      </p>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Background</h2>
          <p className="leading-[1.7] text-[rgba(39,35,67,0.62)] dark:text-[rgba(245,241,232,0.62)]">
            A multimedia graduate turned full-stack web developer, sharpened through intensive training in
            Purwadhika&apos;s job-connector program. I&apos;m eager to keep learning and to ship products that make a
            real difference.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div className="flex flex-col">
            {EDUCATION.map((edu) => (
              <div key={edu.id} data-test="education-item" className="flex gap-3.5 border-b border-black/10 py-3.5 last:border-none dark:border-white/10">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-[#FFD803]" />
                <div>
                  <p className="mb-1 text-[15px] font-semibold">{edu.title}</p>
                  {edu.score && (
                    <p className="mb-1 font-mono text-[13px] text-[#573B78] dark:text-[#C9B6EE]">
                      Final Score: {edu.score}
                    </p>
                  )}
                  <p className="font-mono text-[13px] text-[rgba(39,35,67,0.62)] dark:text-[rgba(245,241,232,0.62)]">
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
