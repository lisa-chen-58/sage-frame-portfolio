import React from "react";
import { SocialLinks } from "../SocialLinks";

const Header = ({ user, pageInfo }) => {
  const { logo, name, languages, profilePic, profilePicAlt, experience } = user;
  const { LinkedIn, GitHub, pageUrl, title, titleTagline1, titleTagline2 } = pageInfo;
  console.log(pageInfo);
  return (
    <header className="mx-auto max-w-4xl px-6 md:px-6 py-10 md:py-12 transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg">

      <div className="bg-gradient-to-br from-[var(--color-quaternary)] via-[var(--color-tertiary)] to-[var(--color-secondary)]
        bg-opacity-95 p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-[var(--color-secondary)]
        flex flex-col md:flex-row items-center justify-between gap-6 mx-4 md:mx-8 lg:mx-16">

        {/* 📌 Left Content: Name, Job Title, Company, Links */}
        <div className="max-w-lg flex flex-col items-center md:items-start space-y-3">
          {/* 🔹 Name + (Optional) Logo */}
          <div className="flex items-center gap-3 transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg">

            <h1 className="text-4xl md:text-5xl text-center font-heading text-[var(--color-unique-text)]
              drop-shadow-[0_0_10px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:scale-110 hover:text-[var(--color-unique-text)]">
              {name}
            </h1>
          </div>

          {/* 💼 Job Title + Current Company */}
          <h2 className="text-2xl md:text-3xl font-title text-[var(--color-primary)] drop-shadow-md transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg">
            {title}
          </h2>

          {experience.currentCompany && (
            <a
              href={LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-[var(--color-primary)] px-4 py-2 bg-[var(--color-quinary)] bg-opacity-80 rounded-lg
                shadow-[0px_0px_20px_rgba(255,255,255,0.8)] text-center transition-transform duration-200 hover:scale-110 hover:drop-shadow-md
                hover:bg-[var(--color-tertiary)] hover:text-white"
            >
              {experience.currentCompany.toLowerCase() === "unemployed" ? (
                <>🔎 Open to Opportunities</>
              ) : (
                <>🛠️ {experience.currentCompany}</>
              )}
            </a>
          )}

          {/* 🌐 Social Links */}
          <SocialLinks linkedin={LinkedIn} github={GitHub} className="justify-center md:justify-start" />

          {/* 🔹 Languages */}
          {languages.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
              {languages.map((lang, index) => (
                <span key={index} className="px-3 py-1 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full shadow-md transition-transform duration-200 hover:scale-125 hover:bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] hover:shadow-lg">
                  {lang}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 🏆 Profile Photo + Taglines (Now in a separate card-like area) */}
        <div className="flex flex-col items-center space-y-3 bg-gradient-to-br from-[var(--color-tertiary)] via-[var(--color-secondary)] to-[var(--color-quaternary)]
          bg-opacity-90 p-6 rounded-xl shadow-lg border-2 border-[var(--color-secondary)] transition-transform duration-300 hover:scale-110 hover:shadow-lg">
          <img
            src={profilePic}
            alt={profilePicAlt}
            className="w-32 md:w-44 h-auto rounded-full shadow-xl border-4 border-[var(--color-quinary)]
            bg-[var(--color-primary)] p-1 ring-4 ring-[var(--color-quinary)] animate-softGlow
            transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            loading="lazy"
          />

          {/* 🚀 Taglines (Now in a more structured place) */}
          <div className="text-center max-w-sm">
            <p className="text-xl md:text-2xl italic font-title text-[var(--text-color)] drop-shadow-md transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg">
              {titleTagline1}
            </p>
            <p className="text-lg md:text-xl italic font-title text-[var(--text-color)] drop-shadow-md transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg md:ml-2">
              {titleTagline2}
            </p>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Header;
