import { motion } from "framer-motion";

const projects = [
  {
    name: "PT Tjakrindo Responsive Catalog",
    desc: "Company catalog built with React & Tailwind",
    github: "https://github.com/Queeneemaa/responsive-catalog.git",
  },
  {
    name: "Traffic Violating Detection Mobile App",
    desc: "Frontend interface for detecting traffic violations",
    github: "https://github.com/Queeneemaa/laporlantas.git",
  },
  {
    name: "e-ticketing website for events",
    desc: "Frontend interface for e-ticketing system",
    github: "https://github.com/Queeneemaa/e-ticketing-website.git",
  },
  {
    name: "Plant care apps",
    desc: "tanamkuy: A mobile app for planning and managing care routines",
    github: "https://github.com/Queeneemaa/tanamkuy.git",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-6 py-24">

      <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border rounded-xl p-6 shadow-sm transition bg-white hover:shadow-[0_12px_30px_rgba(59,130,246,0.25)]"
          >
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600">{p.desc}</p>

            <p className="text-blue-600 mt-4 text-sm">
              View on GitHub →
            </p>
          </motion.a>
        ))}

      </div>
    </div>
  );
};

export default Projects;