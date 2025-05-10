import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isLoginPage = currentPath === "/login";
  const isHomePage = currentPath === "/";

  const handleLogout = async () => {
    const token = localStorage.getItem("payload_token");
    const user = localStorage.getItem("payload_user");

    if (token && user) {
      localStorage.removeItem("payload_token");
      localStorage.removeItem("payload_user");
    }

    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-full mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="text-xl font-bold cursor-pointer">
          <span className="text-gray-900">Milestone</span>
          <span className="text-green-700"> | Learning</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-green-700">
            About Us
          </a>
          <a href="#what-we-do" className="hover:text-green-700">
            What We Do
          </a>
          <a href="#resources" className="hover:text-green-700">
            Resources
          </a>
          <a href="#contact" className="hover:text-green-700">
            Contact Us
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center text-xs border border-gray-300 rounded-full px-3 py-1.5 text-gray-700 hover:bg-gray-100">
            📞 <span className="ml-1">XXX-XXX-XXXX</span>
          </button>
          {!isLoginPage && (
            <button
              className="bg-green-900 text-white text-sm px-5 py-1.5 rounded-md hover:bg-green-800"
              // onClick={() => navigate(isHomePage ? "/login" : "/")}
              onClick={() => {
                if (isHomePage) {
                  navigate("/login");
                } else {
                  handleLogout();
                }
              }}
            >
              {isHomePage ? "Login" : "Logout"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
