import '../styles/product-card.css';

function ProductCard({ product, onViewDetail }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-card">
      <div className="product-image">
        <span className="emoji-icon">{product.image}</span>
        {discount > 0 && <span className="discount-badge">-{discount}%</span>}
        {!product.inStock && <span className="out-of-stock">Out of Stock</span>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <span className="stars">⭐ {product.rating}</span>
          <span className="reviews">({product.reviews} reviews)</span>
        </div>

        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-actions">
          <button
            className="btn btn-view"
            onClick={onViewDetail}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;