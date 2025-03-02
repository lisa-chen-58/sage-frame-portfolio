import React from "react";

const Header = ({ user }) => {
  const { profilePic, profilePicAlt, logo, name, title, titleTagline, languages } = user;

  return (
    <header className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-12 py-12 min-h-[60vh] max-w-5xl mx-auto gap-6">
      <div className="max-w-lg flex flex-col items-center md:items-start space-y-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-3 transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg">
          <img
            src={logo}
            alt="Icon"
            className="w-12 h-auto rounded-full shadow-sm border border-[var(--color-tertiary)] animate-softGlow object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-heading text-[var(--color-secondary)] drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] transition-transform duration-200 hover:scale-110 hover:text-[var(--color-primary)]">
            {name}
          </h1>
        </div>

        {/* Job Title */}
        <h2 className="text-2xl md:text-3xl font-title text-[var(--color-primary)] drop-shadow-md transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg">
          {title}
        </h2>

        {/* Languages */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
          {languages.map((lang, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full shadow-md transition-transform duration-200 hover:scale-125 hover:bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] hover:shadow-lg"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-3 text-2xl md:text-4xl italic font-decorative text-[var(--color-primary)] drop-shadow-md transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg">
          {titleTagline}
        </p>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center md:justify-end">
        <img
          src={profilePic}
          alt={profilePicAlt}
          className="w-32 md:w-44 h-auto rounded-full shadow-xl border-4 border-[var(--color-quaternary)] bg-[var(--color-primary)] p-1 ring-4 ring-[var(--color-quaternary)] animate-softGlow transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        />
      </div>
    </header>
  );
};

export default Header;
