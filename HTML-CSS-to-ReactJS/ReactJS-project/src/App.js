import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hello from './components/Hello';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

function App() {
  return (
    <div>
      {/* <Hello /> */}
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
