import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Main from './Components/Main';
import Permission from './Components/Permission';
import Content from './Components/Content';
import Main2 from './Components/Main2';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/main" element={<Main/>} />
          <Route exact path="/main2" element={<Main2/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
