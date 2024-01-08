import { BrowserRouter as Router } from 'react-router-dom';
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./variable.css"
import "./App.css"
const App = () => {
  return (
    <>
    <Router>
      <Layout />
    </Router>
    </>
  );
};

export default App;
