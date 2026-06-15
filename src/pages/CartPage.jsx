import '../styles/cart.css';

function CartPage({ cartItems, onRemove, onUpdateQuantity, onContinueShopping }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <button className="btn btn-continue" onClick={onContinueShopping}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="cart-item-row">
                      <td className="product-col">
                        <span className="item-emoji">{item.image}</span>
                        <span className="item-name">{item.name}</span>
                      </td>
                      <td className="price-col">${item.price.toFixed(2)}</td>
                      <td className="quantity-col">
                        <div className="quantity-control">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="qty-btn"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="qty-input"
                          />
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="qty-btn"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="subtotal-col">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="action-col">
                        <button
                          className="remove-btn"
                          onClick={() => onRemove(item.id)}
                          title="Remove from cart"
                        >
                          🗑️ Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-actions">
                <button className="btn btn-continue" onClick={onContinueShopping}>
                  ← Continue Shopping
                </button>
                <button className="btn btn-update">
                  Update Cart
                </button>
              </div>
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping:</span>
                <span className={shippingCost === 0 ? 'free' : ''}>
                  {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>

              {shippingCost > 0 && (
                <p className="shipping-info">
                  🎉 Free shipping on orders over $50!
                </p>
              )}

              <div className="summary-row">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="btn btn-checkout">
                Proceed to Checkout
              </button>

              <div className="payment-methods">
                <h4>Accepted Payments</h4>
                <div className="methods">
                  <span>💳 Visa</span>
                  <span>💳 Mastercard</span>
                  <span>🏦 Bank Transfer</span>
                  <span>💰 PayPal</span>
                </div>
              </div>

              <div className="security-badge">
                <p>🔒 Your payment information is secure and encrypted</p>
              </div>
            </div>
          </div>
        )}

        <section className="cart-benefits">
          <div className="benefit">
            <span>🚚</span>
            <h4>Fast Shipping</h4>
            <p>Free shipping on orders over $50</p>
          </div>
          <div className="benefit">
            <span>🔄</span>
            <h4>Easy Returns</h4>
            <p>30-day money-back guarantee</p>
          </div>
          <div className="benefit">
            <span>🔒</span>
            <h4>Secure Payment</h4>
            <p>256-bit encrypted transactions</p>
          </div>
          <div className="benefit">
            <span>💬</span>
            <h4>24/7 Support</h4>
            <p>Dedicated customer service team</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CartPage;