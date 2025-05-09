const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-10 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo/Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Milestone | Learning</h3>
          <p className="text-sm text-gray-300">Personalized education that transforms potential into achievement.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-2 text-sm">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#what-we-do" className="hover:underline">
                What We Do
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold mb-2 text-sm">Contact</h4>
          <p className="text-sm text-gray-300 mb-2">📞 000-000-0000</p>
          <p className="text-sm text-gray-300 mb-4">✉️ support@milestone.com</p>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-100">
              🌐
            </a>
            <a href="#" className="hover:text-gray-100">
              🐦
            </a>
            <a href="#" className="hover:text-gray-100">
              📘
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 mt-8 pt-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Milestone Learning. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
