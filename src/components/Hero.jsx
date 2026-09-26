import profilePicture from "../assets/ProfilePicture.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        flex
        min-h-screen
        items-center
        bg-white
        px-6
        pb-16
        pt-28
        text-zinc-950

        dark:bg-zinc-950
        dark:text-white
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          items-center
          gap-12

          md:grid-cols-2
        "
      >
        {/* Content */}
        <div>
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-500
            "
          >
            Hello, I'm
          </p>

          <h1
            className="
              text-4xl
              font-bold
              leading-tight
              tracking-tight

              sm:text-5xl
              lg:text-6xl
            "
          >
            Julius Ceasar
            <span className="block text-zinc-500 dark:text-zinc-400">
              Samin
            </span>
          </h1>

          <h2
            className="
              mt-5
              text-xl
              font-semibold
              text-zinc-700

              sm:text-2xl

              dark:text-zinc-300
            "
          >
            Web Developer
            <span className="px-2 text-cyan-500">/</span>
            Software Developer
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-zinc-600

              sm:text-lg

              dark:text-zinc-400
            "
          >
            I enjoy building responsive, user-focused applications and
            continuously improving my skills by learning new technologies
            and solving real-world problems.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="
                rounded-xl
                bg-cyan-500
                px-6
                py-3
                text-center
                font-semibold
                text-white
                transition-all
                hover:bg-cyan-600
                hover:shadow-lg
                hover:shadow-cyan-500/20
              "
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="
                rounded-xl
                border
                border-zinc-300
                px-6
                py-3
                text-center
                font-semibold
                text-zinc-900
                transition-all
                hover:border-zinc-400
                hover:bg-zinc-100

                dark:border-zinc-700
                dark:text-white
                dark:hover:border-zinc-600
                dark:hover:bg-zinc-900
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* Decorative glow */}
            <div
              className="
                absolute
                -inset-6
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
            />

            <img
              src={profilePicture}
              alt="Julius Ceasar Samin"
              className="
                relative
                h-64
                w-64
                rounded-full
                border-4
                border-zinc-200
                object-cover
                shadow-xl

                sm:h-72
                sm:w-72

                lg:h-80
                lg:w-80

                dark:border-zinc-800
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;