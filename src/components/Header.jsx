import { useState } from 'react';
import '../styles/Header.css';

function Header({ onNavigate, onSearch, cartCount }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput);
    onNavigate('home');
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="top-bar">
            <div className="logo-section">
              <h1 className="logo">🛍️ AliHub</h1>
              <p className="tagline">Your Global Marketplace</p>
            </div>
            
            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products, brands, and more..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>

            <div className="header-actions">
              <button
                className="header-btn"
                onClick={() => onNavigate('account')}
              >
                👤 Account
              </button>
              <button
                className="header-btn cart-btn"
                onClick={() => onNavigate('cart')}
              >
                🛒 Cart
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container">
          <ul className="nav-links">
            <li>
              <button onClick={() => onNavigate('home')} className="nav-link">
                Home
              </button>
            </li>
            <li className="dropdown">
              <button className="nav-link">Categories ▼</button>
              <div className="dropdown-menu">
                <a href="#electronics">Electronics</a>
                <a href="#clothing">Clothing & Fashion</a>
                <a href="#home">Home & Garden</a>
                <a href="#beauty">Beauty & Health</a>
                <a href="#sports">Sports & Outdoors</a>
              </div>
            </li>
            <li>
              <button className="nav-link">Deals & Offers</button>
            </li>
            <li>
              <button className="nav-link">Top Sellers</button>
            </li>
            <li>
              <button className="nav-link">Help Center</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;