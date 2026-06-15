import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/home.css';

// Sample product data
const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 45.99,
    originalPrice: 89.99,
    rating: 4.5,
    reviews: 256,
    image: '🎧',
    category: 'electronics',
    inStock: true,
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.7,
    reviews: 512,
    image: '⌚',
    category: 'electronics',
    inStock: true,
    description: 'Advanced fitness tracking and health monitoring'
  },
  {
    id: 3,
    name: 'Premium Cotton T-Shirt',
    price: 24.99,
    originalPrice: 49.99,
    rating: 4.3,
    reviews: 189,
    image: '👕',
    category: 'clothing',
    inStock: true,
    description: '100% organic cotton, eco-friendly material'
  },
  {
    id: 4,
    name: 'Running Shoes',
    price: 89.99,
    originalPrice: 159.99,
    rating: 4.6,
    reviews: 423,
    image: '👟',
    category: 'clothing',
    inStock: true,
    description: 'Comfortable and durable running shoes with gel support'
  },
  {
    id: 5,
    name: 'LED Desk Lamp',
    price: 34.99,
    originalPrice: 69.99,
    rating: 4.4,
    reviews: 145,
    image: '💡',
    category: 'home',
    inStock: true,
    description: 'USB rechargeable desk lamp with adjustable brightness'
  },
  {
    id: 6,
    name: 'Coffee Maker',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 267,
    image: '☕',
    category: 'home',
    inStock: true,
    description: 'Programmable coffee maker with thermal carafe'
  },
  {
    id: 7,
    name: 'Face Moisturizer',
    price: 19.99,
    originalPrice: 39.99,
    rating: 4.2,
    reviews: 98,
    image: '✨',
    category: 'beauty',
    inStock: true,
    description: 'Hydrating face cream with vitamin E and hyaluronic acid'
  },
  {
    id: 8,
    name: 'Yoga Mat',
    price: 29.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: 334,
    image: '🧘',
    category: 'sports',
    inStock: true,
    description: 'Premium non-slip yoga mat with carrying strap'
  },
  {
    id: 9,
    name: 'Laptop Stand',
    price: 39.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviews: 212,
    image: '💻',
    category: 'electronics',
    inStock: true,
    description: 'Adjustable aluminum laptop stand for better posture'
  },
  {
    id: 10,
    name: 'Winter Jacket',
    price: 119.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 521,
    image: '🧥',
    category: 'clothing',
    inStock: true,
    description: 'Waterproof and windproof winter jacket with insulation'
  },
  {
    id: 11,
    name: 'Kitchen Knife Set',
    price: 49.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 289,
    image: '🔪',
    category: 'home',
    inStock: true,
    description: 'Professional 6-piece stainless steel knife set'
  },
  {
    id: 12,
    name: 'Protein Powder',
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.3,
    reviews: 156,
    image: '🥤',
    category: 'beauty',
    inStock: true,
    description: 'Whey protein powder with vanilla flavor'
  }
];

function HomePage({ onViewProduct, searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = useMemo(() => {
    let results = PRODUCTS;

    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      results = results.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        results.reverse();
        break;
      default:
        // popular (default order)
    }

    return results;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h2>Welcome to AliHub</h2>
          <p>Discover millions of products at unbeatable prices</p>
          <div className="hero-badges">
            <span className="badge-item">⚡ Free Shipping</span>
            <span className="badge-item">🔒 Secure Payment</span>
            <span className="badge-item">📦 Easy Returns</span>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promo-section">
        <div className="promo-card">
          <h3>🎉 Flash Sale</h3>
          <p>Up to 70% off</p>
        </div>
        <div className="promo-card">
          <h3>🚀 New Arrivals</h3>
          <p>Latest products</p>
        </div>
        <div className="promo-card">
          <h3>⭐ Top Rated</h3>
          <p>Best sellers</p>
        </div>
        <div className="promo-card">
          <h3>💎 Premium Plus</h3>
          <p>Member exclusive</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="products-section">
          {/* Sidebar */}
          <aside className="sidebar">
            <h3>Categories</h3>
            <ul className="category-list">
              <li>
                <button
                  className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  className={`category-btn ${selectedCategory === 'electronics' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('electronics')}
                >
                  💻 Electronics
                </button>
              </li>
              <li>
                <button
                  className={`category-btn ${selectedCategory === 'clothing' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('clothing')}
                >
                  👕 Clothing
                </button>
              </li>
              <li>
                <button
                  className={`category-btn ${selectedCategory === 'home' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('home')}
                >
                  🏠 Home & Garden
                </button>
              </li>
              <li>
                <button
                  className={`category-btn ${selectedCategory === 'beauty' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('beauty')}
                >
                  ✨ Beauty & Health
                </button>
              </li>
              <li>
                <button
                  className={`category-btn ${selectedCategory === 'sports' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('sports')}
                >
                  🏃 Sports
                </button>
              </li>
            </ul>

            <div className="filters">
              <h3>Sort By</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <section className="products-grid">
            <div className="grid-header">
              <h2>
                {selectedCategory === 'all' ? 'All Products' : 'Featured Products'}
                <span className="product-count">({filteredProducts.length})</span>
              </h2>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetail={() => onViewProduct(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found. Try a different search or category.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;