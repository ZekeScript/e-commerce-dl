import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import QuienesSomos from './components/AboutUs/AboutUs';
import Faqs from './components/Faqs/Faqs';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import BrandPresentation from './components/BrandPresentation/BrandPresentation';
import { createContext } from 'react';

export const Context = createContext();

function App() {
	return (
		<div id="1" className="App">
			<Context.Provider value={'valor a compartir'}>
				<BrowserRouter>
					<Navbar />
					<BrandPresentation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/quienes_somos" element={<QuienesSomos />} />
						<Route path="/faqs" element={<Faqs />} />
						<Route path="/products" element={<Products />} />
						<Route path="/products/category/:categoryId" element={<Products />} />
						<Route path="/detail/:productId" element={<ItemDetailContainer />} />
						<Route path="*" element={<h1>404 NOT FOUND</h1>} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</Context.Provider>
		</div>
	);
}

export default App;
