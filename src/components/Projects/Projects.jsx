import React, { useState } from "react";
import { LiveDemoModal } from "../LiveDemoModal";

const Projects = ({ projects = [], pageInfo }) => {
  const { header2, defaultImage } = pageInfo;
  const completedProjects = projects.filter((project) => project.status === "Completed");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const handleLiveDemoClick = (project) => {
    if (project.name === "Portfolio Website") {
      setIsModalOpen(true);
    } else {
      window.open(project.liveDemo, "_blank");
    }
  };

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl p-10 mb-12 rounded-xl shadow-xl border-2 border-[var(--color-secondary)]
      bg-gradient-to-br from-[var(--color-tertiary)] via-[var(--color-quaternary)] to-[var(--color-quinary)] bg-opacity-90"
    >
      {/* ✅ Always Show Title */}
      <h2
        className="text-4xl font-heading text-center bg-gradient-to-r from-[var(--color-senary)] via-[var(--color-septenary)] to-[var(--color-octonary)] text-transparent bg-clip-text relative w-full drop-shadow-lg mb-6"
      >
        {header2}
        <span className="absolute -bottom-2 left-1/2 w-20 h-[3px] bg-[var(--color-tertiary)] transform -translate-x-1/2"></span>
      </h2>

      {/* ✅ Live Demo Modal */}
      <LiveDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ✅ If No Completed Projects, Show Message */}
      {completedProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-8">
          <p className="text-lg font-semibold text-[var(--color-secondary)] bg-[var(--color-quinary)] px-6 py-3 rounded-lg shadow-md">
            🚧 No completed projects yet! Stay tuned. 🚀
          </p>
          <p className="text-sm italic text-[var(--color-primary)] mt-2">
            (Check back later for new innovations!)
          </p>
          <img src={defaultImage} alt="default image" className="w-40 h-40 object-contain rounded-lg shadow-md mt-4" />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {completedProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg border-2 transition-transform duration-300 hover:scale-105
              border-[var(--color-tertiary)] bg-[var(--color-quinary)] min-h-[24rem] max-w-[20rem] w-full flex flex-col items-center"
            >
              {/* ✅ Image (Uses Default if None Provided) */}
              <img
                src={project.image || defaultImage}
                alt={project.name}
                className="w-full h-40 object-contain rounded-lg shadow-md mb-4"
              />

              {/* ✅ Project Details */}
              <h3 className="text-2xl font-bold text-[var(--color-secondary)]">{project.name}</h3>
              <p className="text-md text-center font-body text-[var(--color-primary)] mt-2">
                Stack: {project.stack.join(", ")}
              </p>
              <p className={`text-sm font-mono mt-1 italic ${project.status === "Completed" ? "text-[var(--color-senary)]" : "text-[var(--color-secondary)]"}`}>
                Status: {project.status}
              </p>

              {/* ✅ Expandable Description */}
              {expandedProject === index && (
                <p className="mt-2 text-[var(--color-primary)] text-sm bg-[var(--color-quaternary)] bg-opacity-50 p-3 rounded-lg shadow-md transition-all duration-300">
                  {project.description}
                </p>
              )}

              {/* 🛠️ Buttons Row */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-[var(--text-color)] bg-[var(--color-tertiary)]
                    rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-secondary)]"
                  >
                    🔗 GitHub
                  </a>
                )}

                {(project.name === "Portfolio Website" || project.liveDemo) && (
                  <button
                    onClick={() => handleLiveDemoClick(project)}
                    className="px-4 py-2 text-sm font-semibold text-[var(--text-color)] bg-[var(--color-tertiary)]
                    rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-secondary)]"
                  >
                    🌐 Live Demo
                  </button>
                )}
              </div>
                {/* ⬇️ Expand Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 px-4 py-2 text-sm font-semibold text-[var(--text-color)] bg-[var(--color-tertiary)]
                  rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-secondary)]
                  w-auto self-center whitespace-nowrap"
                >
                  {expandedProject === index ? "🔼 Hide" : "ℹ️ More"}
                </button>

            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
