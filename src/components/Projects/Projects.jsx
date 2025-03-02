import { useState } from "react";
import { LiveDemoModal } from "../LiveDemoModal";

const Projects = ({ projects = [], pageInfo }) => {
  const { header2, defaultImage } = pageInfo;
  const completedProjects = projects.filter((project) => project.status === "Completed");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLiveDemoClick = (project) => {
    project.name === "Portfolio Website"
      ? setIsModalOpen(true)
      : window.open(project.liveDemo, "_blank");
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl p-10 mb-12 rounded-xl shadow-xl border-2 border-[var(--color-secondary)]
      bg-gradient-to-br from-[var(--color-tertiary)] via-[var(--color-quaternary)] to-[var(--color-quinary)] bg-opacity-90"
    >
      <h2
          className="text-4xl font-heading text-center bg-gradient-to-r from-[var(--color-senary)] via-[var(--color-septenary)] to-[var(--color-octonary)]
          text-transparent bg-clip-text relative w-full drop-shadow-lg mb-6"
      >
        {header2}
        <span className="absolute -bottom-2 left-1/2 w-20 h-[3px] bg-[var(--color-tertiary)] transform -translate-x-1/2"></span>
      </h2>

      <LiveDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {completedProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-8">
          <p className="text-lg font-semibold text-[var(--color-secondary)] bg-[var(--color-quinary)] px-6 py-3 rounded-lg shadow-md">
            🚧 No completed projects yet! Stay tuned. 🚀
          </p>
          <p className="text-sm italic text-[var(--color-primary)] mt-2">(Check back later for new innovations!)</p>
          <img src={defaultImage} alt="default" className="w-40 h-40 object-contain rounded-lg shadow-md mt-4 mx-auto" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {completedProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg border-2 transition-transform duration-300 hover:scale-105 border-[var(--color-tertiary)] bg-[var(--color-quinary)] min-h-[22rem] flex flex-col"
            >
              <img src={project.image || defaultImage} alt={project.name} className="w-full h-40 object-contain rounded-lg shadow-md" />
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[var(--color-secondary)] mt-4">{project.name}</h3>
                <p className="text-md font-body text-[var(--color-primary)] mt-2">Stack: {project.stack.join(", ")}</p>
                <p className={`text-sm font-mono mt-1 italic ${project.status === "Completed" ? "text-green-600" : "text-[var(--color-secondary)]"}`}>
                  Status: {project.status}
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-white bg-[var(--color-primary)] rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-secondary)]"
                  >
                    🔗 GitHub
                  </a>
                )}
                {(project.name === "Portfolio Website" || project.liveDemo) && (
                  <button
                    onClick={() => handleLiveDemoClick(project)}
                    className="px-4 py-2 text-sm font-semibold text-white bg-[var(--color-primary)] rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-secondary)]"
                  >
                    🌐 Live Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;