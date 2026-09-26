import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = {
    title,
    description,
    image,
    technologies,
    github,
    demo,
  };

  return (
    <>
      <article
        onClick={() => setIsModalOpen(true)}
        className="
          group cursor-pointer overflow-hidden
          rounded-2xl border border-zinc-200 bg-white shadow-sm
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-xl
          dark:border-zinc-800 dark:bg-zinc-900
        "
      >
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={`${title} project`}
            className="
              aspect-video w-full object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />

          {/* View Project Overlay */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              bg-black/0
              transition-all duration-300
              group-hover:bg-black/40
            "
          >
            <span
              className="
                translate-y-2 rounded-full
                bg-white px-5 py-2.5
                text-sm font-semibold text-zinc-900
                opacity-0 shadow-lg
                transition-all duration-300
                group-hover:translate-y-0 group-hover:opacity-100
              "
            >
              View Project
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  bg-cyan-50 px-3 py-1
                  text-xs font-medium text-cyan-700
                  dark:bg-cyan-950 dark:text-cyan-300
                "
              >
                {technology}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
            View project details →
          </p>
        </div>
      </article>

      {/* Reusable Project Modal */}
      {isModalOpen && (
        <ProjectModal
          project={project}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;