import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import SignUp from "./forms/SignUp";
import Cards from "./components/Cards";
import InputReader from "./components/InputReader";

function App() {
  return (
    <div className="px-10 py-6 max-w-6xl mx-auto">
      <header>
        <nav className="flex gap-2 text-2xl font-serif">
          <NavLink activeClassName="text-purple-600" exact to="/">
            Anasayfa
          </NavLink>
          <NavLink activeClassName="text-purple-600" to="/giris-yap">
            Giriş yap
          </NavLink>
          <NavLink activeClassName="text-purple-600" to="/kayit-ol">
            Kayıt ol
          </NavLink>
          <NavLink activeClassName="text-purple-600" to="/profilim">
            Profilim
          </NavLink>
        </nav>
      </header>
      <main className="mt-6">
        <Switch>
          <Route exact path="/">
            /
          </Route>
          <Route path="/giris-yap">giris-yap</Route>
          <Route path="/kayit-ol">
            <SignUp />
          </Route>
          {/* <PrivateRoute path="/profilim">profilim</PrivateRoute> SignIn öncesi bu şekilde olması gerekir diye düşünüyorum*/}
          <Route path="/profilim">profilim</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
