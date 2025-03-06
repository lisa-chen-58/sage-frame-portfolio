import { useEffect } from "react";

const ModalContactForm = ({ isOpen, onClose, pageInfo }) => {
  const { header3, formKey } = pageInfo;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-tertiary)] to-[var(--color-secondary)] opacity-90 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[var(--color-quaternary)] opacity-40 text-xl font-mono"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatCode ${5 + Math.random() * 5}s infinite ease-in-out`,
              transform: `scale(${0.8 + Math.random() * 0.6}) rotate(${Math.random() * 360}deg)`,
            }}
          >
            {[
              "{}", "()", "<>", "return;", "const", "if()", "// TODO", "===", "!==", "[ ]", "<!>", "+=", "=>",
            ].sort(() => Math.random() - 0.5)[0]}
          </div>
        ))}
      </div>

      {/* Modal Box */}
      <div className="relative bg-[var(--color-quinary)] text-[var(--color-primary)] rounded-xl shadow-2xl border-2 border-[var(--color-secondary)] p-6 w-full max-w-lg transform transition-all scale-95 opacity-0 animate-fadeInUp">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[var(--color-secondary)] hover:text-[var(--color-primary)] text-2xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-3xl font-title text-center text-[var(--color-secondary)] mb-4">
           { header3 }
        </h2>
        <form action={formKey} method="POST" className="space-y-4">
          <label className="block text-sm font-medium">Your Name</label>
          <input type="text" name="name" required className="w-full p-3 rounded-lg border border-[var(--color-secondary)] bg-white shadow-sm transition-all duration-200" />

          <label className="block text-sm font-medium">Your Email</label>
          <input type="email" name="email" required className="w-full p-3 rounded-lg border border-[var(--color-secondary)] bg-white shadow-sm transition-all duration-200" />

          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" required className="w-full p-3 rounded-lg border border-[var(--color-secondary)] bg-white shadow-sm transition-all duration-200"></textarea>

          <button type="submit" className="w-full px-5 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            Send Message 🚀
          </button>
        </form>
      </div>

      {/* Floating Code Symbols Keyframes */}
      <style>
        {`
          @keyframes floatCode {
            0% {
              transform: translateY(100vh) scale(0.8);
              opacity: 0.2;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(-10vh) scale(1);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ModalContactForm;
