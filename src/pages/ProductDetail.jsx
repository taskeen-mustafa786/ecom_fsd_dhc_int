import { useState } from 'react';
import '../styles/product-detail.css';

// Same products data from HomePage
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
    description: 'High-quality wireless headphones with noise cancellation',
    fullDescription: 'Experience premium sound quality with our wireless Bluetooth headphones. Features active noise cancellation, 30-hour battery life, and premium comfort padding for extended use.'
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
    description: 'Advanced fitness tracking and health monitoring',
    fullDescription: 'Track your fitness with advanced heart rate monitoring, sleep tracking, and GPS. Get real-time notifications and enjoy 7 days of battery life.'
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
    description: '100% organic cotton, eco-friendly material',
    fullDescription: 'Made from sustainable organic cotton, this t-shirt is comfortable, durable, and environmentally friendly. Available in multiple colors and sizes.'
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
    description: 'Comfortable and durable running shoes with gel support',
    fullDescription: 'Professional-grade running shoes with gel cushioning technology, breathable mesh, and superior ankle support for long-distance running.'
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
    description: 'USB rechargeable desk lamp with adjustable brightness',
    fullDescription: 'Eco-friendly LED desk lamp with USB charging, 3 brightness levels, and flexible gooseneck design. Perfect for reading, studying, or office work.'
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
    description: 'Programmable coffee maker with thermal carafe',
    fullDescription: 'Brew your perfect cup with our programmable coffee maker. Features a thermal carafe to keep coffee hot for hours, auto-shutoff, and 12-cup capacity.'
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
    description: 'Hydrating face cream with vitamin E and hyaluronic acid',
    fullDescription: 'Lightweight hydrating moisturizer with hyaluronic acid and vitamin E. Absorbs quickly and is suitable for all skin types including sensitive skin.'
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
    description: 'Premium non-slip yoga mat with carrying strap',
    fullDescription: 'Thick, durable yoga mat with non-slip surface. Includes carrying strap for easy transportation. Ideal for yoga, pilates, and floor exercises.'
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
    description: 'Adjustable aluminum laptop stand for better posture',
    fullDescription: 'Premium aluminum laptop stand with 6-level adjustability. Improves ergonomics and cooling. Compatible with laptops up to 17 inches.'
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
    description: 'Waterproof and windproof winter jacket with insulation',
    fullDescription: 'Stay warm and dry with this waterproof winter jacket. Features thermal insulation, windproof outer layer, and multiple pockets.'
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
    description: 'Professional 6-piece stainless steel knife set',
    fullDescription: '6-piece professional stainless steel knife set includes chef knife, paring knife, bread knife, and more. Comes with wooden block and sharpener.'
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
    description: 'Whey protein powder with vanilla flavor',
    fullDescription: 'Premium whey protein powder with 25g protein per serving. Vanilla flavor, mixes easily, and no artificial sweeteners. Ideal for post-workout recovery.'
  }
];

function ProductDetail({ productId, onAddToCart, onBack }) {
  const product = PRODUCTS.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return <div className="container"><p>Product not found</p></div>;
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-detail">
      <div className="container">
        <button className="back-btn" onClick={onBack}>← Back to Products</button>

        <div className="detail-layout">
          <div className="detail-image">
            <div className="large-emoji">{product.image}</div>
            {discount > 0 && <span className="detail-discount">-{discount}% OFF</span>}
          </div>

          <div className="detail-info">
            <h1>{product.name}</h1>

            <div className="detail-rating">
              <span className="stars">⭐ {product.rating}</span>
              <span className="reviews">{product.reviews} customer reviews</span>
            </div>

            <div className="detail-price">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  <span className="savings">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
                </>
              )}
            </div>

            <div className="detail-description">
              <h3>Product Description</h3>
              <p>{product.fullDescription}</p>
            </div>

            <div className="detail-features">
              <h3>Key Features</h3>
              <ul>
                <li>✓ High quality material</li>
                <li>✓ Best price guarantee</li>
                <li>✓ Fast shipping</li>
                <li>✓ Easy returns</li>
                <li>✓ 12-month warranty</li>
              </ul>
            </div>

            <div className="detail-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>

              <button
                className="btn btn-add-cart"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>

              <button className="btn btn-wishlist">
                ❤️ Add to Wishlist
              </button>
            </div>

            <div className="detail-guarantee">
              <p>📦 <strong>Guaranteed safe & secure checkout</strong></p>
              <p>🚚 <strong>Free shipping</strong> on orders over $50</p>
              <p>🔄 <strong>30-day money back</strong> guarantee</p>
            </div>
          </div>
        </div>

        <section className="related-products">
          <h2>You might also like</h2>
          <p className="coming-soon">More products coming soon...</p>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;