import '../styles/account.css';

function AccountPage({ onBack }) {
  return (
    <div className="account-page">
      <div className="container">
        <button className="back-btn" onClick={onBack}>← Back to Shopping</button>

        <div className="account-layout">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <div className="user-profile">
              <div className="avatar">👤</div>
              <h3>John Doe</h3>
              <p className="email">john@example.com</p>
              <button className="btn btn-logout">Logout</button>
            </div>

            <nav className="account-nav">
              <button className="nav-item active">📦 My Orders</button>
              <button className="nav-item">❤️ Wishlist</button>
              <button className="nav-item">📍 Addresses</button>
              <button className="nav-item">💳 Payment Methods</button>
              <button className="nav-item">⚙️ Account Settings</button>
              <button className="nav-item">📧 Notifications</button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="account-content">
            <h1>My Orders</h1>

            <div className="order-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Total Orders</span>
              </div>
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Pending</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">$425.97</span>
                <span className="stat-label">Total Spent</span>
              </div>
            </div>

            <section className="orders-section">
              <h2>Recent Orders</h2>

              <div className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h4>Order #123456</h4>
                    <p className="order-date">March 15, 2024</p>
                  </div>
                  <span className="status-badge pending">Pending</span>
                </div>
                <div className="order-items">
                  <p><strong>Items:</strong> Smart Watch Pro, Running Shoes</p>
                  <p><strong>Total:</strong> $289.98</p>
                  <p><strong>Estimated Delivery:</strong> March 20, 2024</p>
                </div>
                <div className="order-actions">
                  <button className="btn btn-secondary">Track Order</button>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>

              <div className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h4>Order #123455</h4>
                    <p className="order-date">March 5, 2024</p>
                  </div>
                  <span className="status-badge delivered">Delivered</span>
                </div>
                <div className="order-items">
                  <p><strong>Items:</strong> Premium Cotton T-Shirt, Face Moisturizer</p>
                  <p><strong>Total:</strong> $44.98</p>
                  <p><strong>Delivered:</strong> March 8, 2024</p>
                </div>
                <div className="order-actions">
                  <button className="btn btn-secondary">View Details</button>
                  <button className="btn btn-secondary">Leave Review</button>
                </div>
              </div>

              <div className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h4>Order #123454</h4>
                    <p className="order-date">February 28, 2024</p>
                  </div>
                  <span className="status-badge delivered">Delivered</span>
                </div>
                <div className="order-items">
                  <p><strong>Items:</strong> LED Desk Lamp, Yoga Mat</p>
                  <p><strong>Total:</strong> $64.98</p>
                  <p><strong>Delivered:</strong> March 2, 2024</p>
                </div>
                <div className="order-actions">
                  <button className="btn btn-secondary">View Details</button>
                  <button className="btn btn-secondary">Leave Review</button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;