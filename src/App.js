import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const [saveItem, setSaveItem] = useLocalStorage("cart");

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
		// setSaveItem(cart);
	};

	console.log("Saved item", cart);

	return (
		<div className="App">
			<CartContext.Provider value={{cart, setCart}}>
				<Navigation />
			<ProductContext.Provider value={{ products, addItem }}>
				{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>

				<Route
					path="/cart"
					component={ShoppingCart}
				/>
				</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
