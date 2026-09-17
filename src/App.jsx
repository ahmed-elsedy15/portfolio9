import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Intro from "./sections/Intro.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Education from "./sections/Education.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Intro />
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-t border-line" />
        </div>
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
