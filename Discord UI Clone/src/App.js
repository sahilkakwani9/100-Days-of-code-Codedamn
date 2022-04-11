import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <LandingPage/>
      {/* <Link to="/invoices">Invoices</Link> */}
    </div>
  );
}

export default App;
