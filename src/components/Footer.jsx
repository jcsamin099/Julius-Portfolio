import portfolioConfig from "../config/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Background", href: "#background" },
    { name: "Contact", href: "#contact" },
  ];

  const { email, linkedin, github } = portfolioConfig;

  // Gmail compose URL
  const gmailComposeUrl = email
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}&su=${encodeURIComponent(
        "Portfolio Inquiry - Julius Ceasar Samin"
      )}`
    : "#";

  return (
    <footer
      className="
        border-t border-zinc-200
        bg-white
        text-zinc-600
        dark:border-zinc-800
        dark:bg-zinc-950
        dark:text-zinc-400
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main Footer */}
        <div
          className="
            flex flex-col gap-10
            md:flex-row md:items-start md:justify-between
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="
                inline-block
                text-2xl font-bold tracking-tight
                text-zinc-900
                transition-colors
                hover:text-cyan-500
                dark:text-white
                dark:hover:text-cyan-400
              "
            >
              Julius Ceasar<span className="text-cyan-500">.</span>
            </a>

            <p className="mt-3 text-sm leading-6">
              Web Developer / Software Developer focused on building
              practical solutions, learning new technologies, and
              continuously improving my skills.
            </p>

            {/* Status */}
            <div className="mt-5 flex items-center gap-2">
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-emerald-500
                "
              />

              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="
                text-sm font-semibold uppercase
                tracking-wider
                text-zinc-900
                dark:text-white
              "
            >
              Navigation
            </h3>

            <nav className="mt-4">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="
                        text-sm
                        transition-colors
                        hover:text-cyan-500
                        dark:hover:text-cyan-400
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="
                text-sm font-semibold uppercase
                tracking-wider
                text-zinc-900
                dark:text-white
              "
            >
              Connect
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {/* GitHub */}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    rounded-lg
                    border border-zinc-200
                    px-4 py-2
                    text-sm font-medium
                    transition-all
                    hover:border-cyan-300
                    hover:bg-cyan-50
                    hover:text-cyan-600
                    dark:border-zinc-800
                    dark:hover:border-cyan-800
                    dark:hover:bg-cyan-950/30
                    dark:hover:text-cyan-400
                  "
                >
                  GitHub
                </a>
              )}

              {/* LinkedIn */}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    rounded-lg
                    border border-zinc-200
                    px-4 py-2
                    text-sm font-medium
                    transition-all
                    hover:border-cyan-300
                    hover:bg-cyan-50
                    hover:text-cyan-600
                    dark:border-zinc-800
                    dark:hover:border-cyan-800
                    dark:hover:bg-cyan-950/30
                    dark:hover:text-cyan-400
                  "
                >
                  LinkedIn
                </a>
              )}

              {/* Email */}
              {email && (
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send me an email"
                  className="
                    rounded-lg
                    border border-zinc-200
                    px-4 py-2
                    text-sm font-medium
                    transition-all
                    hover:border-cyan-300
                    hover:bg-cyan-50
                    hover:text-cyan-600
                    dark:border-zinc-800
                    dark:hover:border-cyan-800
                    dark:hover:bg-cyan-950/30
                    dark:hover:text-cyan-400
                  "
                >
                  Email
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            my-10
            border-t border-zinc-200
            dark:border-zinc-800
          "
        />

        {/* Bottom Footer */}
        <div
          className="
            flex flex-col gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-sm">
            © {currentYear} Julius Ceasar Samin. All rights reserved.
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              transition-colors
              hover:text-cyan-500
              dark:hover:text-cyan-400
            "
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;