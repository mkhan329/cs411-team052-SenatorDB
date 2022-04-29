import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import Home from './pages/homepage';
import Party from './pages/party';
import Senator from './pages/senator';
import Bills from './pages/bills';
import ModifyData from './pages/modifydata';
import Advanced from './pages/advquery';
import NotFound from './pages/404';
import Footer from './parts/footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/senator" element={<Senator/>}/>
        <Route exact path="/bills" element={<Bills/>}/>
        <Route exact path="/party" element={<NotFound/>}/>
        <Route exact path="/modify" element={<ModifyData/>}/>
        <Route exact path="/adv" element={<Advanced/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
