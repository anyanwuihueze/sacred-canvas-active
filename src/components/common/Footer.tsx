import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t py-6 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cletus Zadoc. All rights reserved.
        </p>
        <nav className="flex gap-6">
          <Link to="/" className="text-sm hover:underline">
            Home
          </Link>
          <Link to="/gallery" className="text-sm hover:underline">
            Gallery
          </Link>
          <Link to="/blog" className="text-sm hover:underline">
            Blog
          </Link>
        </nav>
      </div>
    </footer>
  );
}