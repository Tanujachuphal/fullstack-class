
import "./App.css";
import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 109.95,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "2TB External Drive",
    price: 64.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "1TB Internal SSD",
    price: 119.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "4TB Gaming Drive",
    price: 114.99,
    category: "Eletronis",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Slim Laptop",
    price: 689.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "27-inch Monitor",
    price: 249.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=600&q=80",
  },
];


function App() {
  return (
    <div className="catalog">
      <div className="catalog-header">
        <div>
          <h1>Product Catalog</h1>
          <p className="catalog-subtitle">{products.length} products</p>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product)=>(
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />

          ))}
      </div>
    </div>
  );
}
export default App;