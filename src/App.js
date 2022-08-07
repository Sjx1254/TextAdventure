import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Game1 from './Games/Game1.js'
import Game2 from './Games/Game2.js'
import Game3 from './Games/Game3.js'
import StartPage from './Games/StartPage.js'
import Home from "./Games/Home.js"
import '/Users/sjohari2/launch2/src/App.css'
import '/Users/sjohari2/launch2/src/styles.css'

function App() {
  return (
     
    <Router>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/Game1"> Game1 </Link>
        <Link to="/Game2"> Game2 </Link>
        <Link to="/Game3"> Game3 </Link>
      </nav>
    <Routes>
      <Route path = "/home" element={<Home />} />
      <Route path = "/Game1" element={<Game1 />} />
      <Route path = "/Game2" element={<Game2 />} />
      <Route path = "/Game3" element={<Game3 />} />
      <Route path = "/" element={<StartPage />} />

    </Routes>
    </Router>  
  );
}

export default App;
