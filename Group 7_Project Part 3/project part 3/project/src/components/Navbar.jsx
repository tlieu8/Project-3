import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Food App
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md ${
                location.pathname === '/' ? 'bg-gray-900' : 'hover:bg-gray-700'
              }`}
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className={`px-3 py-2 rounded-md ${
                    location.pathname === '/profile' ? 'bg-gray-900' : 'hover:bg-gray-700'
                  }`}
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md hover:bg-gray-700"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className={`px-3 py-2 rounded-md ${
                    location.pathname === '/signin' ? 'bg-gray-900' : 'hover:bg-gray-700'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className={`px-3 py-2 rounded-md ${
                    location.pathname === '/signup' ? 'bg-gray-900' : 'hover:bg-gray-700'
                  }`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;