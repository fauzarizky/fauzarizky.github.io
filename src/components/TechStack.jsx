/* eslint-disable react/prop-types */
import { TECH_STACK } from "../constants/data";

const GROUPS = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools & Design" },
];

function TechGroup({ label, items }) {
  return (
    <div data-test="tech-group">
      <h2 className="mb-6 text-2xl font-bold">{label}</h2>
      <div className="flex flex-wrap gap-3">
        {items.map(({ name, Icon, color, mono, svgPath }) => (
          <div
            key={name}
            data-test="tech-item"
            className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm dark:border-white/10"
          >
            {svgPath ? (
              <img src={svgPath} alt={name} className="h-4 w-4" />
            ) : (
              <Icon size={16} className={mono ? "text-black dark:text-white" : undefined} style={mono ? undefined : { color }} />
            )}
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack({ id }) {
  return (
    <section id={id} className="mx-auto max-w-[1280px] px-6 py-20 md:px-16">
      <p className="mb-9 font-mono text-[13px] uppercase tracking-[0.08em] text-[#573B78] dark:text-[#C9B6EE]">
        Tech Stack
      </p>
      <div className="flex flex-col gap-12">
        {GROUPS.map((group) => (
          <TechGroup key={group.key} label={group.label} items={TECH_STACK[group.key]} />
        ))}
      </div>
    </section>
  );
}
