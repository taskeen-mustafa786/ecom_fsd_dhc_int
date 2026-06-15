import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import SearchResults from './pages/SearchResults';
import AccountPage from './pages/AccountPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const handleViewProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setCurrentPage('search');
    }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Header
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        cartCount={cartItems.length}
      />
      
      <main className="main-content">
        {currentPage === 'home' && (
          <HomePage
            onViewProduct={handleViewProduct}
            searchQuery={searchQuery}
          />
        )}
        {currentPage === 'product' && (
          <ProductDetail
            productId={selectedProductId}
            onAddToCart={addToCart}
            onBack={() => setCurrentPage('home')}
          />
        )}
        {currentPage === 'cart' && (
          <CartPage
            cartItems={cartItems}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onContinueShopping={() => setCurrentPage('home')}
          />
        )}
        {currentPage === 'search' && searchQuery && (
          <SearchResults
            searchQuery={searchQuery}
            onViewProduct={handleViewProduct}
            onBack={() => setCurrentPage('home')}
          />
        )}
        {currentPage === 'account' && (
          <AccountPage
            onBack={() => setCurrentPage('home')}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
