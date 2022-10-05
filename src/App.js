import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
	return (
		<div id="1" className="App">
			<Navbar />
			<ItemListContainer greeting={'Welcome'} />
			<ItemCount stock={10} />
		</div>
	);
}

export default App;
