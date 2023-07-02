import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import AppContext from "./components/AppContext";
import Layout from './pages/Layout';
import Sobre from './pages/Sobre';
//import NotFound from './pages/NotFound';


const App = () => {
  const [tema, setTema] = useState("light");

  return (
    <div data-bs-theme={tema}>
      <AppContext.Provider value={{ tema, setTema }}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Sobre />} />
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;