import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-purple-400">
      {/* Background */}
      <div className="fixed top-0 left-0 -z-10 h-[200%] w-full bg-[#0a0a1a] overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent">
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8">
        <section id="top">
          <Navbar />
        </section>
        <section id="hero">
          <Hero />
        </section>
        <section id="about_me">
          <About />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="work_experience">
          <Experience />
        </section>
        <section id="feature_projects">
          <Projects />
        </section>
        <section id="innovate_with_me">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;