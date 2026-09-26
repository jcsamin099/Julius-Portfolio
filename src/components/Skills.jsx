import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        bg-white
        px-6
        py-24
        text-zinc-950

        dark:bg-zinc-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies and tools I work with.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
            A growing collection of technologies I've learned through
            projects, practice, and hands-on development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="
                rounded-2xl
                border
                border-zinc-200
                bg-zinc-50
                p-6
                transition-all
                hover:-translate-y-1
                hover:shadow-lg

                dark:border-zinc-800
                dark:bg-zinc-900
              "
            >
              <h3 className="text-lg font-semibold">
                {skillGroup.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-lg
                      border
                      border-zinc-200
                      bg-white
                      px-3
                      py-2
                      text-sm
                      text-zinc-700

                      dark:border-zinc-700
                      dark:bg-zinc-800
                      dark:text-zinc-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;