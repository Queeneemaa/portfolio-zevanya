import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-[#143AA2] text-white z-50 shadow">
      <nav className="max-w-6xl mx-auto flex justify-between px-6 py-4">
        <h1 className="font-bold">ZQ</h1>

        <div className="flex gap-6 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;