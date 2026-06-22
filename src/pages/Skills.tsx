import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen px-6 py-24">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-[#143AA2] text-center mb-14"
      >
        Skills & Expertise
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-[0_12px_30px_rgba(59,130,246,0.25)] transition"
          >

            <h3 className="text-xl font-semibold text-[#143AA2] mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Skills;