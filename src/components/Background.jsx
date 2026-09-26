const Background = () => {
  const backgroundItems = [
    {
      year: "2021 – 2025",
      title: "Bachelor of Science in Web Development and Cloud Database",
      organization: "College of the Immaculate Conception",
      description:
        "Completed a bachelor's degree focused on web development, programming, databases, and modern web technologies. Graduated in 2025 while developing practical skills through academic projects and hands-on development.",
    },
    {
      year: "Present",
      title: "Web & Software Development",
      organization: "Continuous Learning",
      description:
        "Continuously developing my technical skills through personal projects, programming practice, and learning modern technologies for web and software development.",
    },
  ];

  return (
    <section
      id="background"
      className="
        bg-white px-6 py-24
        text-zinc-950
        dark:bg-zinc-950 dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
            Background
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            My development journey.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
            My academic background and continued journey in web and software
            development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="
              absolute left-[11px] top-2 hidden h-[calc(100%-8px)]
              w-px bg-zinc-200
              dark:bg-zinc-800
              sm:block
            "
          />

          <div className="space-y-10">
            {backgroundItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="relative sm:pl-12"
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-0 top-1.5 hidden
                    h-6 w-6 items-center justify-center
                    rounded-full border-4
                    border-white bg-cyan-500
                    dark:border-zinc-950
                    sm:flex
                  "
                />

                {/* Content */}
                <div
                  className="
                    rounded-2xl border border-zinc-200
                    bg-zinc-50 p-6
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                    dark:border-zinc-800
                    dark:bg-zinc-900
                  "
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                        {item.organization}
                      </p>
                    </div>

                    <span
                      className="
                        w-fit shrink-0 rounded-full
                        bg-cyan-50 px-3 py-1
                        text-xs font-semibold text-cyan-700
                        dark:bg-cyan-950 dark:text-cyan-300
                      "
                    >
                      {item.year}
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;