import { useState } from "react";

const AboutSection = ({ user, pageInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    avatar,
    avatarAlt,
    name,
    aboutTagline,
    paragraph1,
    paragraph2,
    paragraph3,
  } = user;
  const { header1 } = pageInfo;

  return (
    <section
      id="about"
      className="relative mx-auto max-w-4xl p-10 bg-gradient-to-br from-[var(--color-tertiary)] via-[var(--color-quaternary)] to-[var(--color-quinary)]
        bg-opacity-90 rounded-2xl shadow-2xl border-2 border-[var(--color-secondary)] flex flex-col items-center justify-center gap-6 mt-16 mb-16 px-6 md:px-12"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-heading text-center bg-gradient-to-r from-[var(--color-senary)] via-[var(--color-septenary)] to-[var(--color-octonary)] text-transparent bg-clip-text relative w-full drop-shadow-lg">
        {header1}
        <span className="absolute -bottom-2 left-1/2 w-20 h-[3px] bg-[var(--color-tertiary)] transform -translate-x-1/2"></span>
      </h2>

      {/* Profile & Summary */}
      <div className={`w-full ${isExpanded ? "flex flex-col items-center" : "grid grid-cols-3 items-center gap-6 justify-center"}`}>
        {/* Profile Image */}
        <div className={`${isExpanded ? "mb-4" : "col-span-1 flex justify-center"}`}>
          <img
            src={avatar}
            alt={avatarAlt}
            className="w-50 h-auto max-h-50 rounded-full shadow-xl border-2 border-[var(--color-tertiary)] object-cover animate-softGlow transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
        </div>

        {/* Short Description */}
        <div className={`${isExpanded ? "w-full text-center" : "col-span-2 text-center md:text-left"}`}>
          <p className="relative font-semibold text-lg text-white text-center px-6 py-2 rounded-lg animate-fadeInUp">
            {aboutTagline}
          </p>
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="mt-4 px-6 py-3 text-sm font-semibold text-[var(--color-quinary)] bg-[var(--color-secondary)] rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[var(--color-primary)] mx-auto block"
            >
              Click to Expand ↓
            </button>
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="w-full space-y-6 text-lg leading-relaxed mt-6 text-center px-4 animate-fadeInUp">
          {[paragraph1, paragraph2, paragraph3].map((para, index) => para && <p key={index}>{para}</p>)}
          <button
            onClick={() => setIsExpanded(false)}
            className="mt-4 px-6 py-3 text-sm font-semibold text-[var(--color-quinary)] bg-[var(--color-secondary)] rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[var(--color-primary)] mx-auto block"
          >
            Click to Collapse ↑
          </button>
        </div>
      )}
    </section>
  );
};

export default AboutSection;