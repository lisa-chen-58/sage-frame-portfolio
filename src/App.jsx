import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  AboutSection,
  ContactCard,
  Footer,
  Header,
  ModalContactForm,
  NavBar,
  Projects,
  SEO,
  WavyDivider,
} from "./components";
import devProfile from "./data/data.json";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, pageInfo, projects, name } = devProfile;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#b0c4b1] via-[var(--color-tertiary)] to-[var(--color-primary)] bg-opacity-100 text-[var(--text-color)]">
      <HelmetProvider>
        <SEO pageInfo={pageInfo} />
      </HelmetProvider>

      <NavBar pageInfo={pageInfo} />

      <div className="pt-20">
        <Header user={user} />
      </div>

      <WavyDivider flip={false} />
      <AboutSection user={user} pageInfo={pageInfo} />
      <WavyDivider flip={true} />
      <Projects projects={projects} pageInfo={pageInfo} />
      <WavyDivider flip={false} />

      <ContactCard
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        pageInfo={pageInfo}
      />
      <ModalContactForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageInfo={pageInfo}
      />

      <WavyDivider flip={true} />

      <Footer name={name} pageInfo={pageInfo} />
    </div>
  );
}

export default App;
