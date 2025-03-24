import './App.css';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import HeroSection from './components/HeroSection/HeroSection';
import VehicleShowcase from './components/VehicleShowcase/VehicleShowcase';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <VehicleShowcase />
      <ContactForm />
      <Footer /> 
    </div>
  );
}

export default App;
