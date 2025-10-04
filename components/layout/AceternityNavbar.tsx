'use client';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Facebook, Instagram, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { coursesData } from '@/data/courses-data';
import { AnimatedButton } from '@/components/ui/animated-button';

import { cn } from '@/lib/utils';

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

export function AceternityNavbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setIsMobile(width < 1024);
      }
    };

    checkWidth();

    const resizeObserver = new ResizeObserver(checkWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  // Get category display name
  const getCategoryName = (category: string) => {
    const categoryMap: Record<string, string> = {
      'bachelor-courses': 'Bachelor Courses',
      'master-courses': 'Master Courses',
      'top-up-courses': 'Top-Up Courses',
      'hnd-courses': 'HND Courses',
      'certhe': 'CertHE',
      'all': 'All Courses'
    };
    return categoryMap[category] || category;
  };

  const filteredCourses = searchQuery.trim() === ''
    ? []
    : coursesData.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        getCategoryName(course.category).toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 10); // Limit to 10 results

  const navItems = [
    { name: 'Homepage', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Courses', href: '/courses' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Guidance', href: '/guidance' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-950 text-white py-3 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Social Media */}
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61581656609879"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/wexford_educare?igsh=d3BsYzFvazNnNTdn&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex gap-3 md:gap-6 text-xs md:text-sm">
              <Link
                href="tel:+442033759568"
                className="hover:text-primary transition-colors hidden sm:inline"
              >
                +44 20 3375 9568
              </Link>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <Link
                href="mailto:info@wexfordeducare.com"
                className="hover:text-primary transition-colors"
              >
                info@wexfordeducare.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        ref={containerRef}
        className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-300"
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between gap-2 sm:gap-4">
            {/* Left side - Logo */}
            <div className="flex items-center gap-2">
              {/* Mobile menu trigger */}
              {isMobile && (
                <Button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="group h-10 w-10 hover:bg-accent hover:text-accent-foreground"
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                >
                  <HamburgerIcon className="w-6 h-6" />
                </Button>
              )}

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="relative w-36 sm:w-44 md:w-52 h-14 sm:h-16 md:h-18">
                  <Image
                    src={isScrolled ? "/wexford-logo-dark.png" : "/WObg-Wexford Education Long.png"}
                    alt="Wexford Educare"
                    fill
                    className="object-contain transition-opacity duration-300"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Center - Navigation menu */}
            {!isMobile && (
              <NavigationMenu className="absolute left-1/2 -translate-x-1/2">
                <NavigationMenuList className="gap-1">
                  {navItems.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <Link
                        href={link.href}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-bold transition-colors focus:outline-none no-underline relative text-foreground/80"
                      >
                        {link.name}
                        {isActive(link.href) && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                        )}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3 relative">
              <div ref={searchRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent hover:text-accent-foreground hidden sm:flex"
                  aria-label="Search"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="w-5 h-5" />
                </Button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
                    <div className="p-4 border-b border-gray-200">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search courses..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {searchQuery.trim() === '' ? (
                        <div className="p-8 text-center text-gray-500 text-sm">
                          Start typing to search for courses...
                        </div>
                      ) : filteredCourses.length > 0 ? (
                        <div className="py-2">
                          {filteredCourses.map((course) => (
                            <Link
                              key={course.id}
                              href={`/courses/${course.slug}`}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery('');
                              }}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                            >
                              <div className="font-semibold text-secondary text-sm line-clamp-2">
                                {course.title}
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                <span>{getCategoryName(course.category)}</span>
                                <span>•</span>
                                <span>{course.duration}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-8 text-center">
                          <div className="text-gray-500 text-sm mb-2">No courses found</div>
                          <Link
                            href="/courses"
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="text-primary text-sm hover:underline"
                          >
                            View all courses
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/apply-now">
                <AnimatedButton
                  bgColor="bg-secondary"
                  textColor="text-primary"
                  hoverBgColor="bg-primary"
                  hoverTextColor="text-white"
                  hoverBorderColor="border-secondary"
                  className="text-xs sm:text-sm px-4 sm:px-6 h-9 sm:h-10 rounded-full whitespace-nowrap"
                >
                  Apply Now
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {isMobile && (
        <>
          {/* Backdrop */}
          <div
            className={cn(
              "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={cn(
              "fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="relative w-32 h-12">
                <Image
                  src="/wexford-logo-dark.png"
                  alt="Wexford Educare"
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                aria-label="Close menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {navItems.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'flex w-full items-center rounded-lg px-4 py-3 text-base font-semibold transition-colors hover:bg-gray-100 no-underline',
                        isActive(link.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700'
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t bg-gray-50">
              <Link
                href="/apply-now"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <AnimatedButton
                  bgColor="bg-secondary"
                  textColor="text-primary"
                  hoverBgColor="bg-primary"
                  hoverTextColor="text-white"
                  hoverBorderColor="border-secondary"
                  className="w-full rounded-full"
                >
                  Apply Now
                </AnimatedButton>
              </Link>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="https://www.facebook.com/share/1CpqGRxZ8Q/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/wexford_educare?igsh=d3BsYzFvazNnNTdn&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-4 text-center text-xs text-gray-600 space-y-1">
                <Link
                  href="tel:+442033759568"
                  className="block hover:text-primary transition-colors"
                >
                  +44 20 3375 9568
                </Link>
                <Link
                  href="mailto:info@wexfordeducare.com"
                  className="block hover:text-primary transition-colors"
                >
                  info@wexfordeducare.com
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
