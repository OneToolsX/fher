'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
     <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
      <Link  href="/" className={`link ${pathname === '/' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${pathname === '/' ? 'bg-gray-900' : ''}`}>
          主页
      </Link>

      <Link className={`link ${pathname === '/test' ? 'active' : ''} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${pathname === '/test' ? 'bg-gray-900' : ''}`} href="/test">
          测试页
      </Link>
    </nav>
  )
}