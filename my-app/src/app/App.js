import './App.scss';
import Razvod from "./components/razvod/razvod";
import Discl from './components/discl/discl';
import Main from './components/main/main';
import Product from './components/product/product';
import Feedback from './components/feedback/feedback';
import Journal from './components/journal/journal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Razvod />} />
        <Route path="/discl" element={<Discl />} />
        <Route path="/main" element={<Main />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/product" element={<Product />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
