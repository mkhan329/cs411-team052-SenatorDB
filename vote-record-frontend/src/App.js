import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import Home from './pages/homepage';
import Party from './pages/party';
import Senator from './pages/senator';
import Roll from './pages/roll';
import ModifyData from './pages/modifydata';
import Advanced from './pages/advquery';
import NotFound from './pages/404';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/senator" element={<Senator/>}/>
        <Route exact path="/roll" element={<NotFound/>}/>
        <Route exact path="/modify" element={<ModifyData/>}/>
        <Route exact path="/adv" element={<Advanced/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
