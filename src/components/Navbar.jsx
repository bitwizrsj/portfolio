import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setExpanded(!expanded); // ✅ Add this line back

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home and scroll using state
      navigate('/', { state: { scrollToContact: true } });
    }
    setExpanded(false);
  };

    return (
        <header className="py-4 bg-black sm:py-6 sticky top-0 z-50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="shrink-0">
                        <a href="/" title="" className="flex text-white ">
                            BITWIZ RSJ
                        </a>
                    </div>

                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-white"
                            onClick={toggleMenu}
                            aria-expanded={expanded}
                        >
                            <span className={!expanded ? 'block' : 'hidden'} aria-hidden="true">
                                <svg
                                    className="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </span>

                            <span className={expanded ? 'block' : 'hidden'} aria-hidden="true">
                                <svg
                                    className="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
                        <a href="/" className="text-base font-normal text-gray-400 hover:text-white">
                            Home
                        </a>
                        <a href="/projects" className="text-base font-normal text-gray-400 hover:text-white">
                            Portfolio
                        </a>
                        <a href="/blogs" className="text-base font-normal text-gray-400 hover:text-white">
                            Blogs
                        </a>
                        <button onClick={handleContactClick} className="text-gray-400 hover:text-white">Contact</button>
                    </nav>
                </div>

                {expanded && (
                    <nav>
                        <div className="flex flex-col pt-8 pb-4 space-y-6">
                            <a href="/" className="text-base font-normal text-gray-400 hover:text-white">
                                Home
                            </a>
                            <a href="/projects" className="text-base font-normal text-gray-400 hover:text-white">
                                Portfolio
                            </a>
                            <a href="/blogs" className="text-base font-normal text-gray-400 hover:text-white">
                                Blogs
                            </a>
                            <a href="#contact" className="text-base font-normal text-gray-400 hover:text-white">
                                Contact
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
