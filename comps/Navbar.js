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
            <button className="btn-logo">Heritage Ships</button>
          </Link>
        </li>

        <li>
          <Link href="/display">
            <button className="btn-logo">FX400 Display</button>
          </Link>
        </li>

        <li>
            <Link href="/login">
              <button className="btn-red">Log in with Google</button>
            </Link>
          </li>
      </ul>
    </nav>
  );
}