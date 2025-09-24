"use client"

import { SunIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

export default function Header() {
  return (
    <header className='border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
      <nav className='container mx-auto flex items-center justify-between px-4 py-4'>
        <Link
          href='/'
          className='text-xl font-bold text-foreground hover:text-primary transition-colors'
        >
          Phong Blog
        </Link>
        <ul className='flex gap-6 text-sm font-medium'>
          <li>
            <Link
              href='/about'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='darkmode-toggle'>
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark")
            }}
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            <SunIcon className='w-5 h-5' />
          </button>
        </div>
      </nav>
    </header>
  )
}
