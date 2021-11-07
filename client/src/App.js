import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/navbar/Nav'
import './App.css';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <ToastContainer/>
    <Switch>
    <Route exact path="/"><Products/></Route>
    <Route exact path="/cart"><Cart/></Route>
    </Switch>
    <Nav/>

    </Router>
  );
}

export default App;
