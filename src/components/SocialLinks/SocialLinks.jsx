import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const SocialLinks = ({ linkedin, github, className = "" }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {/* LinkedIn */}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[var(--color-primary)]
          transition-transform duration-200 hover:scale-110 hover:text-[var(--color-secondary)]"
        >
          <FaLinkedin className="w-6 h-6" /> {/* Icon */}
          <span className="hidden md:inline">LinkedIn</span> {/* Text (Hidden on Mobile) */}
        </a>
      )}

      {/* GitHub */}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[var(--color-primary)]
          transition-transform duration-200 hover:scale-110 hover:text-[var(--color-secondary)]"
        >
          <FaGithub className="w-6 h-6" /> {/* Icon */}
          <span className="hidden md:inline">GitHub</span> {/* Text (Hidden on Mobile) */}
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
