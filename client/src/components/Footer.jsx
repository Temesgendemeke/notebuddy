import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center p-4 text-white mt-10">
      <p className="text-sm text-gray-700">
        Made by <Link to="mailto:tdemeke36@gmail.com" className="font-bold text-gray-800">Temesgen</Link> with{" "}
        <span className="text-red-500">⚔</span> | &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
