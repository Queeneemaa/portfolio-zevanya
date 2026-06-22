import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const GlobalContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 right-6 bg-white shadow-lg rounded-2xl p-4 flex gap-4 items-center border"
    >
      <a href="mailto:neeemmaaa@gmail.com">
        <FaEnvelope className="text-blue-700 text-xl" />
      </a>

      <a href="https://github.com/Queeneemaa" target="_blank">
        <FaGithub className="text-gray-800 text-xl" />
      </a>

      <a href="https://linkedin.com/in/zevanya-queeneema" target="_blank">
        <FaLinkedin className="text-blue-600 text-xl" />
      </a>

      <a href="https://instagram.com/neeemmaaa" target="_blank">
        <FaInstagram className="text-pink-500 text-xl" />
      </a>
    </motion.div>
  );
};

export default GlobalContact;