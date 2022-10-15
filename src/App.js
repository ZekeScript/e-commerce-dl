import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrandPresentation from './components/BrandPresentation/BrandPresentation';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div id="1" className="App">
			<BrowserRouter>
				<Navbar />
				<BrandPresentation />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/detail/:productId" element={<ItemDetailContainer />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
