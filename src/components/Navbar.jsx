import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-zinc-200/80
        bg-white/80
        backdrop-blur-lg

        dark:border-zinc-800/80
        dark:bg-zinc-950/80
      "
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="
            text-xl
            font-bold
            tracking-tight
            text-zinc-900

            dark:text-white
          "
        >
          Julius Ceasar<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-sm
                font-medium
                text-zinc-600
                transition-colors
                hover:text-cyan-500

                dark:text-zinc-400
                dark:hover:text-cyan-400
              "
            >
              {link.name}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-lg
              border
              border-zinc-200
              p-2
              text-zinc-700

              dark:border-zinc-700
              dark:text-zinc-300
            "
            aria-label="Toggle navigation"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            border-t
            border-zinc-200
            bg-white

            dark:border-zinc-800
            dark:bg-zinc-950

            md:hidden
          "
        >
          <div className="mx-auto max-w-6xl px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  block
                  border-b
                  border-zinc-100
                  py-4
                  text-sm
                  font-medium
                  text-zinc-700
                  transition-colors
                  hover:text-cyan-500

                  dark:border-zinc-800
                  dark:text-zinc-300
                  dark:hover:text-cyan-400
                "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;