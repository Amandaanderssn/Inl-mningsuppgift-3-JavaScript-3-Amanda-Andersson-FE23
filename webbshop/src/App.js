
import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';


function App() {

  //För filtrerade produkter baserat på sökfrågan
  const [filteredProducts, setFilteredProducts] = useState([]);
  //För produkter i varukorgen
  const [cartItems, setCartItems] = useState([]);


  // Funktion för att hantera sökfrågan
  const handleSearch = (inputValue) => {

    fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredProducts(data.products);
      })

  };

  const addToCart = (product) => {

    setCartItems((prevCart) => {
      // Kolla om produkten redan finns i varukorgen
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      console.log(existingProductIndex)

      if (existingProductIndex !== -1) {
        // Om produkten finns, uppdatera quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1; // Öka quantity med 1
        console.log(updatedCart[0].quantity)
        return updatedCart;
      } else {
        // Om produkten inte finns, lägg till den med quantity 1
        const newProduct = { ...product, quantity: 1 };
        console.log(newProduct.quantity)
        return [...prevCart, newProduct];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === productId) {
          // Hitta produkten som ska tas bort och minska quantity
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      }).filter((product) => product.quantity > 0) // Behåll endast produkter med quantity större än 0
      return updatedCart;
    }
    )
  }


  return (
    <div className="App">
      <header>
        <h1>The dummy webbshop</h1>
        <SearchBar onSubmit={handleSearch} />
      </header>
      <main>
        <ProductList products={filteredProducts} handleAddToCart={addToCart} />
        <aside>
          <Cart cart={cartItems} handleRemoveFromCart={removeFromCart} />
        </aside>
      </main>
    </div>
  );
}

export default App;
