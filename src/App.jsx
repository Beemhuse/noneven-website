import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import LearnMore from './pages/LearnMore';
import Footer from './component/Footer';
import Mission from './pages/Mission';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/services" element={<Services />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
