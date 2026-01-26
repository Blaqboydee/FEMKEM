'use client';

import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  navLinks: Array<{ href: string; label: string }>;
  onClose: () => void;
}

export default function MobileNav({ isOpen, navLinks, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#555555] hover:text-[#1E7F43] hover:bg-[#E6F4EA] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
