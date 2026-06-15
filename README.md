# AliHub - Ali Baba-Style E-commerce Platform

A modern, fully functional e-commerce platform built with React and Vite, inspired by AliHub marketplace. Features a responsive design, product catalog, shopping cart, search functionality, and user account management.

## 🚀 Features

### Core Features
- **Product Listing**: Browse 12+ sample products with categories, filtering, and sorting
- **Advanced Search**: Real-time search across product names and descriptions
- **Product Detail Pages**: Comprehensive product information with images, ratings, and pricing
- **Shopping Cart**: Add/remove products, adjust quantities, persistent storage via LocalStorage
- **Order Summary**: Calculate subtotal, tax, and shipping costs dynamically
- **User Account**: View order history, manage preferences, and user profile
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices

### Categories
- 💻 Electronics
- 👕 Clothing & Fashion
- 🏠 Home & Garden
- ✨ Beauty & Health
- 🏃 Sports & Outdoors

### Sorting Options
- Most Popular (default)
- Newest
- Price: Low to High
- Price: High to Low
- Highest Rated

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header with search bar
│   ├── ProductCard.jsx # Product card component
│   └── Footer.jsx      # Footer with links
├── pages/              # Page components
│   ├── HomePage.jsx    # Home page with products grid
│   ├── ProductDetail.jsx # Product detail view
│   ├── CartPage.jsx    # Shopping cart page
│   ├── SearchResults.jsx # Search results page
│   └── AccountPage.jsx # User account page
├── styles/             # CSS files
│   ├── Header.css
│   ├── home.css
│   ├── product-card.css
│   ├── product-detail.css
│   ├── cart.css
│   ├── footer.css
│   ├── account.css
│   └── index.css       # Global styles
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## 🎨 Design Features

### Color Scheme
- Primary Color: `#ff6b35` (Orange)
- Primary Dark: `#e55a24`
- Primary Light: `#ff9a56`
- Background: `#f5f5f5`
- Text: `#333`

### Typography
- System Font Stack: `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Oxygen`
- Font Smoothing: Anti-aliased for crisp rendering

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🛍️ Sample Products

The platform includes 12 sample products across different categories:

1. **Wireless Bluetooth Headphones** - $45.99 (Electronics)
2. **Smart Watch Pro** - $199.99 (Electronics)
3. **Premium Cotton T-Shirt** - $24.99 (Clothing)
4. **Running Shoes** - $89.99 (Clothing)
5. **LED Desk Lamp** - $34.99 (Home)
6. **Coffee Maker** - $79.99 (Home)
7. **Face Moisturizer** - $19.99 (Beauty)
8. **Yoga Mat** - $29.99 (Sports)
9. **Laptop Stand** - $39.99 (Electronics)
10. **Winter Jacket** - $119.99 (Clothing)
11. **Kitchen Knife Set** - $49.99 (Home)
12. **Protein Powder** - $34.99 (Beauty)

## 💾 State Management

### Cart Persistence
- Uses browser LocalStorage to save cart items
- Automatically loads cart on app startup
- Updates automatically when cart changes

### Component State
- `currentPage`: Current page being displayed
- `selectedProductId`: ID of product being viewed
- `cartItems`: Array of items in the shopping cart
- `searchQuery`: Current search query

## 📱 Page Components

### HomePage
- Hero banner with promotional messaging
- Promo cards for quick navigation
- Category sidebar for filtering
- Product grid with sorting options
- Responsive layout

### ProductDetail
- Large product image
- Detailed product information
- Rating and reviews
- Quantity selector
- Add to cart button
- Product features list
- Wishlist button
- Security badges

### CartPage
- Product list with quantities
- Ability to remove items or adjust quantities
- Order summary with calculations
- Shipping cost (free over $50)
- Tax calculation (10%)
- Payment method info
- Benefits section

### SearchResults
- Dynamic search results based on query
- Sorting options
- Result count
- No results message with suggestions

### AccountPage
- User profile information
- Order statistics
- Order history with status
- Order tracking
- Review functionality
- Wishlist management

## 🔧 Technologies Used

- **React 18.3.1** - UI Framework
- **Vite 5.4.1** - Build tool
- **CSS3** - Styling with Flexbox and Grid
- **LocalStorage API** - Data persistence
- **ES6+ JavaScript** - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The application will run on `http://localhost:5173` by default.

## 📊 Key Functionality

### Search Feature
- Search across product names and descriptions
- Case-insensitive matching
- Results page with product cards
- Ability to sort results

### Cart Management
```javascript
// Add to cart
addToCart(product)

// Remove from cart
removeFromCart(productId)

// Update quantity
updateQuantity(productId, newQuantity)
```

### Price Calculations
- **Subtotal**: Sum of all product prices × quantities
- **Shipping**: Free for orders > $50, otherwise $9.99
- **Tax**: 10% of subtotal
- **Total**: Subtotal + Shipping + Tax

## 🎯 Future Enhancements

- User authentication system
- Payment gateway integration
- Product reviews and ratings
- Wishlist functionality
- Inventory management
- Admin dashboard
- Order tracking system
- Email notifications
- Product recommendations
- Customer support chat

## 📝 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## 📄 License

This project is open source and available for educational and commercial use.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues, please create an issue in the repository.

---

**AliHub** - Your Global Marketplace for Everything! 🌍
