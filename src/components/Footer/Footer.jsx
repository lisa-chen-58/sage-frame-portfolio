import React from "react";

const Footer = ({ name, pageInfo }) => {
  const currentYear = new Date().getFullYear();
  const { startYear, footerMessage } = pageInfo;

  return (
    <footer className="p-6 text-center shadow-md bg-transparent">
      <p className="text-md font-bold bg-gradient-to-r from-white to-[var(--color-quaternary)] text-transparent bg-clip-text">
        &copy; {startYear}{currentYear > startYear ? ` - ${currentYear}` : ""} {name} — {footerMessage}
      </p>
    </footer>
  );
};

export default Footer;
