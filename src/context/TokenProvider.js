import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Login } from "./components/Login";
import { TokenProvider } from "./context/TokenProvider";

function App() {
	return (
		<TokenProvider>
			<div className="App">
				<Routes>
					<Route exact path="/" />
				</Routes>

				<NavLink path="/Login" element={Login} LOGIN />
			</div>
		</TokenProvider>
	);
}

export default App;
