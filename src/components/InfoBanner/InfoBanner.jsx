import { useState } from "react";
import { X } from "lucide-react";

const InfoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-yellow-200 text-gray-900 text-sm md:text-base py-3 px-6 flex items-center justify-between shadow-md">
      <p>
        🚀 This is the first iteration demo (open-source) of my original portfolio.
        My work has improved since this posting! To see my latest portfolio, visit{" "}
        <a
          href="https://www.lisachenworks.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold text-blue-600 hover:text-blue-800"
        >
          https://www.lisachenworks.com/
        </a>.
      </p>
      <button onClick={() => setIsVisible(false)} className="ml-4 text-gray-700 hover:text-gray-900">
        <X size={18} />
      </button>
    </div>
  );
};

export default InfoBanner;
