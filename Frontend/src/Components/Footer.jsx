import { Link } from "react-router-dom";

// --- footer link css ---
const footerLinkCss =
  "hover-cursorCSS text-blue-600 hover:text-blue-500 transition duration-200";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 text-center py-6 border-t-2">
      <div className="container mx-auto">

        <h2 className="text-lg mb-5">
          <span className="font"> QuizifyAI</span>
          {" "}by{" "}
          <Link
            to="https://www.linkedin.com/in/vighnesh-parab-030975348/"
            target="blank"
            className="hover-cursorCSS gradient-text2"
          >
            vighnesh
          </Link>
        </h2>

        <p className="text-sm mb-4">2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
