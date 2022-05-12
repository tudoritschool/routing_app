import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
	Link,
} from "react-router-dom";
import Produse from "./views/Produse";
import Home from "./views/Home";
import Navbar from "./common/Navbar";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				{/* <nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/produse'>Produse</Link>
						</li>
					</ul>
				</nav> */}
				<div style={{ marginTop: "100px" }}>
					<Switch>
						<Route path='/' element={<Home />} />
						<Route path='/produse' element={<Produse />} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
