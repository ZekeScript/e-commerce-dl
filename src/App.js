import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
	return (
		<div id="1" className="App">
			<Navbar />
			<ItemListContainer greeting={'Welcome'} />
		</div>
	);
}

export default App;
