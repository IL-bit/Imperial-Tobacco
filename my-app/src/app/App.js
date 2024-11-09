import './App.scss';
import Razvod from "./components/razvod/razvod";
import Discl from './components/discl/discl';
import Main from './components/main/main';
import Product from './components/product/product';
import Feedback from './components/feedback/feedback';
import Journal from './components/journal/journal';
import About from './components/about/about';
import NotFound from './NotFound';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const isOpen = useSelector((state) => state.pop_up);
  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden'; 
    } else {
        document.body.style.overflow = 'unset'; 
    }
    return () => {
        document.body.style.overflow = 'unset'; 
    };
  }, [isOpen]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Razvod />} />
        <Route path="/discl" element={<Discl />} />
        <Route path="/main" element={<Main />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/product" element={<Product />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
