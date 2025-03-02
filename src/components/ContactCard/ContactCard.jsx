import React from 'react';

const ContactCard = ({ isModalOpen, setIsModalOpen, pageInfo }) => {
  const { header3, contactMessage } = pageInfo;

  return (
    <div
      id="contact"
      className="relative mx-auto max-w-3xl bg-[var(--color-quinary)] p-8 rounded-lg shadow-2xl border-2 border-[var(--color-secondary)] animate-floatAndGlow transition-transform duration-300 hover:scale-105"
    >
      <h2 className="text-3xl font-title text-[var(--color-secondary)] text-center">
        {header3} 💬
      </h2>
      <p className="text-md text-[var(--color-primary)] text-center mt-2">
        {contactMessage} 📩
      </p>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full shadow-md transition-transform duration-300 hover:scale-110 animate-pulse"
        >
          Contact Me 📩
        </button>
      </div>
    </div>
  );
};

export default ContactCard;