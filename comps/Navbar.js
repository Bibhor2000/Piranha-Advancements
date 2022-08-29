import Link from 'next/link';

// Top navbar
export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="http://localhost:3000">
            <button className="btn-logo">Home</button>
          </Link>
        </li>

        <li>
          <Link href="/ships">
            <button className="btn-logo">Ships</button>
          </Link>
        </li>

        <li>
          <Link href="/support">
            <button className="btn-logo">Support</button>
          </Link>
        </li>
      
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
      
      </ul>
    </nav>
  );
}