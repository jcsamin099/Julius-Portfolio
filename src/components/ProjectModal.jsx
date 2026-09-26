import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  // Close modal when pressing Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100] flex items-center justify-center
        bg-black/70 p-4 backdrop-blur-sm
      "
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="
          relative max-h-[90vh] w-full max-w-5xl
          overflow-y-auto rounded-2xl
          bg-white shadow-2xl
          dark:bg-zinc-900
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="
            absolute right-4 top-4 z-10
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-black/60 text-xl text-white
            backdrop-blur-sm
            transition hover:bg-black/80
          "
        >
          ×
        </button>

        {/* Project Image */}
        <div className="bg-zinc-100 dark:bg-zinc-950">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="
              max-h-[60vh] w-full
              object-contain
            "
          />
        </div>

        {/* Project Information */}
        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
            Project Details
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            {project.title}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-white">
              Technologies
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    bg-cyan-50 px-3 py-1.5
                    text-sm font-medium text-cyan-700
                    dark:bg-cyan-950 dark:text-cyan-300
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-xl bg-zinc-900 px-5 py-3
                    text-sm font-semibold text-white
                    transition hover:bg-zinc-700
                    dark:bg-white dark:text-zinc-900
                    dark:hover:bg-zinc-200
                  "
                >
                  View on GitHub →
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="https://github.com/jcsamin099/CCIS-School-Management-System"
                  className="
                    rounded-xl bg-cyan-500 px-5 py-3
                    text-sm font-semibold text-white
                    transition hover:bg-cyan-600
                  "
                >
                  Live Demo →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;