function Header({cartount}){
    return (
        <div className="catalog-header">
        <div>
          <h1>Product Catalog</h1>
          <p className="catalog-subtitle">
            {filteredProducts.length} products
          </p>
        </div>

        <button className="cart-btn">
          Cart ({cart.length})
        </button>
      </div>
    )
}

