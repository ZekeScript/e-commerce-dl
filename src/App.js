import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
	return (
		<div id="1" className="App">
			<Navbar />
			<ItemListContainer greeting={'Welcome'} />
		</div>
	);
}

export default App;
