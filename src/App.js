// import "./App.css";
// import { NavLink, Switch, Route } from "react-router-dom";
// import SignUp from "./forms/SignUp";
// import Login from "./forms/Login";

// import { TokenProvider } from "./context/TokenProvider";

// import Cards from "./components/Cards";
// import InputReader from "./components/InputReader";
// import Profilim from "./components/Profilim";
// import axios from "axios";

// function App() {
// 	return (
// 		<TokenProvider>
// 			<div className="px-10 py-6 max-w-6xl mx-auto">
// 				<header>
// 					<nav className="flex gap-2 text-2xl font-serif">
// 						<NavLink activeClassName="text-purple-600" exact to="/">
// 							Anasayfa
// 						</NavLink>
// 						<NavLink activeClassName="text-purple-600" to="/giris-yap">
// 							Giriş yap
// 						</NavLink>
// 						<NavLink activeClassName="text-purple-600" to="/kayit-ol">
// 							Kayıt ol
// 						</NavLink>
// 						<NavLink activeClassName="text-purple-600" to="/profilim">
// 							Profilim
// 						</NavLink>
// 					</nav>
// 				</header>
// 				<main className="mt-6">
// 					<Switch>
// 						<Route path="/giris-yap">
// 							<Login />
// 						</Route>
// 						<Route path="/kayit-ol">
// 							<SignUp />
// 						</Route>
// 						{/* <PrivateRoute path="/profilim">profilim</PrivateRoute> SignIn öncesi bu şekilde olması gerekir diye düşünüyorum*/}
// 						<Route path="/profilim">
// 							<Profilim />
// 						</Route>
// 						<Route exact path="/">
// 							/
// 						</Route>
// 					</Switch>
// 				</main>
// 			</div>
// 		</TokenProvider>
// 	);
// }

// export default App;

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { TokenProvider } from "./context/TokenProvider";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<TokenProvider>
			<div className="px-10 py-6 max-w-6xl mx-auto">
				{/* <Login /> */}
				{/* <Home /> */}
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />{" "}
				</Routes>
			</div>
		</TokenProvider>
	);
}

export default App;
