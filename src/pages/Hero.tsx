import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { portfolio } from "../data/portofolio";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 pt-28 text-center">

      {/* NAME TYPEWRITER */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-bold text-[#143AA2] mb-4"
      >
        <Typewriter
          options={{
            strings: [portfolio.name],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 50,
          }}
        />
      </motion.h1>

      {/* ROLE */}
      <p className="text-2xl text-gray-700 mb-16">
        Software Engineer • Frontend Developer
      </p>

      {/* ABOUT SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* IMAGE */}
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="w-80 h-80 object-cover rounded-2xl shadow-lg mx-auto"
        />

        {/* RIGHT COLUMN (ALL TEXT) */}
        <div className="text-left space-y-8">

          {/* ABOUT */}
          <div>
            <h2 className="text-3xl font-bold text-[#143AA2] mb-4">
              About Me
            </h2>

            <p className="text-gray-600 leading-8">
              Frontend engineer focused on scalable UI systems, reusable components,
              and modern React architecture with strong emphasis on performance and UX consistency.
            </p>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl font-bold text-[#143AA2] mb-2">
              Education
            </h3>

            <p className="text-gray-600 leading-8">
              Software Engineering, Institut Teknologi Sepuluh Nopember (ITS)
            </p>
          </div>

          {/* GPA */}
          <div>
            <h3 className="text-2xl font-bold text-[#143AA2] mb-2">
              GPA
            </h3>

            <p className="text-gray-600 leading-8">
              3.53 / 4.00
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;