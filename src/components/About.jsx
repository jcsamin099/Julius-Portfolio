const About = () => {
  return (
    <section
      id="about"
      className="
        bg-zinc-50
        px-6
        py-24
        text-zinc-950

        dark:bg-zinc-900/50
        dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A developer who enjoys learning and building.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* About Text */}
          <div className="space-y-5 text-zinc-600 dark:text-zinc-400">
            <p className="leading-7">
              I'm Julius Ceasar Samin, an aspiring Web Developer and Software
              Developer with a strong interest in building practical and
              user-friendly applications.
            </p>

            <p className="leading-7">
              I have been developing my skills through hands-on projects,
              programming practice, and continuous learning. My experience
              includes working with modern frontend technologies as well as
              Java fundamentals.
            </p>

            <p className="leading-7">
              I'm particularly interested in creating responsive interfaces,
              solving problems through code, and learning technologies that
              allow me to build better applications.
            </p>

            <p className="leading-7">
              As I continue growing as a developer, I'm looking for
              opportunities where I can contribute, learn from experienced
              developers, and turn ideas into working software.
            </p>
          </div>

          {/* Quick Info */}
          <div
            className="
              rounded-2xl
              border
              border-zinc-200
              bg-white
              p-6
              shadow-sm

              dark:border-zinc-800
              dark:bg-zinc-950
            "
          >
            <h3 className="text-lg font-semibold">
              What I bring
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white">
                  Adaptability
                </h4>
                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Comfortable learning new technologies and adapting to
                  different development environments.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white">
                  Problem Solving
                </h4>
                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Enjoy breaking problems into smaller, manageable steps and
                  finding practical solutions.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-zinc-900 dark:text-white">
                  Continuous Learning
                </h4>
                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Continuously practicing and improving my programming and
                  development skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;