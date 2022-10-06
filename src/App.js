import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div id="1" className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer greeting={'Welcome'} />} />
					<Route path="/category" element={<ItemListContainer />} />
					<Route path="/detail" element={<ItemDetailContainer />} />
				</Routes>
			</BrowserRouter>
			{/* <ItemCount stock={10} /> */}
		</div>
	);
}

export default App;
