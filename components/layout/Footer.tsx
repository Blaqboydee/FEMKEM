import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#A3D9A5] mb-4">FEMKEM</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of hydroponic systems and solutions for modern agriculture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#A3D9A5] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#A3D9A5] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-[#A3D9A5] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#A3D9A5] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:+234XXXXXXXXXX" className="hover:text-[#A3D9A5] transition-colors">
                  Phone: +234 XXX XXX XXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@femkem.com" className="hover:text-[#A3D9A5] transition-colors">
                  Email: info@femkem.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/234XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#A3D9A5] transition-colors"
                >
                  WhatsApp: +234 XXX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} FEMKEM Hydroponics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
