'use client';

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
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
  const containerRef = useRef<HTMLDivElement>(null);

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

  const navItems = [
    { name: 'Homepage', href: '/', active: true },
    { name: 'About Us', href: '/about-us' },
    { name: 'Courses', href: '/courses' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Guidance', href: '/guidance' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-950 text-white py-3 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center">
            {/* Social Media */}
            {/* <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/wexfordeducare"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div> */}

            {/* Contact Info */}
            <div className="flex gap-6 text-sm">
              <Link
                href="tel:+442033759568"
                className="hover:text-primary transition-colors"
              >
                +44 20 3375 9568
              </Link>
              <span className="text-gray-400">|</span>
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
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Left side */}
            <div className="flex items-center gap-2">
              {/* Mobile menu trigger */}
              {isMobile && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                      variant="ghost"
                      size="icon"
                    >
                      <HamburgerIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-48 p-2">
                    <NavigationMenu className="max-w-none">
                      <NavigationMenuList className="flex-col items-start gap-1">
                        {navItems.map((link, index) => (
                          <NavigationMenuItem key={index} className="w-full">
                            <Link
                              href={link.href}
                              className={cn(
                                'flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground no-underline',
                                link.active
                                  ? 'bg-accent text-accent-foreground'
                                  : 'text-foreground/80'
                              )}
                            >
                              {link.name}
                            </Link>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
              )}

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="relative w-48 h-16">
                  <Image
                    src="/Wbg-Wexford Education Long.png"
                    alt="Wexford Educare"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Navigation menu */}
              {!isMobile && (
                <NavigationMenu className="flex ml-8">
                  <NavigationMenuList className="gap-1">
                    {navItems.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <Link
                          href={link.href}
                          className={cn(
                            'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none no-underline',
                            link.active
                              ? 'bg-accent text-accent-foreground'
                              : 'text-foreground/80 hover:text-foreground'
                          )}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Link href="/apply-now">
                <button
                  className="text-sm font-semibold px-6 h-10 rounded-full shadow-sm bg-secondary text-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
