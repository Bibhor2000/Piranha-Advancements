import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext) //from the context.js

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
              <button className="btn-red">Log in</button>
            </Link>
          </li>
      </ul>
    </nav>
  );
}