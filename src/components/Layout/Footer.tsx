const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-6 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">

          {/* Brand Column */}
          <div className="max-w-md">
            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 mb-2 font-heading">
              Aaryavista
            </h3>
            <p className="text-slate-400 leading-relaxed text-xs">
              Elevating Brands, Amplifying Voices. <br />
              Your partner in strategic public relations and reputation management.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-2 uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-wrap gap-4 md:space-y-0 md:gap-6">
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors text-xs">Services</a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-400 hover:text-white transition-colors text-xs">Why Us</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-xs">Contact</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-900 text-center">
          <p className="text-slate-500 text-xs">&copy; {currentYear} Aaryavista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
