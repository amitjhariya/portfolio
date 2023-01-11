import Link from 'next/link';

function Header() {
  return (
    <header>
        <nav>
            <li> <Link href='/'>Home</Link></li>
            <li> <Link href='about'>About</Link></li>
            <li> <Link href='contact'>Contact</Link></li>
        </nav>
    </header>
  )
}

export default Header