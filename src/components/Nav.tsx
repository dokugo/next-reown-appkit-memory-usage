'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navStyle = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
  borderBottom: '1px solid black',
}

const linkStyle = {
  border: '1px solid black',
  padding: '1rem',
}

const routes = [
  { href: '/', label: 'Index' },
  ...Array.from({ length: 15 }, (_, i) => ({ href: `/routes/${i}`, label: `${i}` })),
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav style={navStyle}>
      {routes.map(({ href, label }) => {
        const background = pathname === href ? 'palegreen' : ''

        return (
          <Link key={href} href={href} style={{ ...linkStyle, background }}>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
