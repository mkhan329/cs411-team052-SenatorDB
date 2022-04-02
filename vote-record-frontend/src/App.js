import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import Home from './pages/homepage';
import Party from './pages/party';
import NotFound from './pages/404';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/party" element={<Party/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
