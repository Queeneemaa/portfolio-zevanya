import { Link } from "react-router-dom";
import { portfolio } from "../../data/portofolio";

const Footer = () => {
  return (
    <footer className="bg-[#143AA2] text-white mt-24">

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* 1. INTRO */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Let's build something together.
          </h2>

          <p className="text-sm text-blue-100 leading-6">
            Feel free to reach out if you've a question, or just want to connect.
          </p>

          <p className="mt-4 font-semibold">
            {portfolio.email}
          </p>
        </div>

        {/* 2. SOCIAL */}
        <div>
          <h3 className="font-semibold mb-3">Find me on</h3>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li><Link to="https://linkedin.com/in/zevanya-queeneema" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
            <li><Link to="https://github.com/Queeneemaa" target="_blank" rel="noopener noreferrer">Github</Link></li>
            <li><Link to="https://instagram.com/neeemmaaa" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
          </ul>
        </div>

        {/* 3. PERSONA */}
        <div>
          <h3 className="font-semibold mb-3">Personalia</h3>
          <p className="text-sm text-blue-100 mb-2">
            {portfolio.name}
          </p>
          <p className="text-sm text-blue-100">
            Indonesia
          </p>
        </div>

        {/* 4. SITEMAP */}
        <div>
          <h3 className="font-semibold mb-3">Sitemap</h3>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-blue-500 text-center py-6 text-sm text-blue-100">
        © {new Date().getFullYear()} {portfolio.name} - Built with React & TailwindCSS
      </div>

    </footer>
  );
};

export default Footer;