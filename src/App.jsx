import './App.css';
import Contact from './component/contact/contact';
import Footer from './component/footer/Footer';

import Header from './component/header/Header';
import Portfolio from './component/portfolio/Portfolio';
import GoTravel from './project/GoTravel';
import LoftHouse from './project/LoftHouse';
import Panto from './project/Panto';

function App() {
	return (
		<div>
			<Header />
			<Portfolio />
			<Contact />
			<Footer />
			<Panto />
			<GoTravel />
			<LoftHouse />
		</div>
	);
}

export default App;
