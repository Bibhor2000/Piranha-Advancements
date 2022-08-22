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
          <Link href="/products">
            <button className="btn-logo">Products</button>
          </Link>
        </li>

        <li>
          <Link href="/">
            <button className="btn-logo">My Cart</button>
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