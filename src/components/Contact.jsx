import { useState } from "react";
import portfolioConfig from "../config/portfolio";
import EmailModal from "./EmailModal";

const Contact = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const { email, linkedin, github } = portfolioConfig;

  return (
    <>
      <section
        id="contact"
        className="
          bg-zinc-50 px-6 py-24
          text-zinc-950
          dark:bg-zinc-900/50 dark:text-white
        "
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="mb-12">
            <p
              className="
                text-sm font-semibold
                uppercase tracking-[0.25em]
                text-cyan-500
              "
            >
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let's connect.
            </h2>

            <p
              className="
                mt-4 max-w-2xl
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              I'm open to opportunities where I can contribute, learn, and
              continue growing as a developer. Feel free to reach out.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Information */}
            <div
              className="
                rounded-2xl
                border border-zinc-200
                bg-white
                p-6
                shadow-sm
                dark:border-zinc-800
                dark:bg-zinc-950
                sm:p-8
              "
            >
              <h3 className="text-xl font-semibold">
                Get in touch
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-zinc-600
                  dark:text-zinc-400
                "
              >
                Whether you have a job opportunity, project idea, or simply
                want to connect, I'd be happy to hear from you.
              </p>

              <div className="mt-8 space-y-5">
                {/* Email */}
                {email && (
                  <button
                    type="button"
                    onClick={() => setIsEmailModalOpen(true)}
                    className="
                      group flex w-full
                      items-center gap-4
                      rounded-xl
                      border border-zinc-200
                      p-4
                      text-left
                      transition-all
                      hover:border-cyan-300
                      hover:bg-cyan-50
                      dark:border-zinc-800
                      dark:hover:border-cyan-800
                      dark:hover:bg-cyan-950/30
                    "
                  >
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-cyan-50
                        text-cyan-600
                        dark:bg-cyan-950
                        dark:text-cyan-400
                      "
                    >
                      ✉
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-xs font-medium
                          uppercase tracking-wide
                          text-zinc-500
                        "
                      >
                        Email
                      </p>

                      <p
                        className="
                          mt-1 break-all
                          text-sm font-medium
                          text-zinc-900
                          group-hover:text-cyan-600
                          dark:text-white
                          dark:group-hover:text-cyan-400
                        "
                      >
                        {email}
                      </p>
                    </div>
                  </button>
                )}

                {/* LinkedIn */}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex items-center gap-4
                      rounded-xl
                      border border-zinc-200
                      p-4
                      transition-all
                      hover:border-cyan-300
                      hover:bg-cyan-50
                      dark:border-zinc-800
                      dark:hover:border-cyan-800
                      dark:hover:bg-cyan-950/30
                    "
                  >
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-cyan-50
                        text-sm font-bold
                        text-cyan-600
                        dark:bg-cyan-950
                        dark:text-cyan-400
                      "
                    >
                      in
                    </div>

                    <div>
                      <p
                        className="
                          text-xs font-medium
                          uppercase tracking-wide
                          text-zinc-500
                        "
                      >
                        LinkedIn
                      </p>

                      <p
                        className="
                          mt-1 text-sm font-medium
                          text-zinc-900
                          group-hover:text-cyan-600
                          dark:text-white
                          dark:group-hover:text-cyan-400
                        "
                      >
                        Connect with me
                      </p>
                    </div>
                  </a>
                )}

                {/* GitHub */}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex items-center gap-4
                      rounded-xl
                      border border-zinc-200
                      p-4
                      transition-all
                      hover:border-cyan-300
                      hover:bg-cyan-50
                      dark:border-zinc-800
                      dark:hover:border-cyan-800
                      dark:hover:bg-cyan-950/30
                    "
                  >
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-cyan-50
                        text-xs font-bold
                        text-cyan-700
                        dark:bg-cyan-950
                        dark:text-cyan-300
                      "
                    >
                      GH
                    </div>

                    <div>
                      <p
                        className="
                          text-xs font-medium
                          uppercase tracking-wide
                          text-zinc-500
                        "
                      >
                        GitHub
                      </p>

                      <p
                        className="
                          mt-1 text-sm font-medium
                          text-zinc-900
                          group-hover:text-cyan-600
                          dark:text-white
                          dark:group-hover:text-cyan-400
                        "
                      >
                        View my projects
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Call To Action */}
            <div
              className="
                flex flex-col justify-between
                rounded-2xl
                border border-zinc-200
                bg-white
                p-6
                shadow-sm
                dark:border-zinc-800
                dark:bg-zinc-950
                sm:p-8
              "
            >
              <div>
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-cyan-50
                    px-3 py-1
                    text-xs font-semibold
                    text-cyan-700
                    dark:bg-cyan-950
                    dark:text-cyan-300
                  "
                >
                  Open to opportunities
                </span>

                <h3
                  className="
                    mt-6
                    text-2xl font-bold
                    sm:text-3xl
                  "
                >
                  Let's build something together.
                </h3>

                <p
                  className="
                    mt-5
                    leading-7
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  I'm interested in web development and software development
                  opportunities where I can apply my skills, contribute to a
                  team, and continue developing professionally.
                </p>

                <p
                  className="
                    mt-4
                    leading-7
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  If you're looking for someone who is adaptable, willing to
                  learn, and passionate about development, feel free to reach
                  out.
                </p>
              </div>

              {/* Open Modal */}
              {email && (
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setIsEmailModalOpen(true)}
                    className="
                      inline-flex w-full
                      items-center justify-center
                      rounded-xl
                      bg-cyan-500
                      px-6 py-3
                      font-semibold
                      text-white
                      transition-all
                      hover:bg-cyan-600
                      hover:shadow-lg
                      hover:shadow-cyan-500/20
                      sm:w-auto
                    "
                  >
                    Send Me a Message →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Email Contact Modal */}
      {isEmailModalOpen && (
        <EmailModal
          onClose={() => setIsEmailModalOpen(false)}
        />
      )}
    </>
  );
};

export default Contact;