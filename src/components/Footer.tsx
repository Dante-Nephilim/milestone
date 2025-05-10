const Footer = () => {
  return (
    <footer className="bg-[#023C35] text-white pt-10 pb-6 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Logo and Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Milestone <span className="font-light">| Learning</span>
          </h3>
          <div className="flex space-x-3 mt-2">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="space-y-3">
          <button className="bg-white text-[#023C35] px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-100">
            BOOK A CONSULTATION
          </button>
          <div>
            <a href="#" className="block hover:underline">
              Book a Learning Session
            </a>
            <a href="#" className="block hover:underline">
              FAQ
            </a>
          </div>
        </div>

        {/* Right: Contact */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Contact Us</h4>
          <p className="flex items-center gap-2">
            📞 <span className="text-white/90">XXX XXXX XXXX</span>
          </p>
          <p className="flex items-center gap-2">
            ✉️ <span className="text-white/90">hello@milestonelearning.com</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-white/80 text-xs gap-2">
        <p>© {new Date().getFullYear()} Milestone Learning</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Services
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
