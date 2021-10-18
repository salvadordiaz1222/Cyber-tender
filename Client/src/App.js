import Drink from "./components/Drink";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <main className="text-gray-400 bg-gray-900 body-font max-h-screen"> 

      <Navbar />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/Questions">
          <Questions />
        </Route>
        <Route exact path="/Drink">
          <Drink />
        </Route>
        </Switch>
      <Footer />

    </main>
  </BrowserRouter>
  );
}

export default App;
