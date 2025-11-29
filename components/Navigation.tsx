'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Publications', href: '/publications' },
    { name: 'Repositories', href: '/repositories' },
    { name: 'CV', href: '/cv' }
  ];

  return (
    <div className="mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="relative pb-2">
          {/* Left side - Name that appears on non-About pages */}
          <div className="absolute left-0">
            {pathname !== '/' && (
              <Link 
                href="/"
                className="text-lg text-gray-600 hover:text-[#8651d6] transition-colors"
              >
                <span className="font-bold">Yahya</span> Masri
              </Link>
            )}
          </div>
          
          {/* Right side - All navigation items including About */}
          <div className="flex justify-end space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`text-lg transition-colors hover:text-[#8651d6] ${
                    isActive ? 'text-[#8651d6] font-medium' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
      <div className="border-b border-gray-200 w-full"></div>
    </div>
  );
};

export default Navigation; 